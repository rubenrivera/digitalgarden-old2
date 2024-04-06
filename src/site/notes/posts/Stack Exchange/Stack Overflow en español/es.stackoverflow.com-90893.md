---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-90893.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-90893/","title":"Como incluir un scrip en programación modular con GAS","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.727-06:00","updated":"2024-04-05T16:43:52.369-06:00"}
---

# Como incluir un scrip en programación modular con GAS

El siguiente código corresponde a una muy pequeña aplicación web realizada en Google Apps Script usando plantillas.

Muestra una lista desplegable (select) y al hacer clic en el botón "Submit" agrega un mensaje indicando la opción seleccionada.

Las opciones del select se preparan en el código del lado del servidor (archivo Código.gs) y son pasadas al lado del cliente mediante luego de generar el código HTML.

Se incluye la función procesarFormulario para mostrar cómo se podría llamar una función del lado del servidor para hacer algo con los datos recopilados con el formulario y mostrar el resultado del lado del cliente.

### Código.gs

    function doGet() {
      // Cargar plantilla del lado servidor
      var plantilla = HtmlService.createTemplateFromFile('Index');
      //Crear la lista de opciones
      var opciones = '<option value="Chocolate">Chocolate</option>\n';
      opciones += '<option value="Fresa">Fresa</option>\n';
      opciones += '<option value="Vainilla">Vainilla</option>\n';
      //Agregar opciones a la plantilla
      plantilla.opciones = opciones;
      // Generar html a partir de la plantilla
      var html = plantilla.evaluate(); 
      // Enviar plantilla al lado del cliente
      return html;
      
    }
    
    function procesarFormulario(objetoFormulario) {
      //Hacer algo con el objeto formulario
      var salida = objetoFormulario.sabor;
      return salida;
    }

### Index.html

    <!DOCTYPE html>
    <html>
      <head>
        <base target="_top">
        <script>
          // Previene el envío del formulario
          function preventFormSubmit() {
            var forms = document.querySelectorAll('form');
            for (var i = 0; i < forms.length; i++) {
              forms[i].addEventListener('submit', function(event) {
                event.preventDefault();
              });
            }
          }
          window.addEventListener('load', preventFormSubmit);
    
          function handleFormSubmit(objetoFormulario) {
            google.script.run.withSuccessHandler(actualizarOpcion).procesarFormulario(objetoFormulario);
          }
          function actualizarOpcion(opcion) {
            var div = document.getElementById('salida');
            div.innerHTML = 'El sabor seleccionado fue ' + opcion;
          }
        </script>
      </head>
      <body>
        <form id="miFormulario" onsubmit="handleFormSubmit(this)">
          <select name="sabor" id="id">
          <?!= opciones ?>
          </select>
          <input type="submit" value="Submit" />
        </form>
        <div id="salida"></div>
     </body>

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/90893\|https://es.stackoverflow.com/q/90893]]

