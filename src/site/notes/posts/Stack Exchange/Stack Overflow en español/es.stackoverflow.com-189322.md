---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-189322.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-189322/","title":"¿Cómo copiar un dato en la última fila de una columna en especifico con app script?","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.728-06:00","updated":"2024-04-05T16:43:54.221-06:00"}
---

# ¿Cómo copiar un dato en la última fila de una columna en especifico con app script?

Sí, el código de Diego (el autor del video referido) te va a servir.

En

    var destRange = sheet.getRange(lastRow, 2, A.length, A[0].length).setValues(A);

reemplaza `lastRow` por `maximoFilas + 1`

y previo a ello agrega la parte del código de Diego que calcula `maximoFilas`.

Observa que el código de Diego usa `ss` mientras que el tuyo usa `ss1` así que con ajustes mínimos deberías poderlo usar sin problemas.

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/189322\|https://es.stackoverflow.com/q/189322]]

