---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-255147.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-255147/","title":"¿Es posible incluir un cuenta atrás en el cuerpo de un mensaje de correo eletrónico?","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.759-06:00","updated":"2024-04-05T16:43:55.223-06:00"}
---

# ¿Es posible incluir un cuenta atrás en el cuerpo de un mensaje de correo eletrónico?

> NOTA: Esta pregunta está inspirada en la conversación que derivó en esta pregunta https://es.stackoverflow.com/q/255119/65. Pretendo publicar una respuesta más tarde pero son más que bienvenidas las respuestas de otros pues no me considero experto en este tema y seguramente puedo aprender mucho de los aportes de otros.

Encontré un código que hace un cuenta atrás con JavaScript. Quiero insertar ese código o uno similar en el cuerpo del mensaje de un correo electrónico que estoy generando usando Google Apps Script. Los destinatarios del mensaje en su mayoría son usuarios de Gmail por lo que en primera instancia me interesa que al menos funciones para ellos, pero lo ideal sería que funcionara en el cliente de correo de cualquier destinatario.


A continuación incluyo el código referido arriba el cual ha sido tomado de [la respuesta](https://es.stackoverflow.com/a/182521/65) a https://es.stackoverflow.com/q/182500/65

<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-js -->

    //Asignas la fecha a una variable
    var countDownDate = new Date("Sep 22, 2018 00:00:00").getTime();

    // Intervalo de 1 segundo
    var x = setInterval(function() {

      // Obtenemos la fecha actual
      var now = new Date().getTime();

      // Chequeamos la distancia entre la fecha que pretendemos y la de hoy
      var distance = countDownDate - now;

      // Calculamos días, horas, minutosy segundos
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Mostramos el resultado en el <p> con id 'demo'
      document.getElementById("demo").innerHTML = days + "d " + hours + "h "
      + minutes + "m " + seconds + "s ";

      // Si terminó el tiempo, cambiamos el texto
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "Llego la boda!!!";
      }
    }, 1000);

<!-- language: lang-css -->

    p{
    font-size: 30px;
    }

<!-- language: lang-html -->

    <p id="demo"></p>

<!-- end snippet -->


A continuación un ejemplo abreviado del código para enviar un correo con Google Apps Script donde el cuenta atrás debería mostrarse en `#demo` (la etiqueta `p` con `demo` como id)

    function enviarCorreo(){
      var destinatario = 'usuario@example.com';
      var asunto = 'Cuenta atrás';
      var textoPlano= 'Se requiere un cliente que soporte HTML';
      var contenidoHTML= '<h1>Cuenta atrás</h1>' +
                 '<p id="demo"></p>'
      MailApp.sendEmail({
         to:destinatario, 
         body:textoPlano,
         subject:asunto, 
         htmlBody:contenidoHTML
      });  
    }

He intentado poner el código JavaScript entre etiquetas `script` pero el mensaje recibido por los usuarios de Gmail no lo incluye dentro de la variable `contenidoHTML`, además la etiqueta `p` se muestra de la forma siguiente

    <p id="m_-6032521278457146316demo"></p>

A continuación el código completo de mi intento

    function enviarCorreo(){
      var destinatario = 'usuario@example.com'; // reemplazar por una dirección de correo real
      var asunto = 'Cuenta atrás';
      var textoPlano= 'Se requiere un cliente que soporte HTML';
      var contenidoHTML= '<h1>Cuenta atrás</h1>' +
                 '<p id="demo"></p>' +
                 '<script>' +
                    //Asignas la fecha a una variable' +
                    'var countDownDate = new Date("Sep 22, 2018 00:00:00").getTime();' +
                      
                    '// Intervalo de 1 segundo' +
                    'var x = setInterval(function() {' +
                          
                      '// Obtenemos la fecha actual' +
                      'var now = new Date().getTime();' +
                              
                      '// Chequeamos la distancia entre la fecha que pretendemos y la de hoy' +
                      'var distance = countDownDate - now;' +
                              
                      '// Calculamos días, horas, minutosy segundos' +
                      'var days = Math.floor(distance / (1000 * 60 * 60 * 24));' +
                      'var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));' +
                      'var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));' +
                      'var seconds = Math.floor((distance % (1000 * 60)) / 1000);' +
                                    
                      '// Mostramos el resultado en el <p> con id \'demo\'' +
                      'document.getElementById("demo").innerHTML = days + "d " + hours + "h "' +
                          '+ minutes + "m " + seconds + "s ";' +
                                          
                      '// Si terminó el tiempo, cambiamos el texto' +
                      'if (distance < 0) {' +
                      '  clearInterval(x);' +
                      '  document.getElementById("demo").innerHTML = "Llego la boda!!!";' +
                      '}' +
                    '}, 1000);' +
                  '</script>'
      MailApp.sendEmail({
         to:destinatario, 
         body:textoPlano,
         subject:asunto, 
         htmlBody:contenidoHTML
      });  
    }

Relacionado

- [Introducir cuenta atrás en respuesta de formulario a través de script](https://support.google.com/docs/thread/4067074?hl=es-419)
- [MailApp.sendEmail(message)](https://developers.google.com/apps-script/reference/mail/mail-app#sendemailmessage)

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/255147\|https://es.stackoverflow.com/q/255147]]

