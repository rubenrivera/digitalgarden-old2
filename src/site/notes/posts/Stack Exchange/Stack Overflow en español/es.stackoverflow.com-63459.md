---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-63459.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-63459/","title":"Campo Sent By (Enviado Por) en GMail con Google Apps Script","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.592-06:00","updated":"2024-04-05T16:43:50.003-06:00"}
---

# Campo Sent By (Enviado Por) en GMail con Google Apps Script

Sé que [getRawContent()][1] devuelve el contenido equivalente a "ver el original", pero no he tenido oportunidad de reproducir el problema para dar una respuesta más completa.

Teniendo un correo con las características en cuestión, busca el nombre/dirección de correo de quien envió el mensaje para que identifiques la cabecera del mensaje la cual seguramente usará el prefijo "X-". Una vez identificado la estructura de la cabecera podrás usar una expresión regular para extraer el dato.



Referencias

- [What do X-headers in mails stand for?][2]


  [1]: https://developers.google.com/apps-script/reference/gmail/gmail-message#getrawcontent
  [2]: https://stackoverflow.com/q/14469110/1595451

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/63459\|https://es.stackoverflow.com/q/63459]]

