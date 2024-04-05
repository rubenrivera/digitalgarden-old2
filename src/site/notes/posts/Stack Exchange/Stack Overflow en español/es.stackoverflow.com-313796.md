---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-313796.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-313796/","title":"Script GAS Spreadsheet para crear y abrir/descargar PDF de Drive en Custom Dialog","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.417-06:00","updated":"2024-04-05T16:43:56.352-06:00"}
---

# Script GAS Spreadsheet para crear y abrir/descargar PDF de Drive en Custom Dialog

Una forma de sacarle la vuelta al proeblema de `getDownloadUrl()` es usar un código como el siguiente


    function doGet(e) {

      // id del archivo a descargar
      var id = 'remplazar con el id de tu pdf';

      // URL para descargar un archivo descargable de Google Drive
      var url = 'https://drive.google.com/uc?id=' + id + '&export=download';

      // html como cadena de texto
      var html = '<a href="' + url + '" target="_blank">Descargar</a>';

      // Enviar página web como respuesta al navegador
      return HtmlService.createHtmlOutput(html);

    }

Puedes obtener el id de tu objeto File usando `getId()`

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/313796\|https://es.stackoverflow.com/q/313796]]

