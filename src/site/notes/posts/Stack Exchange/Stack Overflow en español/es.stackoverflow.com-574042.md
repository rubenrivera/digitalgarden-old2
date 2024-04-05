---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-574042.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-574042/","title":"Eliminar Valores duplicados (pero no exactos) Google App Script","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.507-06:00","updated":"2024-04-05T16:43:58.041-06:00"}
---

# Eliminar Valores duplicados (pero no exactos) Google App Script

Aparentemente el problem es que en la expresion condicional del bucle (for) está `last + 1`, siendo `last` el número de fila de la última fila. Deberías ser `last - 1` porque estás inicializando el iterador `i` en `0`.



# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/574042\|https://es.stackoverflow.com/q/574042]]

