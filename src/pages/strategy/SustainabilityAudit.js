import { S } from './layout.js';
import { SUS, SUSX } from '../../data/sustainability.js';
import { avg } from '../../utils/calculations.js';
import { bars, ring } from '../../components/charts.js';
import { li, pb } from '../../components/ui.js';

export const SSus=()=>{const o=Math.round(avg(Object.values(SUS)));return S("sustainability","Sustainability audit",`<div class="g g3">${Object.entries(SUS).map(([k,v])=>`<div class=card><div class=sm>${k}</div><div class=m>${v}</div>${pb("Score",v)}</div>`).join("")}<div class=card style="text-align:center">${ring(o,"Overall")}<div class=sm>Overall / 100</div></div></div><div class="g g2" style="margin-top:16px"><div class=card><h3>Current gaps</h3>${li(SUSX.gaps)}</div><div class=card><h3>Recommended improvements</h3>${li(SUSX.imp)}</div><div class=card><h3>Overall score target</h3>${bars(SUSX.tgt,["2027","2028","2029","2030"],x=>x)}</div><div class=card><h3>Sustainability roadmap</h3><div class=tl>${SUSX.road.map(r=>`<div><b>${r[0]}</b><br><span class=sm>${r[1]}</span></div>`).join("")}</div></div></div>`)};
