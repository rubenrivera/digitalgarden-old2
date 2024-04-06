---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-461686.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-461686/","title":"Problema con el formato hora al pasar los datos de spreadsheet a html","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.507-06:00","updated":"2024-04-05T16:43:57.384-06:00"}
---

# Problema con el formato hora al pasar los datos de spreadsheet a html

La repuesta breve es que la hoja de cálculo de Google maneja las horas y duraciones como números seriales de la misma forma que lo hace con las fechas. Lo que estás viendo en el logger/consola es el resultado de `toString()` del objeto tipo `Date` que pasa la hoja de cálculo de Google a Google Apps Script / JavaScript.

Preguntas Relacionadas

- https://es.stackoverflow.com/q/780/65

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/461686\|https://es.stackoverflow.com/q/461686]]

