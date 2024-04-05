---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-297064.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-297064/","title":"¿Puedo guardar un operador como variable?","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.760-06:00","updated":"2024-04-05T16:43:56.084-06:00"}
---

# ¿Puedo guardar un operador como variable?

Estrictamente hablando, no es posible guardar un operador como variable pero puedes guardar los caracteres que representan los operadores como cadenas (Strings), en términos de [lego][1] (en inglés layperson, layman), sí se puede.

Podrías usar `eval` ejecutar código JavaScript representado como texto. Ejemplo:

<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-js -->

    /**
     * Ejecutar una operación binaria
     *
     * @param {String} operador Operador binario (+, -, *, /, %, **)
     * @param {Array} operandos Matriz de elementos en los que se aplica la operación, deben ser 2
     */
    function calculo(operador, operandos){
      return eval(operandos[0] + operador + operandos[1]);
    }

    // Suma
    console.info(calculo('+',[1,2]));
    // Resta
    console.info(calculo('-',[1,2]));
    // Multiplicación
    console.info(calculo('*',[1,2]));
    // División
    console.info(calculo('/',[1,2]));
    // Residuo
    console.info(calculo('%',[1,2]));
    // Exponente
    console.info(calculo('**',[1,2]));

<!-- end snippet -->


  [1]: https://es.wikipedia.org/wiki/Lego_(no_profesional)

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/297064\|https://es.stackoverflow.com/q/297064]]

