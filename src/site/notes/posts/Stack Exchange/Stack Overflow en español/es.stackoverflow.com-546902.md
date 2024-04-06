---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-546902.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-546902/","title":"¿por qué me sigue apareciendo Cannot read property 'getRange' of undefined?","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.418-06:00","updated":"2024-04-05T16:43:57.939-06:00"}
---

# ¿por qué me sigue apareciendo Cannot read property 'getRange' of undefined?

El error ocurre porque se llama `Sheet` antes de que esta variable haya sido declarada. Intenta mover

```
var Sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("formulario"); 
```

antes de la línea indicada en el mensaje de error.

Notas: 

- El código deberá estar en un proyecto contenido por una hoja de cálculo que contenga una hoja llamada `formulario`.
- El código tiene otros errores, por ejemplo, en la línea

    ```
     Client.Date = Sheet.getRange(ActiveRow , ColSubDate).getValue;
    ```

    faltan los paréntesis de `getValue`.

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/546902\|https://es.stackoverflow.com/q/546902]]

