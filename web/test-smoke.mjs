import { JSDOM } from 'jsdom';
import fs from 'fs';
import path from 'path';

const dist = path.resolve('dist');
const html = fs.readFileSync(path.join(dist, 'index.html'), 'utf8');
const jsFile = fs.readdirSync(path.join(dist, 'assets')).find(f => f.endsWith('.js'));
const js = fs.readFileSync(path.join(dist, 'assets', jsFile), 'utf8');

const dom = new JSDOM(html.replace(/<script[^>]*><\/script>/, ''), {
  url: 'https://fulcrumbest-bit.github.io/podiatry-xray-coach/',
  runScripts: 'outside-only',
  pretendToBeVisual: true
});
const { window } = dom;

// Browser shims
window.requestAnimationFrame = (cb) => setTimeout(() => cb(Date.now()), 16);
window.cancelAnimationFrame = clearTimeout;
window.ResizeObserver = class { observe() {} unobserve() {} disconnect() {} };
window.Element.prototype.getBoundingClientRect = function () { return { left: 0, top: 0, right: 800, bottom: 600, width: 800, height: 600, x: 0, y: 0 }; };
window.Element.prototype.setPointerCapture = function () {};
window.Element.prototype.releasePointerCapture = function () {};
window.HTMLElement.prototype.scrollIntoView = function () {};
window.scrollTo = () => {};
window.matchMedia = window.matchMedia || (() => ({ matches: false, addListener() {}, removeListener() {}, addEventListener() {}, removeEventListener() {} }));
window.confirm = () => true;

const errors = [];
window.addEventListener('error', (e) => errors.push('window error: ' + e.message));
window.addEventListener('unhandledrejection', (e) => errors.push('unhandledrejection: ' + (e.reason && e.reason.message || e.reason)));

try {
  window.eval(js);
} catch (e) {
  console.error('EVAL THREW:', e.message);
  process.exit(1);
}

await new Promise(r => setTimeout(r, 2500));

const root = window.document.getElementById('root');
const text = root ? root.textContent : '';
console.log('--- root text length:', text.length);
console.log('--- has title:', text.includes('Read foot') || text.includes('X-Ray Coach'));
console.log('--- nav buttons:', [...window.document.querySelectorAll('header button')].map(b => b.textContent.trim()).join(' | '));
console.log('--- images in DOM:', window.document.querySelectorAll('img').length);
console.log('--- error count:', errors.length);
errors.slice(0, 5).forEach(e => console.log('ERR:', e));

// Interactions: click Learn
const click = (label) => {
  const b = [...window.document.querySelectorAll('header button')].find(x => x.textContent.trim() === label);
  if (b) { b.dispatchEvent(new window.MouseEvent('click', { bubbles: true })); return true; }
  return false;
};
await new Promise(r => setTimeout(r, 400));
console.log('click Learn:', click('Learn'));
await new Promise(r => setTimeout(r, 600));
console.log('learn visible:', window.document.body.textContent.includes('Learning modules'), '| checklist labels:', window.document.querySelectorAll('input[type=checkbox]').length);

console.log('click Cases:', click('Cases'));
await new Promise(r => setTimeout(r, 600));
const cards = window.document.querySelectorAll('img');
console.log('cases grid images:', cards.length, '| case titles sample:', window.document.body.textContent.includes('Case library'));

// open first case
const caseCard = [...window.document.querySelectorAll('main .cursor-pointer, main [class*=cursor-pointer]')][0];
if (caseCard) { caseCard.dispatchEvent(new window.MouseEvent('click', { bubbles: true })); }
await new Promise(r => setTimeout(r, 800));
const t = window.document.body.textContent;
console.log('case detail opened:', t.includes('Film review') && t.includes('Clinical stem'), '| viewer present:', !!window.document.querySelector('[role=application]'), '| hotspot buttons:', window.document.querySelectorAll('[aria-label^=Mark], [aria-label^=Finding]').length);

console.log('click Quiz:', click('Quiz'));
await new Promise(r => setTimeout(r, 600));
console.log('quiz menu:', window.document.body.textContent.includes('OSCE drill'));

console.log('click Progress:', click('Progress'));
await new Promise(r => setTimeout(r, 600));
console.log('progress page:', window.document.body.textContent.includes('Mastery by topic'));

console.log(errors.length ? 'FAILURES PRESENT' : 'SMOKE OK');
process.exit(errors.length ? 2 : 0);
