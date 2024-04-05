---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-35316.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-35316/","title":"Agregar una celda que diga cuando fue la última actualización","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.626-06:00","updated":"2024-04-05T16:43:48.752-06:00"}
---

# Agregar una celda que diga cuando fue la última actualización

`new Date()` te devuelve un objeto de fecha de JavaScript con la fecha y hora en la que fue llamado. Al pasar este objeto a la hoja de cálculo el valor de la celda corresponde a la fecha y hora en la zona horaria de la hoja de cálculo. Es posible que debas ajustar el formato de número de la celda para que se muestre en el formato que de fecha y hora que se ajuste a tus necesidades o preferencias.

Ejemplo:
Este script escribe la fecha y hora actuales en `'Hoja 1'!A1`.

<!-- language lang-js -->

    function timestamp(){
      var destino = 'Hoja 1!A1';
      var ss = SpreadsheetApp.getActiveSpreadsheet();
      var range = ss.getRange(destino);
      range.setValue(new Date());
      
    }



# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/35316\|https://es.stackoverflow.com/q/35316]]

