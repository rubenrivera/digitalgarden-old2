---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-85697.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-85697/","title":"Permutar dos objetos cambiando el resultado en JavaScript","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.354-06:00","updated":"2024-04-05T16:43:51.760-06:00"}
---

# Permutar dos objetos cambiando el resultado en JavaScript

# Introducción
Aunque ya había dejado [una respuesta][1], aquí dejo otra usando [this][2] y los nombres de las variables como llaves esto con la finalidad de que la solución sea modular, es decir, que si los nombres de las variables cambian, no sea necesario cambiar la función. También se hace uso de [funciones flecha][3].

> Nota: Esta solución funciona para variable globales, como estaba declaradas en la [revisión 2][4] de la pregunta.

Se presentan dos escenarios, dos objetos del mismo tipo, y dos objetos de tipos distintos, siendo el primero un objeto {} y el otro una matriz [].

# Escenario 1: Dos objetos del mismo tipo, {}

<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-js -->

    var objeto_1 = {d: 2,e: 3}
    var objeto_2 = {f: 4}

    /*
     * Intercambia la asignación de objetos a dos variables y devuelve una 
     * arreglo (array) con los objetos permutados
     *
     * @param {String} a nombre de la primer variable
     * @param {String} b nombre de la segunda variable
     *
     * @returns {Array}    
     */

    function permutar(a, b) {

      // Intercambiar asignación de objetos entre dos variables
      var swap = x => x;
      this[a] = swap(this[b],this[b]=this[a])

      // Devolver los objetos permutados en una matriz
      return [this[a],this[b]];
    }

    console.log("--- valores originales ---");
    console.log(JSON.stringify([objeto_1, objeto_2]));

    /* Llamar la función solución y asignar resultado a variable */
    var permuta = permutar("objeto_1", "objeto_2");
    console.log("--- resultado de la función solución ---");
    console.log(JSON.stringify(permuta));

    console.log("--- verificación de intercambio ---")
    console.log(JSON.stringify([objeto_1, objeto_2]));



<!-- end snippet -->

# Escenario 2: Dos objetos de tipo distinto, un objeto {} y una matriz []

<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-js -->

    var objeto_1 = {d: 2,e: 3}
    var matriz_1 = [4]

    /*
     * Intercambia la asignación de objetos a dos variables y devuelve una 
     * arreglo (array) con los objetos permutados
     *
     * @param {String} a nombre de la primer variable
     * @param {String} b nombre de la segunda variable
     *
     * @returns {Array}    
     */

    function permutar(a, b) {

      // Intercambiar asignación de objetos entre dos variables
      var swap = x => x;
      this[a] = swap(this[b],this[b]=this[a])

      // Devolver los objetos permutados en una matriz
      return [this[a],this[b]];
    }

    console.log("--- valores originales ---");
    console.log(JSON.stringify([objeto_1, matriz_1]));

    /* Llamar la función solución y asignar resultado a variable */
    var permuta = permutar("objeto_1", "matriz_1");
    console.log("--- resultado de la función solución ---");
    console.log(JSON.stringify(permuta));

    console.log("--- verificación de intercambio ---")
    console.log(JSON.stringify([objeto_1, matriz_1]));

<!-- end snippet -->

# Explicación

`this` es una palabra clave de JavaScript que cambia su comportamiento según el contexto y como sea llamado. En este caso, al usar el nombre de las variables como llave, se llama a la variable global que tienen ese nombre.

`swap` es una variable a la que le ha asignado una función flecha que devuelve el objeto recibido como argumento. Se ha preferido este tipo de función por su brevedad.

# Referencia

[Respuesta][5] a [Swap two objects in JavaScript][6]

# Preguntas relacionadas

- https://es.stackoverflow.com/q/1799/65


  [1]: https://es.stackoverflow.com/a/84617/65
  [2]: https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/this
  [3]: https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Funciones/Arrow_functions
  [4]: https://es.stackoverflow.com/revisions/84600/2
  [5]: https://stackoverflow.com/a/20601481/1595451
  [6]: https://stackoverflow.com/q/16151682/1595451

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/85697\|https://es.stackoverflow.com/q/85697]]

