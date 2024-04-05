---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-224635.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-224635/","title":"Cómo leer valores de hora correctamente en una hoja de cálculo de Google","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.506-06:00","updated":"2024-04-05T16:43:54.557-06:00"}
---

# Cómo leer valores de hora correctamente en una hoja de cálculo de Google

# Respuesta corta

Desde el punto de vista de un principiante, o "rápido y sucio", quizás la solución más sencilla es que en lugar de usar métodos como `getValue` / `getValues` se use `getDisplayValue` / `getDisplayValues` para trabajar con objetos tipo String en lugar de objetos tipo Date.

# Conceptos básicos

Internamente las hojas de cálculo de Google y JavaScript usan números seriales para manejar fechas y horas, esto es, usan un "EPOCH", como punto de referencia o cero y a partir del cual se suman unidades de tiempo para determinar la fecha-hora. 

## Unidad de tiempo

- En las hojas de cálculo de Google la unidad de tiempo es un día 
- En JavaScript es un milisegundo.

## EPOCH
- En la hoja de cálculo de Google el EPOCH es 30 de diciembre de 1899 00:00:00. No usa zona horaria
- En JavaScript el EPOCH es 1 de enero de 1970, 00:00:00 UTC

## Conversión
Cuando Google Apps Script lee un valor de hora, también considera la zona horaria de la hoja de cálculo y la zona horaria del proyecto de Apps Script, las cuáles no siempre son iguales, y esto podría agregar unos minutos y segundos en ciertos casos, por ejemplo

- Si en la hoja de cálculo de Google configurada con zona horaria del Centro de México se tiene `0:00:00`, el objeto Date mostrará `Sat Dec 30 1899 00:36:36 GMT-0600 (CST)`

## Ejemplo
### Modificación del código de la pregunta

    function prueba() {
      var libro = SpreadsheetApp.getActiveSpreadsheet();
      var hoja = libro.getSheetByName("Hoja 1");
      var datos = hoja.getDataRange().getValues();
      var valor = datos[0][0].match(/\d\d/g);
      Logger.log(valor[0]); // Hora
      Logger.log(valor[1]); // Minuto
    }

### Otro ejemplo

La siguiente función toma el dato de la celda activa y si este es posterior a 7:05 escribe en la derecha `Sí`, y en caso contrario `No`. Se usa getDisplayValue y y el método match del objecto tipo String con la expresión regular `/\d\d/g`  para extraer la hora y minuto.

    function estaRetrasado() {
      var celdaActiva = SpreadsheetApp.getActiveRange();
      var destino = celdaActiva.offset(0, 1); 
      var horaSalida = celdaActiva.getDisplayValue();
      var hms = horaSalida.match(/\d\d/g); 
      var hora = 7;
      var minuto = 5;
      var resultado = (
        (hms[0] == hora && hms[1] > minuto) ||
        (hms[0] > hora)
      )?'Sí':'No';
      destino.setValue(resultado);
    }



# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/224635\|https://es.stackoverflow.com/q/224635]]

