---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-362634.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-362634/","title":"Cómo encontrar la posición de un determinado elemento dentro de un vector","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.728-06:00","updated":"2024-04-05T16:43:56.683-06:00"}
---

# Cómo encontrar la posición de un determinado elemento dentro de un vector

Estas pasando por alto que `getValues()` devuelve una matriz (también lo podemos llamar vector de vectores, Array bidimensional entre otras formas)

De hecho, el registro te da pistas de ello cuando `Logger.log('ÀCA SE ENCUENTRA', datosOriginales[55]);` escribe `[23?57]` (los corchetes indican que se trata de un vector, y como no hay comas, que este contiene un elemento)

En términos de hoja de cálculo, en lugar de "vector" como el que se muestra como resultado de `Logger.log(datosOriginales);` se usa **columna** y a la posición nos referimos como **fila**, entonces, podemos decir que lo que estas buscando es encontrar la fila en la que se encuentra `23?57` en la **Columna A**.

Una forma simple es usar un bucle y para ello el que se encuentra más comunmente es `for`

    function myFunctionIndexOF() {
    
      var EquiposStock = SpreadsheetApp.getActiveSpreadsheet()
                                       .getSheetByName("EquiposStock");
      var datosOriginales = EquiposStock.getRange(2, 1, EquiposStock.getLastRow(), 1)
                                        .getValues(); 
    
      var filtro = '23?57';
    
      // var pos = datosOriginales.indexOf('23?57');
    
      var filas = datosOriginales.length;
    
      for(var fila = 0; fila < filas; fila++){
    
        if( datosOriginales[fila][0] === '23?57') break;
    
      }
    
      
    
      Logger.log('ÀCA SE ENCUENTRA', datosOriginales[55]);
     // Logger.log('POSICION',pos);
      Logger.log('POSICION', fila);
      Logger.log(datosOriginales);
    
    }

Toma en cuenta que los índices de los Array en Google Apps Script/JavaScript son base 0 y que la numeración de filas de la hoja de cálculo de Google es base 1. Dependiendo del uso que la vayas a dar a la "posición" habría que ajustar el número de fila considerando que los datos han sido tomados a partir de la fila 2.

Puedes usar otros bucles e incluso métodos de `Array`

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/362634\|https://es.stackoverflow.com/q/362634]]

