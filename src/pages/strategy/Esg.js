import { ESG } from '../../data/esg.js';
import { S } from './layout.js';
import { bars, ring } from '../../components/charts.js';
import { esgS, esgT } from '../../utils/calculations.js';

export const stt=v=>v>=80?["On track","#2eaa6b"]:v>=65?["Watch","#e9a82e"]:["Gap","#dd3333"];
export const esgBody=()=>`<div class="g g3">${Object.entries(esgS).concat([["Overall ESG",esgT]]).map(([k,v])=>`<div class="card rv" style="text-align:center">${ring(v,k)}<div><b>${k}</b></div><span class=badge style="background:${stt(v)[1]}22;color:${stt(v)[1]}">${stt(v)[0]}</span></div>`).join("")}</div><div class="card rv" style="margin-top:16px"><h3>Score by pillar</h3>${bars(Object.values(esgS).map(Math.round),Object.keys(esgS),x=>x)}</div><div class="g g3" style="margin-top:16px">${Object.entries(ESG).map(([k,v])=>`<div class=card><h3>${k}</h3>${v.map(m=>{const s=stt(m[1]);return`<div style="margin-bottom:14px"><div style="display:flex;justify-content:space-between;gap:8px;font-weight:600"><span>${m[0]}</span><span style="color:${s[1]}">${m[1]}</span></div><div class=bar><i style="width:${m[1]}%;background:${s[1]}"></i></div><div class=sm>${m[2]}</div></div>`}).join("")}</div>`).join("")}</div><p class=sm>Status: On track 80+, Watch 65–79, Gap below 65. Projected academic assumptions.</p>`;
export const SEsg=()=>S("esg","ESG dashboard",esgBody());
