---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-94130.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-94130/","title":"classList.remove no es una función","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.759-06:00","updated":"2024-04-05T16:43:52.490-06:00"}
---

# classList.remove no es una función

<s>El problema parece deberse a un error tipográfico, ya que el id es `tab_1617` (con guión bajo) pero en la función lo llama como `tab1617` (sin guión bajo).</s> 

Asumiendo que se ha cargado las librerías/frameworks necesarios, con el código proporcionado por el OP no me ha sido posible reproducir el error.

A continuación se  comentan las líneas sobre los nodos con prefijo nav pues no fueron incluidos en el código original de la pregunta Las líneas para la carga de bootstrap fueron tomadas de https://www.w3schools.com/bootstrap/bootstrap_get_started.asp.

<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-js -->

    //var nav1516 = document.getElementById('nav-1516');
    //var nav1617 = document.getElementById('nav-1617');
    var tab1516 = document.getElementById('tab_1516');
    var tab1617 = document.getElementById('tab_1617');

    function mostrar1617(){
     tab1617.className = 'active';
     //nav1617.style.display = 'block';

     //nav1516.style.display = 'none';
     tab1516.classList.remove("active");
    }

<!-- language: lang-html -->

    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">

    <!-- jQuery library -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

    <!-- Latest compiled JavaScript -->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>

    <ul class="nav nav-tabs nav-justified margen-top col-lg-1">
     <li role="menubar" id="tab_1516"><a href="#palmares" onclick="mostrar1516()">Temp. 2015/16</a></li>
     <li role="menubar" id="tab_1617"><a href="#palmares" onclick="mostrar1617()">Temp. 2016/17</a></li>
    </ul>

    <ul class="nav nav-tabs nav-justified margen-top col-lg-1 oculta" id="nav-1516">
     <li role="menubar"><a href="#">Atletismo</a></li>
     <li role="menubar"><a href="#" onclick="muestraBalonmano1516()">Balonmano</a></li>
     <li role="menubar"><a href="#">Baloncesto</a></li>
     <li role="menubar"><a href="#">Esgrima</a></li>
     <li role="menubar"><a href="#">Lucha Canaria</a></li>
    </ul>

<!-- end snippet -->



# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/94130\|https://es.stackoverflow.com/q/94130]]

