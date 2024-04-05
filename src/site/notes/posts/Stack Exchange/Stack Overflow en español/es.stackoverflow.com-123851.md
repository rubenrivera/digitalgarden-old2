---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-123851.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-123851/","title":"¿Cómo sumar/restar un día a la fecha actual en Google Apps Script?","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.417-06:00","updated":"2024-04-05T16:43:52.681-06:00"}
---

# ¿Cómo sumar/restar un día a la fecha actual en Google Apps Script?

# Respuesta corta

Una de tantas formas es combinar las funciones [getDate()][1] y [setDate()][2] de la clase Date con el operador adición +, todos de JavaScript. Ejemplo:

    function demo(){
      var fecha = new Date();
      var otraFecha = fecha.setDate(fecha.getDate() + 1);
      Logger.log(new Date(otraFecha))
    }

# Explicación

Google Apps Script está basado en JavaScript 1.6 con algunas adiciones de 1.7 y 1.8.

getDate devuelve el día del mes de la fecha especificada y setDate establece la fecha a partir de la fecha actual.

- `fecha.getDate() + 1` devuelve el día siguiente de la fecha indicada.
- `fecha.setDate(...)` devuelve el número de milisegundos que representa la fecha indicada como parámetro.
- `new Date(...)` devuelve un objeto de fecha.
- `Logger.log(...)` imprime su parámetro en los registros del editor de Google Apps Script.

  [1]: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Date/getDate
  [2]: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Date/setDate

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/123851\|https://es.stackoverflow.com/q/123851]]

