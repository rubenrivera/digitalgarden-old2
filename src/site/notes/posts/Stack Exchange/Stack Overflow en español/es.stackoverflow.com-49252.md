---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-49252.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-49252/","title":"¿Como agregar una diagonal despues de otra, de manera automatizada?","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.727-06:00","updated":"2024-04-05T16:43:49.123-06:00"}
---

# ¿Como agregar una diagonal despues de otra, de manera automatizada?

Para agregar una `/`(diagonal) despues de otra, de manera automatizada usa [Expresiones Regulares][1]. Por tratarse de un caracter especial, deberás escaparlo anteponiendo `\`, es decir deberás usar `\/`. Además deberás usar el parámetro `g`, búsqueda global.

Ejemplo

<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-js -->

    var URL = "http://es.stackoverflow.com/tags";
    var re = /\//g;
    var resultado = URL.replace(re,'//');
    console.log(resultado);

<!-- end snippet -->


  [1]: https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/49252\|https://es.stackoverflow.com/q/49252]]

