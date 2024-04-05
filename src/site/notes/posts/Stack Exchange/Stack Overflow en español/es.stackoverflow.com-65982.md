---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-65982.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-65982/","title":"Como limpiar resultados de un Tag HTML? Javascript","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.626-06:00","updated":"2024-04-05T16:43:50.344-06:00"}
---

# Como limpiar resultados de un Tag HTML? Javascript

Usa algún método para seleccionar el elemento, como `getElementById` y luego `innerHTML`.

Ejemplo:

<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-js -->

    var resultados = document.getElementById('resultados');
    var contenido = "Ponga aquí el contenido a agregar";

    function llenar(){
      resultados.innerHTML = contenido;
    }

    function vaciar(){
      resultados.innerHTML = '';
    }

<!-- language: lang-html -->

    <button onclick="llenar()">Llenar</button>
    &nbsp;
    <button onclick="vaciar()">Vaciar</button>
    <div id="resultados"><div>

<!-- end snippet -->



# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/65982\|https://es.stackoverflow.com/q/65982]]

