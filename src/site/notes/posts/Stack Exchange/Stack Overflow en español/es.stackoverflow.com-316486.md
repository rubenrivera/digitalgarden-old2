---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-316486.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-316486/","title":"Buscando indice con array.indexof en GAS","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.593-06:00","updated":"2024-04-05T16:43:56.463-06:00"}
---

# Buscando indice con array.indexof en GAS

Debes tener en cuenta que `getValues()` devuelve un objeto tipo Array que incluye objetos tipo Array donde cada uno de estos representa una fila y la posición de cada miembro representa una columna.

A los Arrays como los que devuelve `getValues()` también se les llama Array 2D, Array Multidimensional o matriz.

En `for each (var empresa in empresa_values)` la variable `empresa` será un Array, es por ello que `indexOf` siempre te devuelve `-1`.

En lugar de `for each` podrías usar 

    /** Columna que incluye los valores de empresa */
    var columna = 0;
    empresa_values.forEach(function(fila){ 
      var empresa = fila[columna];
      // Poner aquí lo que se va a hacer con la variable empresa

Cabe destacar que for each ha sido deprecado por lo que no se recomienda su uso. Referencia  https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/for_each...in

Relacionado

- https://es.stackoverflow.com/q/253106/65
- https://es.stackoverflow.com/q/260105/65
- https://es.stackoverflow.com/q/300364/65


# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/316486\|https://es.stackoverflow.com/q/316486]]

