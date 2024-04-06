---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-276538.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-276538/","title":"¿como localizar un dato, otorgando 2 parametros en un SpreadSheet con Google Apps Script?","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.506-06:00","updated":"2024-04-05T16:43:55.469-06:00"}
---

# ¿como localizar un dato, otorgando 2 parametros en un SpreadSheet con Google Apps Script?

Según entiendo se trata de encontrar una celda en una tabla de doble entrada: se debe buscar las coincidencias en los encabezados de fila y los encabezados de columna.

Para simplificar las cosas puedes reemplazar

    var data = ws.getRange(1, 1, ws.getLastRow(), ws.getLastColumn()).getValues();

por

    var data = ws.getDataRange().getValues();

En tu código ya obtienes el indice de fila. Para obtener el índice de columna puedes usar algo como esto

    var colIdx = data[0].indexOf(valor_a_buscar)

Luego para obtener el dato 

    var dato = data[filaIdx][colIdx]

donde `filaIdx` es el índice de fila, en tu código usas la variable `position`

<hr>
IMPORTANTE  

No está claro si los encabezados de columna son valores de tipo fecha o de tipo texto. Si fueran tipo fecha es importante tener presente que Google Apps Script y las hojas de cálculo de Google manejan las fechas de forma diferente y aunque al leer / escribir este tipo de valores Google Apps Script se hace cargo de la conversión hay que tener presente cómo funciona, mientras que en la hoja de cálculo la unidad de los números seriales que representan fechas es un día, en Google Apps Script/JavaScript es un milisegundo.

Quizás lo más sencillo sería en lugar de usar `getValues()` usar `getDisplayValues()` y usar como argumento de `indexOf` una cadena de texto en lugar de un objeto de tipo fecha.

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/276538\|https://es.stackoverflow.com/q/276538]]

