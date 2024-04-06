---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-235185.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-235185/","title":"Filtrado automático en la hoja de calculo de Google","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.627-06:00","updated":"2024-04-05T16:43:54.724-06:00"}
---

# Filtrado automático en la hoja de calculo de Google

El primer argumento de filterByText debe ser un una Array 2D pero tu código está pasando un objeto Class Range.

Una forma poco elegante pero muy, muy simple de arreglarlo es agregando `getValues()` a

    var rangeLlista = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Llista").getRange("A6:AX1000");

quedaría de la siguiente forma:

    var rangeLlista = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Llista").getRange("A6:AX1000").getValues();

Nótese que se agregó `getValues()` antes del `;`. Este método devuelve un Array 2D.

<hr>

A continuación un ejemplo del uso de `ArrayLib.filterByText()` y el vaciado del resultado en una hoja determinada.

    function myFunction1() {
      var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
      var address = 'Hospital2016!A4:P1833' // Referencia de los datos origen
      var data = spreadsheet.getRange(address).getValues();
      
      // Filtrar datos y obtener número de filas y columnas
      var columnIndex = 6 // OCUPACION [columna G]
      var values = ['HOGAR','ESTUDIANTE']; // Valores a incluir
      var filteredData = ArrayLib.filterByText(data, columnIndex, values);
      var rows = filteredData.length; // número de filas
      var columns = filteredData[0].length; // número de columnas
      
      // Pasar los datos a la hoja destino
      var destino = 'Hoja 1';
      spreadsheet.getSheetByName(destino).getRange(2,1,rows,columns).setValues(filteredData);
    }

<hr>

Prueba cambiar

    RangeAsignacion.getCell(2,1).getValue(),
    RangeAsignacion.getCell(5,1).getValue()

a

    RangeAsignacion.getCell(2,1).getValue().toString(),
    RangeAsignacion.getCell(5,1).getValue().toString()

<hr>
El siguiente ejemplo a mi me funciona sin problemas

    function test2(){
      var n = SpreadsheetApp.getActiveRange().getValue().toString();
      Logger.log(n);
    }

A continuación el transcript de ejecución

<!-- language: lang-none -->

    [19-02-08 13:42:40:252 PST] Starting execution
    [19-02-08 13:42:40:258 PST] SpreadsheetApp.getActiveRange() [0 seconds]
    [19-02-08 13:42:40:373 PST] Range.getValue() [0.114 seconds]
    [19-02-08 13:42:40:386 PST] Logger.log([1, []]) [0 seconds]
    [19-02-08 13:42:40:388 PST] Execution succeeded [0.129 seconds total runtime]

<hr>

En relación al "filtro incompleto", aplica primero un criterio y luego al resultado de este aplica el segundo, algo así como lo siguiente:

    function myFunction2() {
      var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
      var address = 'Hospital2016!A4:P1833' // Referencia de los datos origen
      var data = spreadsheet.getRange(address).getValues();
      
      // Filtrar datos y obtener número de filas y columnas
      var columnIndex = 6 // OCUPACION [columna G]
      var values1 = ['HOGAR']; // Valores a incluir
      var filteredData1 = ArrayLib.filterByText(data, columnIndex, values1);


      var values2 = ['ESTUDIANTE']; // Valores a incluir
      var filteredData2 = ArrayLib.filterByText(filteredData1, columnIndex, values2);


      var rows = filteredData2.length; // número de filas
      var columns = filteredData2[0].length; // número de columnas
      
      // Pasar los datos a la hoja destino
      var destino = 'Hoja 1';
      spreadsheet.getSheetByName(destino).getRange(2,1,rows,columns).setValues(filteredData2);
    }

<hr>

En 

    var filter2 = ArrayLib.filterByText(rangeLlista, 7, Asignacion2);

en lugar de `rangeLlista` debe ser `filter1`

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/235185\|https://es.stackoverflow.com/q/235185]]

