---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-289514.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-289514/","title":"Desplegar valores como array en google app script","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.679-06:00","updated":"2024-04-05T16:43:55.899-06:00"}
---

# Desplegar valores como array en google app script

Situación:

- Un formulario de Google envía un valor a una celda con un patrón como el siguiente:
    
   `[[1,2,3,4,5],[1,2,3,4,5],[1,2,3,4,5\|1,2,3,4,5],[1,2,3,4,5],[1,2,3,4,5]]`

- Intentaste usar Google Apps Script para que este valor se convierta en una matriz, es decir, que cada uno de los números ocupe una celda, abarcando un intervalo de tres filas por cinco columnas
- El método `getValue()` devolvió un valor de tipo `String`. Este valor se usó como argumento del método `setValues(String)` y devolvió un error.

Análisis del Script

- El error se debe a que no existe un método `setValues` con un argumento de tipo `String`.

Observaciones

- Existe el método `setValues` que usa como argumento de tipo `Array` cuyos elementos son de tipo Array y estos a su vez cuentan con elementos de tipo `String`, `Number` o `Date`. 
  - No se deben incluir elementos vacíos.
  - Todos los Arrays internos deben ser del mismo tamaño.

- Para convertir un `String` con un patrón como el mostrado arriba no es del todo conveniente usar `split` porque se usa el mismo separador para separar "filas" y "columnas", además de que requiere de algo más para eliminar los corchetes.

Propuesta de Solución 

- Usar expresiones regulares, el método String.prototype.match y quizás algunas manipulaciones adicionales para afinar el resultado.

Ejemplo:

<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-js -->
    // Función tomada de https://stackoverflow.com/a/14210948/1595451
    function getMatches(string, regex, index) {
      index || (index = 1); // default to the first capturing group
      var matches = [];
      var match;
      while (match = regex.exec(string)) {
        matches.push(match[index]);
      }
      return matches;
    }

    /** Caso de prueba */
    var valor = '[[1,2,3,4,5],[1,2,3,4,5],[1,2,3,4,5]]';
   
    /** Expresión regular que extrae el texto entre los corchetes internos */ 
    var re = /\[{1}([^\[\]]*)\]{1},*/g;

    
    var coincidencias = getMatches(valor,re);

    /** Separamos cada una de las coincidencias */
    var matriz = coincidencias.map(function(coincidencia){
      return coincidencia.split(',');
    });

    /** Para mostrar en Stack Snippet. En Google Apps Script reemplazar esta línea por una 
     * que envíe la matriz a la hoja de cálculo usando setValues
     */
    console.info(matriz)

<!-- end snippet -->

Notas

- Si requires saber el número de filas y columnas que ocupará la matriz, usa `matriz.length` para obtener el número de filas y `matriz[0].length` para el número de columnas. 

Referencias

- https://developers.google.com/apps-script/reference/spreadsheet/range#setvaluesvalues


# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/289514\|https://es.stackoverflow.com/q/289514]]

