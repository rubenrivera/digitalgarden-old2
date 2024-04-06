---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-49130.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-49130/","title":"¿Cómo eliminar o reemplazar todas las subcadenas de un string en Javascript?","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.727-06:00","updated":"2024-04-05T16:43:49.113-06:00"}
---

# ¿Cómo eliminar o reemplazar todas las subcadenas de un string en Javascript?

# Respuesta corta
Usa [expresiones regulares][1] (RegExp) con el parámetro g, búsqueda global

# Fragmento

<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-js -->

    /**
     * Ejemplo simple
     *
     */
    var cadena = "Test abc test test abc test test test abc test test abc";
    var re = /abc/g;
    var resultado = cadena.replace(re, '');
    console.log(resultado);

<!-- end snippet -->

# Observaciones

Las expresiones regulares no son triviales ya que ciertos caracteres tienen un efecto en la manera que se interpreta la expresión regular. El procesamiento de estas debe aplicarse sólo a cadenas seguras o en su defecto deberían escaparse antes de ser procesadas. A continuación un ejemplo mas completo.


<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-js -->

    /**
     * Ejemplo simple modificado
     *
     */

    // Tomado de 
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
    function escapeRegExp(string) {
      return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); 
    }

    // Cadena a procesar
    var cadena = "Test abc test test abc test test test abc test test abc";

    // Simular entrada de usuario
    var entradaUsuario = "abc";

    // Aplicar la función para escapar la entrada de usuario
    var re = new RegExp(escapeRegExp(entradaUsuario),'g');

    // Aplicar reemplazo
    var resultado = cadena.replace(re, '');

    // Imprimir en la consola el resultado
    console.log(resultado);

<!-- end snippet -->

## Fuente
[Respuesta][2] a [How to replace all occurrences of a string in JavaScript?][3]

## Véase también

- https://es.stackoverflow.com/questions/49210/ <!-- forma-segura-de-escapar-entrada-de-usuario-para-ser-procesada-por-expresiones-re -->

  [1]: https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/RegExp
  [2]: https://stackoverflow.com/a/17606289/1595451
  [3]: https://stackoverflow.com/questions/1144783/how-to-replace-all-occurrences-of-a-string-in-javascript

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/49130\|https://es.stackoverflow.com/q/49130]]

