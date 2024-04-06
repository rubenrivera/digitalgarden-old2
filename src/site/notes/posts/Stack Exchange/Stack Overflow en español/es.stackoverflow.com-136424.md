---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-136424.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-136424/","title":"¿Cómo sumar días a una fecha?","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.592-06:00","updated":"2024-04-05T16:43:52.969-06:00"}
---

# ¿Cómo sumar días a una fecha?

`date($("#fech"))`  no te funciona porque la sintaxis es `Date()` (mayúscula inicial) en lugar `date()` y `$("#fech")` devuelve el elemento HTML con `id="fech"` pero Date() no puede procesar un elemento HTML, se le debe pasar un valor.

Suponiendo que `fech` sea un elemento input de tipo fecha la forma de obtener el dato usando jQuery es la siguiente:

    Date($('#fech').val())

<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-js -->

    console.info(Date($('#fech').val()))

<!-- language: lang-html -->

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
    <input type="date" id="fech" value="1990-12-01">

<!-- end snippet -->

Y para sumarle días sería de la siguiente forma

<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-js -->

    var fecha = new Date($('#fech').val());
    var dias = 2; // Número de días a agregar
    fecha.setDate(fecha.getDate() + dias);
    console.info(fecha)

<!-- language: lang-html -->

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
    <input type="date" id="fech" value="1990-12-01">

<!-- end snippet -->

NOTA: Si el valor de la fecha está como contenido de un `<span>`, en lugar de `val()` usamos `text()` y el código a usar sería como el siguiente:

<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-js -->

    var fecha = new Date($('#fech').text());
    var dias = 2; // Número de días a agregar
    fecha.setDate(fecha.getDate() + dias);
    console.info(fecha)

<!-- language: lang-html -->

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
    <span id="fech">1990-12-01</span>

<!-- end snippet -->



# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/136424\|https://es.stackoverflow.com/q/136424]]

