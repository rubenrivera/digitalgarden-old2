---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-46538.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-46538/","title":"Mandar correo cuando se cambia una celda y se cumplen varias condiciones","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.626-06:00","updated":"2024-04-05T16:43:48.828-06:00"}
---

# Mandar correo cuando se cambia una celda y se cumplen varias condiciones

Va un ejemplo de lo que sería un script a ser llamado cuando ocurre un cambio. El script envía un mensaje cuando se modifica una de tres celdas, `B1`,`B2`,`B3` de la `Hoja 1` y que cada una de estas cumplen con una condición específica.

> Nota: Para facilitar el seguimiento se obtienen los datos de las celdas individualmente. Para un desempeño óptimo, reducir el número de llamadas a la API, por ejemplo usando [getDataRange][1]

    function enviarEmail() {
      //Iniciamos
      //Validar si hay cuota disponible. En caso contrario avisar al usuario y terminar.
      var cuotaDisponible = MailApp.getRemainingDailyQuota();
      Logger.log('Cuota disponible previa: %s', cuotaDisponible);
      if(cuotaDisponible < 1) {
        Browser.msgBox('No queda cuota disponible por hoy. Intenta más tarde.');
        return;
      }
      // Obtener la celda actual
      var celdaActual = SpreadsheetApp.getActiveRange();
      /*
       * En caso de que la celda actual sea B1, B2 o B3 
       * y que se cumplan otras condiciones, enviar un
       * mensaje
       */
      switch (celdaActual.getA1Notation()){
        case 'B1':
        case 'B2':
        case 'B3':
        var libro = SpreadsheetApp.getActiveSpreadsheet();
        var hoja = libro.getSheetByName('Hoja 1');
        //Valor B1
        var destinatario = hoja.getRange(1, 2).getValue();
        //Valor B2
        var asunto = hoja.getRange(2, 2).getValue();
        //Valor B3
        var cuerpo = hoja.getRange(3, 2).getValue();
        //Validar que se cumplen las condiciones requeridas
        if(
            // Dirección de correo. Sólo validar que la longitud mínima sea 3
            destinatario.length > 3 && 
            // Asunto. Validar que tenga al menos un caracter
            asunto.length > 1 && 
            // Cuerpo. Validar que tenga al menos un caracter
            cuerpo.length > 1
        ){
          //Enviar mensaje
          MailApp.sendEmail(destinatario, asunto, cuerpo);
          //Aviso al usuario
          Browser.msgBox('Mensaje enviado');
        } else {
          //Aviso al usuario
          Browser.msgBox('No se envió el mensaje');
        }
        /*
         * En caso de agregar otros casos, prevenir que se ejecuten
         * "sin querer"
         */
        break;
      }
      //Terminamos
      return;
    }


Nota: He creado un gist con el código de esta respuesta -> https://gist.github.com/rubenrivera/6015c00bff61a994bb0af6d97ec158a2

  [1]: https://developers.google.com/apps-script/reference/spreadsheet/sheet#getdatarange

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/46538\|https://es.stackoverflow.com/q/46538]]

