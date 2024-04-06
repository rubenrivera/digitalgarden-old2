---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-516853.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-516853/","title":"Como hago un Trigger en Google App Script que se ejecute al recibir valores de otro libro de Sheets","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.680-06:00","updated":"2024-04-05T16:43:57.610-06:00"}
---

# Como hago un Trigger en Google App Script que se ejecute al recibir valores de otro libro de Sheets

En Google Apps Script los triggers no pueden ser activados por eventos generados por otros triggers:

- edit (editar) sólo se activa cuando un usuarios hace una edición usando la interfaz de Google Sheets
- change (cambio) se activa cuando se realizan cambios a la hoja de cálculo excepto si esos cambios son realizados por Google Apps Script

Una opción es que tu script llame la función asociada al activador y si es necesario que es pase objeto con la estructura requerida. Por ejemplo


```
function miFuncion(){
  const e = {
    source: SpreadsheetApp.getActiveSpreadsheet()
  }
  functionDeActivador(e);
}
```

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/516853\|https://es.stackoverflow.com/q/516853]]

