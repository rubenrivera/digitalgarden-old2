---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-78502.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-78502/","title":"Error 401 al enviar email con JavaScript y AJAX","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.727-06:00","updated":"2024-04-05T16:43:51.229-06:00"}
---

# Error 401 al enviar email con JavaScript y AJAX

El problema está en cómo has agregado el JavaScript problemático.

Una solución es reemplaces la llamada a la copia local del código problemático por la línea indicada en el paso 10 de las [instrucciones][1] en GitHub.

    <script data-cfasync="false" type="text/javascript"
    src="https://cdn.rawgit.com/dwyl/html-form-send-email-via-google-script-without-server/master/form-submission-handler.js"></script>

A continuación un ejemplo (mínimo verificable y completo) que copia un fragmento del código en la pregunta y reemplaza la línea indicada arriba.
<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-html -->

    <section class="section" id="contacto">
      <div class="bg-con">
        <div class="h1-con">
          <h1>Envianos un saludo</h1>
        </div>
        <div class="contenedor-formulario">
          <form id="gform" action="https://script.google.com/macros/s/AKfycbyhl9S5fO406P61lezf_mmSh5Oq5s_SeZw1a6tMnHIlP3xkgw0/exec" class="formulario" name="Formulario-contacto" method="post">
            <div class="inputs">
              <input class="text" type="text" name="name" id="name" required="Requerido">
              <label class="label label-text" for="name">Nombre</label>
            </div>
            <div class="inputs">
              <input class="text" type="email" name="email" id="email" required="Requerido">
              <label class="label label-text" for="nombre">Correo</label>
              <span id="email-invalid" style="visibility:hidden">Must be a valid email address</span>
            </div>
            <div class="inputs mensaje">
              <textarea id="message" name="message" required="Requerido"></textarea>
              <label class="label label-text" for="message">Mensaje</label>
            </div>
            <div class="inputs">
              <input class="enviar" type="submit" id="btn-submit" value="Enviar">
            </div>
          </form>
        </div>
        <div style="display:none;" id="thankyou_message">
          <h2><em>Gracias</em> por contactarnos! Estaremos de vuelta contigo pronto!</h2>
        </div>
      </div>
    </section>

    <script data-cfasync="false" type="text/javascript"
    src="https://cdn.rawgit.com/dwyl/html-form-send-email-via-google-script-without-server/master/form-submission-handler.js"></script>

<!-- end snippet -->


  [1]: https://github.com/dwyl/html-form-send-email-via-google-script-without-server

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/78502\|https://es.stackoverflow.com/q/78502]]

