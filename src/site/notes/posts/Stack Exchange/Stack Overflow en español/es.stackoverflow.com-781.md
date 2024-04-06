---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-781.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-781/","title":"Cómo leer valores de hora correctamente en una hoja de cálculo de Google","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.416-06:00","updated":"2024-04-05T16:43:48.325-06:00"}
---

# Cómo leer valores de hora correctamente en una hoja de cálculo de Google

#Panorama

La hoja de cálculo y Javascript manejan de forma diferente las fechas por lo que es necesario introducir una líneas de código adicionales. Se presenta una función principal y dos complementarias para obtener segundos, minutos u horas a partir de una fecha.

#Código

Modificaciones a la función presentada en la pregunta:

    function prueba() {
      var libro = SpreadsheetApp.getActiveSpreadsheet();
      var hoja = libro.getSheetByName("Hoja 1");
      /* Las siguientes líneas se puede retirar
        var datos = hoja.getDataRange().getValues();
        var valor = datos[1][1];
        Logger.log(valor.getHours());
        Logger.log(valor.getMinutes());
      */
      // Agregar las siguientes líneas
      var h = Math.floor(getValueAsHours(hoja.getRange(2,2)));
      var m = Math.floor(getValueAsMinutes(hoja.getRange(2,2))) - h*60;
      Logger.log(h);
      Logger.log(m);
    }

De la [respuesta](https://stackoverflow.com/a/17727300/1595451) de [Eric Koleda](https://stackoverflow.com/users/702875/eric-koleda) del 2013-07-22 14:20:54Z se tomaron las siguientes funciones auxiliares:

    function getValueAsSeconds(range) {
      var value = range.getValue();
    
      // Tomar el valor de fecha en la zona horaria de la hoja de cálculo.
      var spreadsheetTimezone = range.getSheet().getParent()
          .getSpreadsheetTimeZone();
      var dateString = Utilities.formatDate(value, spreadsheetTimezone, 
          'EEE, d MMM yyyy HH:mm:ss');
      var date = new Date(dateString);
    
      // Inicializar la fecha del epoch.
      var epoch = new Date('Dec 30, 1899 00:00:00');
    
      // Calcular el número de milisegundos entre el epoch y el valor
      var diff = date.getTime() - epoch.getTime();
    
      // Convertir los milisegundos a segundos y devolver el resultado.
      return Math.round(diff / 1000);
    }
    
    function getValueAsMinutes(range) {
      return getValueAsSeconds(range) / 60;
    }
    
    function getValueAsHours(range) {
      return getValueAsMinutes(range) / 60;
    }

Ejemplo de uso para registrar las horas de la celda `A1`.

    var range = SpreadsheetApp.getActiveSheet().getRange('A1');
    Logger.log(getValueAsHours(range));

#Explicación

De la [respuesta](https://stackoverflow.com/a/17716798/1595451) de [Sergei insas](https://stackoverflow.com/users/1368381/serge-insas) del 2013-07-18 15:36:28Z

Las hojas de cálculo usan como fecha de referencia `12/30/1899` mientras que Javascript usa `01/01/1970`, esto significa que hay 25,568 días de diferencia entre ambas referencias. Esto asumiendo que se usa la misma zona horaria en ambos sistemas. Cuando se convierte un valor de fecha en una hoja de cálculo a objeto de fecha de Javascript el motor GAF automáticamente agrega la diferencia para mantener la consistencia entre ambas fechas.

En este caso no se desea saber la fecha real de algo, en su lugar se desea un valor absoluto de horas, por ejemplo, una duración, así que es necesario quitar el desfasamiento de 25,568 días. Esto es realiza usando el método `getTime()` el cual da como resultado milisegundos contados desde la fecha de referencia de Javascript, la única cosa que sabes es el valor en milisegundos de la fecha de la hoja de cálculo de referencia y restar este valor de la objeto de fecha actual. Luego un poco de matemáticas para obtener horas en lugar milisegundos y terminamos.

#Comentarios

El Issue 402: Get literal string from a spreadsheet range se mencionó en la respuesta de Eric, pero esta fue [marcado como arreglado](https://code.google.com/p/google-apps-script-issues/issues/detail?id=402#c26) hace 4 días con la observación de que la documentación está por ser publicada. Se resolvió agregando range.getDisplayValue y range.getDisplayValues, sin embargo, esto podría no ser útil en el caso de que no se desee modificar el formato en el que se muestra un dato del tipo fecha.

En relación al código, se tradujeron los comentarios incluidos en el mismo, pero las nombres de la variables se dejaron tal cual. Se introdujo un salto de línea en un de las líneas que estaba demasiado larga para evitar que se muestre la barra de desplazamiento horizontal.

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/781\|https://es.stackoverflow.com/q/781]]

