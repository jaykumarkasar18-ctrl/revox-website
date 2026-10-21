import { CULT } from '../data/team.js';
import { sh } from '../components/ui.js';

export const Comp=()=>`<div class=w><div class=sec>${sh("Company","About REVOX","REVOX is a fictional startup created for an academic sustainability and business-model study. It has no real customers, revenue or products.")}<div class="g g2"><div class=card><h3>Mission</h3><p>Help small and medium factories build efficient, ergonomic, reconfigurable production systems.</p></div><div class=card><h3>Vision</h3><p>A digital manufacturing optimization platform for SMEs.</p></div></div><h3 style="margin-top:28px">Principles</h3><div class="g g2">${CULT.map(x=>`<div class=card><b>${x[0]}</b><p>${x[1]}</p></div>`).join("")}</div></div></div>`;
