---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-66042.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-66042/","title":"¿Cómo quitar el último div usando jQuery?","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.626-06:00","updated":"2024-04-05T16:43:50.394-06:00"}
---

# ¿Cómo quitar el último div usando jQuery?

jQuery cuenta `.last()` para seleccionar el último elemento y `.remove()` para quitar elementos.

Ejemplo:

Se incluyen 5 elementos con la etiqueta `div`. Cada uno con un ordinal, del primero al quinto. Sólo mostrarán 4.

<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-js -->

    $("div").last().remove()

<!-- language: lang-html -->

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js"></script>
    <div>Primero</div>
    <div>Segundo</div>
    <div>Tercero</div>
    <div>Cuarto</div>
    <div>Quinto</div>

<!-- end snippet -->



# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/66042\|https://es.stackoverflow.com/q/66042]]

