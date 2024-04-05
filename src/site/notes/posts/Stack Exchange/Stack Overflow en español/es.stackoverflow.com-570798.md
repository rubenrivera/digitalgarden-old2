---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-570798.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-570798/","title":"Hacer que mi web ocupe toda la pantalla","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.507-06:00","updated":"2024-04-05T16:43:58.003-06:00"}
---

# Hacer que mi web ocupe toda la pantalla

Las aplicaciones web creadas con Google Apps Script tienen limitaciones. Por ejemplo, hay limitaciones para las `<meta>` y esta se deben indicar del lado del servidor

```
function doGet(e){
  return HtmlService.createHtmlOutputFromFile('index')
     .addMetaTag('viewport', 'width=device-width, initial-scale=1')
}
```

Referencia

- https://developers.google.com/apps-script/guides/web

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/570798\|https://es.stackoverflow.com/q/570798]]

