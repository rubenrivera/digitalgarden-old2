---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-61755.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-61755/","title":"Cambiar el formato de la fecha que recibo de AAAA-MM-DD a DD/MM/AAAA","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.505-06:00","updated":"2024-04-05T16:43:49.963-06:00"}
---

# Cambiar el formato de la fecha que recibo de AAAA-MM-DD a DD/MM/AAAA

Solución usando expresiones regulares

<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-js -->

    var texto = '2017-01-10';
    var salida = formato(texto);
    console.log(salida);

    /**
     * Convierte un texto de la forma 2017-01-10 a la forma
     * 10/01/2017
     *
     * @param {string} texto Texto de la forma 2017-01-10
     * @return {string} texto de la forma 10/01/2017
     *
     */
    function formato(texto){
      return texto.replace(/^(\d{4})-(\d{2})-(\d{2})$/g,'$3/$2/$1');
    }

<!-- end snippet -->



# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/61755\|https://es.stackoverflow.com/q/61755]]

