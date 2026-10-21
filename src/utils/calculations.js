import { CX, OM, ST, UM } from '../data/financials.js';
import { ESG } from '../data/esg.js';

export const calc=f=>{const c=f.price-f.vc,cm=c/f.price,be=c>0?Math.ceil(f.fc/c):Infinity;return{c,cm,be,ber:be*f.price,pr:f.units*c-f.fc}};
export function proj(f){let pr=0,cum=0,mn=0;const rows=UM.map((m,i)=>{const u=Math.round(f.units*(1+(m-1)*ST.SCN)),rev=u*f.price,cg=u*f.vc*Math.pow(.97,i),gp=rev-cg,ox=f.fc*OM[i],eb=gp-ox,wc=.15*(rev-pr),cf=eb-CX[i]-wc;pr=rev;cum+=cf;mn=Math.min(mn,cum);return{y:"Y"+(i+1),u,rev,cg,gp,ox,eb,cum,cash:Math.max(0,-cf)}});return{rows,fund:-mn*1.2}}
export const avg=a=>a.reduce((s,x)=>s+x,0)/a.length;
export const esgS=Object.fromEntries(Object.entries(ESG).map(([k,v])=>[k,avg(v.map(x=>x[1]))]));
export const esgT=avg(Object.values(esgS));
