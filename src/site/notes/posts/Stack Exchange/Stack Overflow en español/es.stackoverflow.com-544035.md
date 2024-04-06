---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-544035.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-544035/","title":"¿Es posible lanzar un correo automático programado en Apps Script desde un correo distinto al mio (ejecutador)?","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.417-06:00","updated":"2024-04-05T16:43:57.903-06:00"}
---

# ¿Es posible lanzar un correo automático programado en Apps Script desde un correo distinto al mio (ejecutador)?

Sí es posible, y hay varias formas de hacerlo. La más sencilla es crear el activador instalable usando la cuenta desde la cual deseas enviar el email.

Otra opción relativamente sencilla es que la dirección que deseas usar para el envío del correo, la agregues a tu cuenta de Gmail como "alias", luego en Apps Script usarías el método [sendEmail(recipient, subject, body, options)](https://developers.google.com/apps-script/reference/gmail/gmail-app#sendEmail(String,String,String,Object)) indicando en el objeto `options` la dirección a usar como remitente en la propiedad `from`.

Otra opción es hacer uso de la API de Gmail y de la autenticación mediante OAuth.

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/544035\|https://es.stackoverflow.com/q/544035]]

