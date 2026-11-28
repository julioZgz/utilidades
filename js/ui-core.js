/* ui-core.js — Componentes UI y navegación: card, chips, toast, showAway, modal de cantidad (qtyOpen, qtyStep, qtySl, qtyUpd), colas (qBlock, bqList…), tabVis/tabAct, go/tabGo/selPlanet/goTo, subTabs/subGo (sub-pestañas de Puerto e Imperio).
 * localStorage: escribe je_v (go) y je_sp (selPlanet, goTo, toast).
 * NO debe: definir fórmulas; las acciones reales están en actions.
 * Movido tal cual de juego-espacial.html original; ver ARCHITECTURE.md. */
const tabVis=k=>({m:()=>S.tech.p>=1,r:()=>S.tech.y>=1,x:()=>S.tech.x>=1,q:()=>S.tech.l>=1}[k]||(()=>true))();
const tabAct=(k,p)=>k==='i'?p.b.l>=1:k==='f'?p.b.s>=1:k==='p'?S.cs.some(c=>c.b.s>=1):true;
const warn=p=>p.rb>=40||(p.dm&&p.dm.length>0);
const chips=c=>Object.entries(c).map(([k,v])=>`<i class="ch ${k}" data-k="${k}" data-n="${v}">${fmt(v)} ${RN[k]}</i>`).join('');
const chipsS=c=>Object.entries(c).map(([k,v])=>`<i class="ch ${k}">${fmt(v)} ${RN[k]}</i>`).join('');
const card=(t,lv,d,c,lab,fn,off,ic,tm,hid=!/^⚠/.test(d),grey,extra,inf)=>`<div class=card><div class=row><div class=pl>${ic||''}<b>${t}</b>${hid?`<span class=info onclick="${inf||"this.closest('.card').querySelector('.tip').classList.toggle('show')"}">ⓘ</span>`:''}</div><span class=lv>${lv}</span></div><p class="${hid?'tip':''}">${d}</p>${c||tm?`<div class=chs${grey?' style="opacity:.45"':''}>${c?(grey?chipsS(c):chips(c)):''}${tm?`<i class=ch>⏱ ${fmtT(tm)}</i>`:''}</div>`:''}<button ${c&&!grey?`data-cost='${JSON.stringify(c)}'`:''} ${off?'disabled data-off=1':''} ${/^Cancelar/.test(lab)?'style="background:#ff8a8a"':''} onclick="${fn}">${off||lab}</button>${extra||''}</div>`;

function showAway(ms,t0,ev){const t1=tot(),g=['m','c','g'].map(k=>[k,Math.floor(t1[k]-t0[k])]).filter(([k,v])=>v>0),u=[...new Set(ev)];const m=$('#md');m.style.display='flex';
m.innerHTML=`<div class=card style="width:100%;max-width:420px;max-height:80vh;overflow:auto"><b>Mientras no estabas</b><p class=st>Has estado fuera ${fmtT(Math.round(ms/1000))}.</p>${g.length?`<div class=chs>${g.map(([k,v])=>`<i class="ch ${k}">+${fmt(v)} ${RN[k]}</i>`).join('')}</div>`:''}${u.length?u.slice(0,10).map(x=>`<p style="margin:4px 0">• ${x}</p>`).join('')+(u.length>10?`<p class=st>…y ${u.length-10} más</p>`:''):'<p class=st>No ha terminado nada.</p>'}${S.rf?'<p>🧳 Hay refugiados esperando tu respuesta.</p>':''}<button class=go style="margin-top:8px" onclick="closeM()">Cerrar</button></div>`}
function toast(t,pid,v){if(LOG){LOG.push(t);return}const e=$('#toast');e.innerHTML='<span style="flex:1"></span><b style="font-size:22px;padding:2px 8px">✕</b>';e.firstChild.textContent=t;e.style.display='flex';
e.onclick=ev=>{e.style.display='none';if(ev.target.tagName==='B')return;if(pid!=null&&P(pid)){SP=pid;localStorage.setItem('je_sp',pid)}if(v)go(v);else render()};
clearTimeout(toast.t);toast.t=setTimeout(()=>e.style.display='none',6000)}
/* Modal de cantidad común (raids, dismantle, convoy, supply, expedition). qtyOpen(c): c.t título · c.i texto de contexto · c.pre/c.post HTML antes/después de las filas · c.rows filas −/N/+ con range · c.gt/c.go texto y onclick de la acción (c.gid id, c.gm margen, c.sc con scroll) · c.u() refresca las líneas propias del módulo.
 * Fila: {mn mínimo del range, mx() máximo, get(), set(v) (clampa y aplica), st paso de −/+ (1), fm(n) texto del número, h HTML antes, x HTML entre el −/+ y el range}. El estado vive en el módulo que abre la modal, nunca en S. */
