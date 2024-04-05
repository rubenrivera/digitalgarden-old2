---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-288599.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-288599/","title":"Crear formulario en google sheets con buscador select","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.679-06:00","updated":"2024-04-05T16:43:55.886-06:00"}
---

# Crear formulario en google sheets con buscador select

Para tomar datos de una hoja de cálculo de Google desde el código del lado del cliente se debe llamar una función del lado del servidor usando `google.script.run` como ya se hace en tu código.

En tu código del lado del cliente deberás agregar una función que haga la llamada al código del lado del cliente y que use el resultado para actualizar los elementos `<li>` del `<ul>`. Como lo mencionaste en un comentario, puedes usar un evento `onkeyup` o similiar, para lo cual es recomendable usar `addEventListener` al cargar la página.

Usando "Vanilla JavaScript" (sin librerías como jQuery), para reemplazar todos los elementos hijo del `ul` podrías usar 

    document.querySelector('ul').innerHTML = resultado;

donde `resultado` es el lo que te devolvió la función del lado del servidor formada apropiadamente.

Cabe hacer notar que las llamadas a servicios de Google Apps Script como `SpreadsheetApp` son relativamente lentas y tienen cuotas relativamente pequeñas (comparándolo con un servicio de paga basado en hits, MB, uso de procesadores, etc) por lo que dependiendo del uso que le vayas a dar a tu aplicación es probable que debas buscar otra estrategia, quizás pasar los datos de tu hoja de cálculo a una plataforma como Firebase y que el código del lado del cliente lo tome de dicha plataforma.

Referencias

- https://developer.mozilla.org/es/docs/Web/API/EventTarget/addEventListener
- https://developers.google.com/apps-script/guides/web
- https://developers.google.com/apps-script/quotas

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/288599\|https://es.stackoverflow.com/q/288599]]

