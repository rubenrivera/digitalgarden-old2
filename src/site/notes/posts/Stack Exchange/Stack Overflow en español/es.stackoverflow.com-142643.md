---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-142643.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-142643/","title":"¿Es posible convertir el posicionamiento html en coordenadas x,y?","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.727-06:00","updated":"2024-04-05T16:43:53.108-06:00"}
---

# ¿Es posible convertir el posicionamiento html en coordenadas x,y?

Si lo que quieres saber son las coordenadas de donde el usuario hace clic, usa las propiedades clientX y clientY del evento de onmousedown (ejemplo adaptado de https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/clientX

<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-js -->

    function showCoords(evt) {
      alert(
        "clientX value: " + evt.clientX + "\n" +
        "clientY value: " + evt.clientY + "\n"
      );
    }

<!-- language: lang-css -->

    div {
      border-style: solid;
      border-color: blue;
      text-align: center;
      height: 200px
    }


<!-- language: lang-html -->

    <div onmousedown="showCoords(event)">
      <p>Para mostrar las coordenadas haga clic dentro del recuadro azul</p>
    </div>

<!-- end snippet -->

Por otro lado, si lo que quieres saber es si se hace clic en una región determinada de una imagen, usa map. 

En el siguiente ejemplo si se hace clic del lado izquierdo se mostrará Izquierda, si se hace clic del lado derecho se mostrará Derecha.

<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-js -->

    var datos = document.getElementById('datos');
    function left(){
      datos.innerHTML = 'Izquierda';
    }

    function right(){
      datos.innerHTML = 'Derecha';
    }

<!-- language: lang-css -->

    map area {
      outline-color:red;
    }

<!-- language: lang-html -->

    <map name="primary">
      <area shape="circle" coords="75,75,75" href="#" onClick="left()">
      <area shape="circle" coords="275,75,75" href="#" onClick="right()">
    </map>
    <img usemap="#primary" src="https://placehold.it/350x150" alt="350 x 150 pic">
    <div id="datos"></div>

<!-- end snippet -->

NOTA: El código anterior es una adaptación de https://developer.mozilla.org/en-US/docs/Web/HTML/Element/map

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/142643\|https://es.stackoverflow.com/q/142643]]

