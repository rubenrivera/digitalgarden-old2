---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-238812.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-238812/","title":"¿Cómo filtrar un Array 2D usando dos criterios de coincidencia exacta?","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.627-06:00","updated":"2024-04-05T16:43:54.840-06:00"}
---

# ¿Cómo filtrar un Array 2D usando dos criterios de coincidencia exacta?

A continuación se muestra cómo usar el método `filter` de `Array` para filtrar por coincidencia exacta de dos condiciones, se asume que el área correspondiente a los datos filtrados fue vaciada previamente.


    function filtrarDatos2Criterios() {
      var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
      var address = 'Llista!A6:AX1000' // Referencia de los datos origen
      var data = spreadsheet.getRange(address).getValues();
    
      // Primer criterio
      var columnIndex1 = 5
      var value1 = 'Bomber-conductor'; // Valor a incluir
    
     
      // Segundo criterio
      var columnIndex2 = 6
      var value2 = 'A'; // Valor a incluir
     
      // Filtrar por coincidencia exacta usando dos criterios
      var filteredData = data.filter(function (dataRow) {
        return dataRow[columnIndex1] === value1 && dataRow[columnIndex2] === value2;
      });
    
    
      // Determinar número de filas y columnas requeridos para desplegar el resultado
      var rows = filteredData.length; // número de filas
      var columns = filteredData[0].length; // número de columnas
    
      // Pasar los datos a la hoja destino
      var target = 'Asignacion';
      spreadsheet.getSheetByName(target).getRange(9,1,rows,columns).setValues(filteredData);  
    }


Relacionado

- [How to filter an array of arrays](https://stackoverflow.com/a/40849506/1595451)

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/238812\|https://es.stackoverflow.com/q/238812]]

