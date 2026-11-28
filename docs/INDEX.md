# INDEX — qué hay en cada módulo (generado del código)

Formato: `nombre(params)` — qué campos de S toca (lee o escribe) · efectos · llamadas a funciones de otros módulos.
Orden de carga = orden de este índice. Helpers pequeños declarados en la misma sentencia que otro (p. ej. `ST`, `ef`, `IDX`, `K`, `U`, `mem`, `capK`, `used`, `rebWin`, `repT`) viven en el mismo sitio que su vecino.

## util.js
- `$(s)`
- `afford(r,c)`
- `fmt(n)`
- `fmtT(s)`
- `rng(a)`
- `semC(v,g,y)` · color semántico (verde `#6fcf97` / amarillo `#f2c94c` / rojo `#ff8a8a`): con `g>y` más alto es mejor (≥g verde, ≥y amarillo), con `g<y` más bajo es mejor (<g verde, <y amarillo); lo usan `raidView` (desgaste) y `mUpd` (éxito)

## state.js
- `S` · localStorage getItem:je_v,getItem:je_code · también `V` (pestaña: b Colonia · i Laboratorio · f Astillero · p Puerto · e Imperio), `SUBP`/`SUBE` (al arrancar: c y s; sub-pestaña de Puerto: c Colonización, s Saqueos, m Misiones; de Imperio: s Estadísticas, x Comercio, q Colas; no se guardan) y `TABMAP` (ids antiguos m,r,x,q → [pestaña, sub-pestaña]; lo usan state al leer `je_v` y `go`)
- `P(id)` · S.cs,S.u,S.ru
- `R(p)` · S.net,S.cs · p.nj,p.r
- `LOG`

## data.js
- `RN`
- `B`
- `T`
- `SH`
- `BT` · S.tech

## rules.js
- `tB(k,L,p)`
- `tT(k,L,p)`
- `tS(t,p)`
- `cost(b,f,L)`
- `cap(p)` · p.dm,p.b
- `prod(p,i)` · S.tech,S.bo · p.st · ×1,10 si `arkBn(p)`
- `lv(p,k)` · p.dm,p.b
- `rbT(p)` · p.rb0,p.b · −10 si `arkBn(p)`
- `arkDone()` · S.ark · ¿las 6 partes del Arca al nivel 5? · `arkBn(p)` · p.id,p.b,p.dm · ¿recibe el bonus del Arca (+10 % producción, −10 rebelión)? Hogar (`id` 0) con el Arca completa; colonia con Portal al Arca (`r`, sin dañar) y el Arca completa
- `defRed(p)` · p.rb,p.b
- `RQ(p,k,tL,b=p.b)` · S.tech · p.b
- `reqTxt(k)`
- `repC(p,k)` · p.b
- `CM()` · p.nj
- `maxL(p,k)`
- `tot()` · S.cs,S.net · p.nj,p.r
- `slots()` · S.tech · p.q,p.bq,p.sq,p.sqq
- `vb(p)` · p.b,p.q,p.bq
- `need(u)`
- `avT(p,c)` · S.net · p.nj,p.r · segundos hasta poder pagar el coste `c` (máximo de los recursos que faltan; con red usa `R`, `capN`, `prodN`); 0 si ya se puede, -1 si `c` supera la capacidad del almacén, -2 si falta un recurso sin producción
- `rdDef(u)` · poder del puesto rival, `⌈dist²/2⌉+2` (3, 4, 7, 10, 15, 20, 27, 34 para dist 1-8); lo usan `rdPct` y la etiqueta «Defensa» de Saqueos
- `rdPct(fl,u)` · S.tech · % de éxito de un saqueo según el poder de la flota `fl` (usa Armamento) frente a `rdDef(u)`; `rdLost(n,t)` · S.tech · pérdidas esperadas de `n` naves del modelo `t` si falla (Blindaje)
- `rdLoot(fl,u)` · S.tech,S.wr · botín máximo fijo del planeta (calculado con `RDN`=10 naves y su desgaste), capacidad de carga (suma por modelo) y botín real = el menor de ambos (Bodegas, Rutas) · `wrW(id,now)` · S.wr · desgaste actual en saqueos (baja lineal hasta 0 en 24 h) · `wrP(id)` · S.tech,S.wr · % de reducción del botín
- `mtL()` · S.cs · p.b · mayor suma, entre las colonias, de los niveles de z,a,s,l,u,h,o,k,w,t,p,d,v (sin minas ni Portal al Arca; máximo 116; los dañados cuentan completos); lo usa `trq` para Mantenimiento estelar (30/60/90/110)
- `trq(k,L)` · S.cnt,S.tech · texto del requisito de una tecnología ('' si se cumple): saqueos (f, r), niveles de mejoras de saqueo (v), de Colonización y Propulsión (i) o niveles de edificios sumados (h, con `mtL`); `trN()` · S.tech · lo que falta para Ingeniería naval
- `rdTy()` modelos de saqueo (los de `SH` con `pw`) · `rdN(fl)` nº de naves · `rdPw(fl)` poder · `rdCg(fl)` carga base · `mFl(m)` flota de una misión (`m.f`, o `{r:m.n}` si es antigua) · `mTx(m)` texto «N corsarios/naves»
- `shUn(t)` · S.cnt,S.un,S.tech · ¿modelo desbloqueado? · `shUnT(t)` · texto de cómo se desbloquea, con progreso
- `trC(L)` · S.tech · lo que falta de Colonización y Propulsión para el nivel L+1 de Convoyes ('' si se cumple; lo usa `trq`) · `cvMax()` · S.tech · carga máxima por recurso de un colonizador (0 / 500 / 1.500 / 3.000 según el nivel de Convoyes)
- `SUC` carga por nave de suministros (500) · `SUR` riesgo en ruta `{tot .1, par .2, lo [.3,.7], ship .3}` · `spT(to)` · S.tech · segundos de viaje de un envío de suministros (como las demás misiones, con la distancia del destino, mínimo 1, ×1,5) · `spTx(m)` texto «(N naves)» de una misión de suministros

