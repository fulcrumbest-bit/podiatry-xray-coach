import { useEffect, useState } from 'react';
import { REAL_CASES } from './content.js';

const loaders = {
  'Accessory_sesamoid_DP.jpg': () => import('./img/Accessory_sesamoid_DP.jpg.js'),
  'Accessory_sesamoid_lat.jpg': () => import('./img/Accessory_sesamoid_lat.jpg.js'),
  'Ankle_foot_DP_Dispe.jpg': () => import('./img/Ankle_foot_DP_Dispe.jpg.js'),
  'Ankle_foot_lat_Dispe.jpg': () => import('./img/Ankle_foot_lat_Dispe.jpg.js'),
  'Bimalleolar_fracture.jpg': () => import('./img/Bimalleolar_fracture.jpg.js'),
  'Calcaneal_pitch.jpg': () => import('./img/Calcaneal_pitch.jpg.js'),
  'Calcaneus_Bohler_angle.jpg': () => import('./img/Calcaneus_Bohler_angle.jpg.js'),
  'Foot_xrays_pair.jpg': () => import('./img/Foot_xrays_pair.jpg.js'),
  'Gichtfuss_im_Roentgen.jpg': () => import('./img/Gichtfuss_im_Roentgen.jpg.js'),
  'Gissane_angle.jpg': () => import('./img/Gissane_angle.jpg.js'),
  'Left_ankle_AP.jpg': () => import('./img/Left_ankle_AP.jpg.js'),
  'Left_ankle_lat.jpg': () => import('./img/Left_ankle_lat.jpg.js'),
  'LisFranc.png': () => import('./img/LisFranc.png.js'),
  'Lisfranc_Dislocation_Rupture.jpg': () => import('./img/Lisfranc_Dislocation_Rupture.jpg.js'),
  'Lisfranc-Luxationsfraktur_55M.jpg': () => import('./img/Lisfranc-Luxationsfraktur_55M.jpg.js'),
  'Normal_foot_oblique.jpg': () => import('./img/Normal_foot_oblique.jpg.js'),
  'Sever_calcaneal_apophysis.jpg': () => import('./img/Sever_calcaneal_apophysis.jpg.js'),
  'Syndesmosis_postop.jpg': () => import('./img/Syndesmosis_postop.jpg.js'),
  'X-ray_foot.jpg': () => import('./img/X-ray_foot.jpg.js'),
  'X-ray_normal_right_foot_lateral.jpg': () => import('./img/X-ray_normal_right_foot_lateral.jpg.js')
};

const key = (p) => (p ? p.split('/').pop().replace(/ /g, '_') : null);

export function useCaseImage(c) {
  const [src, setSrc] = useState(null);
  useEffect(() => {
    let live = true;
    setSrc(null);
    const f = key(c.img);
    const load = f && loaders[f];
    if (!load) return;
    load().then(m => { if (live) setSrc(m.default); }).catch(() => {});
    return () => { live = false; };
  }, [c.img]);
  return src;
}

export function useCompareImage(c) {
  const [src, setSrc] = useState(null);
  useEffect(() => {
    let live = true;
    const f = key(c.compare);
    const load = f && loaders[f];
    if (!load) return;
    load().then(m => { if (live) setSrc(m.default); }).catch(() => {});
    return () => { live = false; };
  }, [c.compare]);
  return src;
}

export const CASES = REAL_CASES;
