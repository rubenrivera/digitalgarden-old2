---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-780.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-780/","title":"Cómo leer valores de hora correctamente en una hoja de cálculo de Google","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.416-06:00","updated":"2024-04-05T16:43:48.323-06:00"}
---

# Cómo leer valores de hora correctamente en una hoja de cálculo de Google

# Panorama

La celda `A1` tiene el valor `01:00` (una hora). Al usar una función como la siguiente:

    function prueba() {
      var libro = SpreadsheetApp.getActiveSpreadsheet();
      var hoja = libro.getSheetByName("Hoja 1");
      var datos = hoja.getDataRange().getValues();
      var valor = datos[0][0];
      Logger.log(valor.getHours());
      Logger.log(valor.getMinutes());
    }

Se registran los valores

    1.0  
    36.0

Lo esperado es que los valores registrados fueran:

    1.0  
    0.0

¿Cómo puedo hacer que mi código lea los valores esperados?

# Comentarios

Esta es una "pregunta real" para la cual encontré la respuesta en [stackoverflow.com](http://stackoverflow.com). Véase la referencia.

No se tradujo la pregunta, pero podría decir que está basada en la referencia.

# Referencias

- [How to read the correct time values from Google Spreadsheet](https://stackoverflow.com/q/17715841/1595451)

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/780\|https://es.stackoverflow.com/q/780]]

