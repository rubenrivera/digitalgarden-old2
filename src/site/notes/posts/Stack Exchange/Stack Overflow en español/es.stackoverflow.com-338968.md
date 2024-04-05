---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-338968.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-338968/","title":"Trabajar con informacion Google Spreadsheet","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.627-06:00","updated":"2024-04-05T16:43:56.540-06:00"}
---

# Trabajar con informacion Google Spreadsheet

El error que indicas en la pregunta se debe a la siguiente línea

    hojaN.getRange().setValue(data);

El método `getRange` debe tener parámetros de las siguientes formas: 


    getRange(row, column)
    getRange(row, column, numRows)
    getRange(row, column, numRows, numColumns)
    getRange(a1Notation)

Puedes consultar los detalles en https://developers.google.com/apps-script/reference/spreadsheet/sheet

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/338968\|https://es.stackoverflow.com/q/338968]]

