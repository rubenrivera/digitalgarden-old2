---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-351196.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-351196/","title":"Enviar spreadsheets como archivo adjunto con google app scripts","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.627-06:00","updated":"2024-04-05T16:43:56.568-06:00"}
---

# Enviar spreadsheets como archivo adjunto con google app scripts

Puedes especificar el formato en el que se enviará tu attachment de la siguiente forma

    // Send an email with a file from Google Drive attached as a PDF.
    var file = DriveApp.getFileById('1234567890abcdefghijklmnopqrstuvwxyz');
    GmailApp.sendEmail('mike@example.com', 'Attachment example', 'Please see the attached file.', {
        attachments: [file.getAs(MimeType.PDF)],
        name: 'Automatic Emailer Script'
    });

En tu caso en lugar de `file.getAs(MimeType.PDF)` intenta con  `file.getAs(MimeType.MICROSOFT_EXCEL)`

Referencias

- https://developers.google.com/apps-script/reference/gmail/gmail-app#sendemailrecipient,-subject,-body,-options
- https://developers.google.com/apps-script/reference/base/mime-type

Relacionado

- https://es.stackoverflow.com/q/213807/65

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/351196\|https://es.stackoverflow.com/q/351196]]

