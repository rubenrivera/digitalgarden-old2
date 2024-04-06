---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-142637.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-142637/","title":"javascript condiciones y almacenamiento en variables","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.727-06:00","updated":"2024-04-05T16:43:53.104-06:00"}
---

# javascript condiciones y almacenamiento en variables

JavaScript no cuenta con un tipo de objeto para hora, de hecho al usar

    var hora1=04:00:00

Esto genera un error. Ejemplo al usar lo anterior en Stack Snippet gener el error "unexpected token :"

<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-js -->

    var hora1=04:00:00;
    console.info(typeof hora1);

<!-- end snippet -->

Esto es porque en JavaScript los dos puntos se utilizan para asignar etiquetas ([label][1]) a sentencias así como también en la sentencia [switch][2] para delimitar los valores a comparar la expresión (`case valor:`).

En lugar de 

    var hora1=04:00:00;

podrías usar

    var hora1='04:00:00';

Y luego extraer cada parte o bien desde un principio usa una variable para cada componente, horas, minutos y segundos.

  [1]: https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/label
  [2]: https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/switch

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/142637\|https://es.stackoverflow.com/q/142637]]

