/* ui-art.js — Dibujo: iconos SVG (BI, TI, SI, icon), sprite edificios.webp (SPM, SPR, bic), planetas (planet, orb).
 * Lee: S solo para pintar. Escribe: SPR, INV, INVN, NAV, NAVN, BLD, BLDN. Carga edificios.webp, img/buildings/<id>.webp, img/research/<id>.webp e img/ships/<id>.webp.
 * NO debe: mutar S ni contener reglas.
 * Movido tal cual de juego-espacial.html original; ver ARCHITECTURE.md. */
const icon=(p,c)=>`<div class="ic ${c||''}"><svg viewBox="0 0 48 48" width="34" height="34" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">${p}</svg></div>`;
const SPM={l:0,s:1,c:2,g:3,a:4};
let SPR=false;
if(typeof Image!=='undefined'){const spr=new Image();spr.onload=()=>{SPR=true;if(S)render()};spr.src='img/edificios.webp'}
const bic=(k,L,dm)=>k in BLD?`<div class="ic sp bs${L?'':' off'}${dm?' dmg':''}" style="background-image:url(img/buildings/${k}.webp);background-size:${BLD[k]*100}% 100%;background-position:${BLD[k]>1?Math.min(L>7?2:L>4?1:0,BLD[k]-1)*100/(BLD[k]-1):0}% 0"></div>`:SPR&&k in SPM?`<div class="ic sp${L?'':' off'}${dm?' dmg':''}" style="--c:${Math.max(0,Math.min(4,Math.floor((L-1)/2)))};--r:${SPM[k]}"></div>`:icon(BI[k],k in IDX?k:'');
const BI={z:`<path d="M24 6l16 8v10c0 10-8 16-16 18C16 40 8 34 8 24V14z"/><path d="M18 24l4 4 8-9"/>`,
m:`<path d="M6 40L18 18l8 12 6-8 10 18z"/><path d="M14 8l20 8M24 6l-6 12"/>`,
c:`<path d="M24 6l10 10-10 26L14 16z"/><path d="M14 16h20M24 6v36"/>`,
g:`<path d="M14 36a8 8 0 010-16 10 10 0 0119-2 8 8 0 011 18z"/><path d="M18 42h4M26 42h6"/>`,
a:`<path d="M6 20L24 8l18 12v22H6z"/><path d="M16 42V28h16v14M16 35h16"/>`,
s:`<path d="M24 6c6 6 8 14 6 24H18c-2-10 0-18 6-24z"/><circle cx="24" cy="18" r="3"/><path d="M18 30l-6 8M30 30l6 8M6 42h36"/>`,
l:`<path d="M19 6h10M21 6v12L10 38a3 3 0 003 5h22a3 3 0 003-5L27 18V6"/><path d="M15 32h18"/>`,
u:`<path d="M4 18L24 8l20 10-20 10z"/><path d="M12 23v10c4 5 20 5 24 0V23M44 18v12"/>`,
p:`<path d="M24 6v28M24 8l14 22H24M24 14L12 30h12"/><path d="M8 38h32l-4 6H12z"/>`,
o:`<path d="M24 6l5 12 13 1-10 8 3 13-11-7-11 7 3-13-10-8 13-1z"/>`,
k:`<circle cx="24" cy="18" r="11"/><path d="M24 29v13M16 42h16"/>`,
w:`<path d="M6 42V14h8v6h6v-6h8v6h6v-6h8v28z"/>`,
t:`<path d="M16 42l4-18h8l4 18z"/><path d="M24 24V10M18 10h12M10 8l8 2M38 8l-8 2"/>`,
h:`<path d="M6 40V20L24 8l18 12v20M14 40V26h20v14M24 40V26"/>`,
d:`<circle cx="24" cy="24" r="6"/><path d="M24 6v8M24 34v8M6 24h8M34 24h8M11 11l6 6M31 31l6 6M37 11l-6 6M17 31l-6 6"/>`,
v:`<path d="M8 40h32M24 40V24"/><path d="M12 26a12 12 0 0024 0z"/><path d="M24 24l8-12"/><circle cx="33" cy="10" r="2.5"/>`,
r:`<path d="M12 42V22a12 12 0 0124 0v20"/><path d="M18 42V24a6 6 0 0112 0v18"/><path d="M6 42h36"/>`};
const TI={q:`<path d="M10 12h28M10 24h28M10 36h20"/><circle cx="38" cy="36" r="3"/>`,
y:`<path d="M8 8l24 24M32 32l-6 6 4 4 6-6zM40 8L16 32M16 32l6 6-4 4-6-6z"/>`,
d:`<path d="M24 6l15 6v10c0 9-6 15-15 18C15 37 9 31 9 22V12z"/>`,
l:`<path d="M6 14h22v18H6zM28 20h8l6 6v6H28z"/><circle cx="14" cy="36" r="3"/><circle cx="35" cy="36" r="3"/>`,
p:`<path d="M24 6c8 8 8 18 0 26-8-8-8-18 0-26z"/><path d="M24 32v10M18 36l-2 6M30 36l2 6"/>`,
c:`<path d="M8 38a16 16 0 0132 0z"/><path d="M4 38h40M24 22v-8M24 14h8l-3 3 3 3h-8"/>`,
x:`<circle cx="24" cy="24" r="15"/><path d="M24 14v20M19 19h8a3 3 0 010 6h-6a3 3 0 000 6h9"/>`,
n:`<circle cx="10" cy="14" r="4"/><circle cx="38" cy="14" r="4"/><circle cx="24" cy="36" r="4"/><path d="M14 14h20M12 18l10 15M36 18L26 33"/>`,
m:`<path d="M24 6v10M12 20h24M12 20v10M36 20v10M8 40h8M32 40h8M20 30h8"/><circle cx="24" cy="6" r="2"/>`,
e:`<path d="M27 4L10 27h12l-3 17 19-24H26z"/>`,
b:`<path d="M8 16l16-8 16 8v18l-16 8-16-8z"/><path d="M8 16l16 8 16-8M24 24v18"/>`,
a:`<circle cx="24" cy="24" r="12"/><circle cx="24" cy="24" r="2"/><path d="M24 4v10M24 34v10M4 24h10M34 24h10"/>`,
f:`<path d="M24 6l15 6v10c0 9-6 15-15 18C15 37 9 31 9 22V12z"/><path d="M24 16v14M17 23h14"/>`,
r:`<circle cx="10" cy="36" r="4"/><circle cx="38" cy="12" r="4"/><path d="M14 36h12a6 6 0 000-12h-4a6 6 0 010-12h12"/>`,
v:`<path d="M24 6l16 10v16L24 42 8 32V16z"/><path d="M24 14v20M16 22h16"/>`,
i:`<path d="M6 20l12-6 12 6v14l-12 6-12-6z"/><path d="M6 20l12 6 12-6M18 26v14M34 24h10M40 18l4 6-4 6"/>`,
h:`<path d="M30 6a10 10 0 00-9 14L8 33a4 4 0 006 6l13-13a10 10 0 0014-9l-6 5-5-1-1-5z"/>`,
s:`<path d="M4 24s8-12 20-12 20 12 20 12-8 12-20 12S4 24 4 24z"/><circle cx="24" cy="24" r="5"/>`};
const SI={e:`<path d="M24 4l6 14v16l-6 6-6-6V18z"/><circle cx="24" cy="20" r="2.5"/><path d="M18 30l-8 6M30 30l8 6"/>`,
c:`<rect x="14" y="10" width="20" height="26" rx="5"/><path d="M14 28l-8 10M34 28l8 10M20 36v6M28 36v6M18 18h12M18 24h12"/>`,
r:`<path d="M24 6l16 34-16-8-16 8z"/><path d="M24 14v18"/>`,
f:`<path d="M24 4l8 14v14l-8 10-8-10V18z"/><path d="M16 28l-8 8M32 28l8 8M24 14v16"/>`,
k:`<rect x="12" y="12" width="24" height="26" rx="3"/><path d="M12 22h24M20 38v4M28 38v4M18 6h12"/>`,
a:`<path d="M24 4l10 12v18l-10 10-10-10V16z"/><path d="M8 22l6 4v10l-6-6zM40 22l-6 4v10l6-6zM24 12v22"/>`,
s:`<path d="M6 32h36l-5 9H11z"/><rect x="12" y="18" width="10" height="10"/><rect x="26" y="18" width="10" height="10"/><path d="M17 18v10M31 18v10M22 41v3M26 41v3"/>`};
/* Imágenes de investigaciones: img/research/<id>.webp (128x128), una por clave de T. Si falta o no carga, se usa el SVG de TI. Se repinta una sola vez al terminar de probarlas todas. */
const INV=new Set();let INVN=0;
if(typeof Image!=='undefined'){const tot=Object.keys(T).length,fin=()=>{if(++INVN===tot&&S)render()};for(const k in T){const im=new Image();im.onload=()=>{INV.add(k);fin()};im.onerror=fin;im.src='img/research/'+k+'.webp'}}
const tic=k=>INV.has(k)?`<div class="ic im"><img src="img/research/${k}.webp" alt=""></div>`:icon(TI[k]);
/* Imágenes de naves: img/ships/<id>.webp (128x128), una por clave de SH. Mismo esquema que tic: si falta o no carga, el SVG de SI. */
const NAV=new Set();let NAVN=0;
if(typeof Image!=='undefined'){const tot=Object.keys(SH).length,fin=()=>{if(++NAVN===tot&&S)render()};for(const k in SH){const im=new Image();im.onload=()=>{NAV.add(k);fin()};im.onerror=fin;im.src='img/ships/'+k+'.webp'}}
const sic=k=>NAV.has(k)?`<div class="ic im"><img src="img/ships/${k}.webp" alt=""></div>`:icon(SI[k]);
/* Imágenes de edificios: img/buildings/<id>.webp = tira horizontal de N variantes cuadradas (128x128 cada una; N = ancho/alto, se lee de la propia imagen). Variante por nivel: 1-4 la primera, 5-7 la segunda, 8 o más la tercera (si hay menos variantes, la última). Tiene prioridad sobre el sprite y el SVG; si falta, se usa lo de siempre. */
const BLD={};let BLDN=0;
if(typeof Image!=='undefined'){const ks=Object.keys(BI),fin=()=>{if(++BLDN===ks.length&&S)render()};ks.forEach(k=>{const im=new Image();im.onload=()=>{BLD[k]=Math.max(1,Math.round(im.naturalWidth/im.naturalHeight));fin()};im.onerror=fin;im.src='img/buildings/'+k+'.webp'})}
let gid=0;
function planet(id,sz,unk){
if(unk)return `<svg width="${sz}" height="${sz}" viewBox="0 0 64 64" style="flex:none"><circle cx="32" cy="32" r="22" fill="#111c31" stroke="#2a3b5e" stroke-width="2" stroke-dasharray="4 4"/><text x="32" y="41" text-anchor="middle" font-size="24" fill="#93a4c4" font-family="Chakra Petch,sans-serif">?</text></svg>`;
const r=rng(id*7919+3),h=(id*47+20)%360,g='pg'+(++gid);let d='';
for(let i=0;i<4;i++){const y=10+r()*44,hh=4+r()*9;d+=`<rect x="0" y="${y.toFixed(1)}" width="64" height="${hh.toFixed(1)}" fill="hsl(${(h+r()*50-25)|0} 55% ${r()<.5?25:62}%)" opacity=".35"/>`}
for(let i=0;i<2+id%3;i++)d+=`<circle cx="${(16+r()*32)|0}" cy="${(16+r()*32)|0}" r="${(2+r()*4)|0}" fill="#000" opacity=".18"/>`;
const ring=id%3===0?`<ellipse cx="32" cy="34" rx="30" ry="8" fill="none" stroke="hsl(${h} 40% 75%)" stroke-width="2.5" opacity=".7" transform="rotate(-18 32 32)"/>`:'';
return `<svg width="${sz}" height="${sz}" viewBox="0 0 64 64" style="flex:none"><defs><radialGradient id="${g}" cx=".32" cy=".3" r=".85"><stop offset="0" stop-color="hsl(${h} 70% 72%)"/><stop offset=".6" stop-color="hsl(${h} 60% 36%)"/><stop offset="1" stop-color="hsl(${h} 50% 12%)"/></radialGradient><clipPath id="${g}c"><circle cx="32" cy="32" r="22"/></clipPath></defs><circle cx="32" cy="32" r="22" fill="url(#${g})"/><g clip-path="url(#${g}c)">${d}</g>${ring}</svg>`}
const orb=id=>planet(id,20);
