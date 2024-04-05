---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-65456.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-65456/","title":"Aplicar estilos a un texto extraído de un Array","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.626-06:00","updated":"2024-04-05T16:43:50.150-06:00"}
---

# Aplicar estilos a un texto extraído de un Array

Si la frase es conocida, y las posiciones de las palabras a aplicar negritas son conocidas, el código se puede simplificar. A continuación una forma de hacerlo

<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-js -->

    frase = document.getElementById("frase"); //seleccionar elemento
    fr = frase.innerHTML.split(' '); //Separar el texto del elemento en palabras
    fr[1] = '<b>' + fr[1] + '</b>'; //Aplicar negritas a la 2da palabra
    fr[3] = '<b>' + fr[3] + '</b>'; //Aplicar negritas a la 4ta palabra
    //Unir el texto y reemplazar el texto original del elemento.
    frase.innerHTML = fr.join(' '); 


<!-- language: lang-html -->

    <span id="frase">La tecnología me gusta</span>

<!-- end snippet -->



# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/65456\|https://es.stackoverflow.com/q/65456]]

