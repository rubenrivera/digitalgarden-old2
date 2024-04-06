---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-99567.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-99567/","title":"Botón que hace ejecutar una Google Apps Script","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.759-06:00","updated":"2024-04-05T16:43:52.576-06:00"}
---

# Botón que hace ejecutar una Google Apps Script

El código tiene varios problemas.

1. `google.script.run.onSubmit();` Del lado del cliente, llama una función del lado del servidor, pero no hay una función "callback" que espere por la respuesta del servidor.
2. `onSubmit(e)` del lado del servidor llama `doGet(e)`, pero esta es una función que reservada para ser llamada por medio de la URL de la aplicación.
2. `window.location.reload(true);` En [respuesta][1] de Erick Koleda con fecha del 2013, a una pregunta sobre el uso de este código, HTMLService restringe el acceso al objeto window. No estoy del todo seguro como afecta cuando se usa `HtmlService.SandboxMode.IFRAME`. Para lograr lo mismo yo utilizo otro enfoque el cual describo en el punto siguiente.
3. Considerando que en el documento de [mejores prácticas][2] (en inglés) se indica no usar plantillas para obtener datos, que es lo que el código del OP hace, sino que se obtengan de forma asíncrona a continuación se incluye un ejemplo de una aplicación web que obtiene los datos de una hoja de cálculo y los actualiza al hacer clic en un botón.

# Ejemplo de aplicación web

Cuando se carga la aplicación web, los datos se cargan usando `window.onload` llamando la función `actualizarTabla()` que a su vez llama a `google.script.run` usando `withSuccessHandler` para que una vez que el servidor responda con los datos de la hoja de cálculo en formato de tabla HTML, se pasen dichos datos al elemento de la página en la que los deseamos mostrar. Para actualizar los datos, el botón llama la misma función.

## Código.gs

<!-- language: lang-js -->

    /*
     * Devuelve página web.
     */
    function doGet(e) {
      return HtmlService.createHtmlOutputFromFile('Index')
        .setSandboxMode(HtmlService.SandboxMode.IFRAME);
    }
    /*
     * Obtiene los datos de la hoja de cálculo especificada por ID.
     */
    function getData() {
      return SpreadsheetApp
          .openById('IdDeLaHojaDeCalculo')
          .getActiveSheet()
          .getDataRange()
          .getValues();
    }
    /*
     * Convierte los datos en una tabla HTML
     */
    function crearTabla(){
      var data = getData();
      var tabla = '<table>\n';
      for(var i = 0; i < data.length; i++){
        tabla += '<tr>';
        for(var j = 0; j < data[0].length; j++){
          tabla += '<td>' + data[i][j] + '</td>'
        }
        tabla += '</tr>\n';
      }
      tabla += '</table>';
      return tabla;
    }

## Index.html


<!-- language: lang-html -->

    <!DOCTYPE html>
    <html>
      <head>
        <base target="_top">
        <script type="text/javascript">
        window.onload = actualizarTabla();
        
        function actualizarTabla(){
          google.script.run
            .withSuccessHandler(mostrarTabla)
            .crearTabla();
        }
        function mostrarTabla(tabla){
          document.getElementById("tabla").innerHTML = tabla;
        }
        </script>
        
      </head>
      <body>
        <button onclick="actualizarTabla();">Actualizar</button>
        <div id="tabla">Cargando...</div>
      </body>
    </html>

Referencias:

- [HTML Service: Communicate with Server Functions][3]


  [1]: https://stackoverflow.com/a/15168485/1595451
  [2]: https://developers.google.com/apps-script/guides/html/best-practices
  [3]: https://developers.google.com/apps-script/guides/html/communication

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/99567\|https://es.stackoverflow.com/q/99567]]