- `cxE(n,id)` · S.tr · contador de saqueos efectivo: `n` menos los olvidados por tributo (mín. 0) · `cxN(id)` · S.rd,S.tr · saqueos que «recuerda» el puesto `id` · `cxPct(n)` probabilidad de que un saqueo con éxito programe un contraataque con `n` saqueos efectivos (0 con n<3; 15 % + 10 % por saqueo extra, máx. 60 %); el riesgo mostrado antes de saquear es `cxPct(cxN(id)+1)` · `dpC(u)` coste de un saqueo olvidado (50 % del botín máximo sin desgaste, con `RDN`) · `dpCost(u,n)` coste de `n`

- `exDf(id)` dificultad 1-5 de un planeta (sale de su id; no se guarda) · `exPc(k,id,n)` · S.tech · probabilidad de éxito de explorar (`x`: 50 % + 8 pts × Espionaje) o colonizar (`c`: 40 % + 8 pts × Colonización) con `n` unidades: por unidad, menos 8 pts por punto de dificultad sobre 1 (10 %-90 %); total 1−(1−p)ⁿ, máx. 95 % · `exTx(m)` texto « (N)» de una misión de exploración o colonización con varias unidades · `exEvP()` · S.tech · probabilidad de evento al explorar con éxito: 10 % + 3 pts × Espionaje (10-25 %)

## engine.js
- `sync()` · S.cs,S.tech,S.net · p.nj,p.b · → toast
- `newGame()` · → rng
- `done(m)` · S.rk,S.known,S.fleet,S.rd,S.wr,S.cnt,S.cs,S.ev,S.tech,S.un · exploración y colonización con `n`/`pr`: tirada con `m.pr` (en exploración con éxito y `n`, `exEvt` puede añadir un evento: su texto va tras el de la exploración, en aviso e historial), se gastan todas las unidades (si falla una colonización, los recursos del convoy vuelven al origen; sin hueco de colonia vuelven los colonizadores; sin `n` = misión antigua, éxito seguro) · saqueo con flota mixta; en éxito, 12 % de desbloquear el Carguero; colonización: los recursos del convoy (`m.res`) se suman a la colonia nueva o, sin hueco, vuelven al planeta de origen (`m.o`) · misiones de vuelta (`k:'b'`) → `rcDone` (no se anotan en el historial) · saqueo (`r`), exploración y colonización (`x`) anotan su resultado con `histAdd` · → exEvt,norm,toast,rdPct,rdLoot,rdLost,rdTy,mFl,cxPlan,P,R,supDone,rcDone,histAdd
- `supDone(m)` · S.fleet,S.ev · llegada de una misión de suministros (`m.k==='s'`): 70 % llega todo y las naves vuelven; 20 % saqueo parcial (se pierde 30-70 % de la carga, cada nave 30 %); 10 % pérdida total · suma la carga a `R(destino)` (si el destino ya no existe, al origen o al hogar) · anota el resultado en el historial (`s`) · → toast,P,R,U,histAdd
- `visitor()` · S.cs,S.rf,S.ev,S.tech · p.b · el botín ignora las tecnologías `i` (Convoyes), `h` (Mantenimiento) y `s` (Espionaje) al sumar niveles de tecnología, y los edificios `v` (Estación de vigilancia) y `r` (Portal al Arca) al sumar niveles de edificios · → toast,histAdd
- `attack(p)` · S.cnt,S.ev · p.rb,p.b,p.dm · → toast,histAdd
- `advance(now)` · próxima visita a los 15-30 min (÷ (1 + 0,15 × niveles de Puerto comercial)) · S.t,S.sh,S.cs,S.net,S.tech,S.fleet,S.cnt,S.mis,S.rf,S.nv · p.nj,p.rr,p.dm,p.q,p.b,p.rb,p.rq,p.sq · → prod,rbT,toast,startNext,nextShip,evento,histRes,cxRun,rtRun
- `genRU()` · → rng

## events.js
- `warnP(p)` · p.b,p.dm
- `evento(now,dt)` · S.ne,S.ev,S.cs,S.tech · p.st,p.dm,p.b · → warnP,prod,toast,histAdd
- `exEvt(to,end)` · S.tech,S.bo,S.sh,S.cs · evento al explorar con éxito (si sale `exEvP`): piratas (25 % − 3 pts × Espionaje; roban (12 − 2 × Espionaje) % del Hogar, mín. 2 %; el escudo los anula), anomalía (reparto 40:35 con las ruinas; +25 % de producción en todas las colonias durante 20 + 5 × Espionaje min, `S.bo`) o ruinas (15 + 5 × Espionaje min de producción del Hogar); devuelve el texto ('' si no hay) · → exEvP,prod,R,U

