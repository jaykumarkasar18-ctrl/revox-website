import { HW } from '../data/howItWorks.js';
import { sh } from '../components/ui.js';

export const How=()=>`<div class=w><div class=sec>${sh("How it works","Six steps from walk-through to optimization")}<div class=tl>${HW.map((s,i)=>`<div class=rv style="transition-delay:${i*.08}s"><div class=k>Step ${i+1}</div><h3>${s[0]}</h3><p><b>${s[1]}</b><br>${s[2]}</p></div>`).join("")}</div></div></div>`;
