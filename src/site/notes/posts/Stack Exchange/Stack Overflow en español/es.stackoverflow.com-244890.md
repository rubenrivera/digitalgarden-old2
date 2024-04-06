---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-244890.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-244890/","title":"Google docs a veces devuelve página en blanco (about:blank)","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.728-06:00","updated":"2024-04-05T16:43:54.995-06:00"}
---

# Google docs a veces devuelve página en blanco (about:blank)

El autor de [la respuesta](https://stackoverflow.com/a/40425780/1595451) a [Google Docs viewer returning 204 responses, no longer working, alternatives?
](https://stackoverflow.com/q/40414039/1595451) comparte un "hack" / truco que consiste en refrescar el ifram cada 2 segundos hasta que se Google Doc Viewer cargue correctamente. El código compartido por el autor de la respuesta, implica el uso de jQuery, es el siguiente:


<!-- language: lang-html -->


    <style>
      .holds-the-iframe {
        background: url(/img/loading.gif) center center no-repeat;
      }
    </style>

    <div class="holds-the-iframe">
      <iframe id="iframeID" name="iframeID" src="https://docs.google.com/viewerng/viewer?url=www.example.com&embedded=true"></iframe>
    </div>

    <script>
      function reloadIFrame() {
        document.getElementById("ifm").src = document.getElementById("iframeID").src;
      }

      timerId = setInterval("reloadIFrame();", 2000);

      $(document).ready(function() {
        $('#iframeID').on('load', function() {
          clearInterval(timerId);
          console.log("Finally Loaded");
        });
      });
    </script>



# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/244890\|https://es.stackoverflow.com/q/244890]]

