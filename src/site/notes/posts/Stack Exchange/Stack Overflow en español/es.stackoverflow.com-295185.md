---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-295185.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-295185/","title":"Script no ubica el cursor en la celda A2","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.679-06:00","updated":"2024-04-05T16:43:56.010-06:00"}
---

# Script no ubica el cursor en la celda A2

Asumiendo que la hoja de cálculo tiene una hoja llamada "Scan" y que la celda a activar A2 corresponde a esa hoja, simplemente llama la función `mypos()` al final de tu función `bodega()`

Notas: 

1. En el editor de Google Apps Script en App Maker, Google ha integrado el uso de [JSHint][1] y este sugiere que las funciones se declaren antes de ser llamadas, motivo por el cual estoy pasando `mypos()` al inicio.

2. `SpreadsheetApp.flush();` sólo se require cuando se ha modificado una hoja de cálculo y se requiere que el script tome los resultados de esas modificaciones. Considerando que todos los camibos se pendientes de aplicar se aplican al terminar la ejecución, no tiene sentido incluirlo al final.

&nbsp;

    function mypos() {
        var ss = SpreadsheetApp.getActiveSpreadsheet();
        var sheet = ss.getSheetByName("Scan");
        var cell = sheet.setActiveSelection("A2"); //getRange("A2");
        cell.activate();
        // La siguiente línea no se requiere.
        //SpreadsheetApp.flush(); 
        
    }

    function bodega() {
       var s, data, ubcns, i, rw;
          
    
    s=SpreadsheetApp.getActiveSheet();
      ubcns=s.getDataRange().getValues();
      ubcns.shift();
      // los datos que hemos de distribuir
      data=ubcns.shift();
      //solamente la primera columna
      ubcns=ubcns.map(function(x) {return x[0];});
      //quita las filas antes de 10
      for (i in [3,4,5,6,7,8,9]) ubcns.shift();
      //fila de la ubicacion
      rw=ubcns.indexOf(data[0])+10;
      //poner datos
      s.getRange(rw, 2, 1, 15).setValues([data.slice(1)]);
    var sheet = SpreadsheetApp.getActive().getSheetByName('Scan');
      var rangesToClear = ['A2:C2'];
      for (var i=0; i<rangesToClear.length; i++) { 
        sheet.getRange(rangesToClear[i]).clearContent();
       
        
        }
    // Llamamos la función mypos();
    mypos();

    }


  [1]: https://jshint.com/docs/#inline-configuration

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/295185\|https://es.stackoverflow.com/q/295185]]

