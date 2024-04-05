---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-82399.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-82399/","title":"¿Cómo solucionar el desbordamiento del contenido en un div?","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.354-06:00","updated":"2024-04-05T16:43:51.532-06:00"}
---

# ¿Cómo solucionar el desbordamiento del contenido en un div?

Considerando los detalles agregados recientemente a la pregunta, en lugar de usar `overflow` lo que se require es ajustar el tamaño del div para evitar el desbordamiento, pero esto no se puede hacer directamente, lo primero sería "quebrar" la "palabra"

En CSS el atributo para ajustar cadenas de texto es `word-wrap`. En este caso, la cadena no tiene espacios en blanco por lo que se considera que la cadena es una palabra, entonces deberemos usar `word-wrap: word-break`.

Como se indica en la [respuesta][1] de Gustavo García, si se desea que el div crezca verticalmente no deberían usarse un valor fijo para `height`. Existen varias alternativas, una de tantas es usar `height: auto` para ajustar automáticamente el tamaño.

Quedaría de la siguiente forma:

<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-css -->

    div {
      background:red;
      width: 100px;
      /* Control de la altura con base en el texto del div*/
      height: auto;
      word-wrap: break-word;
    }

<!-- language: lang-html -->

    <div>holaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</div>

<!-- end snippet -->

<hr>
> Respuesta a con base en la revisión 1

Agrega `overflow: hidden;`  Puedes consultar la documentación en [overflow][2].

Ejemplo


<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-css -->

    div {
      overflow: hidden;
      background:red;
      height: 100px;
      width: 100px;
    }

<!-- language: lang-html -->

    <div>holaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</div>

<!-- end snippet -->


  [1]: https://es.stackoverflow.com/a/82480/65
  [2]: https://developer.mozilla.org/es/docs/Web/CSS/overflow

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/82399\|https://es.stackoverflow.com/q/82399]]

