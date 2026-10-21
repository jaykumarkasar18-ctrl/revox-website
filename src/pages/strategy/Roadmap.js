import { RM } from '../../data/roadmap.js';
import { S } from './layout.js';
import { li } from '../../components/ui.js';

export const SRoad=()=>S("roadmap","Scale roadmap",`<div class=tl>${RM.map(p=>`<div class=rv><h3>${p[0]}</h3><span class=badge>${p[1]}</span><div class="g g3" style="margin:10px 0">${[["Team",p[2]],["Capacity",p[3]],["Revenue target",p[4]],["Customers",p[5]],["Investment",p[7]]].map(m=>`<div><div class=sm>${m[0]}</div><b>${m[1]}</b></div>`).join("")}</div>${li(p[6])}</div>`).join("")}</div>`);
