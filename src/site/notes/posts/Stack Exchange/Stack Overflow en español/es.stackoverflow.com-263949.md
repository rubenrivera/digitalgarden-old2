---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-263949.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-263949/","title":"copiar de la hoja inicial","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.760-06:00","updated":"2024-04-05T16:43:55.350-06:00"}
---

# copiar de la hoja inicial

Claro que lo que usabas en VBA no funciona con las hojas de cálculo de Google ya que estas usan otra cosa, Google Apps Script.

Para obtener la hoja actual puedes usar:

    var sheet = SpreadsheetApp.getActiveSheet();

Si por inicial te refieres a la primer hoja usa

    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];

Referencias

- https://developers.google.com/apps-script/guides/sheets

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/263949\|https://es.stackoverflow.com/q/263949]]

