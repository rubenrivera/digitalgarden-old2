---
dg-publish: true
dg-hide: true
title: Cómo adaptar evenBetterBuildUrls() de Mogsdad para importar respuestas a un formulario
Site: Stack Overflow en español
Stack Exchange Post ID: 753
Stack Exchange Type: Question
Stack Exchange Post Created: 08/12/15 17:00
Stack Exchange Post Last Edit: 23/05/17 12:39
Stack Exchange Edited By: Comunidad (-1)
Score: 6
Favorites: 
Views: 455
Answers: 1
CW: 
Closed: 
---
# Cómo adaptar evenBetterBuildUrls() de Mogsdad para importar respuestas a un formulario

En https://stackoverflow.com/a/26395487/1595451 por [Mogsdad](https://stackoverflow.com/users/1677912/mogsdad) del 2014-11-26 01:27:15Z comparte el código de evenBetterBuildUrls(). Este tiene la finalidad de generar los URLs de prellenado de formularios de Google. Algunas cosas las he podido realizar pero en otras estoy atorado.

La adaptación a realizar es la siguiente:

1. Obtener las respuestas de una hoja específica en lugar de la hoja predeterminada.
2. Incluir respuestas del tipo TIME, DURATION y GRID
3. Traducción de los comentarios para facilitar la adopción del mismo por quienes sólo hablan español.
4. Agregar instrucciones para usuarios que recien empiezan con Google Apps Script.

Sé que varían los parámetros de cada clase de tipo elemento de respuesta para el método createResponse() correspondiente a cada una y que el nombre de las preguntas del tipo GRID no coincide con el título de la pregunta del formulario.


    /**
     * Use Form API to generate pre-filled form URLs
     * 
     * https://stackoverflow.com/a/26395487/1677912
     */
    function evenBetterBuildUrls() {
      var ss = SpreadsheetApp.getActive();
      var sheet = ss.getSheetByName("Form Responses 1");
      var data = ss.getDataRange().getValues();  // Data for pre-fill
      var headers = data[0];                     // Sheet headers == form titles (questions)
    
      var formUrl = ss.getFormUrl();             // Use form attached to sheet
      var form = FormApp.openByUrl(formUrl);
      var items = form.getItems();
      var urlCol = headers.indexOf("Prefilled URL");   // If there is a column labeled this way, we'll update it
    
      // Skip headers, then build URLs for each row in Sheet1.
      for (var row = 1; row < data.length; row++ ) {
        Logger.log("Generating pre-filled URL from spreadsheet for row="+row);
        // build a response from spreadsheet info.
        var response = form.createResponse();
        for (var i=0; i<items.length; i++) {
          var ques = items[i].getTitle();           // Get text of question for item
          var quesCol = headers.indexOf(ques);      // Get col index that contains this question
          var resp = ques ? data[row][quesCol] : "";
          var type = items[i].getType().toString();
          Logger.log("Question='"+ques+"', resp='"+resp+"' type:"+type);
          // Need to treat every type of answer as its specific type.
          switch (items[i].getType()) {
            case FormApp.ItemType.TEXT:
              var item = items[i].asTextItem();
              break;
            case FormApp.ItemType.PARAGRAPH_TEXT: 
              item = items[i].asParagraphTextItem();
              break;
            case FormApp.ItemType.LIST:
              item = items[i].asListItem();
              break;
            case FormApp.ItemType.MULTIPLE_CHOICE:
              item = items[i].asMultipleChoiceItem();
              break;
            case FormApp.ItemType.CHECKBOX:
              item = items[i].asCheckboxItem();
              // In a form submission event, resp is an array, containing CSV strings. Join into 1 string.
              // In spreadsheet, just CSV string. Convert to array of separate choices, ready for createResponse().
              if (typeof resp !== 'string')
                resp = resp.join(',');      // Convert array to CSV
              resp = resp.split(/ *, */);   // Convert CSV to array
              break;
            case FormApp.ItemType.DATE:
              item = items[i].asDateItem();
              resp = new Date( resp );
              break;
            case FormApp.ItemType.DATETIME:
              item = items[i].asDateTimeItem();
              resp = new Date( resp );
              break;
            default:
              item = null;  // Not handling DURATION, GRID, IMAGE, PAGE_BREAK, SCALE, SECTION_HEADER, TIME
              break;
          }
          // Add this answer to our pre-filled URL
          if (item) {
            var respItem = item.createResponse(resp);
            response.withItemResponse(respItem);
          }
          // else if we have any other type of response, we'll skip it
          else Logger.log("Skipping i="+i+", question="+ques+" type:"+type);
        }
        // Generate the pre-filled URL for this row
        var editResponseUrl = response.toPrefilledUrl();
        // If there is a "Prefilled URL" column, update it
        if (urlCol >= 0) {
          var urlRange = sheet.getRange(row+1,urlCol+1).setValue(editResponseUrl);
        }
      }
    };

# Referencias

##Ejemplos de preguntas que podrían beneficiarse de esta adaptación

[Como asociar resultados de una hoja a un formulario de google - Foro de Ayuda de Google Drive](https://productforums.google.com/forum/#!topic/docs-es/ZJUfhIw4uro)

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/753\|https://es.stackoverflow.com/q/753]]

