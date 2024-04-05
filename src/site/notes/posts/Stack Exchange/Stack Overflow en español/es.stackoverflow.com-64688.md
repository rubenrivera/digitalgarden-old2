---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-64688.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-64688/","title":"¿Cómo mostrar u ocultar un input de acuerdo al valor de un checkbox con JQuery?","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.592-06:00","updated":"2024-04-05T16:43:50.035-06:00"}
---

# ¿Cómo mostrar u ocultar un input de acuerdo al valor de un checkbox con JQuery?

Te faltó incluir el `$` antes de `(document).ready(function(){`

A continuación el código corregido usando stacksnippet

<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-js -->

    $(document).ready(function(){

                     $('#subscribe').on('click', function(){
                       var c = document.getElementById('subscribe').checked;
                       if (c) {

                        $("#email").hide();

                       }

                       else {
                         $("#email").show();

                       }


                     });

                     });

<!-- language: lang-html -->

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js"></script>
    <form action="">
      <fieldset>

        <legend>Suscripciones de correo</legend>

        <p id="subscribepara">
          <label>
            <input type="checkbox" name="subscribe" id="subscribe">
            Me gustaría recibir el boletín vía correo-e.
          </label>
        </p>

        <p class="emailpara">
          <label>
            Email:
            <input type="text" name="email" id="email">
          </label>
        </p>

      </fieldset>
    </form>

<!-- end snippet -->



# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/64688\|https://es.stackoverflow.com/q/64688]]

