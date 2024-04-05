---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-65995.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-65995/","title":"dividir un array por indices numericos","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.626-06:00","updated":"2024-04-05T16:43:50.378-06:00"}
---

# dividir un array por indices numericos

Una forma de ver `arr.map(a,b)` es considerar que el primer argumento `a` es el elemento de la matriz `arr`, el índice, `b`, sería el segundo argumento.

En [Array.protoype.map()][1] se hablan de tres argumentos, el elemento y el índice y lo matriz en el ejemplo incluido arriba  `a`, `b` y `arr` respectivamente.


Ejemplo:

<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-js -->

    var mix = ['nulla' , 'italia', 'cina', 'germany', 'india', 'france', 'japan']  
    var asia =[];
    mix.map(function(elemento,indice){
      if (indice % 2 == 0) asia.push(elemento);
    });
    document.write(asia);

<!-- end snippet -->

Con respecto a

    mix = ['nulla' , 'italia', 'cina', 'germany', 'india', 'france', 'japan'];
    mix.map(function(indice){ if(indice % 2 == 0) {asia.push(indice)}})

Devuelve `undefined` para cada uno de los elementos de la matriz, porque el primer argumento toma el un elemento del a matriz en cada iteración, por ejemplo, `'nulla' % 2 == 0` devuelve `false`, como el `if` no incluye el enunciado `else` pues no hace nada, en otras palabras asigna a `undefined` a la matriz resultante, y así sucesivamente para cada elemento.

  [1]: https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/map


# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/65995\|https://es.stackoverflow.com/q/65995]]

