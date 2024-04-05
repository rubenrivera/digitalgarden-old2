---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-159425.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-159425/","title":"¿Cómo concatenar o combinar números de varias columnas en una sola sin perder los ceros que hay a la izquierda?","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.626-06:00","updated":"2024-04-05T16:43:53.696-06:00"}
---

# ¿Cómo concatenar o combinar números de varias columnas en una sola sin perder los ceros que hay a la izquierda?

# Respuesta corta

<!-- language: lang-none -->

    =ArrayFormula(JOIN("";TEXT(B2:J2;"00")))

# Explicación

- TEXT es una de las funciones que acepta rangos como argumento. 
- ArrayFormula hace que los resultados se extiendan a las celdas que requiera el resultado de la función que contiene.
- JOIN concatena valores. Una alternativa a este es TEXTJOIN.

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/159425\|https://es.stackoverflow.com/q/159425]]

