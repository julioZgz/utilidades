/* info.js — Modal de información de edificios e investigaciones (la ⓘ de las tarjetas de Colonia y Laboratorio): imagen grande, texto largo, qué da y qué desbloquea el nivel actual y el siguiente. infoB(k) / infoT(k).
 * Lee: S, P(SP), B, T, SH y las fórmulas de rules (prod, rbT, capK, maxL, RQ, trq, lv). Escribe: nada.
 * NO debe: mutar S, tocar colas, guardado ni fórmulas. Los textos largos (INLB, INLT) son solo ambientación; las cifras salen de rules o de las descripciones de data. Se cierra con closeM(). */
const INLB={z:'Todo asentamiento empieza con una sala sin ventanas y un puñado de pantallas que nadie se atreve a apagar. Desde el Centro de mando se reparten los turnos, se vigilan los suministros y se decide qué se construye primero. Cuanto más crece, más lejos puede mirar la colonia sin perder el rumbo.',
m:'Los primeros colonos aprendieron pronto que el cielo no regala nada y que el metal duerme bajo el polvo. Taladros, cintas y turnos sin descanso arrancan al planeta el hierro con el que se levanta todo lo demás. Cada nivel es un pozo más hondo y una cuadrilla más grande.',
c:'En las vetas profundas el cristal crece en silencio durante millones de años, frío y cargado de luz atrapada. Extraerlo exige paciencia y manos finas: un golpe de más y la veta se hace polvo. De él salen los circuitos, las lentes y casi toda la tecnología que se resiste a ser de metal.',
g:'Bajo la corteza, las bolsas de gas esperan una grieta por la que escapar. Los extractores las perforan, las comprimen y las envían a los depósitos, donde alimentarán motores, reactores y laboratorios. Es un trabajo silbante, inestable e imprescindible.',
a:'Producir no sirve de nada si no hay dónde guardar. Los almacenes son naves enormes de hormigón y acero, con grúas que nunca duermen y un inventario que nadie termina de contar. Cada nivel amplía los muelles y deja crecer la ambición de la colonia.',
s:'En la dársena, entre andamios y chispas de soldadura, nace todo lo que cruza el vacío. Un explorador es apenas un casco y unas lentes; un acorazado, una promesa de hierro. Cuanto más avanzado es el astillero, más pesadas y más extrañas son las naves que salen de él.',
l:'Bajo una luz blanca y con un zumbido constante, un equipo de científicos discute en voz baja lo que aún no sabe. El laboratorio convierte cristal, gas y paciencia en conocimiento. Su nivel marca hasta dónde llega la ciencia de esta colonia.',
u:'Aulas, bibliotecas y una cafetería siempre llena. La Universidad forma a quienes dirigirán las obras, afinarán las máquinas y harán las preguntas incómodas. Una colonia que enseña termina haciéndolo todo más rápido y mejor.',
h:'Largas pistas y grúas magnéticas esperan a las naves de carga que unirán esta colonia con las demás. Con la tecnología Redes de transporte, lo que se produce aquí deja de ser solo de aquí y pasa a la despensa común del imperio. Es el primer paso para dejar de sentirse solo.',
o:'Música, juegos, un cine con asientos que no encajan y partidos improvisados en la cantina. Una colonia cansada es una colonia peligrosa, y el ocio es la válvula por la que escapa la presión. Cada nivel trae risas que ninguna mina puede dar.',
k:'Un trozo de verde en mitad del metal: árboles que nadie debería poder cultivar aquí, bancos, el murmullo de un riachuelo artificial. Los colonos pasean por él sin hablar de trabajo. Es barato y funciona: la rebelión baja cuando alguien puede sentarse bajo un árbol.',
w:'Piedra, acero y un poco de orgullo. Las Murallas no detienen a un ejército, pero hacen que el primer asalto cueste caro y que los rebeldes se lo piensen dos veces. Cada nivel es un tramo más alto y más grueso.',
t:'Sobre las murallas, ojos fríos giran en busca de movimiento. Las torretas disparan antes de que nadie dé la orden y no se cansan ni dudan. Quien las ha visto actuar prefiere negociar.',
p:'Cada mercader que atraca trae noticias, caprichos y monedas de otros mundos. El Puerto comercial ofrece muelles, tabernas y precios que regatear. Con más muelles llegan más visitas, y menos refugiados a la deriva.',
d:'Pequeñas máquinas con alas o con patas, ensambladas por otras máquinas, que reparan, transportan y vigilan sin cobrar. La Fábrica de drones acorta las obras y aprieta la producción. Los colonos las llaman «las abejas» y ya no saben vivir sin ellas.',
v:'Un mástil, un radar y operadores que miran al cielo y a los instrumentos a la vez. La Estación escucha las tormentas antes de que lleguen y avisa de rocas que aún son un punto en la oscuridad. Cuando suena la alarma, la colonia ya está a cubierto.',
r:'Un arco de metal oscuro que se abre sobre la nada. Dicen que atraviesa el espacio hasta el Arca, la obra más grande que ha emprendido tu gente. Quien lo cruza con la mirada siente que todo lo vivido hasta ahora ha sido preparación.'};
const INLT={p:'Cada generación de motores acorta el vacío entre mundos. Los ingenieros hablan de empuje y de eficiencia; los pilotos, de volver antes a casa.',
c:'Fundar un mundo exige más que una nave: manuales, semillas, voluntarios y mucha suerte. Los equipos de colonización aprenden de cada fracaso, y los fracasos en el espacio salen caros.',
m:'Una nave sola es una apuesta; una flota, un plan. Con protocolos comunes y rutas que no se cruzan, tu imperio sostiene varias misiones a la vez sin que se estorben.',
n:'Raíles, esclusas y convoyes automáticos tejen una red invisible entre colonias. Lo que cae en un almacén queda a disposición de todos, y la distancia deja de ser excusa.',
x:'Regatear es un arte con teoría. Tus agentes aprenden cuándo ceder, cuándo callar y cuándo levantarse de la mesa. Los mercaderes siguen quedándose su parte, pero cada vez más pequeña.',
d:'Cálculo de cargas, ángulos de tiro, materiales que aguantan impactos. Esta ciencia permite que Murallas y Torretas crezcan hasta alturas que antes eran impensables.',
l:'Quien sabe de logística gana guerras sin disparar. Inventarios, rutas, turnos y estibas: con mejores métodos, los almacenes y las fábricas de drones alcanzan niveles que antes se desbordaban, y el control de las colas llega con el primer nivel.',
y:'Tu gente estudia la guerra a regañadientes, porque la necesidad lo ha pedido. Formaciones, señuelos, retiradas a tiempo. Con ellas se abre la posibilidad de saquear los puestos rivales.',
q:'Hojas de ruta, calendarios y reuniones que alargan el día. Planificar con antelación permite tener obras y naves en espera, listas para ocupar un hueco en cuanto aparezca.',
e:'Pequeñas mejoras que nadie aplaude: una válvula mejor ajustada, una cinta que no se atasca, un turno reorganizado. Sumadas, hacen que cada mina produzca más con lo mismo.',
b:'Rediseñar bodegas es un rompecabezas de palancas y bisagras. Cada ajuste libera espacio para un poco más de botín, sea cual sea el casco que lo transporta.',
a:'Cañones más precisos, cargas mejor contenidas, objetivos más claros. El armamento no cambia el valor de las tripulaciones, pero les da más razones para volver a casa.',
f:'Placas, redundancias y mamparos que se cierran solos. Cuando todo sale mal, el blindaje hace que menos naves se queden en el camino.',
r:'Un planeta saqueado se pone en guardia. Con rutas variadas, horarios cambiantes y atajos que solo conocen tus capitanes, el desgaste del botín se suaviza.',
v:'El casco de un acorazado es una ciudad con motores. Reunir en un solo diseño lo mejor de las bodegas, el armamento y el blindaje exigió años de pruebas. El resultado es la nave más temible de tu flota.',
i:'Los primeros colonos llegaban con lo puesto. Con convoyes, la colonia nueva nace con provisiones, herramientas y un colchón para los primeros días, que son los más duros.',
h:'Una colonia sana repara antes de que algo se rompa. Los equipos de mantenimiento llevan sus herramientas a todas partes y ya saben de memoria dónde fallan las cosas.',
s:'Sensores silenciosos, mapas robados y un par de infiltrados con buena memoria. El espionaje aumenta la probabilidad de que un explorador vuelva con información, hace más frecuentes los hallazgos en ruta y reduce el riesgo de piratas.'};
/* Qué da cada nivel L de un edificio: (L,p,q) con q = copia de la colonia con ese edificio a nivel L. Las cifras por nivel de los edificios sin fórmula en rules salen de sus descripciones en data.js. */
const infN=x=>String(+x.toFixed(2)).replace('.',','),infS=L=>Math.round(100*(1-1/(1+.15*L))),infQ=(p,k,L)=>({...p,b:{...p.b,[k]:L},dm:(p.dm||[]).filter(x=>x!==k)});
const infM=k=>(L,p,q)=>{const r=prod(q,IDX[k]);return `Produce ${infN(r)}/s (${fmt(r*3600)}/h). Tendencia de rebelión del planeta: ${infN(rbT(q))} %.`};
const INEB={z:L=>`Los demás edificios (salvo Ocio y Parque) pueden llegar al nivel ${L+2}.`,m:infM('m'),c:infM('c'),g:infM('g'),
a:(L,p,q)=>`Capacidad de la colonia: ${fmt(capK(q,'m'))} de metal, ${fmt(capK(q,'c'))} de cristal y ${fmt(capK(q,'g'))} de gas.`,
s:L=>`Puede construir: ${Object.keys(SH).filter(t=>SH[t].s<=L).map(t=>SH[t].n).join(', ')}. Naves un ${infS(L)} % más rápidas de construir.`,
l:L=>`Permite investigar tecnologías hasta el nivel ${L}; investigaciones un ${infS(L)} % más rápidas.`,
u:L=>`Producción +${5*L} % y tiempos de obras, investigaciones y naves un ${8*L} % más rápidos (se suma a la Fábrica de drones).`,
d:L=>`Producción +${5*L} % y tiempos de obras, investigaciones y naves un ${8*L} % más rápidos (se suma a la Universidad).`,
h:()=>'Puede unirse a la red de recursos compartidos (requiere la tecnología Redes de transporte).',
o:L=>`−${4*L} de rebelión hacia la que tiende el planeta.`,k:L=>`−${4*L} de rebelión hacia la que tiende el planeta.`,
w:L=>`−${4*L} % de probabilidad de que los rebeldes ganen un ataque (con las Torretas, máx. 90 %).`,t:L=>`−${6*L} % de probabilidad de que los rebeldes ganen un ataque (con las Murallas, máx. 90 %).`,
p:L=>`Visitas ${15*L} % más frecuentes, ${5*L} % más de lo que dejan los mercaderes y menos refugiados.`,
v:L=>`Preaviso del ${8*L} % de los eventos de este planeta (la tormenta dura la mitad y el meteorito no hace daño).`,
r:()=>'+10 % de producción y −10 de rebelión hacia la que tiende el planeta (con el Arca completa).'};
/* Qué da cada nivel L de una tecnología. */
const INET={p:L=>`Alcance hasta distancia ${2+2*L}`+(L?`; viajes un ${25*L} % más rápidos.`:'.'),
c:L=>`Hasta ${1+L} colonia${L?'s':''}. Éxito de cada colonizador: ${40+8*L} % base, ajustado por la dificultad del planeta.`,
m:L=>`Hasta ${1+L} ${L?'misiones simultáneas':'misión simultánea'}.`,
n:L=>L?'Los planetas con Hangar de transporte pueden unirse a la red de recursos compartidos.':'',
x:L=>`Comisión de los mercaderes: ${20-3*L} %.`,
d:L=>`Murallas y Torretas láser pueden llegar al nivel ${2*L}.`,
l:L=>`Almacén y Fábrica de drones pueden llegar al nivel ${2*L}.`,
y:L=>L?'Puedes saquear puestos rivales.':'',
q:L=>`${1+L} hueco${L?'s':''} en las colas de obras y de naves de cada planeta.`,
e:L=>`+${10*L} % de producción en todas las minas.`,
b:L=>`+${25*L} % de capacidad de carga de las naves de saqueo.`,
a:L=>`+${10*L} % de poder de ataque en saqueos.`,
f:L=>`−${20*L} % de naves perdidas en un saqueo fallido.`,
r:L=>`Desgaste del botín por saqueo: ×${infN(.85+.03*L)}.`,
v:L=>L?'Puedes construir el Acorazado (requiere Astillero de nivel 4).':'',
i:L=>L?`Cada colonizador puede llevar hasta ${fmt([0,500,1500,3000][L])} de cada recurso.`:'',
h:L=>`Reparaciones un ${15*L} % más rápidas.`,
s:L=>`Éxito de cada explorador: ${50+8*L} % base. Hallazgos al explorar con éxito: ${10+3*L} % (de ellos, ${25-3*L} % son piratas).`};
/* Qué desbloquea alcanzar el nivel L de una tecnología ('' si nada). */
const INUT={p:L=>(L===1?'La sección Colonización del Puerto. ':'')+`Planetas a distancia ${2*L+1}-${2*L+2}.`+(L%2===0&&L<=6?` Junto a Colonización ${L}, Convoyes de colonización nivel ${L/2}.`:''),
c:L=>L%2===0&&L<=6?`Junto a Propulsión ${L}, Convoyes de colonización nivel ${L/2}.`:'',
n:L=>L===1?'Los Hangares pueden conectar colonias a la red.':'',
x:L=>L===1?'La sección Comercio de Imperio.':'',
d:L=>`Murallas y Torretas láser, niveles ${2*L-1}-${2*L}.`,
l:L=>`Almacén y Fábrica de drones, niveles ${2*L-1}-${2*L}.`+(L===1?' Y la sección Colas de Imperio.':''),
y:L=>L===1?'La sección Saqueos del Puerto.':'',
v:L=>L===1?'El Acorazado (con Astillero de nivel 4).':'',
b:L=>L===5?'Cuenta para Ingeniería naval.':'',a:L=>L===5?'Cuenta para Ingeniería naval.':'',
f:L=>L===3?'Cuenta para Ingeniería naval.':'',r:L=>L===3?'Cuenta para Ingeniería naval.':''};
/* Qué desbloquea el nivel L de un edificio: recorre los requisitos (RQ) del resto de edificios y apunta los que pasan de no cumplirse a cumplirse al subir de L-1 a L. */
function infoUnB(p,k,L){if(L<1||k==='z')return'';const pf=B[k].n+' ',b0={...p.b,[k]:L-1},b1={...p.b,[k]:L},g={};
for(const j in B){if(j===k||j==='r')continue;const lim=maxL(p,j),ts=[];for(let t=1;t<=lim;t++)if(RQ(p,j,t,b0).some(x=>x.startsWith(pf))&&!RQ(p,j,t,b1).some(x=>x.startsWith(pf)))ts.push(t);
if(ts.length){const r=ts.length===lim&&lim>1?'todos los niveles':ts.length>1?`niveles ${ts[0]}-${ts[ts.length-1]}`:`nivel ${ts[0]}`;(g[r]=g[r]||[]).push(B[j].n)}}
return Object.entries(g).map(([r,a])=>`${a.join(', ')}: ${r}`).join(' · ')}
const infoBox=(t,d,u,r)=>`<div style="border-top:1px solid var(--ln);margin-top:10px;padding-top:6px"><b>${t}</b><p>${d}</p><p>🔓 ${u||'Nada nuevo.'}</p>${r?`<p>🔒 Para subirlo: ${r}</p>`:''}</div>`;
function infoOpen(img,name,sub,lore,sum,boxes){const m=$('#md');m.style.display='flex';
m.innerHTML=`<div class=card style="width:100%;max-width:420px;max-height:85vh;overflow:auto"><div class=big>${img}</div><div style="text-align:center"><b style="font-size:18px">${name}</b><div class=st>${sub}</div></div><p style="color:var(--tx);line-height:1.5;margin:10px 0 6px">${lore}</p><p class=st style="margin:0">${sum}</p>${boxes}<button class=go style="margin-top:12px" onclick="closeM()">Cerrar</button></div>`;m.firstChild.scrollTop=0}
function infoB(k){const p=P(SP);if(!p||!B[k])return;const L=p.b[k],mx=maxL(p,k),dm=p.dm&&p.dm.includes(k),eff=l=>l||'zacmg'.includes(k)?INEB[k](l,p,infQ(p,k,l)):'Aún sin efecto.';
let h=infoBox(`Nivel actual (${L})`,(dm?'⚠ Dañado: no funciona hasta que lo repares. ':'')+eff(L),infoUnB(p,k,L));
h+=L<mx?infoBox(`Nivel siguiente (${L+1})`,eff(L+1),infoUnB(p,k,L+1),RQ(p,k,L+1).join(', ')):'<p class=st style="margin-top:10px">Nivel máximo en este planeta.</p>';
infoOpen(bic(k,L,dm),B[k].n,`Nivel ${L}/${mx} · ${U(p.id).name}`,INLB[k]||'',B[k].d+reqTxt(k),h)}
function infoT(k){const p=P(SP),L=S.tech[k],mx=T[k].max,eff=l=>l||'pcmqxrs'.includes(k)?INET[k](l)||'Aún sin efecto.':'Aún sin efecto.',un=l=>l<1||!INUT[k]?'':INUT[k](l);
let h=infoBox(`Nivel actual (${L})`,eff(L),un(L));
if(L<mx){const nl=k==='h'?Math.max(3,L+1):L+1,lb=lv(p,'l');h+=infoBox(`Nivel siguiente (${L+1})`,eff(L+1),un(L+1),[lb<nl?`Laboratorio nivel ${nl} (tienes ${lb})`:'',trq(k,L).replace(/^Requiere /,'')].filter(Boolean).join(' · '))}
else h+='<p class=st style="margin-top:10px">Nivel máximo.</p>';
infoOpen(tic(k),T[k].n,`Nivel ${L}/${mx}`,INLT[k]||'',T[k].d,h)}
