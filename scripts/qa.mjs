/**
 * Build QA gate. Walks dist/ and checks the things that have actually broken on
 * this project, rather than a generic checklist.
 *
 * Every rule here exists because the fault it catches shipped at least once.
 */
import fs from 'node:fs';
import path from 'node:path';

const problems = [];
const pages = [];

function walk(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const f = path.join(dir, e.name);
    if (e.isDirectory()) walk(f);
    else if (e.name === 'index.html' || e.name === '404.html') pages.push(f);
  }
}
walk('dist');

const routes = new Set(
  pages.map((f) => '/' + path.relative('dist', path.dirname(f)).replace(/\\/g, '/') + '/')
    .map((r) => (r === '//' ? '/' : r.replace('/./', '/')))
);

for (const file of pages) {
  const h = fs.readFileSync(file, 'utf8');
  const route = '/' + path.relative('dist', path.dirname(file)) + '/';
  const at = (m) => `${route === '/./' ? '/' : route}: ${m}`;

  // Internal links must resolve. A 404 from the nav shipped once.
  for (const m of h.matchAll(/href="(\/[^"#?]*?)"/g)) {
    const href = m[1].endsWith('/') ? m[1] : m[1] + '/';
    if (/\.(xml|txt|png|jpe?g|webp|svg|ico|pdf|css|js|woff2?|ttf)\/?$/i.test(m[1])) continue;
    if (!routes.has(href)) problems.push(at(`broken link ${m[1]}`));
  }

  // Headings must not skip a level. Shipped h1 -> h3 once.
  const levels = [...h.matchAll(/<h([1-6])[^>]*>/g)].map((m) => +m[1]);
  for (let i = 1; i < levels.length; i++) {
    if (levels[i] - levels[i - 1] > 1) {
      problems.push(at(`heading jump h${levels[i - 1]}→h${levels[i]}`));
      break;
    }
  }
  if (levels.filter((l) => l === 1).length !== 1) problems.push(at(`${levels.filter((l) => l === 1).length} h1 tags, want exactly 1`));

  // Images: alt and intrinsic size. Both shipped missing once.
  for (const img of h.match(/<img[^>]*>/g) ?? []) {
    if (!/\salt=/.test(img)) problems.push(at('img with no alt'));
    if (!/width=/.test(img) || !/height=/.test(img)) problems.push(at('img with no width/height'));
  }

  /* House style, from CLAUDE.md hard rules 6 and 7.

     Blockquotes are stripped out first. Those rules govern "anything produced
     in Flowtek's name", and a customer's review is not that: it is their words,
     reproduced verbatim under the binding rule in src/data/reviews.js. Two real
     reviews carry an emoji. Deleting a customer's emoji to satisfy a rule about
     Flowtek's own copy would be editing a testimonial, which is the worse
     fault by a distance. */
  const text = h
    .replace(/<script[\s\S]*?<\/script>/g, '')
    .replace(/<blockquote[\s\S]*?<\/blockquote>/g, ' ')
    .replace(/<[^>]+>/g, ' ');
  if (text.includes('—')) problems.push(at('em dash in visible text'));
  if (/[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}]/u.test(text)) problems.push(at('emoji in visible text'));

  // Claims that are not confirmed. Hard rules 1 and 3.
  for (const bad of ['24/7', 'same day guarantee', 'fully insured', 'police checked']) {
    if (text.toLowerCase().includes(bad)) problems.push(at(`unconfirmed claim "${bad}"`));
  }

  // Title and description must exist and fit the SERP.
  /* Decode entities before counting. An ampersand is one character in a search
     result and five in the source, so counting the raw string reported every
     title with an "&" in it as eight characters longer than it is. */
  const unent = (s) => s
    .replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&#38;/g, '&');
  const title = unent(h.match(/<title>(.*?)<\/title>/s)?.[1] ?? '');
  const desc = unent(h.match(/<meta name="description" content="([^"]*)"/)?.[1] ?? '');
  if (!title) problems.push(at('no title'));
  else if (title.length > 62) problems.push(at(`title ${title.length} chars, over 62`));
  if (!desc) problems.push(at('no meta description'));
  else if (desc.length > 165) problems.push(at(`description ${desc.length} chars, over 165`));
}

console.log(`Pages: ${pages.length}  Problems: ${problems.length}`);
problems.slice(0, 40).forEach((p) => console.log(' - ' + p));
if (problems.length > 40) console.log(` ... and ${problems.length - 40} more`);
process.exit(problems.length ? 1 : 0);
