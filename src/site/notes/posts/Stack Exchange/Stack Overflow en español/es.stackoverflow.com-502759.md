---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-502759.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-502759/","title":"ciclo de if o for en google sheet","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.680-06:00","updated":"2024-04-05T16:43:57.585-06:00"}
---

# ciclo de if o for en google sheet

El código tiene varios "problemas" 

1. No está claro porque pones las columna a ocultar en la primera celda de la fila 1 y la cantidad de columnas a ocultar en la celda de la fila 2.
2. Uso de `var`. En los ejemplos viejos de Google Apps Script se incluye `var` porque era la única forma de declarar una variable en el ámbito local. Desde que incorporó el nuevo runtime lo recomendado es usar `const` y `let` y dejar el uso de `var` sólo para los casos en los que realmente se requiera.

3. Uso repetitivo de `getRange(referencia).getValue()`. Esto es un problema las llamadas a métodos de Google Apps Script son lentas. En este caso puedes leer todos los valores de las primera fila usando `spreadsheet.getRange('A1:Z2').getValues()` (este enunciado te devolverá una Array conteniendo un Array de números, cadenas de texto, booleanos o objetos Date dependiendo del valor de cada celda por cada una de las filas. Para las celdas  vacías te devolverá una cadena de texto vacía.


Asumiendo que el código en la pregunta hace lo que requieres, c continuación incluyo un ejemplo de como se podría usar `for` para evitar repetir código por cada columna así como del uso de `getRange(referencia).getValues()`:

```
function hideColumns(){
  const sheet = SpreadsheetApp.getActiveSheet();
  const values = sheet.getRange('A1:Z2').getValues(); // lee todos los valores
  for(let i = 0; i < values[0].length; i++){ // itera por cada una de las columnas
     let c = values[0][i]; // toma el valor de la primera fila, columna i
     let a = values[1][i]; // toma el valor de la segunda fila, columna i
     sheet.hideColumns(c,a);
  }
}
```

Nota: Para tener un script más eficiente en términos de tiempo de ejecución usa el servicio avanzado de Google Sheets.

https://developers.google.com/apps-script/guides/services/advanced 



# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/502759\|https://es.stackoverflow.com/q/502759]]

