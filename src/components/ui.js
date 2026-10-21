import { N, R } from '../utils/format.js';

export const li=a=>"<ul class=c>"+a.map(x=>"<li>"+x+"</li>").join("")+"</ul>";
export const sh=(k,t,s)=>`<div class=rv><div class=k>${k}</div><h2>${t}</h2>${s?`<p>${s}</p>`:""}</div>`;
export const pb=(l,v)=>`<div style="margin-bottom:12px"><div style="display:flex;justify-content:space-between;font-weight:600"><span>${l}</span><span>${Math.round(v)}%</span></div><div class=bar><i style="width:${v}%"></i></div></div>`;
export const tabs=(n,c)=>`<div class=tabs role=tablist>${n.map((x,i)=>`<button role=tab class="${i?"":"on"}" onclick="tb(this,${i})">${x}</button>`).join("")}</div><div>${c.map((x,i)=>`<div class=tp ${i?"hidden":""}>${x}</div>`).join("")}</div>`;
export function tb(b,i){const w=b.parentNode;w.querySelectorAll("button").forEach((x,j)=>x.classList.toggle("on",j==i));w.nextElementSibling.querySelectorAll(":scope>.tp").forEach((x,j)=>x.hidden=j!=i)}
export function drawer(h){const d=document.createElement("div");d.className="dr";d.innerHTML=`<div role=dialog aria-modal=true>${h}<p><button class="btn o" onclick="this.closest('.dr').remove()">Close</button></p></div>`;d.onclick=e=>{if(e.target==d)d.remove()};document.body.appendChild(d);d.querySelector("button").focus()}
document.addEventListener("keydown",e=>{if(e.key=="Escape")document.querySelectorAll(".dr").forEach(d=>d.remove())});
export const kpi=(l,v,t,n)=>`<div class="card rv"><div class=sm>${l}</div><div class=m data-n="${n}" data-t="${t}">${t=="R"?R(n):t=="%"?Math.round(n)+"%":N(n)}</div></div>`;
