---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-331721.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-331721/","title":"Problema de sintaxis en juego de cartas","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.627-06:00","updated":"2024-04-05T16:43:56.530-06:00"}
---

# Problema de sintaxis en juego de cartas

He pasado tu código a Stack Snippet para poder visualizarlo "fácilmente". Para esto tuve que "reacomodarlo" un poco pero no he cambiado/agregado ningún paréntesis . Aparentemente funciona, quizás el problema se resuelva si pasas tu JavaScript del `head` a la etiqueta `script` dentro de la etiqueta `body` (deberá ir antes de `pintarTarjetas()`

NOTA: El código en la pregunta se ve un poco desordenado. Sería conveniente que usaras un editor que incluya la función de para ordenarlo. Te ayudaría a identificar si efectivamente falta un paréntesis, si un bloque de código está no está bien puesto, entre otras cosas.

<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-js -->

    function animar() {
      document.getElementById("girarTarjeta").className = "animacionTarjeta";
    }

    function getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max)) + 1;
    }

    function pintarTarjetas() {
      const numeroDeTarjetas = 10;
      const tarjetaConPremio = getRandomInt(numeroDeTarjetas);
      for (let index = 1; index <= numeroDeTarjetas; index++) {
        var tarjeta = document.createElement("div");
        if (tarjetaConPremio === index) {
          tarjeta.setAttribute("onclick", '(img id="girarTarjeta")', '(src="img/ganaste.jpg")');
        } else {
          tarjeta.setAttribute("onclick", "alert('Sigue participando')");
        }
        tarjeta.setAttribute("class", "tarjeta");
        var elementoBreak = document.createElement("br");
        tarjeta.appendChild(elementoBreak);
        document.getElementById("tablero").appendChild(tarjeta);
      }
    }

    pintarTarjetas();

<!-- language: lang-css -->

    .tarjeta {
      border-style: solid;
      border-width: 1px;
      border-color: white;
      width: 150px;
      height: 150px;
      background-image: ("img\carta.jpg");
      color: white;
      display: inline-block;
    }

    body {
      font-family: 'Special Elite', cursive;
      background: linear-gradient(purple, white);
      ;
    }

<!-- language: lang-html -->

    <h1>Busca el premio</h1>
    <div id="tablero">
    </div>


<!-- end snippet -->



# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/331721\|https://es.stackoverflow.com/q/331721]]