## counter.js
- `cxPlan(to,n)` · S.cx,S.tr · resta los saqueos olvidados (`cxE`) y, con n efectivo ≥3, probabilidad `cxPct(n)` (15 % +10 % por saqueo extra, máx. 60 %); programa el golpe a 5-10 min con el n efectivo · → cxE,cxPct
- `cxHit(c)` · S.cx,S.sh,S.cs,S.ev · p.dm · resuelve: escudo → nada; si no, 30 % +5 % por saqueo sobre 2 (máx. 85 %) × (1−defRed); roba 20 % y daña un edificio · → defRed,histAdd,toast
- `cxRun(now,dt)` · S.cx · lanza los pendientes; si dt>120 (ausente) los aplaza 2 min

## actions.js
- `change()` · → render
- `reval(p)` · p.b,p.q,p.bq · → maxL,toast
- `startNext(p,t)` · p.q,p.bq
- `nextShip(p,t)` · p.sq,p.sqq
- `build(k)` · p.dm,p.q,p.bq · → cost,afford,maxL,slots
- `cancelQ(i)` · p.bq
- `cancelSQ(i)` · p.sqq
- `research(k)` · S.tech,S.cs · p.rq · → cost,afford,trq
- `ship(t)` · p.sq,p.sqq · → afford,slots,shUn
- `repair(k)` · p.rr,p.dm · → afford,repC
- `accel()` · p.rr · → afford,repC
- `cancelRR()` · p.rr
- `refugee(a)` · S.rf,S.cnt,S.ev · p.rb,p.rb0 · → toast,histRes
- `cancelB()` · p.q
- `cancelR()`
- `cancelS()` · p.sq
- `send(k,to,res,n)` · S.tech,S.mis,S.fleet,S.cs · `res` {m,c,g} opcional, solo al colonizar: se descuenta del planeta seleccionado y la misión guarda `res` y `o` (origen) · `n` unidades (1 por defecto) se descuentan de golpe y la misión guarda `n` y `pr` (con `exPc`) · → need,cvTake,exPc
- `sendSupply(to,o,n,res)` · S.fleet,S.mis · lanza una misión `{k:'s',to,end,n,res,o}`; valida destino sin red, origen distinto y hueco de misión; la carga se descuenta del origen con `spTake` y las naves de `S.fleet.s` · → spTake,spT,change
- `refundOf(p)` · p.b,p.q,p.rq,p.sq,p.rr · → cost
- `abandon()` · S.mis,S.cs · → toast,selPlanet
- `useAcc(kind)` · S.acc

## dismantle.js
- `DSP`
- `DSM`
- `dsRet(t,n)`
- `dsPl(t,n)` · SH · plural; usa `SH[t].pl` si existe
- `dsTxt(t,n)` · → dsRet,fmt
- `dsUpd()` · → dsTxt
- `dsEx(t)` · S.fleet
- `dsOpen(t)` · S.fleet,S.cs · → dsUpd
- `dsStep(d)` · S.fleet · → dsUpd
- `dsSl(v)` · S.fleet · → dsUpd
- `dsSend()` · → closeM,dismantle
- `dismantle(t,n)` · S.fleet,S.cs · → dsRet,toast,change

## demolish.js
- `DBP`
- `DBM` (estado del modal: edificio; no se guarda)
- `dbWhy(p,k)` · p.b,p.q,p.bq,p.nj · motivo por el que no se puede bajar un nivel ('' si se puede): obra o cola del propio edificio, Hangar con la colonia en red, o requisito de otro edificio (incluidos los encolados) · → vb,RQ
- `dbRet(p,k)` · p.b · 50 % del coste del nivel que se quita · → cost
- `dbTx(c)` · → fmt
- `dbEx(p,k)` · p.b · botón «Desmantelar nivel N» de la tarjeta (deshabilitado: «Desmantelar nivel N · motivo»; nada si el nivel es 0) · → dbWhy
- `dbOpen(k)` · p.b · modal de confirmación; con el Almacén avisa si la capacidad nueva queda por debajo de lo almacenado · → dbWhy,dbRet,dbTx,fmt,U,P,CM
- `dbSend()` · → closeM,demolish
- `demolish(k)` · p.b · R(p) · baja un nivel y suma el 50 % del coste a los recursos de la colonia · → dbWhy,dbRet,dbTx,toast,change

## convoy.js
- `CVM` (estado del modal: destino, nº de colonizadores `n` y recursos; no se guarda)
- `cvLim()` · S.tech,S.cs · máximo por recurso: carga máxima del nivel y lo disponible en el planeta seleccionado · → cvMax
- `cvTake(res)` · S.cs · descuenta `res` (acotado) del planeta seleccionado y lo devuelve; null si no queda nada · → cvLim
- `cvUpd()` · → fmt,exLn
- `cvOpen(to)` · S.tech,S.cs · cantidad de colonizadores (−/+ y slider, inicial 1) con % de éxito y, si hay Convoyes, una fila −/+ y un slider por recurso, inicial 0 · → cvLim,cvMax,exLn,fmt,U,P
- `cvStep(k,d)` · → cvLim,cvUpd
- `cvSl(k,v)` · → cvLim,cvUpd
- `cvQ(d)` · `cvQs(v)` · cantidad de colonizadores
- `cvSend()` · → closeM,send

