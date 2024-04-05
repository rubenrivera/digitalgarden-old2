---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-87319.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-87319/","title":"¿Cómo puedo revisar si hay etiquetas dentro de otra con JavaScript?","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.679-06:00","updated":"2024-04-05T16:43:52.095-06:00"}
---

# ¿Cómo puedo revisar si hay etiquetas dentro de otra con JavaScript?

# Respuesta corta

Usa querySelector o algún otro método similar.

# Código

<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-js -->

    var secciones = document.getElementsByTagName('div');
    for(var seccion of secciones){
      console.info(seccion.querySelector('img'))
    }

<!-- language: lang-html -->

    <div id="uno"><img/></div>
    <div id="dos"></div>

<!-- end snippet -->

Se asignan la colección de elementos `div` a una variable. 
Para cada `div`, se usa querySelector para seleccionar el elemento `img` y se imprime un mensaje en la consola. Si existe `img` se imprime la etiqueta, si no existe se imprime `null`.

# Explicación

En [Modelo de Objetos de Documento][1], en inglés Document Model Object (DOM), a cada parte de la estructura de una página HTML se le conoce como elemento. Existen diversos métodos para seleccionar los elementos, ya sea de forma individual o por grupo a los que se llama colección.


  [1]: https://developer.mozilla.org/es/docs/DOM

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/87319\|https://es.stackoverflow.com/q/87319]]

