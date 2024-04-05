---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-514455.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-514455/","title":"¿Cómo usar contadores o ciclos en Google Sheets con Apps Script?","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.680-06:00","updated":"2024-04-05T16:43:57.593-06:00"}
---

# ¿Cómo usar contadores o ciclos en Google Sheets con Apps Script?

En síntesis, no hagas copiar pegar sólo los valores en un ciclo, esto porque es mala idea hacer muchas llamadas a `SpreasheetApp` para copiar los valores de un rango a otros. Si quieres copiar un rango de una posición a otra de la manera más eficiente usa el "Advanced Sheets Service" y más específicamente `batchUpdate`, si no estás listo para usar este servicio, aprende a trabajar por lotes usando matrices bidimencionales y métodos como `Range.setValues(values)` (este último para pasar sólo los valores, necesitarás más para pasar también el formato).

<hr>

En Google Apps Script / JavaScript hay diversas formas de usar "contadores y ciclos", de manera general puedes usar `for` (este tiene varias formas) , `while`, `do`, si vas trabajar con vectores (Arrays) puedes usar Array.prototype.forEach, entre otras tantas.

Lo primero es que te familiarices con el asignación de valores (literales) y objetos, incluyendo fechas, vectores entre otros,  a variables. Si quieres pasar directamente al tema de "contadores y ciclos" lee [Bucles e iteración](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Loops_and_iteration), que es parte de las guías de introducción a JavaScript de Mozilla Developer Network (MDN) para que empieces a familiarizarte con el vocabulario.

**Además** en el caso particular de Google Apps Script es importante saber que en el [artículo sobre buenas prácticas][1] de la documentación oficial se recomienda usar al mínimo las llamadas a los servicios de esta plataforma ya que estas llamadas son "caras" en términos de tiempo de ejecución, en otras palabras, usar algo como `hoja1.getRange('D31:P31').copyTo(hoja1.getRange('D30'), SpreadsheetApp.CopyPasteType.PASTE_VALUES, false);` en un ciclo / bucle (en inglés loop) es lento y si los haces decenas de veces sería muy lento e incluso corres el riesgo de exceder el tiempo límite de ejecución, el cual podría ser de 30 segundos, 6 o 30 minutos dependiendo del tipo de cuenta de Google que utilices y de la forma en la que llames tu script.

Recomendaciones

1. Aprende el uso de variables en JavaScript.
2. Aprende el manejo de vectores y matrices en JavaScript.
3. Evita lo más posible hacer `Sheet.getRange()` y particularmente  / `Sheet.getRange()` combinado con `Range.copyTo()` en un ciclo / bucle .
4. Considera sobreescribir todos los valores de la hoja en lugar de sólo hacerlo en rangos específicos cuando sea imperativo reducir el tiempo de ejecución.

Tips

1. `Sheet.getDataRange().getValues()` puedes leer todos los valores de la hoja en una sóla llamada.
2. `Sheet.getRangeList()` permite leer en una sóla llamada varios rangos a la vez.
3. El "Advance Sheets Service" tiene el comando `batchUpdate` con el cual es posible hacer muchos cambios a una hoja de cálculo en una sóla llamada.

Relacionado

- https://es.stackoverflow.com/q/201689/65
- https://es.stackoverflow.com/q/355240/65
- https://es.stackoverflow.com/q/474887/65

  [1]: https://developers.google.com/apps-script/guides/support/best-practices

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/514455\|https://es.stackoverflow.com/q/514455]]

