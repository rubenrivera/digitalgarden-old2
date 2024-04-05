---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-96890.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-96890/","title":"Obtener URL de una página en macros de Google","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.759-06:00","updated":"2024-04-05T16:43:52.540-06:00"}
---

# Obtener URL de una página en macros de Google

El obtener el URL de una aplicación web (web app) creada con Google Apps Script resulta complicado, si no es imposible,  usando código del lado del cliente, como es el caso de los ejemplos que mencionas. 

El código del lado del servidor a usar sería `ScripApp.getService().getUrl()`

Si además quieres obtener los parámetros, deberás usar el objeto evento obtenido por medio de doGet.


Referencias

- https://developers.google.com/apps-script/reference/script/service#geturl
- https://developers.google.com/apps-script/guides/web


# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/96890\|https://es.stackoverflow.com/q/96890]]

