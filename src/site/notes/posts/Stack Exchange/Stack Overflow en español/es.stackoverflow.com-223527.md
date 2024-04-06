---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-223527.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-223527/","title":"Script Google Sheets para obtener enlace para modificar respuestas enviadas","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.355-06:00","updated":"2024-04-05T16:43:54.550-06:00"}
---

# Script Google Sheets para obtener enlace para modificar respuestas enviadas

La línea siguiente especifica el nombre de la hoja a utilizar

    var sheetName = 'Form Responses 1';

En la línea siguiente se usa el valor anterior para obtener un objeto de la clase "Sheet"

    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetName);

Pero como en tu hoja de cálculo no existe una hoja con el nombre `Form Responses 1`, se asigna `null` a la variable `sheet`.

Puedes corregir el error de dos formas

1. Cambia `Form Responses 1` por el nombre de la hoja vinculada al formulario de Google, **ó**
2. Cambia el nombre de la hoja vinculada al formulario de Google por `Form Responses 1`

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/223527\|https://es.stackoverflow.com/q/223527]]

