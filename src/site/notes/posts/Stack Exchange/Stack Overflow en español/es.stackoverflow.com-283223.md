---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-283223.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-283223/","title":"¿como hacer operaciones aritméticas con un cadena?","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.627-06:00","updated":"2024-04-05T16:43:55.747-06:00"}
---

# ¿como hacer operaciones aritméticas con un cadena?

Seguramente la manera mas simple es mediante el uso de [eval][1]

<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-js -->

    var str1 = '123 / 3 + 4 * 0.5 - 55 + 1'
    console.log(eval(str1));


<!-- end snippet -->

Como podrás ver en la página del enlace, se recomienda limitar el uso de `eval` pues dependiendo de cómo se use podría representar un riesgo. Si lo usas en código que sólo es accesible por tí, y lo utilizas con cuidado no deberías tener problemas.

Otra cosa a resaltar es el concepto [precedencia de operadores][2]. Como verás el resultado de aplicar eval a la cadena `123 / 3 + 4 * 0.5 - 55 + 1` da como resultado `-11` en lugar de `-31,5` esto es porque primero se realizan las divisiones y multiplicaciones y luego las sumas y restas

    123 / 3 = 41  
    4 * 0.5 = 2
    
    41 + 2 - 55 + 1 = -11

Para "forzar" el orden de izquierda a derecha, usa paréntesis.

<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-js -->

    var str1 = '(123 / 3 + 4) * 0.5 - 55 + 1'
    console.log(eval(str1));


<!-- end snippet -->

  [1]: https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/eval
  [2]: https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/Operator_Precedence


# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/283223\|https://es.stackoverflow.com/q/283223]]

