---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-555613.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-555613/","title":"¿Cómo ejecutar un activador instalable para cada función?","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.418-06:00","updated":"2024-04-05T16:43:57.988-06:00"}
---

# ¿Cómo ejecutar un activador instalable para cada función?

Debes crear un activador instalable para cada función. Una manera de hacerlo modificar `const functionName = 'A';` ya sea que lo ejecutes una vez y luego lo modifiques para cada función y repitas hast completar o bien puedes hacer algo más elegante como usar un bucle para lo cual podrías declarar un Array con los nombres de las funciones para las cuales quieres crear el activador instalable.

<hr>

La función A es ineficiente, no tiene sentido activar las celdas cuando se está actualizando el spreadsheet con un activador basado en tiempo. Mejor agrega la fórmula directamente al rango:

```javascript
function A() {
  var spreadsheet = SpreadsheetApp.getActive();
  spreadsheet.getRange('A2').setFormula('=2+2');
};
```

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/555613\|https://es.stackoverflow.com/q/555613]]

