---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-50410.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-50410/","title":"¿Como puedo reemplazar %20 y + por - en la url?","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.759-06:00","updated":"2024-04-05T16:43:49.151-06:00"}
---

# ¿Como puedo reemplazar %20 y + por - en la url?

Una adaptación minimizada del código en la [versión 1][1] de la [respuesta][2] de [Jorious][3]



<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-js -->

    // http://miurl.com/mi+url+web
    // http://miurl.com/mi%20url%20web
    // http://miurl.com/mi+url%20web

    function replaceUrl(url){
      var fUrl = url.replace(/%20|\+/g, "-");
      return fUrl;
    }

    console.log(replaceUrl('http://miurl.com/mi+url+web'))
    console.log(replaceUrl('http://miurl.com/mi%20url%20web'))
    console.log(replaceUrl('http://miurl.com/mi+url%20web'))

<!-- end snippet -->

Explicación

- La expresión regular se expresa entre `/`, luego de la cual se indica el modificador búsqueda global `g`.
- `%20` es una de la secuencia de caracteres, esta se coloca de forma directa
- `\+` se ha escapado el caracter `+`, que corresponde a la otra secuencia de caracteres por ser un caracter especial
- `|` se ha colcado entre las dos ateriores expresiones, para indicar una, otra ó ambas (operador [disyunción lógica][4], `ó` (OR) boleano )
 


  [1]: https://es.stackoverflow.com/revisions/50407/1
  [2]: https://es.stackoverflow.com/a/50407/65
  [3]: https://es.stackoverflow.com/users/18771/jorius
  [4]: https://es.wikipedia.org/wiki/Disyunci%C3%B3n_l%C3%B3gica

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/50410\|https://es.stackoverflow.com/q/50410]]