## supply.js
- `SUM` (estado del modal: destino, origen, naves y carga; no se guarda)
- `spOs()` colonias que pueden ser origen (todas menos el destino) · `spLim(k)` · S.fleet,S.cs · máximo de un recurso: lo que tenga el origen (`R`: la red si está conectado) y el hueco de carga (500 × naves)
- `spTake(p,n,res)` · descuenta `res` (acotado a lo disponible y a 500 × n) de `R(p)` y lo devuelve; null si no queda nada
- `spFix()` recorta la carga al cambiar origen o naves · `spUpd()` · → fmt,spLim
- `spOpen(to)` · S.fleet,S.cs · modal con origen (botones), naves y una fila −/+ y un slider por recurso (−/+ de 10 en 10) · → spT,fmtT,fmt,U,P
- `spPick(o)` · `spSet(k,v)` · `spStep(k,d)` · `spSl(k,v)`
- `spRp(v)` · casilla «Repetir el envío automáticamente» del modal (`SUM.rp`)
- `spSend()` · → closeM,sendSupply,rtAdd · si la casilla está marcada y el envío salió, crea la ruta recurrente con la carga real de la misión
- `spEx(t)` · S.cs,S.fleet,S.mis · botón «Pedir suministros» (lo pinta `view` arriba en Colonia, si hay más de una colonia; en una colonia en red solo pinta las rutas con `rtEx`) (deshabilitado «Pedir suministros · motivo» si la colonia está en red, falta nave, otra colonia o hueco de misión); debajo añade las rutas de la colonia con `rtEx` · → spT,fmtT,rtEx

## routes.js
- `rtOf(to)` · S.rt · ruta cuyo destino es `to` · `rtP(id)` · S.cs · colonia por id
- `rtAdd(to,o,n,res)` · S.rt · crea o sustituye la ruta a `to` (una por destino), activa · → change
- `rtRun(now)` · S.rt,S.mis,S.fleet,S.tech · la llama `advance` justo después del `filter` de `S.mis` (si se añadiera dentro, se perdería): cancela las rutas cuyo destino ya no existe o entró en la red o cuyo origen ya no existe; para cada ruta activa sin misión `k:'s'` suya en vuelo, la pausa con aviso si faltan naves, hueco de misión o carga completa en el origen, y si no, relanza (como `sendSupply`) · como mucho un relanzamiento por ruta y llamada · → rtP,spTake,spT,toast,R,U
- `rtEx(p)` · S.rt · líneas «🔁 Ruta A → B · naves · carga · estado» con botones Pausar/Reanudar y Cancelar de las rutas cuyo origen o destino es `p` · → fmt,U
- `rtTog(to)` · `rtDel(to)` · S.rt · pausan/reanudan y cancelan una ruta · → change

## recall.js
- `RCM` (estado del modal: misión elegida por `to` y `end`; no se guarda)
- `rcFind(to,end)` · S.mis · misión de exploración, colonización o saqueo identificada por objetivo y hora de llegada (no por posición)
- `rcT(m)` · S.tech · segundos totales de la misión (×2 en saqueos) · `rcEl(m)` · tiempo ya recorrido (con la Propulsión actual, acotado) · `rcOff(m)` · saqueo ya pasada la mitad (ya vuelve; no se puede cancelar) · `rcNm(m)` nombre del objetivo
- `rcEx(m)` · S.mis · botón «Cancelar misión» de cada misión en Puerto → Misiones en curso (y en Colonización y Saqueos) (deshabilitado «Cancelar misión · Ya está de vuelta» en saqueos pasada la mitad)
- `rcOpen(to,end)` · S.mis · modal de confirmación con el tiempo de vuelta · → rcFind,rcOff,rcEl,fmtT,mTx,U,P
- `rcSend()` · → closeM,recall
- `recall(to,end)` · S.mis · sustituye la misión por una de vuelta `{k:'b',w,to,end,n?,f?,res?,o?}` que llega en el tiempo ya recorrido · → rcFind,rcOff,rcEl,toast,change
- `rcDone(m)` · S.fleet · llegada de una misión de vuelta: `n` exploradores, `n` colonizadores (y sus recursos a `R(origen)`) o flota de saqueo vuelven a `S.fleet` · → toast,mFl,rdTy,P,R,U

## expedition.js
- `EXM` (estado del modal: destino y nº de exploradores; no se guarda)
- `exLn(k,to,n)` · línea «Éxito X % · dificultad D/5» y gasto de unidades; la usa también convoy; al explorar añade «Si sale bien, X % de hallazgo» · → exPc,exDf,exEvP
- `exUpd()` · → exLn
- `exOpen(to)` · S.fleet,S.tech · modal para elegir cuántos exploradores enviar (inicial 1) con % de éxito; avisa de que se gastan todos · → exUpd,exLn
- `exStep(d)` · `exSl(v)` · S.fleet · → exUpd
- `exSend()` · → closeM,send

## storage.js
- `DB`
- `norm(p)` · p.bq,p.sqq,p.b,p.rb0,p.rb,p.dm,p.q,p.rr,p.st
- `key()`
- `ET` (ETag de la última carga/guardado; global de módulo, no va en S), `SV` (guardando), `CK` (comprobando)
- `save()` · Firebase · PUT con if-match=ET; antes comprueba la sesión (`seOk`); si responde 412 avisa y recarga · → seOk,advance,toast,load
- `checkNew()` · Firebase · al volver a primer plano, sin cambios pendientes, recarga si el ETag cambió · → load
- `BK`
- `autoBackup()` · Firebase; localStorage getItem:lk,setItem:lk
- `dlBackup()` · → advance
- `restState(d)` · S.t,S.cs · Firebase · → toast,closeM,render
- `restFile(inp)` · → toast
- `openBk()` · Firebase · → fmtT,closeM
- `setSt()`
- `prep()` · S.mis,S.known,S.fleet,S.rd,S.ru,S.rk,S.tech,S.cs,S.net,S.rq,S.sq,S.nv,S.cnt,S.acc,S.sh,S.ob,S.ne,S.hist,S.cx,S.rt,S.un,S.wr,S.tr · p.b · localStorage getItem:je_sp · pone a 0 en `S.ob` las categorías de `OB` que falten y en `S.ark` las seis partes del Arca · S.ark · → genRU,obOk
- `load(c)` · S.t · Firebase (guarda el ETag en ET); localStorage setItem:je_code · si `S` era nulo (login/arranque) reclama la sesión con `seClaim` · → seClaim,tot,showAway,newGame,advance,render
- `logout()` · localStorage removeItem:je_code · → render

