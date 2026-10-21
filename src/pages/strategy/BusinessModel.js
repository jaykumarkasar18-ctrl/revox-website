import { BMC, BQ, BQC, SCALE } from '../../data/businessModel.js';
import { S } from './layout.js';
import { drawer, li } from '../../components/ui.js';

export const SMod=()=>S("model","Business model",`<div class=bmc>${BMC.map(b=>`<button style="grid-column:${b[2]};grid-row:${b[3]};--c:${BQC[BMC.indexOf(b)]}" onclick="bm(${BMC.indexOf(b)})" aria-label="${b[0]}: open detail"><h3>${b[0]}</h3><div class=sm style="margin-bottom:6px">${BQ[BMC.indexOf(b)]}</div>${li(b[4])}</button>`).join("")}</div><p class=sm style="margin-top:10px">Blue: how REVOX operates. Teal: the promise. Orange: the market. Grey: the money. Select any block for detail.</p><h3 style="margin-top:20px">Scaling engine</h3><div class=flow>${SCALE.map((x,i)=>(i?"<b>↓</b>":"")+`<span>${x}</span>`).join("")}</div>`);
export function bm(i){const b=BMC[i];drawer(`<h2>${b[0]}</h2><p>${BQ[i]}</p>${li(b[4])}`)}
