---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-239343.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-239343/","title":"hacer un select con javascript","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.728-06:00","updated":"2024-04-05T16:43:54.913-06:00"}
---

# hacer un select con javascript

El siguiente ejemplo agrega un `select` a un `div` con `id="target"`:

<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-js -->

    function agregarSelect() {
      var select = '<select><option value="uno">Uno</option><option value="dos">Dos</option></select>';
      document.getElementById('target').innerHTML = select;
    }

<!-- language: lang-html -->

    <button onClick="agregarSelect();">Modificar</button>
    <div id="target">
    Contenido inicial
    </div>

<!-- end snippet -->



# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/239343\|https://es.stackoverflow.com/q/239343]]

