---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-190061.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-190061/","title":"¿Como determinar si la celda que ha cambiado de una google sheet esta en una lista y cómo poner un disparador?","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.728-06:00","updated":"2024-04-05T16:43:54.258-06:00"}
---

# ¿Como determinar si la celda que ha cambiado de una google sheet esta en una lista y cómo poner un disparador?

# Respuesta corta

De la [rev 3][1] de la pregunta

> Lo que se pretende es que si tras cambiar alguna manualmente alguna celda de D61:61 el valor de C61 es mayor que 0.25, el sistema envie un par de e-mails. Lo mismo pasaria con las celdas C62:C66

    function onEdit(e){
      var fila = e.range.getRow();
      var columna = e.range.getColumn();
      if(columna < 3 && fila !== 61) return; // Salir cuando rango editado no sea D61:61 
      // Hacer lo que se tenga que hacer cuando el rango editado sea válido.
    }   

<hr>

Código previo

    function onEdit(e){
      var celda = e.range.getA1Notation();
      var fila = celda.getRow();
      // Asumiendo que las celdas modificadas por el usuario a monitorear son
      var lista = ['C61','C62','C63','C64','C65','C66'];
      if(lista.indexOf(celda)){
        //Poner aquí lo que hay que hacer si la celda está en lista
      } else {
        // Poner aquí lo que hay que hacer si la celda no está enl a lista
      }
    }

# Respuesta amplia
Con respecto a lo indicado en la cita incluida arriba, se puede usar un activador al editar o al cambiar para verificar lo que ocurre en otra parte del de la hoja, como sería un cálculo realizado por fórmulas

NOTA: Uno debe tener presente la asincronía entre el evento y el recálculo. Cuando son cálculos sencillos es muy probable que estos sean más rápidos que Apps Script. Puede usarse SpreadsheetApp.sleep(millisegundos) para esperar un determinado tiempo o bien podrian guardarse los valores previos en propiedades y usar algo como "exponential backoff" para tener un cierto grado de tolerancia a lo que demore el recálculo.

<hr> 

Sobre el código, la variable `e` no está definida. No está claro cómo pasas esa variable desde una función onEdit(e), pero seguramente no es realmente relevante para las preguntas que haces.

<hr>

> 1)-¿Es posible definir una lista de celdas a comprobar tal que
> ['C61','C62','C63','C64','C65','C66']
> 
> y hacer algo como en python "celda in
> ['C61','C62','C63','C64','C65','C66']

Por un lado Google Apps Script está basado en JavaScript, así que puedes definer la lista de celdas a comprobar como un array de referencias prácticamente como lo has scrito

    var lista = ['C61','C62','C63','C64','C65','C66'];

Luego puedes usar [getRangeList(a1Notations)][2] para obtener un objeto [RangeList][3] o puedes usar los métodos de Array como indexOf, each, some, every, map o bien usar bucles como for y while junto con algunos de los `getRange(a1Notation)`, ya sea de [Class Sheet][4] o de [Class Spreadsheet][5] para hacer cosas con los elementos de la lista.


> 2)-El "e.range" viene de intentar usar una función onEdit(e) donde "e"
> es un evento. Sin embargo, estoy intentando no usar un evento. No me
> queda claro el uso de disparadores. Parece que hay funciones
> "reservadas" que se "auto-disparan" como "onEdit(e)" y "onChange(e)"
> cuando se edita o cambia una celda y otras que no, necesitando de
> disparadores "externos" ¿qué opciones tengo?

Los nombres de función reservados se indican en https://developers.google.com/apps-script/guides/triggers/. Estos se utilizan para **activadores simples**. `onChange` no es uno de ellos. Los **activadores instalables** se configuran desde el menú Editar desde donde se puede seleccionar cualquier función del ámbito global del proyecto siendo editado.

Los indicadores instalables se indican en https://developers.google.com/apps-script/guides/triggers/installable. 

En las hojas de cálculo para ejecutar una función cuando se edita una función de pudes usar un activador simple `onEdit`, o bien una activador instalable *al editar* o *al cambiar* una hoja de cálculo.

Notas: 

1. Evita usar usar el nombre onEdit para un activador instalable pues podría ejecutarse doblemente, al ser disparado como activador simple y como activador instalable.
2. Tu activador instalable al cambiar puede llamar una función con nombre onChange o con cualquier otro nombre, pero evitar llamar una función llamada onEdit por lo indicado en la nota anterior.
3. Los activadores al editar o al cambiar sólo son disparados por ediciones de celdas o la hoja de cálculo realizadas por el usuario según el caso. Los cambios de valores debido a recálculo no disparan estos activadores. Si esto es lo que estás buscando, deberás usar un activador dirigido por tiempo (time-driven trigger) o una función desde una barra lateral, diálogo o algo externo que esté monitoreando los cambios y actúe en consecuencia.


  [1]: https://es.stackoverflow.com/revisions/190038/3
  [2]: https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet#getrangelista1notations
  [3]: https://developers.google.com/apps-script/reference/spreadsheet/range-list
  [4]: https://developers.google.com/apps-script/reference/spreadsheet/sheet#getrangea1notation
  [5]: https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet#getrangea1notation

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/190061\|https://es.stackoverflow.com/q/190061]]

