---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-120048.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-120048/","title":"¿Cómo obtengo una lista de valores de una Sheet en base a una condición?","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.417-06:00","updated":"2024-04-05T16:43:52.641-06:00"}
---

# ¿Cómo obtengo una lista de valores de una Sheet en base a una condición?

Usa el método [Array.prototype.filter()][1] de JavaScript con una función anónima como parámetro en la cual se evalúe la condición.

A continuación un ejemplo sencillo de cómo usarlo en una secuencia de comandos (script) vinculada a una hoja de cálculo de Google. 

Para fines de ejemplo, se indica como referencia `A:B`. La condición es que el que los valores de la columna B  deben ser iguales al parámetro `area`.

    function miFiltro(area) {
      var referencia = "A:B";
      var valores = SpreadsheetApp.getActiveSheet().getRange(referencia).getValues();
      var columna = 1; // Indice base 0;
      var salida = valores.filter(function(valor){
        return valor[columna] == area;
      });
      return salida;
    }

  [1]: https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/filter


# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/120048\|https://es.stackoverflow.com/q/120048]]

