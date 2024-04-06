---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-314757.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-314757/","title":"¿Cómo partir una cadena en dos en cada celda de una hoja de Google?","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.417-06:00","updated":"2024-04-05T16:43:56.369-06:00"}
---

# ¿Cómo partir una cadena en dos en cada celda de una hoja de Google?

El problema es que `var lastRow = rangeData.getLastRow();` está asignando 1 a la variable lastRow, entonces al hacer `lastColumn-1` en `var searchRange = sheet.getRange(2,2, lastRow-1, lastColumn-1);` tu código está pasando 0 como el cuarto argumento de `getRange` y el valor mínimo debe ser 1.

Quizás estas pasando por alto que métodos del "Spreadsheet Service" como `getRange` usan índices base 1 contrario  a los métodos de JavaScript que usando métodos base 0.



# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/314757\|https://es.stackoverflow.com/q/314757]]

