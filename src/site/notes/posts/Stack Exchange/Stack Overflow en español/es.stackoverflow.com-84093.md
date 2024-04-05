---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-84093.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-84093/","title":"Cambiar letras de un html con funcion replace()","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.354-06:00","updated":"2024-04-05T16:43:51.642-06:00"}
---

# Cambiar letras de un html con funcion replace()

> Hay alguna manera de comprobar o evitar que una letra se cambie 2 veces en un solo evento?

[replace][1] es una función de JavaScript que puede usarse con o sin jQuery. Lo estás usando con el flag `g` el cual hace el "emparajamiento global" es decir te cambia todas las coincidencias. Si sólo quieres cambiar la primera, quita ese flag.

A continuación un ejemplo.

Se incluye dos veces la secuencia A,B,C usando como separador saltos de línea en una etiqueta `pre`. Al hacer clic en el botón `Cambiar` se reemplaza la primera `A` por `D` mediante el uso de `replace`. Si se vuelve a hacer clic, la primera `A` será ahora la de la segunda secuencia y esta será reemplazada por `D`.

No se hace uso de jQuery pues no hace falta. Véase https://es.stackoverflow.com/q/82254/65

<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-js -->

    function cambiar(){
      var pre = document.querySelector('pre');
      pre.innerHTML = pre.innerHTML.replace(/A/,'D');
    }

<!-- language: lang-html -->

    <input type="button" value="Cambiar" onclick="cambiar();"/>
    <pre>
    A
    B
    C
    A
    B
    C
    </pre>

<!-- end snippet -->


  [1]: https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String/replace

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/84093\|https://es.stackoverflow.com/q/84093]]

