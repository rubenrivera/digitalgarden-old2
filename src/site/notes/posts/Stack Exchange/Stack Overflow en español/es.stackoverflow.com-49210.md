---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-49210.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-49210/","title":"Forma segura de escapar entrada de usuario para ser procesada por expresiones regulares en JavaScript","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.727-06:00","updated":"2024-04-05T16:43:49.116-06:00"}
---

# Forma segura de escapar entrada de usuario para ser procesada por expresiones regulares en JavaScript

En https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions está publicado el siguiente ejemplo:

    function escapeRegExp(string) {
      return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); 
    }

¿Es esta la forma segura de escapar una cadena provista por usuario final, por ejemplo a través de un cuadro de diálogo?

Ejemplo:

<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-js -->

    /**
     * Ejemplo. Eliminar todas las instancias de una subcadena en una cadena.
     * 
     * Require dos entradas al usuario, cadena y subcadena.
     * Debemos asegurarnos que la subcadena es segura para ser procesada
     * como parte de una expresión regular.
     */

    /** 
      * Tomado de 
      * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
      * ¿Es esto seguro?
      */
    function escapeRegExp(string) {
      return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); 
    }

    // Cadena a procesar
    var cadena = "Test abc test test abc test test test abc test test abc";
    var entradaUsuario1 = prompt("Escribe la cadena a procesar",cadena);

    // Subcadena a eliminar
    var subcadena = "abc";
    var entradaUsuario2 = prompt("Escribe la subcadena a eliminar",subcadena);

    // Aplicar la función para escapar la entrada de usuario
    var re = new RegExp(escapeRegExp(entradaUsuario2),'g');

    // Aplicar reemplazo
    var resultado = entradaUsuario1.replace(re, '');

    // Imprimir en la consola el resultado
    console.log(resultado);

<!-- end snippet -->



  [1]: http://es.stackoverflow.com/a/49132/65

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/49210\|https://es.stackoverflow.com/q/49210]]

