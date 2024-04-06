---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-254391.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-254391/","title":"¿Cómo extraer links de emails con Google App Scripts?","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.759-06:00","updated":"2024-04-05T16:43:55.207-06:00"}
---

# ¿Cómo extraer links de emails con Google App Scripts?

En relación al título original de la pregunta, el primer comentario es que se trata de Google Apps Script, no de Google Apps Engine, en particular porque el código incluido en la pregunta usa Google Apps Script.

El segundo comentario es que deberías intentar leer la documentación en https://developers.google.com/apps-script/, en particular tratar de entender el código del ejemplo incluido en https://developers.google.com/apps-script/reference/gmail/gmail-message#getBody():

    var thread = GmailApp.getInboxThreads(0,1)[0]; // Obtener el primer thread en la bandeja de entrada
    var message = thread.getMessages()[0]; // Obtener el primer mensaje
    Logger.log(message.getBody()); // Registrar el contenido del cuerpo del mensaje

Verás que `getBody` devuelve el HTML del cuerpo del mensaje, así que para obtener los enlaces debarás aprender a "parsear" HTML para extraer de este el atributo `href` de las etiquetas `a`

El tercer comentario, luego de la revisión 11 de la pregunta, es que lo anterior sobre aprender a parsear HTML sigue siendo válido. Podrías primero extraer la cadena del JSON, luego usar `JSON.parse(cadena)` para convertirlo en un objeto y posteriormente usar los métodos propios de JavaScript para extraer ls propiedades de tu interés , que en est caso serían los objetos del array `widjets` y de estos las propiedades `url`.

Relacionado

- https://es.stackoverflow.com/q/90347/65

Referencias

- [Trabajando con JSON
](https://developer.mozilla.org/es/docs/Learn/JavaScript/Objects/JSON)

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/254391\|https://es.stackoverflow.com/q/254391]]

