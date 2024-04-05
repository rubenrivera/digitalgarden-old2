---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-201799.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-201799/","title":"Cómo optimizar un script para ocultar filas en Hoja de Cálculo de Google, según criterios variables de una columna","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.354-06:00","updated":"2024-04-05T16:43:54.442-06:00"}
---

# Cómo optimizar un script para ocultar filas en Hoja de Cálculo de Google, según criterios variables de una columna

El no saber nada de JavaScript se resuelve fácil: **estudiando**. El hacer preguntas aquí es un excelente complemento pero no sustituye el estudio. Digo que es fácil porque y hoy en día hay muchos recursos en Internet.

En este caso en particular deberías estudiar acerca de las funciones en JavaScript. Tu código es una función la cual repite varias veces las mismas clases y métodos sólo variando algunos parámetros. Esas líneas que se repiten las puedes poner en una función como la siguiente

    function mostrarOcultar(fila){

       var Rw = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getRange("C" + fila).getValue();
    
       switch(Rw) {
         case 1:
            ss.showRows(fila,1);
            break  ;
        case 0:
            ss.hideRows(fila,1);
            break  ;
       }
    }

Nótese la inclusión del `fila` como argumento de `mostrarOcultar`

Luego esa función la podría llamar usando alguno de los bucles de JavaScript como `for`. Ejemplo: 

    var inicio = 6;
    var fin = 15;
    for(var fila = inicio;fila <= fin;fila++){
       mostrarOcultar(fila);
    }

También deberías estudiar acerca de Google Apps Script. Cada una de las llamadas a las clases y métodos de Google Apps Script es relativamente lenta. Para optimizar aún más tu función, en particular si estás planeando mostrar/ocultar un número grande de filas podrías incluir una rutina para identificar filas consecutivas a ocultar/mostrar para realizar lo procedente en una única operación.

Esto es particularmente relevante debido a que las ejecuciones de Google Apps Script tiene un límite de tiempo de ejecución de 6 minutos para cuentas comunes de Google.

Así en lugar de pasar como argumento sólo la fila, podrías pasar también cuantas filas hay que ocultar. A continuación un ejemplo:

    function mostrarOcultarMejor(fila,cuantas){
      var cuantas = cuantas || 1; // Si se omite cuantas usar 1 como valor predeterminado    

       var Rw = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getRange("C" + fila).getValue();
    
       switch(Rw) {
         case 1:
            ss.showRows(fila,cuantas);
            break  ;
        case 0:
            ss.hideRows(fila,cuantas);
            break  ;
       }
    }

Nótese que ahora además de incluir del argumento `fila` se incluye `cuantas`.


Para evitar leer una a una cada celda, puedes leer el rangos de datos usando [getDataRange][1], el cual te devolverá un objeto Array con Arrays como miembros también conocido como Array multidimiensional más específicamente un Array 2 de dos dimensiones (Array 2D).

Ejemplo

    var dataRange = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getDataRange();
    var values = dataRange.getValues();
    var C6 = values[5][2] // Los arrays en JavaScript usan índices base 0. El primer índice corresponde a la fila, el segundo a la columna.

El bucle `for` para la `mostrarOcultarMejor` quedaría de la siguiente forma

    var dataRange = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getDataRange();
    var values = dataRange.getValues();

    var inicio = 6;
    var fin = 15;
    /* Número de filas a ocultar en la iteración en curso*/
    var cuantas = 1;
    for(var fila = inicio;
        fila <= fin;
        /* En lugar de sumar siempre 1, debemos sumar el número de filas mostradas/ocultas */
        fila += cuantas 
       ){
       /* Antes del while reestablecemos en valor de cuantas a 1 */
       cuantas = 1;
       while (values[fila][2] === values[fila + cuantas][2]) {
          cuantas++;
       }

       mostrarOcultarMejor(fila,cuantas);
       
    }

Lo anterior podría ser más que suficiente para el caso indicado en la pregunta (60 o 100 filas). En caso de tener un número mucho más alto, debería incluirse una forma de prevenir que el script falle por exceder el tiempo límite de ejecución.

# Referencias

- [Guía de JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide)


  [1]: https://developers.google.com/apps-script/reference/spreadsheet/sheet#getdatarange



# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/201799\|https://es.stackoverflow.com/q/201799]]

