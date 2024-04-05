---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-136088.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-136088/","title":"¿Cómo pasar el valor de un input type = \"number\" a un input type=\"text\"?","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.592-06:00","updated":"2024-04-05T16:43:52.903-06:00"}
---

# ¿Cómo pasar el valor de un input type = "number" a un input type="text"?

Lo siguiente agrega la fecha del campo "Fecha" al campo "Texto" al hacer cambios en el primero.

<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-js -->

    var fecha= document.getElementById('fecha');
    fecha.addEventListener('change', setText);

    function setText() {
      var texto = document.getElementById('texto');
      texto.value = fecha.value;
    }

<!-- language: lang-html -->

    <div>Fecha: <input type="date" id="fecha"></div>
    <div>Texto: <input type="text" id="texto"></div>

<!-- end snippet -->

Básicamente consiste en registrar un evento al elemento "input" de la fecha de tipo "change".


# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/136088\|https://es.stackoverflow.com/q/136088]]

