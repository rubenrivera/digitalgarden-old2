---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-48958.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-48958/","title":"Redondear a dos decimales cuando sea necesario","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.679-06:00","updated":"2024-04-05T16:43:49.032-06:00"}
---

# Redondear a dos decimales cuando sea necesario

Me gustaría redondear a dos decimales, *sólo cuando sea necesario*. A continuación ejemplos de entradas y salidas

Entrada:

    10
    1.7777777
    9.1

Salida:

    10
    1.78
    9.1
¿Cómo puedo hacer esto en JavaScript?

# Fragmento
<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-js -->

    var valor = [
      10,
      1.77777777,
      9.1
    ];
    var resultado = valor.map(Math.round);
    console.log(resultado);

<!-- end snippet -->

 Pregunta inspirada por [Round to at most 2 decimal places][1]

  [1]: https://stackoverflow.com/questions/11832914/round-to-at-most-2-decimal-places

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/48958\|https://es.stackoverflow.com/q/48958]]

