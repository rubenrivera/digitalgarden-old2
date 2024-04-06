---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-231688.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-231688/","title":"¿Cómo puedo obtener los datos de una fila entera en Google Sheets usando Google Apps Script?","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.506-06:00","updated":"2024-04-05T16:43:54.611-06:00"}
---

# ¿Cómo puedo obtener los datos de una fila entera en Google Sheets usando Google Apps Script?

Respuesta a la [revisión 2](https://es.stackoverflow.com/revisions/206728/2), en lo que respecta al código agregado.

El problema son los índices en `valoresFila[1]` y `valoresFila[2]`. Asumiendo que quieres los valores de las celdas de la fila activa que corresponden a las columnas A y B, reemplázalos por `valoresFila[0][0]` y `valoresFila[0][1]`

Lo anterior porque `getValues` devuelve un Array de Arrays y en JavaScript los índices de los Arrays son base 0. El primer índice corresponde a la fila y el segundo a la columna.
<hr>
En relación a la ejecución automática de la función al agregarse una respuesta desde un formulario de Google vinculado a la hoja de cálculo, en lugar de un activador `on Edit` usa un activador `on Form Submit`.

Lo anterior porque los activadores `on Edit` y `on Change`, ya sea simples o instalables sólo se activan por cambios hechos por el usuario que tiene abierta la hoja de cálculo, no por cambios hechos por otra aplicación, como los Formularios de Google, ni por código, ni por actualizaciones automáticas de funciones de hoja de cálculo como `IMPORTRANGE`.

**NOTAS IMPORTANTES**  

1. Google Apps Script maneja dos activadores instalables `on Form Submit`, uno para proyectos vinculados a hoja de cálculo y otro para proyectos vinculados a formularios, cada uno con objeto evento con propiedades particulares. Favor de consultar las propiedades de cada uno en [Events][1].
2. Los activadores como `on Form Submit` y `time-driven` no pueden hacer uso de métodos como `SpreadsheetApp.getActiveCell()` pues estos no emulan al usuario que abre una hoja de cálculo y por ende no existen celda, rango ni selección activos. Sin embargo, en el caso de proyectos vinculados a hoja de cálculo puede usarse sin problema `SpreadsheetApp.getActiveSpreadsheet()`.
3. En el caso de usar un activador `on Form Submit` en un proyecto vinculado a un formulario, si se requiere acceder a la hoja de cálculo vinculada, se podría usar [getDestinationId()][2] para obtener el id de la hoja de cálculo vinculada.

Respuesta a la [revisión 1](https://es.stackoverflow.com/revisions/206728/1)

De la pregunta...

> Buscaba entre las posibilidades una especie de método <s>`getActiveRow()`</s>, pero no lo encuentro. ¿Cómo podría obtener todos los valores de esa fila?

Hay varias formas para obtener todos los valores de una fila.

- Notación de referencias de hoja de cálculo `1:1`
- Usar la notación de array `miArray[i]`
- Usar `getRange(fila, columna, numeroFilas,numeroColumnas)`

Por ejemplo, podemos usar

    var numFila = e.range.rowStart; 
    var fila = gSheet.getRange(numFila + ":" + numFila);
    var valoresFila = fila.getValues();

donde valoresFila será un array de arrays de 1 x número de columnas de la hoja.

Si quieres limitar a sólo las filas del rango de datos (data range), podemos usar getLastColumn() el cual es ciertas circunstancias podría ser muy lento, o bien usar `gSheet.getDataRange().getValues()[0].length` para obtener el número de columnas de rango de datos.

  [1]: https://developers.google.com/apps-script/guides/triggers/events
  [2]: https://developers.google.com/apps-script/reference/forms/form#getDestinationId()

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/231688\|https://es.stackoverflow.com/q/231688]]

