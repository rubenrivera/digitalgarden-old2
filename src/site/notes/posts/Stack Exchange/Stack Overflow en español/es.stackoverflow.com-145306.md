---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-145306.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-145306/","title":"Error al hacer sumas con decimales en javascript","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.727-06:00","updated":"2024-04-05T16:43:53.141-06:00"}
---

# Error al hacer sumas con decimales en javascript

# Respuesta corta
1. En JavaScript el separador de decimales es el punto
2. Las funciones para dar formato a los números devuelven cadenas (strings).

# Explicación

A continuación hago la explicación de lo indicado arriba, por partes, primero la asignación de números a variables y luego el uso de funciones nativas.

## Primera parte: Asignación de números a variables

En la guía de Mozilla Developer Network (MDN) sobre cómo trabajar con [números y fechas][1] no se indica explícitamente que el separador de decimales es el punto, sin embargo, al ver los ejemplos esto se puede identificar.

Entonces al asignar una número a una variable en JavaScript en lugar de

    var x = 53113,20;

Lo correcto es 

    var x = 53113.20;

y en lugar de 

    var y = 12,50;

lo correcto es

    var y = 12.50;


## Segunda parte: Formato de números

Lo que solemos llamar formato en la documentación sobre JavaScript de MDN le llama "representación del número acorde al idioma". Para esto JavaScript incluye de forma nativa dos funciones 

- [Number.prototype.toLocaleString][2]
- [Intl.NumberFormat.format][3]

La segunda se recomienda cuando se vayan a convertir grandes cantidades de número pues se desempeña mejor, según MDN.

Integrando lo anterior el código quedaría de la siguiente forma

<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-js -->

    // Asignación de variables a número
    var x = 53113.20;
    var y = 12.50;

    // suma
    var suma = x + y;

    // Formato
    var options = {minimumFractionDigits:2} // Con esto aseguramos que se muestren 2 decimales como mínimo
    console.info('x: ' + x.toLocaleString('es-ES',options));
    console.info('y: ' + y.toLocaleString('es-ES',options));
    console.info('suma: ' +suma.toLocaleString('es-ES',options));

<!-- end snippet -->

Cabe hacer notar que las funciones anteriores tienen limitaciones en cuanto a su compatibilidad con navegadores, pero estas funcionan en los principales navegadores en sus versiones recientes, según tengo entendido. Cómo en la pregunta no se menciona navegadores objetivo se considera esto fuera del alcance de la discusión.

  [1]: https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Numbers_and_dates
  [2]: https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Number/toLocaleString
  [3]: https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/NumberFormat

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/145306\|https://es.stackoverflow.com/q/145306]]

