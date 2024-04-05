---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-74798.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-74798/","title":"¿Existe alguna forma de manejar varios envíos de formularios al tiempo en Google Forms?","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.727-06:00","updated":"2024-04-05T16:43:51.041-06:00"}
---

# ¿Existe alguna forma de manejar varios envíos de formularios al tiempo en Google Forms?

Sí existe una forma, usa [el servicio "Lock"][1].

Del [artículo][2] en inglés en el que se anuncia este servicio, adapté el siguiente ejemplo:


    function onFormSubmit() {
      // Queremos un candado público, uno que bloquee toda las invocaciones
      var lock = LockService.getPublicLock();
      lock.waitLock(30000);  // espera 30 segundos antes de rendirse 
      // se obtuvo el candado, ahora podemos proceder 
      ...cualquier cosas que se acostumbre hacer aquí....
      lock.releaseLock();
    }


  [1]: https://developers.google.com/apps-script/reference/lock/
  [2]: https://gsuite-developers.googleblog.com/2011/10/concurrency-and-google-apps-script.html

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/74798\|https://es.stackoverflow.com/q/74798]]

