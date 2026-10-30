import { REAL_CASES } from './content.js';
import { IMAGE_DATA } from './images.js';

const resolve = (p) => (p ? IMAGE_DATA[p.split('/').pop()] || p : null);

export const CASES = REAL_CASES.map(c => ({
  ...c,
  resolved: resolve(c.img),
  compareResolved: resolve(c.compare)
}));