## session.js
- `SES` (id de esta carga de página, `ok` reclamada, `at` última comprobación, `out` expulsado; no se guarda) · `seUrl()`
- `seClaim()` · Firebase PUT `juego_espacial_sesion/<key>` = `{sid,ts}`; reinicia `SES.out`
- `seCheck()` · Firebase GET; si el `sid` es otro → `seKick`; si la reclamación falló, la reintenta; un fallo de red no expulsa · → seClaim,seKick
- `seOk()` · ¿se puede guardar? usa la última comprobación si tiene <10 s o la pestaña está oculta · → seCheck
- `seKick()` / `seDrop()` · S,dirty,err · expulsa: espera a que acabe un guardado en curso (`SV`), descarta lo pendiente y vuelve al login con aviso · → render
- `seBack()` · al volver a primer plano: comprueba la sesión y luego `checkNew` · → seCheck,checkNew

## raids.js
- `raid(to,f)` · S.tech,S.fleet,S.mis · `f` = {modelo:cantidad}; la misión guarda `n` (total) y `f` · → change,need,rdN,rdTy
- `MR`
- `pctN(fl,u)` · → rdPct
- `mUpd()` · → rdLoot,pctN,fmt,semC · pinta el % de éxito con `semC(pc,70,40)`
- `openRaid(id)` · S.fleet,S.tech · modal sobre el componente `qtyOpen` de ui-core: una fila −/+ y un slider por modelo en casa · → qtyOpen,fmtT,rdTy
- `mFix(t)` · deja al menos 1 nave en el envío
- `closeM()`
- `sendRaid()`

## diplomacy.js
- `DPM` (estado del modal: puesto y nº de saqueos a olvidar; no se guarda) · `DPT` (intervalo de repintado; se para solo al cerrar)
- `dpLack(k,v,p)` · coste de un recurso como texto; con `lack` en rojo, «en (tiempo)», «sin producción» o «mejora el almacén» si no se paga con `R(p)` · → fmt,fmtT,prodN,capN
- `dpUpd()` · repinta «Riesgo ahora», «Con este tributo» (con `semC(x,20,40)`) y el coste; se llama cada segundo mientras el modal está abierto · → cxN,cxPct,dpCost,dpLack,semC
- `dpOpen(id)` · S.rd,S.tr · modal sobre `qtyOpen`: una fila −/+ y un slider (1 al máximo que recuerda el puesto, inicial 1) · → cxN,qtyOpen,dpUpd
- `dpSend()` · valida con `afford` (si faltan recursos, `toast` y la modal sigue abierta) · → closeM,dpPay
- `dpPay(id,n)` · S.tr · R(p) · descuenta el coste de `R(P(SP))`, suma `n` a `S.tr['p'+id]`, `toast` con el riesgo antes → después y `change()` conservando el scroll · → cxN,cxPct,dpCost,afford,toast,change
- `dpEx(id)` · botón «Diplomacia» (deshabilitado «Diplomacia · Sin riesgo de contraataque» si `cxPct(cxN(id)+1)` es 0); lo pinta `raidView` · → cxN,cxPct

## trade.js
- `TF`
- `W`
- `comm()` · S.tech
- `tf(k)` · → render
- `tt(k)` · → render
- `tin(v)`
- `tmax()` · → render
- `tp()`
- `trade()` · S.cnt · avisos separados: sin cantidad, sin materiales (con lo que hay en `R(p)`) y cantidad que no da ni 1 · → toast,change,fmt

## objectives.js
- `lvM(k)` · S.cs · p.b
- `OB` · S.known,S.cs,S.tech,S.cnt · p.nj,p.rb · 7 categorías; la última, Maestría (`mae`), tiene 6 niveles de fin de partida
- `obOk(o)`
- `rwd(i,id)` · recompensa del nivel `i`; la categoría `mae` tiene tabla propia (60-180 min de producción, aceleradores y escudo)
- `rwAmt(i,id)` · S.cs · → rwd,prod
- `obReady()` · S.ob
- `claim(id)` · S.ob,S.cs,S.acc,S.sh · → toast,render
- `obCard(c)` · S.ob · → fmt,rwd,rwAmt
- `openObj()` · S.acc,S.sh · → fmtT,closeM

## history.js
- `HLBL`
- `histAdd(k,pid,x,f)` · S.hist · guarda una entrada (`k` n/v/a/c/r/x/s) y deja las 5 últimas de ese tipo; `f` marca refugiados sin decidir
- `histRes(x)` · S.hist · pone el resultado en la última entrada con `f`
- `histView()` · S.hist · HTML de la lista (5 últimos por tipo: n, v, a, c, r saqueos, x exploración y colonización, s suministros) para la sub-pestaña Eventos de Imperio · → U,fmtT · `histOpen()` · pone `SUBE='h'` y va a Imperio · → go

