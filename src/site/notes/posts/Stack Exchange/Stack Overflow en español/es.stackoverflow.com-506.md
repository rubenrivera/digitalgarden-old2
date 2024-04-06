---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-506.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-506/","title":"Cómo puedo probar una función disparadora (activador) en Google Apps Script","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.416-06:00","updated":"2024-04-05T16:43:48.304-06:00"}
---

# Cómo puedo probar una función disparadora (activador) en Google Apps Script

Escribe una función de prueba que pase un evento simulado a la función disparadora. Aquí se incluye un ejemplo que prueba un función disparadora `onEdit()`. Esta pasa un objeto de evento con toda  la información descrita para "Spreadsheet Edit Events" en [Understanding Events][1]. 

Para usarla, estable una interrupción en tu función objetivo `onEdit`, selecciona la función `test_onEdit` y haz clic sobre `Debug`.

<!-- language-all: lang-js -->

    /*
     * Función de prueba para onEdit. Pasa un objento de evento para simular una
     * edición  a una celda en una hoja de cálculo 
     *
     * Para actualizaciones revisar https://stackoverflow.com/a/16089067/1677912
     *
     * Véase 
     * https://developers.google.com/apps-script/guides/triggers/events#google_sheets_events
     */

    function test_onEdit() {
      onEdit({
        user : Session.getActiveUser().getEmail(),
        source : SpreadsheetApp.getActiveSpreadsheet(),
        range : SpreadsheetApp.getActiveSpreadsheet().getActiveCell(),
        value : SpreadsheetApp.getActiveSpreadsheet().getActiveCell().getValue(),
        authMode : "LIMITED"
      });
    }

Si tienes curiosidad, esto fue escrito para probar la función `onEdit` para  [ Google Spreadsheet conditional on three cells](https://stackoverflow.com/questions/16085461/google-spreadsheet-conditional-on-three-cells).

A continuación está una función para eventos de envío de formularios en la hoja de cálculo. Este construye un evento simulado leyendo datos del envío de formulario. Esto fue escrito originalmente para [Getting TypeError in onFormSubmit trigger?](https://stackoverflow.com/questions/17984230/how-do-i-fix-typeerror-when-trying-to-merge-google-form-data-to-pdf-and-send-to/17984695#17984695).

    /**
     * Función de prueba para funciones disparadoras en hojas de cálculo de
     * envío de formularios.
     * Recorre el contenido de la hoja, creando eventos de envío de formulario
     * simulados 
     *
     * Para actualizaciones revisar: https://stackoverflow.com/a/16089067/1677912
     *
     * Véase 
     * https://developers.google.com/apps-script/guides/triggers/events#google_sheets_events
     */

    function test_onFormSubmit() {
      var dataRange = SpreadsheetApp.getActiveSheet().getDataRange();
      var data = dataRange.getValues();
      var headers = data[0];
      // Inicia en la fila 1, saltando los encabezados en la fila 0
      for (var row=1; row < data.length; row++) {
        var e = {};
        e.values = data[row].filter(Boolean);  // filtro: https://stackoverflow.com/a/19888749
        e.range = dataRange.offset(row,0,1,data[0].length);
        e.namedValues = {};
        // Recorre los encabezados para crear un objeto namedValues
        // NOTA: todos los namedValues son arreglos.
        for (var col=0; col<headers.length; col++) {
          e.namedValues[headers[col]] = [data[row][col]];
        }
        // Pasar el evento simulado a onFormSubmit
        onFormSubmit(e);
      }
    }

### Consejos

Cuando se simulen eventos, tener cuidado de empatar los objetos de evento documentos los mas preciso que sea posible.

- Si se quiere validar la documentación, se pueden registrar los eventos recibidos de la función disparadora.

        Logger.log( JSON.stringify( e , null, 2 ) );

 - En eventos de envío de formularios en una hoja de cálculo:
  - todos los valores namedValues son arreglos.
  - Las marcas de tiempo son cadenas, y su formato será localizado a la localización del formulario. Si se lee desde la hoja de cálculo con el formato predeterminado<sup>*</sup>, ellos serán objetos de fecha. Si la función disparadora depende en el formato de cadena de la marca de tiempo (lo cual es una mala idea), tener cuidado de asegurarse que se simula el valor apropiadamente.
  - Si en la hoja de cálculo hay columnas que no están en el formulario, la técnica en este código simulará un "evento" con esas valores adicionales incluídos, lo cual no es lo que se recibirá de un envío de formulario.
 - Como fue reportado en[Issue 4335][2], el arreglo de `valores` saltará las respuestas en blanco (en "nuevos formularios" + "nueva hoja de cálculo"). El método `filter(Boolean)` es usado para simular este comportamiento.


----------
<sup>*</sup>Una celda con formato "texto plano" preservará la fecha como una cadena, y no es una buena idea.


  [1]: https://developers.google.com/apps-script/understanding_events
  [2]: https://code.google.com/p/google-apps-script-issues/issues/detail?id=4355

**Referencias**  
[Respuesta](https://stackoverflow.com/a/16089067/1595451) de [Mogsdad](https://stackoverflow.com/users/1677912/mogsdad) edición de 2014-12-03 17:16:57Z.

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/506\|https://es.stackoverflow.com/q/506]]

