---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-72702.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-72702/","title":"Cómo seleccionar un grupo de elementos en Javascript","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.727-06:00","updated":"2024-04-05T16:43:50.855-06:00"}
---

# Cómo seleccionar un grupo de elementos en Javascript


Debes de aplicar el "EventListener" a cada celda. Una forma de hacerlo es usando un `for`. 

>Nota: El código del amarillo es `#ffff00` no `#000`.

Ejemplo:


<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-js -->

    var elementoTable = document.createElement("tbody");

    for (f = 0; f < 30; f++) {

      var elementoTR = document.createElement("tr");


      for (c = 0; c < 30; c++) {


        var elementoTD = document.createElement("td");
        elementoTR.appendChild(elementoTD);

      }

      elementoTable.appendChild(elementoTR);

    }

    document.getElementById("tablerodibujo").appendChild(elementoTable);
    var celdas = document.getElementsByTagName("td");
    for(var i = 0;i < celdas.length; i++) {
      celdas[i].addEventListener("click", colorear_amarillo, false);
    }

    function colorear_amarillo() {

      this.style.backgroundColor = "#ffff00";
    }

<!-- language: lang-css -->

    td {
      background-color: green;
      width: 25px;
      height: 25px;
    }

    tr {
      width: 25px;
      height: 25px;
    }

<!-- language: lang-html -->

    <table id="tablerodibujo"></table>

<!-- end snippet -->



# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/72702\|https://es.stackoverflow.com/q/72702]]

