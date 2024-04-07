---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-260150.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-260150/","title":"Script recorrido de filas y columnas","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.759-06:00","updated":"2024-04-05T16:43:55.281-06:00"}
---

# Script recorrido de filas y columnas

El problema es que estas usando el operador de asignación `=` en lugar de alguno de los operadores de comparación de igualdad, `==` ó `===`.

En otras palabras, cambia

    rangec="G"

por

    rangec=="G"

lo mismo para las otras comparaciones de igualdad

Relacionado

- https://es.stackoverflow.com/q/57528/65

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/260150\|https://es.stackoverflow.com/q/260150]]

