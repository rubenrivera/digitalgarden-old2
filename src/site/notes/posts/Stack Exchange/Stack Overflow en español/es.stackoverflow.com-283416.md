---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-283416.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-283416/","title":"Problema para ejecutar función","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.627-06:00","updated":"2024-04-05T16:43:55.783-06:00"}
---

# Problema para ejecutar función

El código que has incluído en la pregunta es una declaración de una función. Como se mencionó en un comentario, para que se ejecute debes llamar la función para lo cual hay varias formas de hacerlo. Si deseas que se ejecute inmediatamente al ejecutar el código, incluye un sentencia usando el nombre de la función seguido de paréntesis

<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-js -->

    function coinConvert(dollar = 50) {

    soles = dollar * 3.25;

     pesosMexicanos = dollar * 18;

     pesosChilenos = dollar * 660;

    console.log(soles, pesosMexicanos, pesosChilenos);       
    }
    coinConvert();

<!-- end snippet -->

Otra forma es declarar la función como una función ejecutada inmediatamente o IFFE por sus siglas en inglés

<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-js -->

    (function coinConvert(dollar = 50) {

    soles = dollar * 3.25;

     pesosMexicanos = dollar * 18;

     pesosChilenos = dollar * 660;

    console.log(soles, pesosMexicanos, pesosChilenos);       
    })()


<!-- end snippet -->

Referencia

- https://developer.mozilla.org/es/docs/Glossary/IIFE

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/283416\|https://es.stackoverflow.com/q/283416]]