## stats.js
- `SK` (['m','c','g']) · `statsTm` (intervalo de repintado; global de módulo, no va en S)
- `statsFill(h,cp,q)` · texto y color («Almacén lleno» / «Sin producción» / «Se llena en X») con `semC(min,120,30)` · → semC,fmtT
- `statsBox(t,p,net)` · S.net · p.r · bloque de almacén (lleno/capacidad, barra, producción por hora) de la red (`net`=1) o de una colonia suelta · → statsFill,capN,capK,prodN,prod,fmt
- `statsTr(n,f,b)` · fila de la tabla de producción por hora
- `sn(x)` número con coma decimal
- `statsFl(t)` · S.fleet,S.mis · total de naves del modelo `t`: las de casa más las que van en misión (`x` exploradores, `c` colonizadores, `r` saqueo con `mFl`, `s` suministros; en las de vuelta `k:'b'` se usa `w`; sin `n` cuenta 1) · → mFl
- `statsTmp()` · S.acc,S.sh,S.bo,S.cs · p.st · bloque «Mejoras temporales»: aceleradores, tiempo de escudo restante, tiempo restante de la anomalía de exploración y una línea por colonia con tormenta solar activa (`p.st` > ahora) con su tiempo restante; solo lectura · → fmtT,U
- `statsShips()` · S.fleet,S.mis,S.tech · tabla «Naves»: una fila por modelo con `shUn(t)` o alguna unidad; Total (y «N en vuelo»), Poder (`pw` × (1+0,1×Armamento)), Carga (`cg` × (1+0,25×Bodegas); colonizador con `cvMax()`, suministros `SUC`) y Pérdidas (`rdLost(1,t)`), solo el valor con mejoras (sin base); nota con el éxito por unidad (`exPc` con dificultad 1) · → statsFl,sn,fmt,shUn,rdLost,cvMax,exPc
- `statsBody()` · S.cs,S.net · HTML del panel: producción por hora, Mejoras temporales, Naves, almacén de la red y de cada colonia suelta · → statsTmp,statsShips,statsBox,statsTr,prod,arkIc
- `statsLive()` · se repinta cada 2 s mientras `V==='e'` y `SUBE==='s'` y se para solo al salir · `statsView()` · devuelve `<div id=stb>` y arranca `statsLive`

## ark.js
- `ARKIMG` (false hasta que existan las imágenes `img/arca/<parte><nivel>.webp`) · `AKC` coste por nivel (igual para todas las partes: 120k/90k/60k, 240k/180k/120k, 480k/360k/240k, 960k/720k/480k, 1,92M/1,44M/960k de metal/cristal/gas) · `AK` las 6 partes `{k,n,i,d,l}` (s Superestructura, m Motores, c Criogenia, h Hábitat, w Coraza, a Armamento; 5 niveles con nombre cada una; la parte i exige Superestructura i)
- `arkLv(k)` · S.ark · `arkN()` niveles sumados · `arkPct()` % del Arca
- `arkReq()` · S.cs · edificios del Hogar exigidos para iniciar el Arca (Almacén, Hangar, Laboratorio, Centro de mando, Astillero): `[nombre, nivel, máximo]`, con el máximo de `maxL` · → maxL
- `arkWhy(i)` · S.cs · motivo por el que no se puede subir la parte i ('' si se puede): nivel máximo, mientras `arkN()==0` los edificios del Hogar que falten según `arkReq` («Requiere Almacén 12 (tienes 9)»), Hogar fuera de la red, Superestructura insuficiente, `capN` por debajo del coste («Sube el Almacén») o recursos de `R(Hogar)` insuficientes · → R,capN
- `arkSvg()` dibujo provisional con una capa por parte (opacidad según nivel) · `arkImg()` capas `img/arca/` si `ARKIMG`, si no `arkSvg`
- `arkIc(p)` · icono 🛸 sin texto, solo si `arkBn(p)` (Hogar con el Arca completa; colonia con Portal y el Arca completa); si no, cadena vacía; lo pintan `render` (a la izquierda del 🔗 bajo el nombre de la colonia) y `statsBody` (tras el 🔗 junto al nombre en la tabla de producción) · → arkBn
- `arkBtn()` · S.ark · botón «🛸 El Arca · X %» (lo pone `view` al principio de Edificios) · `arkCard(x,i)` tarjeta de una parte; los chips de coste llevan `data-ak`/`data-an` (para que `tick` no los toque) y usan la clase `lack` si falta ese recurso en `R(Hogar)`; `arkTx(k,n)` da el texto, igual que `tick`
- `arkLive()` · S.cs · mientras `#md` muestra el Arca, cada segundo (intervalo `AKT`, se para solo al cerrar) repinta los chips (`lack` y texto con `arkTx`) y habilita/deshabilita los botones con `arkWhy` · → R,arkWhy
- `arkOpen()` · S.ark,S.cs · ventana dedicada sobre `#md` (con botón «Cerrar» al final): dibujo, progreso global, recursos de la red, sin iniciar la línea «Para empezar, en el Hogar: …» y una tarjeta por parte · → arkImg,arkCard,arkReq,R,fmt · arranca `arkLive`
- `arkBuy(k)` · S.ark · R(Hogar) · paga el coste del siguiente nivel, sube la parte, toast, `dirty`, reabre la ventana conservando el scroll y `render()` · → arkWhy,toast,arkOpen,render

