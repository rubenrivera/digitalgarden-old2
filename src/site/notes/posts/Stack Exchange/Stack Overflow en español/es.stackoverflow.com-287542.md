---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-287542.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-287542/","title":"Problemas al acceder a mi formulario en google sheets","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.679-06:00","updated":"2024-04-05T16:43:55.882-06:00"}
---

# Problemas al acceder a mi formulario en google sheets

El problema está relacionado con la configuración de la aplicación web de Google Apps Script.

Tienes dos parámetros relacionados con permisos

1. "Ejecutar como" que se refiere a cuales permisos debe usar la aplicación, los del usuario que la ejecuta  o los del propietario de la aplicación 
2. Quien puede ejecutar la aplicación

(imagen tomada del la referencia indicada más abajo)  

[![][1]][1]  

En el parámetro 1 asegúrate de especificar que se ejecute con los permisos del propietario de la aplicación

Referencia

- https://developers.google.com/apps-script/guides/web


  [1]: https://i.stack.imgur.com/ZKLim.png

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/287542\|https://es.stackoverflow.com/q/287542]]

