---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-342976.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-342976/","title":"Búsqueda en Google Sheets con JavaScript","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.627-06:00","updated":"2024-04-05T16:43:56.549-06:00"}
---

# Búsqueda en Google Sheets con JavaScript

El problema está que en la condición has usado un índice base 1 en lugar de usar uno base 0.

    id == valores[x][6]

debería ser

    id == valores[x][5]

<hr>
Explicación

En Google Apps Script los métodos de `Class SpreadsheetApp` y sus clases hijas  como `getRow()`, `getColumn()` devuelven "índices" base 1, por ejemplo, el "índice" de  la columna F es 6, pero los índices de los elementos de un `Array` son base 0 por lo que el índice para la columna F es 5.

Aparentemente lo anterior se debe a que las funciones de hoja de cálculo como `ROW()` y `COLUMN()` devuelven el número de renglón y columna respectivamente usando como base 1 pero en JavaScript los índices son base 0.

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/342976\|https://es.stackoverflow.com/q/342976]]

