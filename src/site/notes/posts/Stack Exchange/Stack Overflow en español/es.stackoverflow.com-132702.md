---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-132702.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-132702/","title":"¿Como llenar un Select desde una tabla en google drive con ID y Descripción?","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.417-06:00","updated":"2024-04-05T16:43:52.690-06:00"}
---

# ¿Como llenar un Select desde una tabla en google drive con ID y Descripción?

A continuación un ejemplo de una aplicación web creada usando un "bounded script" a una hoja de cálculo con una única hoja que en A1:B4 incluye los datos indicados en la pregunta:

<!-- language: lang-none -->

      |      A      |        B      |
    --+-------------|---------------|
     1|ID	        |Description    | 
     2|00-010000	|PRESUPUESTO    |
     2|00-020000	|INGRESOS       |
     4|00-030000	|GASTOS         |

Al ir a la dirección de la aplicación web se mostrará una lista desplegable mostrando las opciones indicadas en A2:B4, usando los valores de la columna A como los valores de las opciones de la lista desplegable y los valores de la columna B como el texto de las opciones.

### Código.gs

<!-- language: lang-js -->

    function doGet() {
      return HtmlService.createHtmlOutputFromFile('index');
    }
    
    function getListItems(){
      var ss = SpreadsheetApp.getActiveSpreadsheet();
      var sheet = ss.getSheets()[0];
      var range = sheet.getRange('A2:B4');
      var items = range.getValues();
      return items;
    }

### index.html

<!-- language: lang-html -->

    <!DOCTYPE html>
    <html>
      <head>
        <base target="_top">
      </head>
      <body>
        <select id="selectList">
        </select>
      </body>
      <script>
        function populateList(items){
          var list = document.getElementById("selectList");
          for(var i in items) {
            list.add(new Option(items[i][1], items[i][0]));
           }
         }
         google.script.run.withSuccessHandler(populateList).getListItems();
      </script>
    </html>

Referencias

- [HTML Service: Create and Serve HTML](https://developers.google.com/apps-script/guides/html/)

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/132702\|https://es.stackoverflow.com/q/132702]]

