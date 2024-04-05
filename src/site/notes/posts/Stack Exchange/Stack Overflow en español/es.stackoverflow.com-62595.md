---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-62595.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-62595/","title":"¿Cómo puedo obtener manualmente el id de un mensaje de Gmail?","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.592-06:00","updated":"2024-04-05T16:43:49.979-06:00"}
---

# ¿Cómo puedo obtener manualmente el id de un mensaje de Gmail?

He identificado un mensaje de Gmail del cual deseo extraer algunos datos. Para fines de esta pregunta digamos que se trata del asunto y que el ejemplo mínimo, completo y verificable es el siguiente:

    function myFunction() {
      var id = id_mensaje;
      var range = SpreadsheetApp.getActiveRange();
      var message = GmailApp.getMessageById(id);
      range.setValue( message.getSubject());
    }

En Inbox by Gmail abrí el mensaje original y probé cambiando `id_mensaje` por 

1. el id del URL

    <!-- language: lang-none -->

    `https://mail.google.com/mail/u/0?ik=9b5582cf2d&view=om&permmsgid=msg-f:1564498808323854177`

Asumí que parámetro es permmsgid y que por ende el id sería

> msg-f:1564498808323854177

2. el valor del campo ID del mensaje

> <597438654.-1041137938.1492022331088.JavaMail.root@sjmas02.marketo.org>

Pero en ambos casos me muestra el error:

> Argumento no válido: (línea 3, archivo "Código")Ignorar

¿Cómo puedo obtener el id del mensaje usando la interfaz de usuario de Inbox by Gmail?


# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/62595\|https://es.stackoverflow.com/q/62595]]

