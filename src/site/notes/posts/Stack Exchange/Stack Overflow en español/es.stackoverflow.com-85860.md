---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-85860.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-85860/","title":"Suma con decimales","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.505-06:00","updated":"2024-04-05T16:43:51.791-06:00"}
---

# Suma con decimales

`parseInt` convierte los valores a enteros, en lugar de ese usa `parseFloat`.

A continuación un ejemplo con base en el código de la pregunta. Las líneas originales que habría que cambiar las he comentado y continuación el cambio propuesto.

<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-js -->

    function sumar(valor) {
      var total = 0;
      //valor = parseInt(valor); // Convertir el valor a un entero (número).
      // total = document.getElementById('spTotal').innerHTML;

      total = parseFloat(document.getElementById('spTotal').innerHTML);

      // Aquí valido si hay un valor previo, si no hay datos, le pongo un cero "0".
      total = (total == null || total == undefined || total == "") ? 0 : total;

      /* Esta es la suma. */
      // total = (parseInt(total) + parseInt(valor));
      total += parseFloat(valor);

      // Colocar el resultado de la suma en el control "span".
      document.getElementById('spTotal').innerHTML = total;
    }

<!-- language: lang-html -->

    <input type="number"/><br/>
    <input type="button" value="Sumar" onclick="let valor = document.querySelector('input[type=number]').value; sumar(valor);"/><br/>
    <div id="spTotal">0</div>


<!-- end snippet -->



# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/85860\|https://es.stackoverflow.com/q/85860]]

