---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-61097.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-61097/","title":"Como mostrar otra pagina en google apps script?","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.505-06:00","updated":"2024-04-05T16:43:49.904-06:00"}
---

# Como mostrar otra pagina en google apps script?

# Respuesta corta
Las aplicaciones web creadas con Google Apps Script pueden crear y servir HTML, para ello cargan un estructura principal y luego sobre esta se puede actualizar el contenido inicial tomando contenido estático de otros archivos en formato HTML, generarlo de forma dinámica mediante plantillas, directamente mediante programación o la combinación de lo anterior.

# Ejemplo usando archivos estáticos

El siguiente código corresponde a una aplicación web realizada con Google Apps Script y HtmlService. Esta aplicación al ser cargada muestra un contenido predeterminado. Consta de dos botones, los cuales actualizan el contenido de un `DIV`.

Consta de cuatro archivos, uno en formato `.gs` y tres en formato `.html`.


## Código.gs
Incluye el código que corre del lado del servidor. La función doGet() es la función principal la cual devuelve el contenido de la página Index.html. Las funciones getPagina1 y getPagina2 toman el contenido de los archivos Pagina1.html y Pagina2.html y lo devuelven como un objeto de contenido.

    function doGet() {
      return HtmlService.createHtmlOutputFromFile('Index');
    }
    
    function getPagina1() {
      var html = HtmlService.createHtmlOutputFromFile('Pagina1').getContent();
      return html
    }
    
    function getPagina2() {
      var html = HtmlService.createHtmlOutputFromFile('Pagina2').getContent();
      return html
    }

## Index.html
Contenido HTML principal. Incluye la estructura principal y dos botones los cuales actualizan el contenido del DIV con `resultado` como id.

    <!DOCTYPE html>
    <html>
      <head>
        <base target="_top">
        <script>
          function actualizarDiv(html, button) {
            var div = document.getElementById('resultado');
            div.innerHTML = html;
          }
        </script>
      </head>
      <body>
        <input type="button" value="Página 1"
          onclick="google.script.run
              .withSuccessHandler(actualizarDiv)
              .withUserObject(this)
              .getPagina1()" />
        <input type="button" value="Página 2"
          onclick="google.script.run
              .withSuccessHandler(actualizarDiv)
              .withUserObject(this)
              .getPagina2()" />
         <div id="resultado">
         Contenido predeterminado
         </div>
      </body>
    </html>

## Pagina1.html

    <font color="brown">Contenido de pagina 1</font>

## Pagina2.html

    <font color="blue">Contenido de pagina 2</font>

# Referencias

- [Types of Scripts > Web Apps][1]
- [HTML Service: Create and Serve HTML][2]


  [1]: https://developers.google.com/apps-script/guides/web
  [2]: https://developers.google.com/apps-script/guides/html/

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/61097\|https://es.stackoverflow.com/q/61097]]

