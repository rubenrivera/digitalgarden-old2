---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-134881.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-134881/","title":"Nombre dinámico de variables dentro del bucle for","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.506-06:00","updated":"2024-04-05T16:43:52.860-06:00"}
---

# Nombre dinámico de variables dentro del bucle for

No es posible asignar un nombre dinámico a una variable pero podemos hacerlo a propiedades de un objeto o bien usar matrices.

Ejemplo:

Asignación dinámica de propiedades a un objeto

<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-js -->

    var variables = {};
    var prefijo = 'texto';
    for (var i = 0; i < 3; i++) {
      variables[prefijo + i] = 1;
    }

    for(var key in variables) {
      console.info(key);
    }


<!-- end snippet -->



# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/134881\|https://es.stackoverflow.com/q/134881]]

