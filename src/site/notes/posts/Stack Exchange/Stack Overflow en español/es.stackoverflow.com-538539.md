---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-538539.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-538539/","title":"Certificar Google Apps Script","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.355-06:00","updated":"2024-04-05T16:43:57.790-06:00"}
---

# Certificar Google Apps Script

La leyenda en inglés es "This application was created by another user, not by Google", en español sería "Esta aplicación fue creada por otro usuario, no por Google".

De acuerdo a [un comentario][1] de un empleado de Google (encontrado gracias a [comentario de Mogsdad][2]), esta leyenda se mostrará si aplicación fue creada con una cuenta de gmail.com y es accedida por otro usuario o bien si fue creada con una cuenta de ahora llamado Google Workspace y es accedida por un usuario de otro dominio.

Crear un proyecto de Google Cloud Platform y verificar la aplicación no resolverá esto, la única forma es embeber la aplicación en otra página web, por ejemplo en Google Sites, Google Firebase, Wordpress, etc. Para esto en el código de Google Apps Script deberá agregarse `.setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)` al objeto [HtmlOutput][3], por ejemplo:

```
function doGet(e) {
  return HtmlService.createHtmlOutputFromFile('index')
  .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL); 
}
```

En el caso de Google Sites, usar el widget para insertar código, y poner el URL de la aplicación web (URL con `/exec`).

En el caso de páginas web que permitan el uso de la etiqueta iframe, usar esta, por ejemplo:

```
<iframe src="https://script.google.com/.../exec"></iframe>
```

Relacionado

- [Google Apps Script remove warning banner](https://stackoverflow.com/q/33635284/1595451)


  [1]: https://issuetracker.google.com/issues/63521070#comment4
  [2]: https://stackoverflow.com/questions/33635284/google-apps-script-remove-warning-banner#comment112609242_33635284
  [3]: https://developers.google.com/apps-script/reference/html/html-output

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/538539\|https://es.stackoverflow.com/q/538539]]

