---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-538383.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-538383/","title":"Cómo limitar una array fórmula hasta la última fila con datos, en Google Sheets?","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.355-06:00","updated":"2024-04-05T16:43:57.749-06:00"}
---

# Cómo limitar una array fórmula hasta la última fila con datos, en Google Sheets?

El problema lo causa el uso de uso de referencias abiertas como `A2:A` en conjunto con tener filas vacías. Para no tener que eliminar las filas vacías, podrías modificar tu fórmula para limitar el número de filas que esta devuelve. Una forma de hacerlo es usando `ARRAY_CONSTRAIN` en conjunto con una forma de contar las filas requeridas. Ejemplo:

```
=ArrayFormula(ARRAY_CONSTRAIN(SI(A2:A+B2:B =0;"";A2:A+B2:B);COUNT(A2:A);1))

```

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/538383\|https://es.stackoverflow.com/q/538383]]

