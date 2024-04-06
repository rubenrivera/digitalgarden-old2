---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-71502.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-71502/","title":"¿Por qué un segundo IF que se cumple no muestra mensaje de alerta?","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.679-06:00","updated":"2024-04-05T16:43:50.636-06:00"}
---

# ¿Por qué un segundo IF que se cumple no muestra mensaje de alerta?

El problema está en que estás modificando los valores de las variables a las que estas pasando los datos de entrada antes de terminar de realizar todas las evaluaciones. He convertido a comentario las líneas de código que hace eso, para que veas que al usar como datos de entra 1, 4 y 5 se mostrarán las alertas correspondientes a cada `if`.



<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-js -->

    function validar() {
    var sancionado = document.getElementById("sancionado");
    var sancionador = document.getElementById("sancionador");
    var superior = document.getElementById("superior");
    var mensaje = "";
    alert("Sancionado: " + sancionado.value);
    alert("Sancionador: " + sancionador.value);
    alert("Superior: " + superior.value);




    if (sancionador.value > sancionado.value) {
        event.preventDefault();
        //sancionado.value = 0;
        //sancionador.value = 0;
        alert("El sancionador no puede ser de grado inferior al sancionado");

    }

    if (superior.value > sancionado.value) {
        event.preventDefault();
        //superior.value = 0;
        //sancionado.value = 0;
        alert("El superior no puede ser de grado inferior al sancionaDO");

    }

    if (superior.value > sancionador.value) {
        event.preventDefault();
        //superior.value = 0;
        //sancionador.value = 0;
        alert("El superior no puede ser de grado inferior al sancionaDOR");
    }

    }

<!-- language: lang-html -->

    <input type="text" id="sancionado">Sancionado<br>
    <input type="text" id="sancionador">Sancionador<br>
    <input type="text" id="superior">Superior<br>

    <input type="button" value="calcular" onclick="validar();">

<!-- end snippet -->



# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/71502\|https://es.stackoverflow.com/q/71502]]

