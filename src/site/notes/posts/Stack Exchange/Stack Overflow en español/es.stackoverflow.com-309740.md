---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-309740.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-309740/","title":"Formato para tipo de datos DATE","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.417-06:00","updated":"2024-04-05T16:43:56.284-06:00"}
---

# Formato para tipo de datos DATE

Al leer una celda de una **hoja de cálculo de Google** que contiene una fecha, **Google Apps Script** devuelve un objeto de **JavaScript** tipo "Date". El valor que ves reflejado en el mensaje de error ocurre porque cuando se parsea un objeto tipo "Date" como "String" devuelve la fecha en el formato mostrado, en este caso `Sun Nov 11 2019 00:00:00 GMT+0100 (CET)`

En Google Apps Script puedes usar `Utilities.formatDate(date,timezone,format)` para generar un "String" que tenga el formato de fecha que requieras.

Referencias

- https://developers.google.com/apps-script/reference/spreadsheet/range#getvalue
- https://developers.google.com/apps-script/reference/utilities/utilities#formatdatedate,-timezone,-format

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/309740\|https://es.stackoverflow.com/q/309740]]

