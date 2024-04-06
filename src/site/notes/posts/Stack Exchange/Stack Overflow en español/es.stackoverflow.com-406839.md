---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-406839.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-406839/","title":"¿Cómo uso UrlFetchApp para comprobar conexión a Internet?","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.728-06:00","updated":"2024-04-05T16:43:56.790-06:00"}
---

# ¿Cómo uso UrlFetchApp para comprobar conexión a Internet?

Para comprobar si el usuario tiene acceso a Internet al hacer el envío de la respuesta no te sirve usar código del lado del servidor porque para llamar ese código debe tener conexión a Internet, en su lugar debes usar algo del lado del código del cliente. 

Una de tantas opciones es usar 

```javascript
google.script.run
  .withSuccssHandler(onSuccessHandler)
  .withFailureHandler(onFailureHandler)
  .doSomething(data);
```

`doSomething(data)` puede ser cualquier función del lado del servidor, incluso la función que uses para enviar los datos del formulario. Si bien puedes usar la función `ChkConnection` sería ineficiente porque de todas formas deberás llamar la función que recibirá los datos de tu formulario.

`onSuccessHandler` es un callback a ejecutarse en caso de que la función del lado del servidor se haya ejecutado de forma exitosa. Puedes usar esta función para mostrar un mensaje de confirmación de que los datos del formulario se enviaron correctamente.

`onFailureHandler` es un callback a ejecutarse en caso de que la función del lado del servidor haya devuelto un error. El error incluso puede ser que no se hayan enviado los datos del formulario debido a que falló la conexión de Internet.  Puedes usar esta función para mostrar un mensaje  de que los datos del formulario NO se enviaron y dar indicaciones sobre cómo proceder.


NOTA: Los nombres de las funciones/callback anteriores pueden ser cualquier nombre de función válido.

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/406839\|https://es.stackoverflow.com/q/406839]]

