# BACKLOG (ideas sin decidir; no se implementan hasta pedirlo)

- Formato: `idea — módulos probables — riesgo`.
- Observación: el sprite no tiene fila para la mina de metal; hoy usa icono SVG. Sin cambios hasta que se pida.
- Las descripciones de Bodegas de carga, Armamento y Blindaje de campaña (data.js) siguen hablando solo de corsarios aunque ahora afectan a todos los modelos — data — riesgo: solo texto de reglas.
- Pasar a `semC` otros colores escritos a mano que puedan existir (rebelión, escudo, preaviso, % de éxito de explorar/colonizar…); no se han revisado — ui-views, ui-core, render — riesgo: solo visual, pero cambiaría tonos si no coinciden.
- `strip()` (ui-core) no tiene texto para las misiones de suministros (`k:'s'`): en la franja de misiones saldrían como «undefined …»; verificar en el juego — ui-core — riesgo bajo, solo texto.
- El modal de información (`info.js`) copia a mano cifras de reglas que no tienen función en rules.js: preaviso de la Estación de vigilancia (8 % por nivel, de la descripción de data.js; `warnP` está en events.js y no se ha comparado), carga de los Convoyes (500 / 1.500 / 3.000, como `cvMax`) y los porcentajes por nivel de Universidad, Fábrica de drones, Murallas, Torretas y Puerto. Si cambia una de esas reglas hay que cambiar también `INEB`/`INET` — info — riesgo: solo texto, pero puede quedar desfasado.
