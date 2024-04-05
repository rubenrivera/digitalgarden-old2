---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-462930.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-462930/","title":"Obtener hora con el formato hh en vez de un solo caracter","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.627-06:00","updated":"2024-04-05T16:43:57.391-06:00"}
---

# Obtener hora con el formato hh en vez de un solo caracter

En Google Apps Script hay una forma más sencilla (menos líneas de código) y más precisa ya que toma devuelve los datos de fecha hora con base en la zona horaria especificada:

    var fechaTicaje = Utilities.formatDate(new Date(), 'UTC-5','yyyy-MM-dd HH:mm:ss')

Recursos

- https://developers.google.com/apps-script/reference/utilities/utilities#formatdatedate,-timezone,-format

Relacionado

- https://es.stackoverflow.com/q/175820/65
- https://es.stackoverflow.com/q/181354/65

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/462930\|https://es.stackoverflow.com/q/462930]]

