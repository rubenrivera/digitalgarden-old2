---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-297137.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-297137/","title":"Cómo abrir un Doc de Google Drive en la UI de Google sheet?","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.760-06:00","updated":"2024-04-05T16:43:56.145-06:00"}
---

# Cómo abrir un Doc de Google Drive en la UI de Google sheet?

Para agregar un menú al abrir un documento, podrías usar el activador simple `onOpen(e)`. 

Abrir un documento al hacer click en la opción correspondiente del menú no es posible, pero puedes presentar un enlace al que el usuario haga clic, esto es una limitación impuesta por Google ara prevenir redirecciones maliciosas.

Si esto fuera aceptable debarás usar *HTML Service* (`HtmlService`)y como mínimo una etiqueta `a` con las propiedades `href` y `target` para mostrar un diálogo con un enlace en el que el usuario haga click, por ejemplo

    function onOpen(e){
      var menu = SpreadsheetApp.getUi().createMenu('Mi menú');
      menu.addItem('Abrir mi documento','openDocument');
      menu.addToUi();
    }
    
    function openDocument(){
      var url = 'Poner aquí el url del documento';
      var html = '<a href="' + url + '" target="_blank">Abrir documento</a>';
      SpreadsheetApp.getUi().showModalDialog(HtmlService.createHtmlOutput(html,'Un título apropiado');
    }

Nótese el uso de ` target="_blank"` para asegurarnos que el enlace se abrirá en una nueva pestaña o ventana (depende de la configuración del navegador del usuario).

Si desconoces el enlace al documento, podrías usar *Drive Service* (`DriveApp`) para encontrar el documento y obtener su URL.

Relacionado 

- [¿Cómo crear un menú en Google Apps Script desde un objeto tipo JSON o matriz (array)?](https://es.stackoverflow.com/q/99975/65)
- [Como puedo llamar a una función en el Método OnOpen() de Google Apps Script?](https://es.stackoverflow.com/q/245352/65)

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/297137\|https://es.stackoverflow.com/q/297137]]

