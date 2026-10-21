import { $ } from './utils/dom.js';
import { Comp } from './pages/Company.js';
import { Contact } from './pages/Contact.js';
import { ESG } from './data/esg.js';
import { Home } from './pages/Home.js';
import { How } from './pages/HowItWorks.js';
import { Ind } from './pages/Industries.js';
import { N, R } from './utils/format.js';
import { P } from './data/products.js';
import { Prod, Sol } from './pages/Solutions.js';
import { SEsg } from './pages/strategy/Esg.js';
import { SFin, fin } from './pages/strategy/Financials.js';
import { SMod } from './pages/strategy/BusinessModel.js';
import { SN } from './pages/strategy/layout.js';
import { SOps } from './pages/strategy/Operations.js';
import { SOv } from './pages/strategy/Overview.js';
import { SRisk } from './pages/strategy/Risk.js';
import { SRoad } from './pages/strategy/Roadmap.js';
import { SSus } from './pages/strategy/SustainabilityAudit.js';
import { STeam } from './pages/strategy/Team.js';
import { SusP } from './pages/Sustainability.js';

export const NF=()=>`<div class=w><div class=sec><h1>Page not found</h1><p>That page does not exist. Use the menu, or return to the home page.</p><a class="btn ac" href="#home">Back to home</a></div></div>`;
export const T={home:["Home",Home],solutions:["Solutions",Sol],how:["How It Works",How],industries:["Industries",Ind],sustainability:["Sustainability",SusP],company:["Company",Comp],contact:["Contact",Contact],"s-overview":["Strategy Overview",SOv],"s-sustainability":["Sustainability Audit",SSus],"s-model":["Business Model",SMod],"s-ops":["Operations and Supply Chain",SOps],"s-fin":["Financials",SFin],"s-risk":["Risk and Resilience",SRisk],"s-esg":["ESG Dashboard",SEsg],"s-team":["Team and Culture",STeam],"s-roadmap":["Scale Roadmap",SRoad]};
$("#nl").innerHTML=`<a href="#home">Home</a><div><button aria-haspopup=true>Solutions ▾</button><div class=dd>${P.map(x=>`<a href="#p-${x[0]}">${x[1]}</a>`).join("")}</div></div><a href="#how">How It Works</a><a href="#industries">Industries</a><a href="#sustainability">Sustainability</a><a href="#company">Company</a><a href="#contact">Contact</a><div><button aria-haspopup=true>Startup Strategy ▾</button><div class=dd>${SN.map(n=>`<a href="#s-${n[0]}">${n[1]}</a>`).join("")}</div></div>`;
$("#ft").innerHTML=`<div class="w g g2"><div><b style="letter-spacing:.14em;color:#fff">REVOX</b><p>Smart Modular Systems for Modern Manufacturing.</p><p>REVOX is a fictional startup concept. Customers, revenue and figures shown are projected academic assumptions, not real data.</p></div><div class="g g3"><div><a href="#solutions">Solutions</a><a href="#how">How It Works</a><a href="#industries">Industries</a></div><div><a href="#s-overview">Strategy</a><a href="#s-fin">Financials</a><a href="#s-esg">ESG</a></div><div><a href="#company">Company</a><a href="#contact">Contact</a></div></div></div>`;
export const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}}),{threshold:.1});
export function cnt(){document.querySelectorAll("[data-n]").forEach(el=>{const n=+el.dataset.n,t=el.dataset.t,t0=performance.now(),f=v=>t=="R"?R(v):t=="%"?Math.round(v)+"%":N(v),s=ts=>{const k=Math.min(1,(ts-t0)/800);el.textContent=f(n*k);if(k<1)requestAnimationFrame(s)};requestAnimationFrame(s)})}
export function go(){const g=$("#pg");g.style.width="70%";setTimeout(()=>{g.style.width="100%";setTimeout(()=>g.style.width="0",250)},120);let h=location.hash.slice(1)||"home",pr=P.find(x=>"p-"+x[0]==h),t=pr?[pr[1],()=>Prod(pr)]:T[h]||["Page not found",NF];document.title=t[0]+" | REVOX";$("#app").innerHTML=t[1]();$("#nl").classList.remove("open");document.querySelectorAll("#nl a").forEach(a=>a.classList.toggle("on",a.getAttribute("href")=="#"+h));document.querySelectorAll("#nl>div>button").forEach((b,i)=>b.classList.toggle("on",i?h.startsWith("s-"):h.startsWith("p-")||h=="solutions"));scrollTo(0,0);document.querySelectorAll(".rv").forEach(e=>io.observe(e));cnt();if($("#fo"))fin()}
addEventListener("hashchange",go);
go();
