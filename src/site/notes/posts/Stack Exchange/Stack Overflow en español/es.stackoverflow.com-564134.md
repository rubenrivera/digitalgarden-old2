---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-564134.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-564134/","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.507-06:00","updated":"2024-04-05T16:43:57.995-06:00"}
---

---
title: Error de conexión en Apps Script - TypeError: Cannot read property 'getSheetByName' of null
Site: Stack Overflow en español
Stack Exchange Post ID: 564134
Stack Exchange Type: Answer
Stack Exchange Post Created: 25/10/22 2:49
Stack Exchange Post Last Edit: 
Stack Exchange Edited By: 
Score: 0
Favorites: 
Views: 409
Accepted: 
CW: 
Closed: 
---
# Error de conexión en Apps Script - TypeError: Cannot read property 'getSheetByName' of null

`SpreadsheetApp.getActiveSpreadsheet()` devuelve `null` en proyectos independientes (stand-alone) En su lugar usa:

- `SpreadsheetApp.open(file)`
- `SpreadsheetApp.openById(id)`
- `SpreadsheetApp.openByUrl(url)`

O bien, en lugar de usar una proyecto independiente crea uno vinculado a una hoja de cálculo. Una forma de hacerlos es desde el menú Extensiones de las hojas de cálculo de Google.




# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/564134\|https://es.stackoverflow.com/q/564134]]

