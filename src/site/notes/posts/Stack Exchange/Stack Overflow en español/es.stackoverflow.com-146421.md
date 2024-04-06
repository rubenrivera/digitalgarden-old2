---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-146421.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-146421/","title":"Iniciar sesion y enviar datos con GAS","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.354-06:00","updated":"2024-04-05T16:43:53.265-06:00"}
---

# Iniciar sesion y enviar datos con GAS

Una de las cosas que te faltó fue pasar la variable global a la plantilla.

Ejemplo:

Código.gs

    // Variables globales
    var mensaje = 'Hola mundo';

    // Devuelve una página web
    function doGet() {
      var template = HtmlService.createTemplateFromFile('index');
      template.mensaje = mensaje; // Esta es la línea de código faltante
      
      var html = template.evaluate();
      return html;
    }

index.html

    <!DOCTYPE html>
    <html>
      <head>
        <base target="_top">
      </head>
      <body>
        <?!= mensaje ?>
      </body>
    </html>

Preguntas relacionadas

- https://es.stackoverflow.com/q/13811/65

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/146421\|https://es.stackoverflow.com/q/146421]]

