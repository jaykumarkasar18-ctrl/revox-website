import { F } from '../../data/financials.js';
import { R } from '../../utils/format.js';
import { S, SN } from './layout.js';
import { bars } from '../../components/charts.js';
import { esgT, proj } from '../../utils/calculations.js';
import { kpi } from '../../components/ui.js';

export const SOv=()=>{const p=proj(F),r=p.rows;return S("overview","Strategy overview",`<div class="g g3">${kpi("Revenue (Y5)",r[4].rev,"R",r[4].rev)+kpi("Customers (Y5)",r.reduce((s,x)=>s+x.u,0)/3.5,"n",r.reduce((s,x)=>s+x.u,0)/3.5)+kpi("Units sold (5 yrs)",r.reduce((s,x)=>s+x.u,0),"n",r.reduce((s,x)=>s+x.u,0))+kpi("Team size","100","n",100)+kpi("ESG score",esgT,"%",esgT)+kpi("Cash requirement",p.fund,"R",p.fund)}</div><div class="card rv" style="margin-top:16px"><h3>Revenue growth (₹)</h3>${bars(r.map(x=>x.rev),r.map(x=>x.y),R)}</div><h3 style="margin-top:24px">Explore the strategy</h3><div class="g g2">${SN.slice(1).map(n=>`<a class=card href="#s-${n[0]}"><b>${n[1]}</b></a>`).join("")}</div>`)};
