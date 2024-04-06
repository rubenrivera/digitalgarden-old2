---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-65943.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-65943/","title":"Cómo usar jQuery Ajax POST con Google Apps Script para mostrar una página de agradecimiento personalizada","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.626-06:00","updated":"2024-04-05T16:43:50.315-06:00"}
---

# Cómo usar jQuery Ajax POST con Google Apps Script para mostrar una página de agradecimiento personalizada

Recién se agregó el enlace al [código usado][1] para la aplicación web creada usando Google Apps Script. Ese código tiene varios problemas

1. Usa un método deprecado (obsoleto), específicamente [UiApp][2].
2. No incluye devolver una respuesta ni en caso de éxito (success) ni en caso de falla (failure).

En lugar de ese ejemplo, mejor usar este otro https://gist.github.com/mhawksey/1276293. Nótese que este incluye el uso de [ContentService][3] para crear las respuestas tanto para el caso de éxito como de falla.

      try{
        // ...

        // return json success results
        return ContentService
              .createTextOutput(JSON.stringify({"result":"success", "row": nextRow}))
              .setMimeType(ContentService.MimeType.JSON);
      } catch(e){
        // if error return this
        return ContentService
              .createTextOutput(JSON.stringify({"result":"error", "error": e}))
              .setMimeType(ContentService.MimeType.JSON);
      }

A continuación un ejemplo

<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-js -->

    $( "#formulario" ).submit(function( event ) {
      event.preventDefault();
      $.ajax({
        type: "POST",
        url: "https://script.google.com/macros/s/AKfycbzhZaMeboekcH7VxNBh2lS-wYyKb07je2hqsKIl_HKFTiASNJUb/exec",
        data: '',
        success: function(){
          alert( "Gracias" );
          $(document.body).html("Se dieron las gracias");
        }
      });
      
    });

<!-- language: lang-html -->

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js"></script>
    <form id="formulario">
      <input type="submit">
    </form>

<!-- end snippet -->

Código de la aplicación web llamada por el código previo

    function doPost(e) {
      try {
        // Hacer algo
        var nextRow = 1;
        // devolver JSON éxito (success)
        return ContentService
         .createTextOutput(JSON.stringify({"result":"success", "row": nextRow}))
         .setMimeType(ContentService.MimeType.JSON);
      } catch(e){
        // en caso de error devolver esto
        return ContentService
         .createTextOutput(JSON.stringify({"result":"error", "error": e}))
         .setMimeType(ContentService.MimeType.JSON);
      } finally {
        // En cualquier caso, terminar realizando lo siguiente
      }
    }

<hr>
La pregunta se puede simplificar a 

> ¿Cómo hacer que el formulario de la respuesta que yo quiero al usuario?

Para fines de simplicidad, digamos que "lo que yo quiero" es mostrar una alerta y escribir un mensaje en la página.

La forma básica de especificar lo que se debe hacer al enviar un formulario, es a través del atributo `onsubmit`. En este puedes colocar el código JavaScript

<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-html -->

    <form id="formulario" onsubmit="window.alert('Gracias'); document.write('Se dieron las gracias')">
      <input type="submit"/>
    </form>


<!-- end snippet -->

Si decides que todo se controle a través de un script, entonces pon `onsubmit="miScript"`

<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-js -->

    function miScript() {
      window.alert('Gracias'); document.write('Se dieron las gracias');
    }

<!-- language: lang-html -->

    <form id="formulario" action="" onsubmit="miScript()" >
      <input type="submit"/>
    </form>

<!-- end snippet -->

A continuación lo mismo, pero usando jQuery, en el cual se debe incluir `preventDefault` para lograr lo que se está buscando.

<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-js -->

    $( "#formulario" ).submit(function( event ) {
      event.preventDefault();
      alert( "Gracias" );
      $(document.body).html("Se dieron las gracias");
    });

<!-- language: lang-html -->

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js"></script>
    <form id="formulario">
      <input type="submit">
    </form>

<!-- end snippet -->


  [1]: https://gist.github.com/matthaliski/4253339
  [2]: https://developers.google.com/apps-script/reference/ui/ui-app
  [3]: https://developers.google.com/apps-script/guides/content

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/65943\|https://es.stackoverflow.com/q/65943]]

