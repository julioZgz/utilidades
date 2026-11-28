NAVES img/ships:

Flat vector game icon, single centered object, bold simple shapes, soft rim light from top-left, subtle glow, limited palette of deep navy, steel blue and warm amber (#e8a86a) with small cyan accents, dark navy background (#111c31), no text, no border, no extra objects, readable at 34 px, square 1:1

Id	Nave	Qué es en el juego	Motivo
e	Explorador	Revela planetas; se gasta al llegar	small sleek scout spaceship with a long thin nose and a glowing cyan sensor dish, top-down three-quarter view
c	Colonizador	Funda colonias	bulky rounded colony ship with a large domed habitat module on its back and landing legs
r	Corsario	Nave de combate básica (poder 1)	small agile fighter spaceship with swept wings and a single front cannon, amber accents
f	Fragata	Combate pesado (poder 2, menos carga)	medium warship with armored hull, twin side cannons and a broad stern with engines
k	Carguero	Casi sin combate, mucha carga (800)	wide boxy freighter spaceship with large stacked cargo containers clamped to its hull, weak engines
a	Acorazado	La más poderosa (poder 4)	huge battleship with thick armor plating, multiple turrets along the hull and a glowing amber reactor core
s	Nave de suministros	Lleva recursos entre colonias	medium transport ship with three glowing resource tanks (amber, cyan, violet) mounted along its sides


TECNOLOGIAS img/researchs:

Flat vector game icon, single centered object, bold simple shapes, soft rim light from top-left, subtle glow, limited palette of deep navy, steel blue and warm amber (#e8a86a) with small cyan accents, dark navy background (#111c31), no text, no border, no extra objects, readable at 34 px, square 1:1

Id	Investigación	Motivo
p	Propulsión	rocket engine nozzle with a bright amber flame trail
c	Colonización	small domed habitat on a barren planet surface with a flag
m	Flotas coordinadas	three small spaceships flying in tight V formation
n	Redes de transporte	three glowing nodes connected by lines in a triangle
x	Tácticas comerciales	gold coin with a small cargo crate beside it
d	Ingeniería defensiva	stone fortress wall with a glowing energy shield arc over it
l	Logística	cargo truck-ship carrying stacked containers
y	Tácticas de combate	two crossed energy swords over a small target reticle
q	Planificación	holographic checklist panel with three rows and a stylus
e	Eficiencia	lightning bolt inside a gear
b	Bodegas de carga	open cargo bay of a spaceship with glowing crates
a	Armamento	twin laser cannon turret firing a thin beam
f	Blindaje de campaña	thick armored plate with rivets, one dent, and a faint shield glow
r	Rutas de saqueo	curved dotted route line between two planets with a small ship on it
v	Ingeniería naval	large battleship hull blueprint on a holographic grid
i	Convoyes de colonización	small colonizer ship towing two cargo pods
h	Mantenimiento estelar	wrench and drone repairing a damaged hull panel
s	Espionaje	single eye inside a satellite dish or radar scope


EDIFICIOS  img/buildings:

variantes 1.- large, 2.- fully developed, 3.- elaborate and glowing

Flat vector game icon, single centered object, bold simple shapes, soft rim light from top-left, subtle glow, limited palette of deep navy, steel blue and warm amber (#e8a86a) with small cyan accents, dark navy background (#111c31), no text, no border, no extra objects, readable at 34 px, square 1:1

Id	Edificio	Nivel máx.	Hoy	Variantes	Motivo
z	Centro de mando	10	SVG	3	central command tower with an antenna crown on an armored base
m	Mina de metal	por planeta	SVG	3	open-pit metal mine with a drill rig and amber ore carts
c	Mina de cristal	por planeta	sprite	3	cave mine with large glowing cyan crystal clusters and a mining rig
g	Extractor de gas	por planeta	sprite	3	gas extractor with a tall tank and pipes releasing violet vapor
a	Almacén	12	sprite	3	large storage warehouse with stacked crates and wide doors
s	Astillero	8	sprite	3	shipyard dock with a rocket on a scaffold gantry
l	Laboratorio	10	sprite	3	research lab dome with glowing flasks and a rotating antenna
u	Universidad	10	SVG	3	domed academy building with a telescope and a holographic book
o	Centro de ocio	10	SVG	3	domed recreation center with a glowing star emblem
k	Parque	10	SVG	3	garden dome with trees and a bench under a glass roof
w	Murallas	10	SVG	3	defensive stone wall with watch towers
t	Torretas láser	10	SVG	3	laser turret on a base firing a thin cyan beam upward
d	Fábrica de drones	10	SVG	3	factory with a robotic arm assembling a small flying drone
v	Estación de vigilancia	10	SVG	3	observation tower with a radar dish and a warning light
p	Puerto comercial	5	SVG	2	landing pad with a cargo ship, stacked crates and a small crane
h	Hangar de transporte	1	SVG	1	wide hangar with open doors and a transport ship docked inside
r	Portal al Arca	1	SVG	1	large circular gateway ring with a glowing violet portal and a spaceship silhouette inside


Los pasos son los mismos para todo, con una pequeña variante en los edificios. Para las que ya has creado en Perchance no hay que repetir nada: solo falta pasarlas a su formato y carpeta (pasos 4 a 6).

Para cada imagen de investigación o nave

Abre el generador (perchance.org/ai-text-to-image-generator) y pega el prompt completo de prompts-imagenes.md, tal cual, sin editar la frase de estilo.
Pon formato cuadrado si el generador te deja elegir proporción. Si sale rectangular, vuelve a generar: al pasarla a 128×128 se deformaría.
Genera, elige la que mejor se lea pequeña y descárgala.
Abre Squoosh (squoosh.app) y arrastra la imagen.
Ajusta: en Resize, 128×128 (método por defecto); en Compress, WebP con calidad 85.
Descarga y renombra con su id en minúscula (p.webp, a.webp…), y cópiala a img/research/ (investigaciones) o img/ships/ (naves).

Para cada edificio (una tira con sus variantes)

Genera las variantes del mismo edificio seguidas, usando cada prompt del archivo (la variante 1 de nivel pequeño, la 2 intermedia, la 3 desarrollada). Si Perchance te permite mantener la misma semilla entre generaciones, úsala para que parezca el mismo sitio.
Descarga cada una y nómbralas 1.png, 2.png, 3.png (en ese orden; el Puerto comercial solo 2, el Hangar y el Portal solo 1).
Abre tools/strips.html en el navegador y arrastra todas las variantes del edificio a la vez.
Escribe el id del edificio en el campo (por ejemplo w) y deja la calidad en 85.
Descarga la tira y cópiala a img/buildings/ (queda como w.webp).

La página recorta cada imagen al centro y la deja a 128×128, así que aquí no necesitas pasar por Squoosh.

Para comprobar que funciona

Súbelo al repositorio y abre el juego. Si no ves las imágenes nuevas, recarga forzando la caché (Ctrl+F5) o sube BUILD.
Mira Laboratorio (investigaciones), Astillero (naves) y Colonia (edificios con niveles distintos, apagados y dañados).
Si una imagen no aparece, casi siempre es el nombre: debe ser el id exacto en minúscula, con extensión .webp, y en la carpeta correcta (research, ships o buildings).

Un detalle sobre Perchance: no he podido comprobar ahora qué opciones exactas tiene su pantalla (proporción, semilla, prompt negativo), así que si alguna no está donde te digo, ignora ese consejo. Lo que sí importa es que salga cuadrada y sin texto; si el generador mete texto o bordes, repite esa imagen.v
