---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-422582.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-422582/","title":"Modificar cada elemento de un Array (object) en Google Script","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.355-06:00","updated":"2024-04-05T16:43:57.031-06:00"}
---

# Modificar cada elemento de un Array (object) en Google Script

No me queda claro que es lo que quieres lograr. Si quieres convertir una columna de Google Sheets en un Array (unidimensional) podrías usar `Array.prototype.flat()`

Ejemplo

    var flattened = SpreadsheetApp.getActiveSheeet().getRange('L:L').getValues().flat();

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/422582\|https://es.stackoverflow.com/q/422582]]

