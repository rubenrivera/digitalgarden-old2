---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-295619.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-295619/","title":"¿Como insertar valores cada cierto numero de elementos de un array?","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.760-06:00","updated":"2024-04-05T16:43:56.032-06:00"}
---

# ¿Como insertar valores cada cierto numero de elementos de un array?

Si es posible y hay muchas formas de hacerlo. Va un ejemplo:
   

<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-js -->

    var datos = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Juan', 'Rosa'];
    var salida = [];
    for(var i = 0; i < datos.length / 3; i++){
      var j = i * 3;
      salida.push( datos.slice(j, j + 3));
    }
    console.info(salida);

<!-- end snippet -->

La solución anterior usa un bucle `for`, los métodos `Array.prototype.slice`, `Array.prototype.length`, `Array.prototype.push` y los operadores `<`, `/`, `++`, `*` y `+`

- `<`, `/` se usan para determinar el número de iteraciones que en este caso es el número de miembros del Array `datos` entre 3 que es el número de "columnas" que debe tener la variable `salida`.
- `++` para incrementar una unidad al iterador.
- `push` para insertar una "fila" al Array `salida`.
- `slice` para obtener una "fila".
- `*` y `+` para obtener los índices de inicio y fin de las "filas".

Para implementarlo en Google Apps Script simplemente pon el código dentro del bloque de la declaración de una función, la impresión de la consola lo puedes ver en la página de ejecuciones de tu proyecto en https://script.google.com.

NOTA: Google Apps Script está basado en JavaScript pero no soporta todas las características incorporadas en ECMAScript 5, entre ellas `TypedArray`.

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/295619\|https://es.stackoverflow.com/q/295619]]

