---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-522581.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-522581/","title":"App Script Google - No muestra activador","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.680-06:00","updated":"2024-04-05T16:43:57.674-06:00"}
---

# App Script Google - No muestra activador

Si no te aparece la opción de crear una activador desde formulario entonces es que estás en un proyecto "standalone" en lugar de están en un proyecto "bounded".

Podrías crear un proyecto "bounded" a tu formulario o a una hoja de cálculo vinculada a tu formulario o bien en lugar de crear el activador usando la interfaz de usuario de Google Apps Script lo hagas mediante código. Para esto necesitarás un objeto de tu formulario o de hoja de cálculo.

```
ScriptApp.newTrigger('myFunction')
.forSpreadsheet(SpredsheetApp.openById('pon_aqui_el_id_de_tu_spreadsheet'))
.onFormSubmit()
.create()
```

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/522581\|https://es.stackoverflow.com/q/522581]]

