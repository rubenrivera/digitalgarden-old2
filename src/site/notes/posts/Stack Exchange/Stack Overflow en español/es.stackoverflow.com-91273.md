---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-91273.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-91273/","title":"¿Cómo paso como parametro un arreglo bidimensional en javascript?","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.727-06:00","updated":"2024-04-05T16:43:52.437-06:00"}
---

# ¿Cómo paso como parametro un arreglo bidimensional en javascript?

# Respuesta corta

 La forma de pasar una argumento a una función es   `miFuncion(parametro)` y en el caso de una función anónima `function (parametro){...}`

# Explicación

## Cómo pasar un argumento a una función

En JavaScript las variables pueden hacer referencia a cualquier valor, ya sea uno primitivo como un número o una cadena de texto (string) o un objeto, incluyendo una matriz (array) tanto unidimensional como multidimensional.

Para pasar un parámetro a una función, basta con poner el valor o la variable dentro de los paréntesis de la llamada a la función.

Si la función se llama miFuncion, la forma de llamarla sin parámetros es miFuncion() y con parámetros miFuncion(parametro).

## Ejemplos

### Función con nombre


<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-js -->

    // Imprime en la consola el valor del parámetro
    function miFuncion(parametro) {
      console.info(parametro);
    }

    // Una cadena como parámetro
    miFuncion('¡Hola mundo!');

    // Una matriz multidimensional como parámetro
    miFuncion([
      ['Hola'],
      ['mundo']
    ]);

    // Una variable que hace referencia a un matriz multidimensional, y esta como parámetro
    var miVariable = [
      ['Adiós'],
      ['mundo']
    ];

    miFuncion(miVariable);

<!-- end snippet -->

## E Función anónima

<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-js -->

    // Imprime en la consola el valor del parámetro
    // Se asigna una función anónima a una variable para poder llamarla.
    var funcionAnonima = function (parametro) {
      console.info(parametro);
    }

    // Una cadena como parámetro
    funcionAnonima('¡Hola mundo!');

    // Una matriz multidimensional como parámetro
    funcionAnonima([
      ['Hola'],
      ['mundo']
    ]);

    // Una variable que hace referencia a un matriz multidimensional, y esta como parámetro
    var miVariable = [
      ['Adiós'],
      ['mundo']
    ];

    funcionAnonima(miVariable);

<!-- end snippet -->

# Referencias

- [Introudcción Guía de JavaScript][1]
- [function][2]


  [1]: https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Introducci%C3%B3n
  [2]: https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/function

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/91273\|https://es.stackoverflow.com/q/91273]]

