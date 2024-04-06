---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-274008.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-274008/","title":"Celda como argumento en Google Apps Script?","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.355-06:00","updated":"2024-04-05T16:43:55.439-06:00"}
---

# Celda como argumento en Google Apps Script?

Usa `SpreadsheetApp.getActiveRange();` para tomar la celda actual, por ejemplo en `Sisepago()`

Para tomar una celda por medio de una referencia, en lugar de usar `A2` usa `"A2"`, luego getRange(referencia), luego `getBackground()` para tomar el color de la celda y luego has la comparación y operación aritmética pertinentes.

Si realmente requieres usar `A2` deberás usar `getFormula()` y luego alguna forma de parsear la referencia, por ejemplo

    var formula = activeRange.getFormula();
    var rangeA1Notation = formula.match(/\,(.*)\)/).pop();
Referencia

- https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet#getactiverange
- https://developers.google.com/apps-script/reference/spreadsheet/range#getbackground
   

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/274008\|https://es.stackoverflow.com/q/274008]]

