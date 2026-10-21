import { $ } from '../../utils/dom.js';
import { RK } from '../../data/risks.js';
import { S } from './layout.js';
import { drawer, tabs } from '../../components/ui.js';

export const RC=["All",...new Set(RK.map(r=>r[1]))];
export const sev=s=>s>=15?["Critical","#dd3333"]:s>=8?["Elevated","#e9a82e"]:["Low","#2eaa6b"];
export let RF="All";
export const rkBody=()=>{const vis=RK.map((r,k)=>[r,k]).filter(x=>RF=="All"||x[0][1]==RF);return`<div class=tabs>${RC.map(c=>`<button class="${c==RF?"on":""}" onclick="rkf('${c}')">${c}</button>`).join("")}</div><div class="g g2"><div class=card><div class=rm>${[5,4,3,2,1].map(i=>`<span>${i}</span>`+[1,2,3,4,5].map(p=>`<div style="background:${sev(p*i)[1]}30">${vis.map(([r,k])=>r[2]==p&&r[3]==i?`<button title="${r[0]}" aria-label="${r[0]}" onclick="rk(${k})">${k+1}</button>`:"").join("")}</div>`).join("")).join("")}<span></span>${[1,2,3,4,5].map(p=>`<span style="text-align:center">${p}</span>`).join("")}</div><p class=sm style="margin-top:10px">Vertical: impact. Horizontal: probability. Background: ${["Low","Elevated","Critical"].map((n,i)=>`<b style="color:${["#2eaa6b","#e9a82e","#dd3333"][i]}">${n}</b>`).join(", ")}.</p></div><div class=card><h3>Risk register</h3>${vis.length?vis.sort((a,b)=>b[0][2]*b[0][3]-a[0][2]*a[0][3]).map(([r,k])=>{const s=sev(r[2]*r[3]);return`<button class="btn o" style="width:100%;text-align:left;display:flex;justify-content:space-between;gap:8px" onclick="rk(${k})"><span>${k+1}. ${r[0]}</span><span class=badge style="background:${s[1]}22;color:${s[1]}">${s[0]}</span></button>`}).join(""):"<p>No risks in this category yet.</p>"}</div></div>`};
export const rkf=c=>{RF=c;$("#rkb").innerHTML=rkBody()};
export const SRisk=()=>S("risk","Risk and resilience",`<div id=rkb>${rkBody()}</div>`);
export function rk(k){const r=RK[k],L=["","Very low","Low","Medium","High","Very high"];drawer(`<h2>${r[0]}</h2><span class=badge>${r[1]}</span><table style="margin-top:12px">${[["Probability",L[r[2]]],["Impact",L[r[3]]],["Early warning",r[4]],["Mitigation",r[5]],["Contingency",r[6]],["Owner",r[7]]].map(x=>`<tr><td><b>${x[0]}</b></td><td style="white-space:normal;text-align:left">${x[1]}</td></tr>`).join("")}</table>`)}
