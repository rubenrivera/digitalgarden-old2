---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-60559.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-60559/","title":"Excel transforma números en fechas","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.505-06:00","updated":"2024-04-05T16:43:49.873-06:00"}
---

# Excel transforma números en fechas

El comportamiento normal de Excel, así como el de otras hojas de cálculo, es que los valores que coinciden con los formatos de fecha sean considerados como fecha, los cuales se guardan como número serializados.

Los usuarios que hacen uso intensivo de hojas de cálculo evitan los códigos que tienen formato similar a un formato de fecha, pero un problema es que los formatos de fecha varían con las configuración regional. 

Si no te es posible cambiar la forma en la que se escriben los códigos, intenta colocar un apóstrofe como prefijo para indicar que el valor capturado debe ser tratado como texto. Si esto no funciona, agrega algo más, por ejemplo `C` y luego eliminalo en tu DTS.

**Referencias**

- [Mantener los ceros a la izquierda][1]


  [1]: https://support.office.com/es-es/article/Mantener-los-ceros-a-1bf7b935-36e1-4985-842f-5dfa51f85fe7

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/60559\|https://es.stackoverflow.com/q/60559]]

