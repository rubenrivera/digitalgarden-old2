---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-302128.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-302128/","title":"Ciclo anidado para validar array bidimensional","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.417-06:00","updated":"2024-04-05T16:43:56.242-06:00"}
---

# Ciclo anidado para validar array bidimensional

Uno de los errores es que en los dos `for` estás usando `x.length` como límite del número de iteraciones. En el segundo deberías usar algo como `x[0].length` para que itere por el número de elementos del array interior. 

Al usar `x.length` se obtiene el número filas. Estrictamente es el número de elementos del array del primer nivel/dimensión ó exterior.  
Al usar algo como `x[0].length` se obtiene el número de columnas. Estrictamente es el número de elementos del primer array que es miembro del array de primer nivel o de la segunda dimension ó interior.


Cuando se trata de una matriz cuadrada (mismo número de filas y de columnas), como es este caso, puedes usar el ejemplo dado, pero si se tratara de un "[jagged array][1]" (los elementos de los arrays interiores no son del mismo tamaño, o no se tiene certeza de que los sean) deberías usar `x[i].length`. Estrictamente, un array bi-dimensional es un tipo de "jagged array".

A continuación el código de la pregunta con unas ligeras modificaciones, 1) el cambio sugerido arriba, 2) el contador cuenta el número de elementos del array bidimensional

<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-js -->

    var x = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ];

    function chequear() {
      var contador = 0;
      for (i = 0; i < x.length; i++) {
        for (j = 0; j < x[0].length; j++) {
        contador++
        }
      }
      return contador
    }
    console.info(chequear());

<!-- end snippet -->

El otro problema del código es la lógica de lo que quieres hacer con cada elemento del array, pero con eso no te podremos ayudar mientras no lo describas claramente.


  [1]: https://en.wikipedia.org/wiki/Jagged_array

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/302128\|https://es.stackoverflow.com/q/302128]]

