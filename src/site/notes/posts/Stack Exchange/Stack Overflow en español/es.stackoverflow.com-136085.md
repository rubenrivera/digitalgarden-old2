---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-136085.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-136085/","title":"obtener valor input para minDate","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.592-06:00","updated":"2024-04-05T16:43:52.897-06:00"}
---

# obtener valor input para minDate

El código de la pregunta tiene mucho "ruido". A continuación un ejemplo usando JavaScript puro:

Lo siguiente agrega la fecha del campo "Desde" como fecha mínima del campo "Hasta" al salir del primero.

<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-js -->

    var desde = document.getElementById('desde');
    desde.addEventListener('change', setMin);

    function setMin() {
      var hasta = document.getElementById('hasta');
      hasta.min = desde.value;
    }

<!-- language: lang-html -->

    <div>Desde: <input type="date" id="desde"></div>
    <div>Hasta: <input type="date" id="hasta"></div>

<!-- end snippet -->



# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/136085\|https://es.stackoverflow.com/q/136085]]

