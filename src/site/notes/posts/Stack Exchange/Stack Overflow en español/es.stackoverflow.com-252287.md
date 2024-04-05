---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-252287.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-252287/","title":"Optimizar código en Google Apps Script - GAS","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.759-06:00","updated":"2024-04-05T16:43:55.137-06:00"}
---

# Optimizar código en Google Apps Script - GAS

1. Google desaconseja el uso de `Browser.msgBox(mensaje)`. En su lugar usa `SpreadsheetApp.getUi().alert(message)`.
2. Evita hacer llamadas a los servicios de Google en bucles (for loops y demás). En este caso en particular, lee los datos usando una llamada al servicio de SpreadsheetApp y otra para pasar datos a la hoja.


# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/252287\|https://es.stackoverflow.com/q/252287]]

