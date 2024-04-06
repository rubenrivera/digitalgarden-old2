---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-423100.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-423100/","title":"Copiar un SpreadSheet con un formulario incluido","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.355-06:00","updated":"2024-04-05T16:43:57.036-06:00"}
---

# Copiar un SpreadSheet con un formulario incluido

Puedes usar `getFormUrl()` con un objeto `Spreadsheet` o `Sheet`

Si lo usas con un objeto `Spreadsheet` y tu hoja de cálculo tiene más de un formulario, el formulario al que corresponderá el  URL es indeterminado (podría se cualquiera)

Si los usas con un objeto `Sheet` the devolverá el URL del formulario que envía datos a la hoja correspondiente o `null` si esa hoja no tiene ningún formulario asociado.

Referencias

- https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet#getformurl
- https://developers.google.com/apps-script/reference/spreadsheet/sheet#getformurl

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/423100\|https://es.stackoverflow.com/q/423100]]

