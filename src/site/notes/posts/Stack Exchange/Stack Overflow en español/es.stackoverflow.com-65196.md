---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-65196.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-65196/","title":"Poner texto plano dentro de una etiqueta","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.626-06:00","updated":"2024-04-05T16:43:50.095-06:00"}
---

# Poner texto plano dentro de una etiqueta

En el siguiente ejemplo se usa la etiqueta `span` y el atributo `style` para darle formato al texto extraído con `slice(-3)`. 

<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-js -->

    var frase = document.querySelector("#frase");
    var fr = frase.innerHTML; //Variable auxiliar para abreviar un poco la siguiente línea
    frase.innerHTML = fr.slice(0,fr.length -3) //Parte izquierda
      +'<span style="color:red">' //Abrir etiqueta para aplicar formato
      + fr.slice(-3)  //Texto a estilizar
      + '</span>';  //Cerrar etiqueta del formato aplicado


<!-- language: lang-html -->

    <span id="frase">la cancion me hace recordar una sensacion</span>

<!-- end snippet -->



# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/65196\|https://es.stackoverflow.com/q/65196]]

