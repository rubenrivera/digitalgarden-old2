---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-160526.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-160526/","title":"Expresión regular en JavaScript no me está respetando la longitud del \"com\"","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.626-06:00","updated":"2024-04-05T16:43:53.731-06:00"}
---

# Expresión regular en JavaScript no me está respetando la longitud del "com"

El problema es el último `?`. Este caracter especial indica que el token previo es opcional

A continuación he quitado el último `?`


<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-js -->

    var str = "https://dominio.comm";
    var patt1 = /^(https?\:\/\/)([a-z0-9-]+\.)?([a-z0-9-]+)(\.[a-z]{2,3})$/;
    console.log(patt1.test(str)); 

<!-- end snippet -->

Nótese que ahora el resultado es `true`

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/160526\|https://es.stackoverflow.com/q/160526]]

