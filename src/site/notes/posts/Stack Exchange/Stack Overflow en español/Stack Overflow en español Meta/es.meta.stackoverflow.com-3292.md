---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/Stack Overflow en español Meta/es.meta.stackoverflow.com-3292.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/stack-overflow-en-espanol-meta/es-meta-stackoverflow-com-3292/","title":"¿Qué es Stack Snippet?","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.374-06:00","updated":"2024-04-05T16:44:02.706-06:00"}
---

# ¿Qué es Stack Snippet?

Adaptación de [Feedback requested: Runnable code snippets in questions and answers](https://meta.stackoverflow.com/q/269753/1595451)
# ¿Qué es lo que Stack Snippets hace? #

**Stack Snippets hace ejecutables los bloques de código.** A continuación un ejemplo:

<!-- Begin snippet: js -->

<!-- language: lang-js -->

    alert("Pueden mostrar alertas");

<!-- language: lang-css -->

    .hello {
      font-weight: bold;
      font-size: 1.5em;
    }

<!-- language: lang-html -->

    <div class="hello">Stack Snippets permiten hacer ejecutable el código.</div>

<!-- end snippet -->


# ¿Qué es lo que soportan? #

Stack Snippets funcionan tanto en preguntas como en respuestas. Los lenguajes soportados son los siguientes:

 - **HTML**
 - **CSS**
 - **JavaScript**

Puedes combinar estos tres lenguajes a tu gusto para crear código ejecutable para que otros lo prueben. El objetivo de esta característica es animar a los usuarios a crear código mínimamente viable y funcional cuando realicen preguntas centradas en el código. Las respuestas pueden ser en la forma de un stack snippet que ha resuelto la pregunta en cuestión. Esperamos que Stack Snippets permita a las personas no tener que ir a otros sitios web para producir código ejecutable.

Eventualmente, esperamos extender esto a otros lenguajes, pero empezamos con estos porque son fáciles de realizar en el navegador.

# ¿Cómo hago un stack snippet? #

En la ventana del editor Markdown, verás un botón en el que puedes hacer clic para lanzar el editor Stack Snippets.

[![Barra de herramientas del editor de Markdown][1]][1]

El editor se mostrará en una vista de ventana-completa y permitirá la escritura de código HTML, CSS y JavaScript. Puedes usar cualquiera de ellos (debes usar al menos uno).

[![Pantalla completa del editor de Stack Snippets][2]][2]

Cuando termines, presiona **Guardar e Insertar** en la parte superior para insertar tu stack snippet en el texto Markdown. Será insertado como bloques de código Markdown regulares, más algunos comentarios que no se procesan, de tal forma que son compatibles con el historial de revisiones, Markdown paralelo, etc. Incluso puedes editar el código directo en el texto Markdown, en lugar de tener que hacerlo en el editor de pantalla-completa.

[![Haz el Markdown por mí][3]][3]

# ¿Por qué? #

Todas las preguntas son mejores por tener *código mínimo, reproducible*. Anteriormente, la mejor forma de decirle a la gente que lo haga era dirigirlos a [JSFiddle][4], lo cual está fuera del sitio. Usando esta característica, alentamos a los nuevos autores para incrustar código ejecutable que reproduce su problema.

De igual forma, las respuestas que incluyan código ejecutable son más fáciles de usar y comprender, porque puedes probarlas. Obviamente JSFiddle es muy popular en las respuestas, por lo que solo queríamos que sea aún más fácil de usar.

Obviamente, se siguen aplicando las reglas: preguntas o respuestas de sólo código serán bloqueadas (y, de hecho, debido a cómo se implementa, todas las comprobaciones existentes *funcionarán de inmediato*).

# ¿Qué navegadores son soportados? #

Actualmente, Stack Snippets estará activo para **cualquier navegador que soporte la característica iframe sandbox de  HTML5**. Esto casi se alínea con nuestra meta de soportar 2 liberaciones atrás de la versión actual de todos los navegadores modernos con excepción de IE9. [Ver este enlace para más información.](http://caniuse.com/#feat=iframe-sandbox)

Cuando esté inactivo, Stack Snippets se mostrará como bloques de código comunes, así que el código sigue siendo parte de una pregunta o respuesta.

# Pruébalo #

[Aquí está un sandbox para probarlo](https://es.meta.stackoverflow.com/q/3293). 

Los comentarios son bienvenidos y apreciados

NOTA: Si sabes inglés has directamente los comentarios en la publicación original.

[Regresar al índice del FAQ](https://es.meta.stackoverflow.com/q/1378/)


  [1]: https://i.stack.imgur.com/0cFxz.png
  [2]: https://i.stack.imgur.com/3WJvW.png
  [3]: https://i.stack.imgur.com/EOoqg.png
  [4]: http://jsfiddle.net/

# Metadata
Source:: Stack Overflow Meta en español
URL:: [[https://es.meta.stackoverflow.com/q/3292\|https://es.meta.stackoverflow.com/q/3292]]

