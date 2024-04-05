---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-422015.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-422015/","title":"¿Cómo enviar un rango de Google Sheets por mail?","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.355-06:00","updated":"2024-04-05T16:43:57.001-06:00"}
---

# ¿Cómo enviar un rango de Google Sheets por mail?

Con Google Apps Script puedes enviar el cuerpo del mensaje de correo en texto plano o como HTML. Si deseas enviar el "rango" como se muestran en la interfaz de la hoja de cálculo de Google deberás crear la tabla y darle formato usando HTML.

Deberás leer los valores del rango usando `getValues` o `getDisplayValues`, seguramente este último te será más conveniente, para obtener los valores o los valores mostrados respectivamente. Además deberás usar los métodos correspondientes para obtener el tipo de línea, grosor y color de los bordes, el color de fondo, el tipo de fuente, el color de fuente, etc. Luego con estos datos deberás crear el HTML a ser enviado en el cuerpo del mensaje.

Relacionado

- https://es.stackoverflow.com/q/255147/65
- https://es.stackoverflow.com/q/298904/65


# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/422015\|https://es.stackoverflow.com/q/422015]]

