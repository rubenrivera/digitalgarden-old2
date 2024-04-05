---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-384284.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-384284/","title":"¿Cómo puedo activar varias hojas en Google Apps Script?","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.728-06:00","updated":"2024-04-05T16:43:56.716-06:00"}
---

# ¿Cómo puedo activar varias hojas en Google Apps Script?

Para declarar un objeto de tipo Array de objetos de Class Sheet a partir de un Array de nombres de hojas puedes usar lo siguiente

```
const nombres = ['hoja 1','hoja 2'];
const hojas = nombres.map((nombre) => SpreadsheetApp.getActiveSpreadsheet().getSheetByName(nombre));
```

Lo anterior requiere del uso del nuevo tiempo de ejecución .

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/384284\|https://es.stackoverflow.com/q/384284]]

