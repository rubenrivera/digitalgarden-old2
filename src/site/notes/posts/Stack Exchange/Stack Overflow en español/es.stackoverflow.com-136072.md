---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-136072.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-136072/","title":"¿Como hacer que mi input text tenga separador de miles y decimales en jquery?","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.506-06:00","updated":"2024-04-05T16:43:52.866-06:00"}
---

# ¿Como hacer que mi input text tenga separador de miles y decimales en jquery?

Hoy día, la mayoría de los navegadores modernos soportan [Intl.NumberFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat) lo cual nos ayuda a dar formato a un número sin necesidad de recurrir a expresiones regulares ni a funciones específicas de jQuery.

Para mostrar coma como separador de miles, usarlo de la siguiente forma

    

<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-js -->

    var numero = 1E6 + 56 / 100; //Un millón y 56 centésimas
    document
      .getElementById('salida')
      .innerHTML = new Intl.NumberFormat('es-MX').format(numero);

<!-- language: lang-html -->

    <div id="salida"></div>

<!-- end snippet -->

<!-- begin snippet: js hide: false console: true babel: false -->

Pero si de todas formas se quiere usar jQuery, una forma de hacerlo es la siguiente:

<!-- language: lang-js -->

    var numero = 1E6 + 56 / 100; //Un millón y 56 centésimas
    $('#salida').html(new Intl.NumberFormat('es-MX').format(numero));

<!-- language: lang-html -->

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
    <div id="salida"></div>

<!-- end snippet -->

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/136072\|https://es.stackoverflow.com/q/136072]]

