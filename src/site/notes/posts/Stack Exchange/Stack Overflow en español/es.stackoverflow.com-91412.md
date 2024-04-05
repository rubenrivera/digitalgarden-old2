---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-91412.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-91412/","title":"Como incluir un scrip en programación modular con GAS","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.727-06:00","updated":"2024-04-05T16:43:52.447-06:00"}
---

# Como incluir un scrip en programación modular con GAS

Aparentemente lo que el OP llama "programación modular" se refiere a lo que en la documentación de Google Apps Script se describe como [HTML Service: Templated HTML][1] y en particular a "[Force printing scriptlets][2]".

Al inicio de [HTML Service: Templated HTML][1] se menciona

>If you paste the example below into the script editor, the contents of the `<?= ... ?>` tag (a [printing scriptlet][3]) will appear in italics. That italicized code runs on the server *before the page is served to the user*. Because scriptlet code executes before the page is served, it can only run once per page; unlike client-side JavaScript or Apps Script functions that you call through [google.script.run][4], scriptlets can't execute again after the page loads.

**Traducción**  (énfasis mío)

> Si pegas el siguiente ejemplo en el editor de scripts, el contenido de la etiqueta `<?=...?>` (un "printing scriptlet") se mostrará en itálicas. Ese código italizado se ejecuta en el servidor ***antes que la página sea servida al usuario***. Debido a que el código scriptlet se ejecutar antes de que la página es servida, esta únicamente puede ejecutarse una vez por página; contrario a las funciones del lado del cliente de JavaScript o Apps Script que puedes llamar mediante google.script.run, los scriptlets no se pueden ejecutar de nuevo luego de que la página se carga.

Code.gs

    function doGet() {
      return HtmlService
          .createTemplateFromFile('Index')
          .evaluate();
    }

Index.html

    <!DOCTYPE html>
    <html>
      <head>
        <base target="_top">
      </head>
      <body>
        Hello, World! The time is <?= new Date() ?>.
      </body>
    </html>

  [1]: https://developers.google.com/apps-script/guides/html/templates
  [2]: https://developers.google.com/apps-script/guides/html/templates#force-printing_scriptlets
  [3]: https://developers.google.com/apps-script/guides/html/templates#printing_scriptlets
  [4]: https://developers.google.com/apps-script/guides/html/communication

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/91412\|https://es.stackoverflow.com/q/91412]]