let QTY=null;
function qtyOpen(c){QTY=c;const m=$('#md');m.style.display='flex';
m.innerHTML=`<div class=card data-q style="width:100%;max-width:420px${c.sc?';max-height:85vh;overflow:auto':''}"><b>${c.t}</b><p class=st>${c.i}</p>${c.pre||''}${c.rows.map((r,i)=>`${r.h||''}<div class=row style="margin:10px 0"><button class=tab onclick="qtyStep(${i},-1)">−</button><b style="font-size:22px"><span id=qn${i}></span></b><button class=tab onclick="qtyStep(${i},1)">+</button></div>${r.x||''}<input type=range id=qs${i} min=${r.mn} max=${r.mx()} step=1 oninput="qtySl(${i},this.value)">`).join('')}${c.post||''}
<div class=row style="gap:8px;margin-top:${c.gm||6}px"><button class=go style="background:#26344f;color:var(--tx)" onclick="closeM()">Cancelar</button><button class=go${c.gid?` id=${c.gid}`:''} style="background:#e8a86a" onclick="${c.go}">${c.gt}</button></div></div>`;qtyUpd()}
function qtyUpd(){QTY.rows.forEach((r,i)=>{const v=r.get(),e=$('#qs'+i);$('#qn'+i).textContent=r.fm?r.fm(v):v;e.max=r.mx();e.value=v});QTY.u&&QTY.u()}
function qtyStep(i,d){const r=QTY.rows[i];r.set(r.get()+(r.st||1)*d);qtyUpd()}
function qtySl(i,v){QTY.rows[i].set(+v);qtyUpd()}
let QO=false;
const qBlock=(h,sm,inner)=>`<div class=card style="cursor:pointer;margin-bottom:6px" onclick="qToggle()"><div class=row><b>${h}</b><span class=lv>${sm} <span id=qa>${QO?'▴':'▾'}</span></span></div></div><div id=qb style="display:${QO?'block':'none'}">${inner}</div>`;
function qToggle(){QO=!QO;const b=$('#qb'),a=$('#qa');if(b)b.style.display=QO?'block':'none';if(a)a.textContent=QO?'▴':'▾'}
const bqList=p=>(p.bq||[]).map((it,i)=>`<div class=card><div class=row><b>En cola: ${B[it.k].n} → nivel ${it.L+1}</b><span class=lv>${i+1}º</span></div><button class=go style="background:#ff8a8a" onclick="cancelQ(${i})">Quitar de la cola (recuperas todo)</button></div>`).join('');
const sqList=p=>(p.sqq||[]).map((it,i)=>`<div class=card><div class=row><b>En cola: ${SH[it.t].n}</b><span class=lv>${i+1}º</span></div><button class=go style="background:#ff8a8a" onclick="cancelSQ(${i})">Quitar de la cola (recuperas todo)</button></div>`).join('');
const rrCard=p=>{const r=p.rr,c=repC(p,r.k);return`<div class=card><div class=row><b>Reparando ${B[r.k].n}</b><span class=lv data-end="${r.end}"></span></div>${r.acc?'':`<div class=chs>${chips(c)}</div>`}<button class=go ${r.acc?'disabled data-off=1':`data-cost='${JSON.stringify(c)}'`} onclick="accel()">${r.acc?'Ya acelerada':'Acelerar: mitad del tiempo restante'}</button><button class=go style="background:#ff8a8a;margin-top:8px" onclick="cancelRR()">Cancelar (recuperas todo)</button></div>`};
const rfCard=()=>{const f=S.rf;if(!f||!P(f.pid))return'';return`<div class=card><div class=row><b>Llegan refugiados a ${U(f.pid).name}</b><span class=lv data-end="${f.exp}"></span></div><p>Aceptarlos cuesta ${f.c.m} de metal, ${f.c.c} de cristal y ${f.c.g} de gas, pero reduce la rebelión del planeta (−8% ahora${P(f.pid).rb0>0?' y −2% de forma permanente en su base':''}). Si no respondes, se marchan.</p><div class=row><button class=go onclick="refugee(1)">Aceptar</button><button class=go style="background:#ff8a8a" onclick="refugee(0)">Rechazar</button></div></div>`};
const qe=t=>`<div class=card><div class=row><b>${t}</b><span class=lv>—</span></div><button class=go disabled>Cancelar</button></div>`;
const qc=(t,e,f)=>`<div class=card><div class=row><b>${t}</b><span class=lv data-end="${e}"></span></div><button class=go style="background:#ff8a8a" onclick="${f}">Cancelar (recuperas todo)</button>${S.acc>0?`<button class=go style="margin-top:8px;background:#26344f;color:var(--tx)" onclick="useAcc('${{'cancelB()':'q','cancelR()':'rq','cancelS()':'sq'}[f]}')">Usar acelerador (${S.acc}): mitad del tiempo restante</button>`:''}</div>`;
function strip(){const a=[];S.mis.forEach(m=>a.push([{x:'Explorando',c:'Colonizando',r:'Saqueando',b:'Volviendo de'}[m.k]+' '+U(m.to).name,m.end]));
S.cs.forEach(p=>{const n=U(p.id).name;p.q&&a.push([`${B[p.q.k].n} (${n})`,p.q.end]);p.rr&&a.push([`Reparando ${B[p.rr.k].n} (${n})`,p.rr.end]);p.rq&&a.push([`Investigando ${T[p.rq.k].n} (${n})`,p.rq.end]);p.sq&&a.push([`Construyendo ${SH[p.sq.t].n} (${n})`,p.sq.end])});
return a.length?`<div class=ms>${a.map(([t,e])=>`<span class=ch>${t} · <span data-end="${e}"></span></span>`).join('')}</div>`:''}
function goTo(pid,v){if(pid!=null&&P(pid)){SP=pid;localStorage.setItem('je_sp',pid)}go(v)}
function go(v){QO=false;const x=TABMAP[v];if(x){v=x[0];if(v==='p')SUBP=x[1];else SUBE=x[1]}V=v;localStorage.setItem('je_v',v);render();window.scrollTo(0,0)}
function tabGo(v){if(v==='p')SUBP=tabVis('m')?'c':tabVis('r')?'s':'m';else if(v==='e')SUBE='s';go(v)}
function selPlanet(id){QO=false;SP=id;localStorage.setItem('je_sp',id);render()}
const subTabs=(g,l,c)=>`<div class=tabs style="margin-bottom:8px">${l.map(([k,n])=>`<button class="tab ${k===c?'on':''}" onclick="subGo('${g}','${k}')">${n}</button>`).join('')}</div>`;
function subGo(g,k){QO=false;if(g==='p')SUBP=k;else SUBE=k;render()}
