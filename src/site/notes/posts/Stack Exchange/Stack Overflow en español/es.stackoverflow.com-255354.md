---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-255354.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-255354/","title":"Google Apps Script poner celda en color","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.759-06:00","updated":"2024-04-05T16:43:55.256-06:00"}
---

# Google Apps Script poner celda en color

El problema es que `findIndex` no es una función soportada por Google Apps Script.

Una manera sencilla para ayudarnos a saber si una función de JavaScript es soporta es por medio del uso de autocompletar. Autocompletar depende de que el editor de Google Apps Script identifique el tipo de dato, pero no "batallar" con la declaración de variables, podemos usa literales, por ejemplo, para encontrar cuáles métodos de Array son soportados escribe

    [].

Al momento de escribir el `.` el editor de Google Apps Script muestra la lista completa de métodos soportados, en este caso, para el tipo Array:

[![][1]][1]

En el pasado se ha reportado en espacios públicos como este que se han encontrado funciones soportadas que no están en el autocompletar. Considero que esto se debe a que no se ha hecho la liberación de forma oficial y la función encontrada que no está en autocompletar podría ser retirada.

En todo caso, si deseas usar un método no soportado, puedes usar el Polyfill.

Polyfill tomado de https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/findIndex

    // https://tc39.github.io/ecma262/#sec-array.prototype.findIndex
    if (!Array.prototype.findIndex) {
      Object.defineProperty(Array.prototype, 'findIndex', {
        value: function(predicate) {
         // 1. Let O be ? ToObject(this value).
          if (this == null) {
            throw new TypeError('"this" is null or not defined');
          }
    
          var o = Object(this);
    
          // 2. Let len be ? ToLength(? Get(O, "length")).
          var len = o.length >>> 0;
    
          // 3. If IsCallable(predicate) is false, throw a TypeError exception.
          if (typeof predicate !== 'function') {
            throw new TypeError('predicate must be a function');
          }
    
          // 4. If thisArg was supplied, let T be thisArg; else let T be undefined.
          var thisArg = arguments[1];
    
          // 5. Let k be 0.
          var k = 0;
    
          // 6. Repeat, while k < len
          while (k < len) {
            // a. Let Pk be ! ToString(k).
            // b. Let kValue be ? Get(O, Pk).
            // c. Let testResult be ToBoolean(? Call(predicate, T, « kValue, k, O »)).
            // d. If testResult is true, return k.
            var kValue = o[k];
            if (predicate.call(thisArg, kValue, k, o)) {
              return k;
            }
            // e. Increase k by 1.
            k++;
          }
    
          // 7. Return -1.
          return -1;
        },
        configurable: true,
        writable: true
      });
    }

Relacionado

- https://es.stackoverflow.com/q/104900/65

  [1]: https://i.stack.imgur.com/9qnFn.png

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/255354\|https://es.stackoverflow.com/q/255354]]

