---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-8270.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-8270/","title":"Uso de modificadores de expresiones regulares en Google Apps Script","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.592-06:00","updated":"2024-04-05T16:43:48.526-06:00"}
---

# Uso de modificadores de expresiones regulares en Google Apps Script

Quiero obtener el código entre las etiquetas form de una página web usando Google Apps Script, para lo cual estoy usando `match` con la expresión regular `/<form(.*?)<\/form>/g` 


    function test() {
      var html = UrlFetchApp.fetch('https://docs.google.com/forms/d/1awKpg_diniayS6360kNXrcgihk36azQ3DJEaZqXDY7A/viewform?embedded=true').getContentText();
      var form = html.match(/<form(.*?)<\/form>/g);
      Logger.log(form);
    }

He intentado con sustituir el modificador `g` por otros modificadores como `m` y `s` pero el editor de Google Apps Script no los acepta.

¿Es posible usar estos modificadores? ¿Cómo?

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/8270\|https://es.stackoverflow.com/q/8270]]

