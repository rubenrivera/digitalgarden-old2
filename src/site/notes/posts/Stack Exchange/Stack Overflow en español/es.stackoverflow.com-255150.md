---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-255150.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-255150/","title":"¿Es posible incluir un cuenta atrás en el cuerpo de un mensaje de correo eletrónico?","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.759-06:00","updated":"2024-04-05T16:43:55.244-06:00"}
---

# ¿Es posible incluir un cuenta atrás en el cuerpo de un mensaje de correo eletrónico?

Gmail no admite JavaScript en los correos entrantes por motivos de seguridad, lo mismo ocurre en otros clientes de correo electrónico modernos. Una alternativas es usar un cuenta atrás hecho con CSS.

Como evidencia de que es posible hacer un cuenta atrás con CSS abajo incluyo un código tomado de [la respuesta aceptada](https://stackoverflow.com/a/44302995/1595451) a [How to create a countdown clock with CSS](https://stackoverflow.com/q/44302376/1595451). Habla de minutos en lugar de fechas pero como prueba de concepto me parece que basta.

<!-- begin snippet: js hide: true console: true babel: false -->

<!-- language: lang-css -->

    ol.tens, .digits, .first {
      list-style-type: none;
      margin:0;
      padding:3px;
      position: relative;
      display: inline-block;
    }
    ol.first {
      margin-right: 12px;
    }
    .tens li, .digits li, .first li {
      display: inline-block;
      position: absolute;
      top: 0;
      left: 0;
      background: #fff;
    }
    .first li:nth-of-type(2) {
      animation: minutecount 60s ease-in-out 0s 1;
    }

    .tens li:nth-of-type(1) {
      animation: tenscount 60s ease-in-out 51s 1;
    }
    .tens li:nth-of-type(2) {
      animation: tenscount 60s ease-in-out 41s 1;
    }
    .tens li:nth-of-type(3) {
      animation: tenscount 60s ease-in-out 31s 1;
    }
    .tens li:nth-of-type(4) {
      animation: tenscount 60s ease-in-out 21s 1;
    }
    .tens li:nth-of-type(5) {
      animation: tenscount 60s ease-in-out 11s 1;
    }
    .tens li:nth-of-type(6) {
      animation: tenscount 60s ease-in-out 1s 1;
    }
    .tens li:nth-of-type(7) {
      animation: tenscount 60s ease-in-out 0s 1;
    }


    .digits li:nth-of-type(1) {
      animation: digitcount 10s ease-in-out 10s 6;
    }

    .digits li:nth-of-type(2) {
      animation: digitcount 10s ease-in-out 9s 6;
    }

    .digits li:nth-of-type(3) {
      animation: digitcount 10s ease-in-out 8s 6;
    }

    .digits li:nth-of-type(4) {
      animation: digitcount 10s ease-in-out 7s 6;
    }

    .digits li:nth-of-type(5) {
      animation: digitcount 10s ease-in-out 6s 6;
    }

    .digits li:nth-of-type(6) {
      animation: digitcount 10s ease-in-out 5s 6;
    }

    .digits li:nth-of-type(7) {
      animation: digitcount 10s ease-in-out 4s 6;
    }

    .digits li:nth-of-type(8) {
      animation: digitcount 10s ease-in-out 3s 6;
    }

    .digits li:nth-of-type(9) {
      animation: digitcount 10s ease-in-out 2s 6;
    }

    .digits li:nth-of-type(10) {
      animation: digitcount 10s ease-in-out 0.7s 6;
    }

    @keyframes digitcount {
      0% {
        opacity: 1
      }
      9.9% {
        opacity: 1
      }
      10% {
        opacity: 0
      }
      100% {
        opacity: 0
      }
    }

    @keyframes tenscount {
      0% {
        opacity: 1
      }
      0.9% {
        opacity: 1
      }
      2% {
        opacity: 0
      }
      100% {
        opacity: 0
      }
    }
    @keyframes minutecount {
      0% { opacity: 1; }
      2.8% { opacity: 1; }
      2.9% { opacity: 0; }
      100% { opacity: 0; }
    }

<!-- language: lang-html -->

    <div class="clock">
      <ol class="first">
        <li>00:</li>
        <li>01:</li>
      </ol>
      <ol class="tens">
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>0</li>
     </ol>
     <ol class="digits">
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li>7</li>
        <li>8</li>
        <li>9</li>
        <li>0</li>
     </ol>
    </div>

<!-- end snippet -->

Referencias

 - [Gmail: Resources for Senders](https://developers.google.com/gmail/design/)
 - [How can I write HTML and send as an email?](https://webapps.stackexchange.com/q/7932/88163)
 - [How to prevent Gmail from transforming Unicode characters to emojis?](https://webapps.stackexchange.com/q/84616/88163)

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/255150\|https://es.stackoverflow.com/q/255150]]

