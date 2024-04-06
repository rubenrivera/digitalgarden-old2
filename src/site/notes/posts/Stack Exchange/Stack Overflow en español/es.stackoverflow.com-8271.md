---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-8271.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-8271/","title":"Uso de modificadores de expresiones regulares en Google Apps Script","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.592-06:00","updated":"2024-04-05T16:43:48.580-06:00"}
---

# Uso de modificadores de expresiones regulares en Google Apps Script

De acuerdo a la [respuesta #1](https://code.google.com/p/google-apps-script-issues/issues/detail?id=2098#c1) en [Issue 2098: Multiline regular expression modifier not working](https://code.google.com/p/google-apps-script-issues/issues/detail?id=2098) hay problemas que impiden el uso de modificador `m` sin embargo se puede usar en su lugar algo como `[\s\S]`.

El siguiente código si logra obtener correctamente el código entre las etiquetas form:

    function doGet() {
      var html = UrlFetchApp.fetch('https://docs.google.com/forms/d/1awKpg_diniayS6360kNXrcgihk36azQ3DJEaZqXDY7A/viewform?embedded=true').getContentText();
      var output = html.match(/<form[\s\S]*form>/g);
      return HtmlService.createHtmlOutput(output);
    }

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/8271\|https://es.stackoverflow.com/q/8271]]

