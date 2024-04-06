---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-62807.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-62807/","title":"¿Cómo puedo obtener la lista de mensajes enviados en Gmail?","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.592-06:00","updated":"2024-04-05T16:43:49.992-06:00"}
---

# ¿Cómo puedo obtener la lista de mensajes enviados en Gmail?

Gmail, en lugar de utilizar carpetas para organizar los mensajes utiliza etiquetas, de las cuales hay de dos tipos principales, etiquetas del sistema y etiquetas del usuario. 

> Nota: De acuerdo a [Managing Labels][1] las etiquetas Borradores (`DRAFTS`) y Enviados (`SENT`) son etiquetas del sistema que no pueden ser asignadas por el usuario.

Además de [getDraftMessages()][2], existen otros métodos par obtener mensajes con etiquetas del sistema, pero como se menciona en la pregunta no hay uno así para los mensajes con la etiqueta enviados. En cuando a la [Clase GmailMessage][3], existe el método [isDraft()][4] pero no hay uno similar para preguntar si un mensaje tiene la etiqueta del sistema `SENT`.


Por lo anterior, la alternativa que queda es usar una búsqueda, con base en [Operadores de búsqueda que puedes usar con Gmail][5], con el operador `in:sent` ó `label:sent`.

El siguiente ejemplo registra en el log el número de hilos con la etiqueta `SENT`.

    function cantidadEnviados () {
       // Encuentra los mensajes ENVIADOS
       var threads = GmailApp.search('in:sent');
       var cantidad = threads.length;
       Logger.log('La cantidad de hilos en Enviados es ' + cantidad);
    }


> Nota: Para obtener una lista de mensajes en lugar de una lista de hilos, deberá usarse el servicio avanzado de Gmail, más específicamente [users.messages.list][6]


  [1]: https://developers.google.com/gmail/api/guides/labels
  [2]: https://developers.google.com/apps-script/reference/gmail/gmail-app#getDraftMessages()
  [3]: https://developers.google.com/apps-script/reference/gmail/#gmailmessage
  [4]: https://developers.google.com/apps-script/reference/gmail/gmail-message#isDraft()
  [5]: https://support.google.com/mail/answer/7190?hl=es
  [6]: https://developers.google.com/gmail/api/v1/reference/users/messages/list

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/62807\|https://es.stackoverflow.com/q/62807]]

