---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-327743.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-327743/","title":"¿Cómo puedo separar una cadena de texto en dos partes con JavaScript?","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.627-06:00","updated":"2024-04-05T16:43:56.518-06:00"}
---

# ¿Cómo puedo separar una cadena de texto en dos partes con JavaScript?

Hay muchas formas de separar un string en dos partes, quizás la más simple es usar `split` y otra complicada para los que aún no se familiarizan con esta es el usar expresiones regulares.

1. Usar `split`

<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-js -->

    var dato= "hola a todos-cómo están";

    console.info(dato.split('-'));

<!-- end snippet -->

`split` devuelve un Array donde cada elemento corresponde a una parte

2. Usar expresiones regulares y `exec`

<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-js -->

    var dato= "hola a todos-cómo están";
    var re = new RegExp ("(^.*?)-(.*)$");
    console.info(re.exec(dato))

<!-- end snippet -->

`exec` devuelve un `Array` donde el primer element es la cadena que coincide con la expresión y los elementos siguientes corresponden a cada grupo de captura.

Si estas familiarizado con el manejo de Arrays el asignar cada parte resultaría trivial y posiblemente hasta innecesario.

Referencias

- https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String/split
- https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/RegExp




# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/327743\|https://es.stackoverflow.com/q/327743]]

