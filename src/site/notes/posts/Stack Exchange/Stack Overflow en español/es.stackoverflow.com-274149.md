---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-274149.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-274149/","title":"Cómo puedo revertir el orden de una lista que genero en base a números que obtengo desde Firebase?","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.355-06:00","updated":"2024-04-05T16:43:55.452-06:00"}
---

# Cómo puedo revertir el orden de una lista que genero en base a números que obtengo desde Firebase?

Usa `Array.prototype.reverse()`

    

<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-js -->

    var lista = [1,2,3,4];
    var atsil = lista.reverse();
    console.info(atsil)

<!-- end snippet -->

`reverse` invierte el orden de los miembros de un objeto de tipo Array independientemente de sus valores

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/274149\|https://es.stackoverflow.com/q/274149]]

