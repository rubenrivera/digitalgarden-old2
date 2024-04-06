---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-355574.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-355574/","title":"Insertar varias veces un arreglo en la misma hoja","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.680-06:00","updated":"2024-04-05T16:43:56.627-06:00"}
---

# Insertar varias veces un arreglo en la misma hoja

Parte del problema es que Google Apps Script no envía los datos a la hoja de manera inmediata. Una solución *rápida y sucia* a tu código es insertar `SpreadsheetApp.flush();` al final del bloque de código del `for` para que en la siguiente iteración `getLastRow()` realmente devuelva la última fila que resulta después de haber agregado nuevos datos a la hoja de cálculo.

<hr>
Lo primero a tener en cuenta es que las llamadas a los métodos de Google Apps Script como `getLastRow` y `getRange` son relativamente lentas por lo que se recomienda usar un algoritmo tal que este tipo de llamadas sean mínimas, más específicamente, en lugar de usar `getLastRow`, `getRange` en un bucle para insertar en cada interación los valores a la hoja de cálculo, usar un `Array` para hacer los cambios y al finalizar el bucle ejecutar una sola vez estos métodos para pasar los datos a la hoja de cálculo.

Otra cosa a tener en cuenta es que al usar en referencias abiertas corres el riesgo de que el `Array` bidimensional devuelto por `getValues` tenga muchas filas con string vacíos. Consecuencias de esto es que si agregas algo al final tendrás muchas filas en blanco intermedias. Una práctica común es usar `getDataRange` lo cual devuelve rango de datos, es decir, desde la primera celda con datos de izquierda a derecha y arriba a abajo hasta la primera celda con datos en la dirección contraria, es decir, de derecha a izquierda y de abajo a arriba.

Si usas `getDataRange` puedes usar `Array.prototype.length` para conocer la posición de `getLastRow` teniendo ello como ventaja que bajo ciertas circunstancias es más rápido.

NOTA: A mí no me gusta usar la grabadora de macros de la hoja de cálculo de Google porque lo que hace es grabar cada activación de hoja y celda (incluye muchos métodos "`setActive`" lo cual generalmente sólo se requiere cuando se hacen las cosas manualmente y resulta innecesario cuando lo que buscamos es ahorrarnos tiempo y esfuerzo).
<hr>
Sobre el código de la rev. 7.

El error ocurre en la línea

`spreadsheet.setActiveSheet(spreadsheet.getSheetByName('BaseDatos_Ej'), true).getRange('B'+ Rango +':F').setValues(matrizPersonas);` 

elñ cual se debe a que estas usando referencias abiertas (no hay un número a la derecha de la `F`) así que en la primera iteración está tomando desde la fila 2 hasta la última fila de la hoja, que según el error es 227 filas pero `matrizPersonas` tiene 999.  La solución es que a F le concatenes el el valor de Rango más el número de filas de matrizPersonas menos 1. Cabe mencionar que sería más sencillo que usaras otra la forma de `getRange(filaInicio, columnaInicio, cantidadFilas, cantidadColumnas)`

Por cierto, No deberías poner `let ultimaFila1= spreadsheet.setActiveSheet(spreadsheet.getSheetByName('BaseDatos_Ej'), true).getRange(2, 1);` dentro del for porque sus valores no cambian. Por otro lado, deberías usar `getValue()` de lo contrario la línea `Rango += ultimaFila1;` no va a dar el resultado que pretendes. No te está dando error porque el mensaje de error ocurre en la línea previa.

<hr>

Ejemplo

    /**
     * Repite los datos un rango en la hoja de destino un número determinado de veces
     *
     */
    function repetir() {
      
      var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
      
      /* Tomaomos los valores a repetir */
      var valores = spreadsheet.getRange('Sheet1!A1:A3').getValues();
      
      /* Catidad de veces a repetir */
      var repeticiones = 5;
      
      /* Hoja de destino */
      var destino = spreadsheet.getSheetByName('Sheet2');
      
      /* Aquí pondremos los datos a pasar a la hoja destino */
      var resultado = [];
      
      /* Iteramos el número de veces que se van a repetir los datos que hemos tomado*/
      for(var i = 0; i < repeticiones; i++){
        
        /* Agreamos cada una de las filas de los datos a repetir al final de nuestra de resultado */
        valores.forEach(function(fila){
          resultado.push(fila);
        });
      }
      /* Cantidad de filas a pasar */
      var filas = resultado.length;
      
      /* Cantidad de columnas a pasar */
      var columnas = resultado[0].length;
      
      /* Posición de la fila inicial */
      var filaInicial = destino.getLastRow() + 1;
      
      /* Pasamos los datos a la hoja de destino */
      destino.getRange(filaInicial,1,filas,columnas).setValues(resultado);
    }



# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/355574\|https://es.stackoverflow.com/q/355574]]

