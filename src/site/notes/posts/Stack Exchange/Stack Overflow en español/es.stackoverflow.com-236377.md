---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-236377.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-236377/","title":"Tengo script que funciona perfecto excepto por el adjunto (attachments) que no se envía","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.627-06:00","updated":"2024-04-05T16:43:54.762-06:00"}
---

# Tengo script que funciona perfecto excepto por el adjunto (attachments) que no se envía

En la línea

    var obtenerpdf = carpeta.getFilesByName()

falta especificar el nombre del archivo. Ref. [getFilesByName(name)][1]

Nótese que este método devuelve un objeto [FileIterator][2] y no un objeto [File][3]. Para tomar este, el código debe iterar a través de los miembros del objeto FileIterator. 

Adaptación del ejemplo de la documentación oficial tomado del enlace previo (básicamente traducir el comentario).

    // Registra el nombre de cada archivo en Mi Unidad del usuario.
    var files = DriveApp.getFiles();
    while (files.hasNext()) {
      var file = files.next();
      Logger.log(file.getName());
    }

Por otro lado, el objeto File no se puede enviar directamente, a partir de este hay que crear un objeto [Blob][4]. A continuación una adaptación de ejemplo de envío de archivo adjunto usando [sendEmail][5] (básicamente traducir el comentario y las cadenas).

    // Enviar un email con dos archivos adjuntos, un archivo de Google Drive (como PDF) y un archivo HTML.
    var file = DriveApp.getFileById('1234567890abcdefghijklmnopqrstuvwxyz');
    var blob = Utilities.newBlob('Agrega aquí cualquier contenido HTML', 'text/html', 'mi_documento.html');
    MailApp.sendEmail('mike@example.com', 'Ejemplo de archivo adjunto', 'Se incluyen dos archivos adjuntos.', {
        name: 'Envío automático de emails',
        attachments: [file.getAs(MimeType.PDF), blob]
    });

Preguntas relacionadas sobre enviar correos con Google Apps Script:

- https://es.stackoverflow.com/q/164885/65

Preguntas relacionadas sobre cómo obtener el id de archivo:

- https://es.stackoverflow.com/q/188064/65

Artículos publicados por mí

- [Cómo obtener el key o id de una HCG][6]


  [1]: https://developers.google.com/apps-script/reference/drive/drive-app#getfilesbynamename
  [2]: https://developers.google.com/apps-script/reference/drive/file-iterator
  [3]: https://developers.google.com/apps-script/reference/drive/file
  [4]: https://developers.google.com/apps-script/reference/base/blob
  [5]: https://developers.google.com/apps-script/reference/mail/mail-app#sendemailrecipient-subject-body-options
  [6]: https://www.rubenrivera.mx/2018/08/key-id-hcg.html

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/236377\|https://es.stackoverflow.com/q/236377]]

