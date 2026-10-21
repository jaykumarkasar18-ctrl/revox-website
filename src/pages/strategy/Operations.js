import { CH, DC, MBO, OT } from '../../data/operations.js';
import { S } from './layout.js';
import { li, tabs } from '../../components/ui.js';

export const chain=()=>`<div class=sc>${CH.map((p,i)=>`<div><b>${i+1}. ${p[0]}</b>${p[1].map(s=>{const[n,d]=s.split(":");return`<div class=sn style="--d:${DC[d]}">${n}<span class=sm style="margin-left:auto">${d=="Customer"?"":d}</span></div>`}).join("")}</div>`).join("")}</div><p class=sm style="margin-top:8px">Read left to right, top to bottom. Dot colour shows the decision: <b style="color:#0a8a87">Make</b>, <b style="color:#2d6cdf">Buy</b>, <b style="color:#e0662a">Outsource</b>.</p>`;
export const SOps=()=>S("ops","Operations and supply chain",`${chain()}<div style="margin-top:20px">${tabs(Object.keys(OT),Object.values(OT).map(li))}</div><h3>Make / buy / outsource</h3><div class="card ov"><table><tr><th>Activity</th><th>Decision</th><th>Rationale</th></tr>${MBO.map(r=>`<tr><td>${r[0]}</td><td><span class=badge>${r[1]}</span></td><td style="text-align:left">${r[2]}</td></tr>`).join("")}</table></div>`);
