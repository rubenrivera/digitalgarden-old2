---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-447063.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-447063/","title":"Hipervincular una celda con más de una URL indicada en la misma","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.506-06:00","updated":"2024-04-05T16:43:57.286-06:00"}
---

# Hipervincular una celda con más de una URL indicada en la misma

Como has visto el formato automático de hipervínculos funciona únicamente cuando el texto es un hipervínculo y no cuando el texto incluye múltiples hipervínculos (independientemente del separador utilizado).

Actualmente las hojas de cálculo de Google permiten dar formato a partes del texto tanto de forma manual como usando Google Apps Script o la API de Google Sheets.

Para hacerlo manual, 

1. Pon la celda en modo de edición (por ejemplo, haz doble click en la celda)
2. Repite de 2 a 5 para cada URL
   1. Selecciona un URL
   2. Copia el URL
   3. Oprime <kbd>Ctrl</kbd>+<kbd>k</kbd>. Esto abrirá el editor de enlaces
   4. Pega el URL en la casilla correspondiente, si lo deseas edite el texto y oprime OK / Aceptar.
6. Aplica los cambios (por ejemplo presiona <kbd>Enter</kbd>)

Para usar Google Apps Script / Google Sheets API deberás familiarizarte primero con los métodos de Class Range más específicamente con [setRichtTextValue][1]


  [1]: https://developers.google.com/apps-script/reference/spreadsheet/range#setrichtextvaluevalue

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/447063\|https://es.stackoverflow.com/q/447063]]

