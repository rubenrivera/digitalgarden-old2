---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-401769.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-401769/","title":"Cómo enlazar dos Apps Script","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.728-06:00","updated":"2024-04-05T16:43:56.748-06:00"}
---

# Cómo enlazar dos Apps Script

En la aplicación web que va a ser insertada tienes que modificar la función `doGet` para incluir el modo sandbox a utilizar (`HtmlService.XFrameOptionsMode.ALLOWALL`)

    function doGet() {
      return HtmlService.createTemplateFromFile("exitoso")
        .evaluate()
        .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
    }

Recursos

- https://developers.google.com/apps-script/reference/html/html-output#setXFrameOptionsMode(XFrameOptionsMode)
- [Embedding Google Apps Script in an iFrame](https://stackoverflow.com/q/40842627/1595451)
- [App Script HTMLService App in iFrame](https://stackoverflow.com/q/16808722/1595451)


# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/401769\|https://es.stackoverflow.com/q/401769]]

