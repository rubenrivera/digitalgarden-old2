---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-237785.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-237785/","title":"Filtrado automático en la hoja de calculo de Google","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.627-06:00","updated":"2024-04-05T16:43:54.814-06:00"}
---

# Filtrado automático en la hoja de calculo de Google

En el siguiente ejemplo se muestra como usar el método filterByText de la librería ArrayLib referida en la pregunta. Con la finalidad facilitar la comprensión de este le simplificado usando una función regular en lugar de usar un activador simple y los criterios se establecen mediante literales en lugar de leer estos de la hoja de cálculo.

Para el ejercicio se utilizaron los datos de Hospital2016.csv descargado de https://datos.gob.mx el verano de 2018. Los criterios son filtrar los datos de `OCUPACIÓN = HOGAR` y `GENERO = FEMENINO`. El resultado se vacía en la hoja llamada `Hoja 1` previamente creada. Para mantener simple le ejemplo, se asume que la hoja destino está vacía.

    function filtrarDatos2Criterios() {
      var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
      var address = 'Hospital2016!A4:P1833' // Referencia de los datos origen
      var data = spreadsheet.getRange(address).getValues();
      
      // Filtrar datos usando el primer criterio
      var columnIndex1 = 6 // OCUPACION [columna G]
      var value1 = 'HOGAR'; // Valor a incluir
      var filteredData1 = ArrayLib.filterByText(data, columnIndex1, value1);
      
      // Filtrar el resultado anterior por el segundo criterio
      var columnIndex2 = 10 // GENERO [columna K]
      var value2 = 'FEMENINO'; // Valor a incluir
      var filteredData2 = ArrayLib.filterByText(filteredData1, columnIndex2, value2);
      
      // Determinar número de filas y columnas requeridos para desplegar el resultado
      var rows = filteredData2.length; // número de filas
      var columns = filteredData2[0].length; // número de columnas
      
      // Pasar los datos a la hoja destino
      var target = 'Hoja 1';
      spreadsheet.getSheetByName(target).getRange(2,1,rows,columns).setValues(filteredData2);
    }

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/237785\|https://es.stackoverflow.com/q/237785]]

