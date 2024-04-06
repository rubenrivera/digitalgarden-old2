---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-145977.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-145977/","title":"obtener los caracteres vecinos que no sean vocales","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.354-06:00","updated":"2024-04-05T16:43:53.153-06:00"}
---

# obtener los caracteres vecinos que no sean vocales


Una solución usando expresiones regulares

<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-js -->

    var cadena = 'hhollliillapiiii';
    var salida = cadena.match(/(?![aeiou])([^aeiou])+([^aeiou])/g)
    console.info(salida)

<!-- end snippet -->



# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/145977\|https://es.stackoverflow.com/q/145977]]

