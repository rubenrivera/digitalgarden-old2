---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-32224.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-32224/","title":"¿Cómo obtener el valor de una celda mediante una concatenación de fila y columna en una hoja de calculo de Google?","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.626-06:00","updated":"2024-04-05T16:43:48.711-06:00"}
---

# ¿Cómo obtener el valor de una celda mediante una concatenación de fila y columna en una hoja de calculo de Google?

# Respuesta corta
Intenta con [INDIRECTO][1]

# Explicación
INDIRECTO convierte una cadena ya sea en notación A1 o R1C1 en una referencia.

En este caso la fórmula quedaría de la siguiente forma

    =INDIRECTO(B3&B4)

Nótese que el operador `=` sólo se incluye una vez, y esto se hace al inicio de la fórmula.


  [1]: https://support.google.com/docs/answer/3093377?hl=es

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/32224\|https://es.stackoverflow.com/q/32224]]

