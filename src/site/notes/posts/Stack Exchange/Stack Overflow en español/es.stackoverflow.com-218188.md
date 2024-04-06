---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-218188.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-218188/","title":"Envío de mail con Google Apps Script se queda en mi bandeja de salida","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.355-06:00","updated":"2024-04-05T16:43:54.532-06:00"}
---

# Envío de mail con Google Apps Script se queda en mi bandeja de salida

Con base en lo que has mencionado, estas usando el servicio GmailApp. Este servicio hace el envío de los mensajes a nombre del "usuario efectivo", es decir, aquel cuyas credenciales están siendo utilizadas para acceder a los servicios, como en este caso Gmail, que requieren autorización.

Para que los mensajes queden en Enviados de tu compañero y no en el tuyo, deberás modificar tu script de tal forma que se ejecute con sus credenciales, por ejemplo, si estás usando un activador instalable, podrías quitar el que has creado con tu cuenta y crear uno nuevo usando la cuenta de tu compañero. Algo más elegante sería que crearas un script para manejar los activadores instalables e incluso ir más allá y crear un complemento. Si lo que buscas es una solución rápida y efectiva haz lo primero.

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/218188\|https://es.stackoverflow.com/q/218188]]

