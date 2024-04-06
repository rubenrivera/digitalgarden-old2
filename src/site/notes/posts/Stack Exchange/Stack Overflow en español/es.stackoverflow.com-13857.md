---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-13857.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-13857/","title":"Pasar valor de parámetro desde url hasta html","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.592-06:00","updated":"2024-04-05T16:43:48.637-06:00"}
---

# Pasar valor de parámetro desde url hasta html

#Respuesta corta
En el código incluído en la pregunta, la plantilla Index.html no incluye una impresión de scriptlet (printing scriptlet): 

    <?= ... ?>

Nota: El archivo JavaScript.html sale sobrando.

#Explicación
El servicio HTML de Google Apps Script incluye el uso de plantillas para crear páginas dinámicas. Estas pueden incluir secuencias de comando y HTML. Las plantillas de Apps Script pueden incluir tres tipos de etiquetas llamadas Scriptlets. Dentro de un scriptlet, se puede escribir cualquier secuencia de comandos que funcionaria en un archivo normal de Apps Script y llamar variables.

#Ejemplo
El siguiente código es una aplicación web creada usando Google Apps Script. Toma del URL parámetro `mensaje` y lo publica en el cuerpo de una página HTML.

Ejemplo de URL correspondiente a  

    https://script.google.com/macros/s/script-id/dev?mensaje=Hola 


Código.gs

    function doGet(e) {
      // Primero, tomar la plantilla
      var t = HtmlService.createTemplateFromFile('Index');
      
      // Segundo, asignar el valor del parámetro mensaje del URL a un parámetro  
      // de la plantilla       
      t.mensaje = e.parameter.mensaje;

      // Tercero, evaluar la plantilla.
      return t.evaluate().setSandboxMode(HtmlService.SandboxMode.IFRAME);
    }

Index.html

    <!DOCTYPE html>
    <html>
      <head>
        <base target="_top">
      </head>
      <body>
        <?= mensaje ?>
      </body>
    </html>

#Referencias

- https://developers.google.com/apps-script/guides/web
- https://developers.google.com/apps-script/guides/html/templates
- [Respuesta](https://stackoverflow.com/a/35758490/1595451) de [Mogsdad](https://stackoverflow.com/users/1677912/mogsdad) a https://stackoverflow.com/questions/35738587/pass-url-parameter-into-web-app-script


# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/13857\|https://es.stackoverflow.com/q/13857]]

