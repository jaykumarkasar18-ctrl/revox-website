import { IND } from '../data/industries.js';
import { sh } from '../components/ui.js';

export const Ind=()=>`<div class=w><div class=sec>${sh("Industries","Built for SME manufacturers")}<div class="g g2">${IND.map(x=>`<div class="card rv"><h3>${x[0]}</h3><p>${x[1]}</p><p><b>Use case:</b> ${x[2]}</p></div>`).join("")}</div></div></div>`;
