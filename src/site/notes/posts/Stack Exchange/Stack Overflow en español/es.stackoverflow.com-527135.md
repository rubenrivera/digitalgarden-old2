---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-527135.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-527135/","title":"Arreglo para tomar varias columnas para que hagan lo mismo, y no repetir el código","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.728-06:00","updated":"2024-04-05T16:43:57.690-06:00"}
---

# Arreglo para tomar varias columnas para que hagan lo mismo, y no repetir el código

Una de tantas formas

1. Antes del for declara una variable que incluya las los números de columnas, por ejemplo

       var columnas = [8,10];

2. Dentro del for reemplaza

       if (culminado == "SI") {
           sheet[0].getRange(startRow, 8).setValue(new Date());
       }
       if (culminado == "NO") {
           sheet[0].getRange(startRow, 8).setValue(nodisponible);
       }

   por

       columnas.forEach(columna => {
         const value = culminado == "SI"
         ? new Date()
         : nodisponible;
         sheet[0].getRange(startRow, columna).setValue(value);
                  
       }); 

Lo anterior hace uso de

 - Array
 - Array.prototype.forEach
 - [Operador condicional / Operator ternario][1]


  [1]: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Conditional_Operator

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/527135\|https://es.stackoverflow.com/q/527135]]

