---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-28671.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-28671/","title":"Error \"Estas filas estás fuera de los límites\"","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.626-06:00","updated":"2024-04-05T16:43:48.671-06:00"}
---

# Error "Estas filas estás fuera de los límites"

#Respuesta corta

Reemplaza  

    hoja1.deleteRows(2,datoshoja1.length)
por  

    hoja1.deleteRows(2,datoshoja1.length-1)

#Explicación
El error ocurre seguramente porque el número de filas de datoshoja1 es el mismo que el número de filas de la hoja.

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/28671\|https://es.stackoverflow.com/q/28671]]

