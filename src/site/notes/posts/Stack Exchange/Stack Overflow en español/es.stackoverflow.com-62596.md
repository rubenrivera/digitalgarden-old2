---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-62596.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-62596/","title":"¿Cómo puedo obtener manualmente el id de un mensaje de Gmail?","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.592-06:00","updated":"2024-04-05T16:43:49.981-06:00"}
---

# ¿Cómo puedo obtener manualmente el id de un mensaje de Gmail?

Si bien Inbox by Gmail permite acceder a los mensajes de Gmail, la forma en que trabajan es muy diferente y algunos datos como los ids de los mensajes podría parecer más sencillos de obtener usando la interfaz de usuario de Gmail.

# Usando Inbox by Gmail o Gmail

1. Abrir el hilo del mensaje en cuestión
2. Hacer clic en el botón desplegable del mensaje (Gmail) o en el botón de los tres puntos (Inbox by Gmail), y luego seleccionar **Mostrar el original** 
3. Se mostrará la página con los datos del mensaje orignal
4. Hacer clic con el botón derecho en **Descargar el mensaje original** y luego en **Copiar el URL**. En el clipboard, se incluirá un URL como el siguiente:

    `https://mail.google.com/mail/u/0?view=att&th=15b6376089aa4f61&attid=0&disp=comp&safe=1&zw`

   El id del mensaje corresponde al parámetro `th` que en este caso es `15b6376089aa4f61`.

# Otra forma usando Gmail

En el caso del id del mensaje una forma de obtenerlo manualmente es siguiendo el siguiente procedimiento

1. Abrir el hilo del mensaje en cuestión en Gmail
2. Hacer clic en el botón desplegable del mensaje, y luego seleccionar **Imprimir**
3. Se mostrará la página de opciones de impresión con un URL como el siguiente

    `https://mail.google.com/mail/u/0/?ui=2&ik=9b5582cf2d&view=pt&search=inbox&msg=15b6376089aa4f61&siml=15b6376089aa4f61`

    El id del mensaje corresponde al parámetro `msg` que en el caso del ejemplo es `15b6376089aa4f61`.

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/62596\|https://es.stackoverflow.com/q/62596]]

