---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-146091.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-146091/","title":"Marcador de goles con una pelota que rebota","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.354-06:00","updated":"2024-04-05T16:43:53.158-06:00"}
---

# Marcador de goles con una pelota que rebota

En la pregunta se indica que 

>  pero en caso del "equipo rojo" si x == 480 && y >= 125 && y <= 175 en este caso no pasa nada pues 480 no puede ser, esta fuera del contenedor (no se porque) 

En realidad si pasa, sólo que tarda un poco.

A continuación el código del OP con cambios mínimos (se señalan con comentarios)



<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-js -->

    // Simulador 6

    var x = 0;

    var xLimite = 0;

    var y = 0;

    var yLimite = 0;

    var azul = 0,
      rojo = 0;



    function jugar() {

      var ciclo = setInterval(mover, 30);

    }



    function mover() {



      //EJE X

      if (xLimite == 0) {

        document.getElementById('pelota').style.marginLeft = x + "px";

        x += 5;

        if (x >= 480) {

          xLimite = 1;

        }

      } else {

        document.getElementById('pelota').style.marginLeft = x + "px";

        x -= 5;

        if (x <= 0) {

          xLimite = 0;

        }

      }



      //EJE Y

      if (yLimite == 0) {

        document.getElementById('pelota').style.marginTop = y + "px";

        y += 5;

        if (y >= 280) {

          yLimite = 1;

        }

      }

      if (yLimite == 1) {

        document.getElementById('pelota').style.marginTop = y + "px";

        y -= 5;

        if (y <= 0) {

          yLimite = 0;

        }

      }



      //JUEGO 500x por 300y



      var audio = document.getElementById('audio');

      if (x == 0 && y >= 125 && y <= 175) {

        azul += 1;  // Línea modificada

        audio.play();

      }



      if (x == 480 && y >= 125 && y <= 175) { // Línea modificada

        rojo += 1;

        audio.play();

      }



      document.getElementById('marcador').innerHTML = "Equipo Azul: " + azul + " Equipo Rojo: " + rojo;

    }

<!-- language: lang-css -->

    /*  Simulador 6   */

    .publicoFutbol {
      width: 500px;
      height: 100px;
      margin-left: 230px;
    }

    #contenedor {
      background-image: url("http://netliguista.com/img/org/campo-futbol.png");
      background-repeat:no-repeat;
    background-size: 100% 100%;
      width: 500px;
      height: 300px;
      margin: auto;
      background-color: #fff;
    }

    #pelota {
      width: 20px;
      height: 20px;
     
    }

    #audio {
      display: none;
    }

<!-- language: lang-html -->

    <a name="sim6"></a>

    <article class="sim6">

      <header>
        <h3>Simulador 6: ¡Juego Futbol!</h3>
      </header>

      <p class="usuario" id="saludo5">Hola </p>

      <p class="usuario"> este es un simulador de pelota <br><br> Como jugar:</p>

      <section>

        <div id="contenedor">

          <img id="pelota" src="https://www.tenvinilo.com/vinilos-decorativos/img/preview/vinilo-infantil-pelota-futbol-color-1399.png">

        </div>

        <button id="jugar" onclick="jugar()">GO</button>

        <label id="marcador"> - </label>

        <audio id="audio">

                <source src="musica/gol.aac" type="audio/aac">

            </audio>

      </section>

    </article>

<!-- end snippet -->

Para hacer más evidente, el siguiente se pone la pelota en el centro de la cancha y sólo se desplaza horizontalmente.

<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-js -->

    // Simulador 6

    var x = 240;

    var xLimite = 0;

    var y = 140;

    var yLimite = 0;

    var azul = 0,
      rojo = 0;



    function jugar() {

      var ciclo = setInterval(mover, 30);

    }



    function mover() {



      //EJE X

      if (xLimite == 0) {

        document.getElementById('pelota').style.marginLeft = x + "px";

        x += 5;

        if (x >= 480) {

          xLimite = 1;

        }

      } else {

        document.getElementById('pelota').style.marginLeft = x + "px";

        x -= 5;

        if (x <= 0) {

          xLimite = 0;

        }

      }



      //EJE Y

      if (yLimite == 0) {

        document.getElementById('pelota').style.marginTop = y + "px";

        // y += 5;

        if (y >= 280) {

          yLimite = 1;

        }

      }

      if (yLimite == 1) {

        document.getElementById('pelota').style.marginTop = y + "px";

         // y -= 5; 
        
        if (y <= 0) {

          yLimite = 0;

        }

      }



      //JUEGO 500x por 300y



      var audio = document.getElementById('audio');

      if (x == 0 && y >= 125 && y <= 175) {

        azul += 1;  // Línea modificada

        audio.play();

      }



      if (x == 480 && y >= 125 && y <= 175) { // Línea modificada

        rojo += 1;

        audio.play();

      }



      document.getElementById('marcador').innerHTML = "Equipo Azul: " + azul + " Equipo Rojo: " + rojo;

    }

<!-- language: lang-css -->

    /*  Simulador 6   */

    .publicoFutbol {
      width: 500px;
      height: 100px;
      margin-left: 230px;
    }

    #contenedor {
      background-image: url("http://netliguista.com/img/org/campo-futbol.png");
      background-repeat:no-repeat;
    background-size: 100% 100%;
      width: 500px;
      height: 300px;
      margin: auto;
      background-color: #fff;
    }

    #pelota {
      width: 20px;
      height: 20px;
     
    }

    #audio {
      display: none;
    }

<!-- language: lang-html -->

    <a name="sim6"></a>

    <article class="sim6">

      <header>
        <h3>Simulador 6: ¡Juego Futbol!</h3>
      </header>

      <p class="usuario" id="saludo5">Hola </p>

      <p class="usuario"> este es un simulador de pelota <br><br> Como jugar:</p>

      <section>

        <div id="contenedor">

          <img id="pelota" src="https://www.tenvinilo.com/vinilos-decorativos/img/preview/vinilo-infantil-pelota-futbol-color-1399.png">

        </div>

        <button id="jugar" onclick="jugar()">GO</button>

        <label id="marcador"> - </label>

        <audio id="audio">

                <source src="musica/gol.aac" type="audio/aac">

            </audio>

      </section>

    </article>

<!-- end snippet -->


En cuanto al problema de marcar "goles dobles" en el caso del equipo rojo, se debe a que al regresar la pelota pasa de nuevo por la coordenada que se estaba indicando, entonces de ida marca un gol y de vuelta el segundo.

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/146091\|https://es.stackoverflow.com/q/146091]]

