---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-110501.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-110501/","title":"¿Como recuperar conversión informaciones con JavaScript en una google spreadsheet?","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.417-06:00","updated":"2024-04-05T16:43:52.617-06:00"}
---

# ¿Como recuperar conversión informaciones con JavaScript en una google spreadsheet?

Usa UrlFetchApp.fetch(url) para obtener la respuesta HTTP de una URL, que en el caso de http://api.fixer.io/latest devuelve un cadena de texto con estructura de un objeto JSON.

Luego usa JSON.parse(string) para convertir la cadena de texto en un objeto JSON.

Por último, extrae el elemento deseado. Ejemplo:

    function unaFuncion() {
      var elResultado = UrlFetchApp.fetch("http://api.fixer.io/latest"); 
      var elObjeto = JSON.parse(elResultado);
      Logger.log(elObjeto.rates["AUD"]);
    }



# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/110501\|https://es.stackoverflow.com/q/110501]]