## confirm.js
- `CFM` (confirmación pendiente; no se guarda; no lee ni escribe S)
- `cfOpen(o)` · `o` = `{t,i,g,f,c?,x?}` (título, texto, texto de la acción, función que la ejecuta, color opcional, onclick de cancelar opcional) · tarjeta `.card` sobre `#md` con Cancelar (`o.x` o `closeM()`) y la acción (color `o.c` o `#e8a86a`) · → $
- `cfGo()` · vacía `CFM`, cierra con `closeM` y ejecuta `f` · → closeM

## info.js
- `INLB` / `INLT` textos largos de ambientación por edificio y por tecnología (solo texto) · `INEB` / `INET` qué da el nivel L (edificio: `(L,p,q)`, con `q` = copia de la colonia con ese nivel; tecnología: `L`) · `INUT` qué desbloquea el nivel L de una tecnología · `infN` número con coma, `infS` % de reducción de tiempo por nivel, `infQ` copia de la colonia con el edificio a nivel L
- `infoUnB(p,k,L)` · p.b · qué desbloquea el nivel L de un edificio: recorre `RQ` de los demás edificios (hasta `maxL`) y apunta los requisitos que pasan a cumplirse al subir de L−1 a L; para `z` devuelve '' (su efecto ya sale en «da») · → RQ,maxL
- `infoBox(t,d,u,r)` · bloque «Nivel …» con lo que da (`d`), lo que desbloquea (`u`) y lo que falta para subirlo (`r`) · `infoOpen(img,name,sub,lore,sum,boxes)` · modal sobre `#md` con botón «Cerrar» (`closeM`)
- `infoB(k)` · P(SP) · modal de un edificio de la colonia seleccionada: imagen `bic`, nivel actual y siguiente (`RQ` para «para subirlo»; si está dañado avisa) · → bic,maxL,RQ,prod,rbT,capK,reqTxt,U,P · `infoT(k)` · S.tech · modal de una tecnología: imagen `tic`, nivel actual y siguiente (laboratorio y `trq` para «para subirlo») · → tic,lv,trq,P

