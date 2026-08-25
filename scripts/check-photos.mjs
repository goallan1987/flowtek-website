/**
 * PHOTOGRAPH CONSISTENCY GATE.
 *
 * On 25/08/2026 the site had 29 photographs in the library. Eight were under
 * 1000px on the short edge, one of them 259px being blown up 2.3x into a 600px
 * card, and several were 9:16 video stills being centre-cropped by CSS into a
 * 4:3 slot. The result looked like a pile of random screenshots, because that
 * is what it was.
 *
 * Every photograph in src/data/photos.js must now be 1600x1200. One shape, one
 * size, so a gallery reads as a set and no crop is left to chance. Portraits
 * are the one exception and must say so.
 *
 * If this fails, do not relax the rule. Re-crop the photograph with
 * scratchpad/proc.py, or find a better one.
 */
import fs from 'node:fs';
import path from 'node:path';
import { photos } from '../src/data/photos.js';

const W = 1600, H = 1200, ROOT = 'src/assets';

/** Minimal JPEG SOF parser, so this gate needs no image dependency. */
function jpegSize(buf) {
  let i = 2;
  while (i < buf.length) {
    if (buf[i] !== 0xff) { i++; continue; }
    const marker = buf[i + 1];
    if (marker >= 0xc0 && marker <= 0xcf && ![0xc4, 0xc8, 0xcc].includes(marker)) {
      return { h: buf.readUInt16BE(i + 5), w: buf.readUInt16BE(i + 7) };
    }
    i += 2 + buf.readUInt16BE(i + 2);
  }
  return null;
}

const problems = [];
for (const [key, p] of Object.entries(photos)) {
  const file = path.join(ROOT, p.file);
  if (!fs.existsSync(file)) { problems.push(`${key}: file missing, ${p.file}`); continue; }
  if (!/\.jpe?g$/i.test(file)) { problems.push(`${key}: not a jpeg, ${p.file}`); continue; }
  const size = jpegSize(fs.readFileSync(file));
  if (!size) { problems.push(`${key}: could not read dimensions`); continue; }
  if (p.portrait) {
    if (Math.min(size.w, size.h) < 800) problems.push(`${key}: portrait under 800px, ${size.w}x${size.h}`);
    continue;
  }
  if (size.w !== W || size.h !== H) {
    problems.push(`${key}: ${size.w}x${size.h}, must be ${W}x${H}`);
  }
  if (!p.alt || p.alt.length < 40) problems.push(`${key}: alt text too thin to be useful`);
  if (!p.caption) problems.push(`${key}: no caption`);
  if (!p.subject) problems.push(`${key}: no subject, so a gallery cannot tell it apart from a near-identical shot`);
}

if (problems.length) {
  console.error(`Photograph gate: ${problems.length} problem(s)`);
  problems.forEach((m) => console.error('  - ' + m));
  process.exit(1);
}
console.log(`Photograph gate: ${Object.keys(photos).length} photographs, all ${W}x${H} with alt and caption.`);
