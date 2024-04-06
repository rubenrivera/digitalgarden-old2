---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-260479.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-260479/","title":"Optimizar script o aumentar tiempo de ejecucion en una hoja de calculo de google","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.760-06:00","updated":"2024-04-05T16:43:55.294-06:00"}
---

# Optimizar script o aumentar tiempo de ejecucion en una hoja de calculo de google

Los servicios de Google Apps Script como SpreadsheetApp son "caros" en términos de tiempo de ejecución por eso se aconseja siempre que sea posible usar los métodos que devuelven matrices como `setValues` en lugar de los que devuelven valores puntuales como `setValue`.

En concreto, considera en lugar de usar `setValue` en tu sentencia `for` usar un Array 2D y pasar todos los valores con un sólo `setValues` luego dicha sentencia.

Otro cosa que podría ayudar es que en lugar de llamar `SpreadsheetApp.getActiveSpreadsheet().getSheetByName("ContadorHoras")` cada vez que llames `getRange` asigna este a una variable. 

Mi práctica es minimizar el uso de cadenas, en cierta medida porque esto ayuda a la depuración del código cuando esto sea necesario y porque tener sentencias cortas facilita la lectura del código. Creo que además esto ayuda a la optimización de ejecución que realiza Google Apps Script internamente pero no he hecho pruebas.

En cuanto a aumentar el tiempo límite, las cuentas de G Suite tienen un límite de 30 minutos.

Relacionado

- https://es.stackoverflow.com/q/249749/65
- https://es.stackoverflow.com/q/201689/65

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/260479\|https://es.stackoverflow.com/q/260479]]

