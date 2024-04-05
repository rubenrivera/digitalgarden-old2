---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-311670.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-311670/","title":"Establecer la última fila de una hoja cuando se están añadiendo de forma contigua filas desde un formulario","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.417-06:00","updated":"2024-04-05T16:43:56.297-06:00"}
---

# Establecer la última fila de una hoja cuando se están añadiendo de forma contigua filas desde un formulario

Dado que estas usando los formularios de Google y los has configurado para enviar las respuestas de forma automática a la hoja de cálculo vinculada, podrías tomar en cuenta que 

1. la respuesta se inserta en la primera fila disponible luego del intervalo de datos, la cual se convierte, al menos momentáneamente, en la última fila.
2. el activador "on form submit" envía un objeto evento como argumento, para usarlo, tu función debe incluir una variable que lo reciba
3. el objeto evento incluye una propiedad range a la que se asigna el invervalo que ha recibido la respuesta.

Ejemplo:
<!-->

    /**
     * Función a ser llamada por un activador de hoja de cálculo "on form submit"
     *
     * @param {Object} e Objeto evento enviado por el activador "on form submit"
     * @param {string} e.authMode Un valor del enum ScriptApp.AuthMode 
     * @param {Object} e.namedValues Un objeto que contiene los nombres de las preguntas y valores enviados del formulario
     * @param {Range}  e.range Un objeto Range, representando la celda o intervalo de celdas que han sido editados
     * @param {string} e.triggerUid ID del activador que ha producido este evento
     * @param {Array}  e.values Un Array con valores en el mismo orden en el que aparecen en la hoja de cálculo
     */
    function alRecibirUnaRespuesta(e){
       var ultimaFila = e.range.getLastRow();
       console.info('La última fila luego de recibir la respuesta del formulario es %s', ultimaFila);
    }

Nota: Para depurar la función anterior, debe crearse una función que  llame la función que queremos depurar enviando un objeto evento con las características requeridas.

Relacionado

- https://es.stackoverflow.com/q/505/65

Referencias

- [Events Objects | Google Apps Scripts](https://developers.google.com/apps-script/guides/triggers/events)
- [Class Range (getLastRow)][1]


  [1]: https://developers.google.com/apps-script/reference/spreadsheet/range#getlastrow

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/311670\|https://es.stackoverflow.com/q/311670]]

