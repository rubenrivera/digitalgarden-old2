---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-104024.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-104024/","title":"Como enviar mediante una script de google, la firma de un correo electrónico","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.417-06:00","updated":"2024-04-05T16:43:52.601-06:00"}
---

# Como enviar mediante una script de google, la firma de un correo electrónico

De acuerdo a la [respuesta][1] a [Apps Script to get the users signature][2] se debe utilizar la API de Gmail. Lo que no menciona dicha respuesta es que para usar esta se debe habilitar el servicio avanzado como se explica en [How to enable advanced services][3]:


> 1. El editor de script, selecciona Recursos > Servicios avanzados de Google...
> 1. En el diálogo que se muestra, haz clic en el botón encender/apagar a un lado del servicios que quieres usar.
> 1. En la parte inferior del diálogo, haz clic en el enlace la consola de API de Google
> 1. En la consola, haz click en el la caja de filtro y escribe una parte del nombre de la API, (por ejemplo "Calendar"), luego cuando
> veas el nombre haz clic en este.
> 1. En la siguiente pantalla, haz clic en Habilitar API.
> 1. Cierra la Consola de API y regresa al editor de script. Haz clic en el diálogo. El servicio avanzado que habilitaste ahora está disponible
> en autocompletar.

Luego de haber habilitado el servicio podría usarse la línea de código incluida en la respuesta referida arriba, la cual obtiene la firma predeterminada:

`var signature = Gmail.Users.Settings.SendAs.list("me").sendAs.filter(function(account){if(account.isDefault){return true}})[0].signature;`

  [1]: https://stackoverflow.com/a/41729412/1595451
  [2]: https://stackoverflow.com/q/41727640/1595451
  [3]: https://developers.google.com/apps-script/guides/services/advanced#enabling_advanced_services

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/104024\|https://es.stackoverflow.com/q/104024]]

