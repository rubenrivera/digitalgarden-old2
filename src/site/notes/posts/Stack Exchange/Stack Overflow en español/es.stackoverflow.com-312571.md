---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-312571.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-312571/","title":"Script GAS Spreadsheet - Crear y Descargar PDF guardado en Drive","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.417-06:00","updated":"2024-04-05T16:43:56.321-06:00"}
---

# Script GAS Spreadsheet - Crear y Descargar PDF guardado en Drive

NOTA: En el código de la pregunta se incluye varios diálogos y en un comentario a la [respuesta inicial](https://es.stackoverflow.com/a/312444/65) se mencionar que se desea incluir un enlace para descargar el archivo generado.

Para incluir un enlace (texto cliqueable) en un diálogo personalizado ("custom dialog") se debe usar **HTML Service** porque el método `alert` sólo muestra texto plano y los botones predefinidos (Sí, No, Aceptar, Cancelar) que se indiquen.

Hay varias formas de utilizar el HTML Service, se puede poner el HTML en un archivo tipo html o se puede general el objeto HTMLOutput con base un String.

Dado que el url para descargar es variable, quizás lo más sencillo sea hacer el HTMLOutput con un String como lo has hecho con el mensaje a enviar por correo porque si optas por usar un archivo deberás usar plantillas y scriptlets lo cual implica mas cosas por aprender.

A continuación un ejemplo muy simple de cómo mostrar un díalogo modal con un enlace

    function mostrarEnlace() {
      var url = 'https://es.stackoverflow.com';
      var html = '<a href=" + url + " target="_blank">Stack Overflow en español</a>';
      var userInterface = HtmlService.createHtmlOutput(html);
      var title = "Mostrar enlace";
      SpreadsheetApp.getUi().showModalDialog(userInterface, title);
    }

Referencia

- [Dialogs and sidebars in G Suite Documents][1]
- [Respuesta](https://webapps.stackexchange.com/a/80245/88163) a [Create a popup in Google spreadsheet](https://webapps.stackexchange.com/q/80213/88163)


  [1]: https://developers.google.com/apps-script/guides/dialogs

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/312571\|https://es.stackoverflow.com/q/312571]]

