---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-447744.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-447744/","title":"Concatenar un numero indeterminado de columnas en una misma celda con formato separado por comas","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.506-06:00","updated":"2024-04-05T16:43:57.324-06:00"}
---

# Concatenar un numero indeterminado de columnas en una misma celda con formato separado por comas

En lugar de leer cada columna por separado lee las tres columnas en una llamada y luego usa `Array.prototype.map` para concatenar los valores de cada fila usando `Array.prototype.join`.

Por ejemplo

```
function ConCat() {`

 var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Sheet1');
 var lr = sheet.getLastRow();
 var source = sheet.getRange(1,1,lr,3).getValues(); // Leer los valores de las columnas A, B y C
 var results = source.map(row => row.join(', '); // Concatenar los valores de cada fila

 sheet.getRange(1, 4, lr, 1).setValues(results); // Escribir los valores en la columna D

}}
```

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/447744\|https://es.stackoverflow.com/q/447744]]

