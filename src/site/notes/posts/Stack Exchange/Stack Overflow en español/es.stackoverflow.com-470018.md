---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-470018.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-470018/","title":"Spinner en Google App Scripts - HTML y GS","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.627-06:00","updated":"2024-04-05T16:43:57.432-06:00"}
---

# Spinner en Google App Scripts - HTML y GS

`google.script.run` funciona de manera asíncrona, esto quiere decir que la siguiente ínea de código (en este caso no hay ninguna) se ejecutaría sin esperar a que la función del lado de servidor, en este caso `countSentences(sourceFolderID)` termine de ejecutarse.

Para recibir el resultado o mensaje de error debes usar los métodos `withSuccessHandler` y `withFailureHandler` the `google.script.run`

```
google.script.run
.withSuccessHandler(successHandler)
.withFailureHandler(failureHandler)
.countSentences(sourceFolderID);  
```

`successHandler` y `failureHandler` son callbacks, es decir, funciones que se ejecturan cuando termine, en este caso `countSentences` ya sea de forma exitosa o por causa de un error, respectivamente.

Relacionado

- https://es.stackoverflow.com/q/13811/65
- https://es.stackoverflow.com/q/99483/65

También relacionado

- https://es.stackoverflow.com/q/353408/65

Recursos:

- [HTML Service: Communicate with Server Functions][1]


  [1]: https://developers.google.com/apps-script/guides/html/communication

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/470018\|https://es.stackoverflow.com/q/470018]]

