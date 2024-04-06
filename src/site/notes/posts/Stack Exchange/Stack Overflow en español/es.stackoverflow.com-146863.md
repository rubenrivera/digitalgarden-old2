---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-146863.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-146863/","title":"Como formatear una fecha de tipo Date() y sumarle n cantidad de dias dependiendo de un formato ingresado?","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.354-06:00","updated":"2024-04-05T16:43:53.299-06:00"}
---

# Como formatear una fecha de tipo Date() y sumarle n cantidad de dias dependiendo de un formato ingresado?

Agregué a al código del OP el elemento id_format_record como sugerí en un comentario. Al menos en Stack Snippet con esto funciona correctamente.

- El número de días debe ingresarse en forma n-n, ejemplo 2-122  
- La fecha de inicio debe ingresarse en forma yyyy-mm-dd ejemplo 2018-03-24  

<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-js -->

    function sumDias(fecha, numDias) {
      fecha.setDate(fecha.getDate() + numDias);
      return fecha;
    };

    function zero(n) {
      return (n > 9 ? '' : '0') + n;
    };

    $("#date1_record").on("change", function() {
      var id_format = $("#id_format_record").val();
      var id_format_array = id_format.split('-');
      var id_format = id_format_array[1];
      var numDias = parseInt(id_format);
      alert(numDias);
      if (isNaN(numDias)) {
        $('#date2_record').text('');
        return;
      }
      var fecha = document.getElementById('date1_record').value;
      var fechaActual = new Date(fecha);
      //var fechaActual = fechaActual0.getFullYear() + "-" + zero(fechaActual0.getMonth()+1) + "-" + zero(fechaActual0.getDate());
      alert(fechaActual);
      var fechaCalculada = sumDias(fechaActual, numDias);
      $('#date2_record').text(fechaCalculada.toString());
    });

<!-- language: lang-html -->

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
    <div class="col-md-2">
      <label for="id_format_record" title="Fecha Ingreso"><h6><strong>*Días</strong></h6></label>
      <input id="id_format_record" type="text" class="form-control date" style="margin-bottom: 10px">
    </div>
    <div class="col-md-2">
      <label for="date1_record" title="Fecha Ingreso"><h6><strong>*Fecha Inicio</strong></h6></label>
      <input id="date1_record" type="text" class="form-control date" style="margin-bottom: 10px">
    </div>
    <div class="col-md-2">
      <label for="date2_record" title="Fecha Ingreso"><h6><strong>*Fecha Final</strong></h6></label>
      <input id="date2_record" type="text" class="form-control date" style="margin-bottom: 10px" disabled>
    </div>

<!-- end snippet -->


<hr>
**Respuesta inicial**  

El problema es que tu código espera el número de días en formato
Si getDate no es válida, entonces el la variable fecha no hace referencia a un objeto de tipo fecha.

Usa `new Date()` para convertir la cadena a fecha. Ejemplo:

<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-js -->

    var cadena = 'Tue Mar 24 2015 18:00:00 GMT-0600 (Central America Standard Time)';
    var fecha = new Date(cadena);
    var numDias = 5;

    console.info(sumDias(fecha,numDias));

    function sumDias(fecha, numDias) {

      fecha.setDate(fecha.getDate() + numDias);
      return fecha;
    };

<!-- end snippet -->



# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/146863\|https://es.stackoverflow.com/q/146863]]