## ui-art.js
- `icon(p,c)`
- `INV` (Set de ids de investigación con imagen cargada) · `INVN` (contador de pruebas terminadas; al llegar a todas y con `S`, hace `render`) · `tic(k)` · icono de investigación: imagen `img/research/<k>.webp` si está en `INV`, si no el SVG de `TI`; lo usa la vista Laboratorio (`view`)
- `BLD` (objeto `id → nº de variantes` de las tiras `img/buildings/<id>.webp` cargadas) · `BLDN` (pruebas terminadas; con todas y con `S`, hace `render`) · `bic(k,L,dm)` usa la tira si `k in BLD` (variante 1-4 / 5-7 / 8+, acotada a las que haya), si no el sprite (`SPM`) y si no el SVG de `BI`
- `NAV` · `NAVN` · `sic(t)` · igual que `tic` para las naves: imagen `img/ships/<t>.webp` si está en `NAV`, si no el SVG de `SI`; lo usa la vista Astillero (`view`)
- `SPM`
- `SPR`
- (arranque) if(typeof Image!=='undefined'){const spr=new Image();spr.onl
- `bic(k,L,dm)`
- `BI`
- `TI`
- `SI`
- `gid`
- `planet(id,sz,unk)` · → rng
- `orb(id)`

## ui-core.js
- `tabVis(k)` · S.tech · solo condiciona m (Propulsión), r (saqueos), x (comercio) y q (laboratorio), que ahora son sub-pestañas; el resto, siempre visible
- `tabAct(k,p)` · S.cs · p.b · i: la colonia tiene Laboratorio; f: tiene Astillero; p: alguna colonia tiene Astillero
- `warn(p)` · p.rb,p.dm
- `chips(c)` · → fmt
- `chipsS(c)` · → fmt
- `card()` · → fmtT · 13.º parámetro opcional `inf` (onclick de la ⓘ; si viene, abre el modal de info en vez de desplegar la descripción; lo pasan `view` con `infoB`/`infoT`)
- `showAway(ms,t0,ev)` · S.rf · → fmt,fmtT,tot,closeM
- `toast(t,pid,v)` · localStorage setItem:je_sp · → render
- `QTY` (modal de cantidad abierta; no se guarda)
- `qtyOpen(c)` · modal de cantidad común sobre `#md` (raids, dismantle, convoy, supply, expedition): `c.t` título · `c.i` contexto · `c.pre`/`c.post` HTML · `c.rows` filas −/N/+ con range `{mn,mx(),get(),set(v),st,fm(n),h,x}` · `c.gt`/`c.go` texto y onclick de la acción (`c.gid`, `c.gm`, `c.sc`) · `c.u()` refresca líneas propias · el estado vive en el módulo que abre, nunca en S · → qtyUpd
- `qtyUpd()` · repinta números y ranges y llama a `c.u()` · `qtyStep(i,d)` · `qtySl(i,v)` · → qtyUpd
- `QO`
- `qBlock(h,sm,inner)`
- `qToggle()`
- `bqList(p)` · p.bq · → cancelQ
- `sqList(p)` · p.sqq · → cancelSQ
- `rrCard(p)` · p.rr · → repC,accel,cancelRR
- `rfCard()` · S.rf · → refugee
- `qe(t)`
- `qc(t,e,f)` · S.acc · → cancelB,cancelR,cancelS,useAcc
- `strip()` · S.mis,S.cs · p.q,p.rr,p.rq,p.sq
- `goTo(pid,v)` · localStorage setItem:je_sp
- `tabGo(v)` · entrada desde el menú de secciones: pone `SUBP` (primera visible: c, s o m según `tabVis`) o `SUBE='s'` y llama a `go`; las redirecciones usan `go` directamente (respetan su sub-pestaña) · → tabVis,go
- `go(v)` · localStorage setItem:je_v · traduce ids antiguos con `TABMAP` (fija `SUBP`/`SUBE`) · → render
- `subTabs(g,l,c)` · fila de sub-pestañas (`g` p/e, lista `[id,texto]`, actual `c`) · `subGo(g,k)` · cambia `SUBP`/`SUBE` y repinta · → render
- `selPlanet(id)` · localStorage setItem:je_sp · → render

## ui-views.js
- `aR(a,r)` · antepone la acción al motivo de un botón deshabilitado («Encolar nivel 3 · Requiere Almacén 2»); '' si no hay motivo; helper declarado junto a `DW`
- `queueView()` · S.cs,S.tech,S.mis,S.rk · p.q,p.b,p.rr,p.rq,p.sq,p.bq,p.sqq · → goTo,mTx,spTx,exTx
- `raidView()` · S.fleet,S.mis,S.tech,S.ru,S.rk,S.wr,S.rd,S.tr · «Contraataque X %» por puesto con `semC(cp,20,40)` y botón `dpEx` · desgaste del planeta con color (`semC(wp,10,30)`: verde <10 %, amarillo <30 %, rojo) · → fmtT,planet,need,exOpen,openRaid,rdTy,rdN,wrP,rdDef,semC,cxPct,cxN,dpEx
- `portView(p)` · sub-pestañas Colonización (`mapView`), Saqueos (`raidView`) y Misiones en curso (`missionsView`); cada una solo si `tabVis` lo permite (Misiones, siempre) · `empireView(p)` · sub-pestañas Estadísticas (`statsView`), Eventos (`histView`), Comercio (`tradeView`) y Colas (`queueView`) · → tabVis,subTabs,histView,rcEx
- `view(p)` · pestañas Colonia (Arca solo en el Hogar; «Pedir suministros»/rutas y «Abandonar colonia» arriba), Laboratorio (bloque colapsable «Investigaciones»), Astillero, Puerto (`portView`) e Imperio (`empireView`) · S.tech,S.cs,S.fleet,S.mis,S.net,S.u,S.known · p.q,p.b,p.rr,p.rq,p.sq,p.dm · → infoB,infoT,arkBtn,arkDone,cost,fmt,fmtT,prod,reqTxt,trq,shUn,shUnT,tabVis,tabAct,repC,maxL,icon,bic,planet,card,slots,build,qBlock,bqList,sqList,research,ship,repair,cancelRR,rrCard,cancelB,cancelR,cancelS,need,send,selPlanet,comm,tin,tmax,trade,abandon,dsEx,cvOpen,exOpen,spEx,dbEx,rcEx

## render.js
- `render()` · S.cs · p.nj · el menú de secciones llama a `tabGo` · → tabVis,tabAct,warn,planet,orb,rfCard,selPlanet,openBk,openObj,load,logout,view,arkIc
- `tick(skip)` · S.sh · p.rb,p.st,p.b · → warnP,lv,afford,fmt,fmtT,rbT,defRed,advance,obReady,avSet
- `avTx(s)` · texto corto de un tiempo (45 s, 3 min, 2 h) · `avSet(b,c,p)` · añade « · en X» / «Sube el Almacén» / «Sin producción» al botón deshabilitado por recursos (solo `build`, `research`, `ship`, sin hijos); guarda el texto original en `data-t0` y lo restaura al poder pagar · → avT,avTx

## main.js
- (arranque) setInterval(()=>tick(),1000);
- (arranque) setInterval(()=>{if(dirty)save()},15000);
- (arranque) document.addEventListener('visibilitychange',()=>{if(documen… (oculta: guarda si dirty; visible: seBack)
- (arranque) setInterval(()=>{if(!document.hidden)seCheck()},20000);
- (arranque) render();
- (arranque) if(code)load(code);

## test/smoke.html (herramienta aparte; no es un módulo ni entra en `MODS`)
- (script inline) `run()` · abre `../index.html` en un iframe, anula `fetch`/`save`/`seClaim`/`seCheck`/`checkNew`/`autoBackup` dentro de él, inyecta el JSON elegido en `S` (`prep`, `norm` por colonia, `advance`) y recorre colonias × pestañas (`selPlanet`, `go`, `tick`) y el modal `openObj` · localStorage: guarda, borra y restaura `je_code`,`je_v`,`je_sp` · informa de errores de JS, pestañas vacías y textos con undefined/NaN

## tools/strips.html, strips2.html y convert.html (herramientas aparte; no son módulos ni entran en `MODS`)
- `strips.html` · arrastras las variantes (1.png, 2.png…) de UN edificio y descarga la tira `<id>.webp` (cada variante recortada al centro a 128×128, en orden alfabético del nombre) · no toca el juego ni localStorage
- `strips2.html` · arrastras UNA imagen y genera N variantes (2-5) con filtros de canvas (brillo, saturación, contraste y resplandor, de menos a más; slider de diferencia) y descarga la tira `<id>.webp` · no toca el juego ni localStorage
- `convert.html` · arrastras varias imágenes y las convierte a WebP 128×128 (recorte cuadrado al centro); un campo de nombre por imagen (el id) y descarga individual o de todas · no toca el juego ni localStorage
