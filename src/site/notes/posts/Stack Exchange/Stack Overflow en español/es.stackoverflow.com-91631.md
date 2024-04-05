---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-91631.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-91631/","title":"Mensaje en una etiqueta <p>","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.727-06:00","updated":"2024-04-05T16:43:52.453-06:00"}
---

# Mensaje en una etiqueta <p>

Hay varias formas de hacer lo que estas buscando, pero el concepto básico es la manipulación del DOM con JavaScript.

Si la estructura de tu página es estática, cuenta con una única etiqueta p o la de tu interés es la primera puedes usar `document.querySelector('p').innerHTML` ó `document.getElementsByTagName('p')[0]`.

Si fuera otra la situación, hay una gran variedad de alternativas.

Ejemplo

<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-js -->

    document.querySelector('p').innerHTML = '¡Hola mundo!';

<!-- language: lang-html -->

    <p></p>

<!-- end snippet -->



# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/91631\|https://es.stackoverflow.com/q/91631]]

