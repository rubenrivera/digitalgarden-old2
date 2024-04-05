---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-333966.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-333966/","title":"Obtener una propiedad de un arreglo","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.627-06:00","updated":"2024-04-05T16:43:56.537-06:00"}
---

# Obtener una propiedad de un arreglo

No es conveniente usar `i` como nombre de la variable en un `for(variable in objeto)` porque esto lleva a pensar que `i` sería un **índice** como en `for(var i = 0; i < n; i++)` cuando lo que se asigna a `variable` es el nombre de una propiedad de `objeto`. Mejor usa `p` por propiedad.

Tampoco es conveniente usar `for..in` para iterar a través de los miembros de un objeto tipo Array, nuevamente porque es usual que lleve a confusiones.

Asumiendo que `datos` es un objeto de tipo Array, en lugar de `for..in` usa `Array.prototype.forEach()`

Ejemplo:

<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-js -->
    
    var  datos = [
    {num_ot:1},
    {num_ot:2}
    ]
    datos.forEach(dato => console.log(dato.num_ot));

<!-- end snippet -->

- https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/for...in
- https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/forEach

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/333966\|https://es.stackoverflow.com/q/333966]]

