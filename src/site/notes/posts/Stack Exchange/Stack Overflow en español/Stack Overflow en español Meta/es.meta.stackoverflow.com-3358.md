---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/Stack Overflow en español Meta/es.meta.stackoverflow.com-3358.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/stack-overflow-en-espanol-meta/es-meta-stackoverflow-com-3358/","title":"¿Es válido usar Stack Snippet para código no ejecutable ya sea código HTML/CSS/JavaScript o de otros lenguajes?","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.421-06:00","updated":"2024-04-05T16:44:02.891-06:00"}
---

# ¿Es válido usar Stack Snippet para código no ejecutable ya sea código HTML/CSS/JavaScript o de otros lenguajes?

# Tl;Dr

Stack Snippet tiene tres secciones para la inserción de código una para HTML, ota para CSS y otra más para JavaScript, sin embargo, en cualquiera de ellas es posible insertar código no ejecutable e incluso de cualquier lenguaje. ¿Es válido usarlo con código no ejecutable?

# Versión extendida

Les comparto que hasta muy recientemente estaba seguro que Stack Snippet sólo debía usar para "código ejecutable" entendiendo por ello que al hacer clic en el botón "Ejecutar" debía ocurrir algo relevante a la pregunta, ya fuera un error, un mensaje en la consola del propio Stack Snippet o la interpretación del código.

<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-js -->

    console.info('¡Hola mundo!');

<!-- end snippet -->


Por lo anterior solía editar preguntas que en las que no se usaba "apropiadamente" Stack Snippet para quitarlo, pero me han dicho que mientras cualquiera de las otras características tengan utilidad, es válido usarlo.

NOTA: Lo anterior ocurrió en una [pregunta en SO](https://stackoverflow.com/q/49565283/1595451) la cual fue eliminada por el OP y los comentarios ya no están disponibles. 

Por ejemplo quitaba Stack Snippet de preguntas sobre [tag:google-apps-script] que tratan de código del lado del servidor, que si bien [tag:google-apps-script] está basado en JavaScript, el código del lado del servidor no se puede ejecutar en Stack Snippet. 

Por ejemplo, algunas funciones podría ser de utilidad para código de cualquier lenguaje:

- **Ampliar** permite ver el código a pantalla completa.
- **Copiar código a respuesta** facilitar pasar el código de la pregunta a una respuesta para luego hacer los ajustes sugeridos o agregar comentarios donde resulten pertinentes.
- **Ocultar de forma predeterminada** colapsa el código

Sin embargo no he encontrado algo **definitivo** al respecto en Meta SO. Lo más cercano a una "postura oficial" es la [respuesta de Shog9](https://meta.stackoverflow.com/a/271649/1595451) a [Stack Snippets being misused](https://meta.stackoverflow.com/q/271647/1595451) en la que menciona que tener un botón "Ejecutar" que no funciona no es el fin del mundo.

<hr>
Actualización

Recién encontré [Guideline on edits that only add/remove stack snippet](https://meta.stackoverflow.com/q/348648/1595451) en el cual se habla acerca de la revisión de ediciones que agregan o quitan Stack Snippet. La única [respuesta](https://meta.stackoverflow.com/a/348677/1595451) menciona que las ediciones que quitan Stack Snippet cuando el código no es ejecutable deberían ser aprobadas.

<hr>
Otra actualización  

Recien encontre [How do I make a good edit](https://meta.stackoverflow.com/q/303219/1595451) el cual está etiquetado con `faq-proposed` así que no se puede considerar como "oficial". En la [respuesta][1] sobre Stack Snippets dice textualmente:

> Don't use Stack Snippets for code that isn't client-side HTML/CSS/JS
Stack Snippets are for directly browser-runnable code, nothing else. At present, that's a pretty limited set. For everything else, stick with the normal code formatting. If you see a post that wrongly uses Snippet markdown, see if there's anything else to fix to make the edit worthwhile.

Básicamente dice que sólo debe usarse Stack Snippets para código del lado del cliente ejecutable en el navegador, para nada más. Dicho sea de paso coincide con la [respuesta][2] de Mariano.

Relacionado

- https://es.meta.stackoverflow.com/q/3240/65


  [1]: https://meta.stackoverflow.com/a/303220/1595451
  [2]: https://es.meta.stackoverflow.com/a/3359/65

# Metadata
Source:: Stack Overflow Meta en español
URL:: [[https://es.meta.stackoverflow.com/q/3358\|https://es.meta.stackoverflow.com/q/3358]]

