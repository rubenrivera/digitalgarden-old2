---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-142782.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-142782/","title":"Cree un File Uploader con una barra de progreso y no funciona","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.727-06:00","updated":"2024-04-05T16:43:53.118-06:00"}
---

# Cree un File Uploader con una barra de progreso y no funciona

# Respuesta corta
No sé acerca del código PHP pero del lado del HTML a uno de tus inputs le falta un '>'.

# Respuesta extendida
Al ejecutar el código en la pregunta arroja los siguientes errores en la consola del navegador

<!-- language: lang-none -->

    js:95 GET https://stacksnippets.net/CSS/EspaciosDownloader.css 
    net::ERR_ABORTED js:96 GET https://stacksnippets.net/CSS/EspaciosUploader.css 
    net::ERR_ABORTED js:98 GET https://stacksnippets.net/CSS/BaseFont.css 
    net::ERR_ABORTED js:102 GET https://stacksnippets.net/JS/File.js 
    net::ERR_ABORTED js:182 GET https://stacksnippets.net/JS/File.js net::ERR_ABORTED

Estos se deben a que se hace referencia a archivos que no están disponibles. En Stack Snippet si se va a hacer referencia a archivos debe incluirse la ruta completa o bien especificar la ruta base para las URL relativas mediante la `<base href="poner aquí la URL base">`.

Asumiendo que el código en los archivos referidos se ha subido al panel correspondiente de stack snippet y eliminando las etiquetas que no deberían usarse encontré que falta un `>` para cerrar una etiqueta `input`. A continuación el código corregido

<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-js -->

    document.addEventListener("DOMContentLoaded", () => {
      let form = document.getElementById('form_subir');
      form.addEventListener("submit", function(event) {
        event.preventDefault();
        subir_archivos(this);
      });
    });


    function subir_archivos(form) {
      let barra_estado = form.children[1].children[0],
        span = barra_estado.children[0],
        boton_cancelar = form.children[2].children[1];
      barra_estado.classList.remove('barra_verde', 'barra_roja');


      let peticion = new XMLHttpRequest();

      peticion.addEventListener("progress", (event) => {
        let porcentaje = Math.round((event.loaded / event.total) * 100);

        console.log(porcentaje);

        barra_estado.style.width = porcentaje + '%';
        span.innerHTML = porcentaje + '%';

      });

      peticion.addEventListener("load", () => {
        barra_estado.classList.add('barra_verde');

        span.innerHTML = "Subida completada";

      });


      peticion.open('post', 'subir.php');
      peticion.send(new FormData(form));


      boton_cancelar.addEventListener("click", () => {
        peticion.abort();
        barra_estado.classList.remove('barra_verde');
        barra_estado.classList.add('barra_roja');
        span.innerHTML = "Proceso cancelado";
      });

    }

<!-- language: lang-css -->

    input[type="file"] {
      margin: 0 0 15px;
      padding: 10px 1%;
      -webkit-border-radius: 3px;
      -moz-border-radius: 3px;
      border-radius: 3px;
      width: 400px;
      position: relative;
      left: 420px;
      top: 140px;
      text-align: center;
    }

    #principal {
      background-color: #EEEDED;
      width: 1349px;
      height: 662px;
    }

    .barra {
      background-color: #f3f3f3;
      border-radius: 5px;
      box-shadow: inset 0px 0px 5px rgba(0, 0, 0, 2);
      height: 25px;
      position: relative;
      top: 150px;
    }

    .cancel {
      background: #484747 !important;
      border-radius: 8px 8px 8px 8px;
      -moz-border-radius: 8px 8px 8px 8px;
      -webkit-border-radius: 8px 8px 8px 8px;
      border: 0px solid #000000;
      width: 100px;
      height: 40px;
      color: #fff;
      font-size: 16px;
      position: relative;
      left: 520px;
      top: 200px;
    }

    .btn {
      background: #ed1f3c !important;
      border-radius: 8px 8px 8px 8px;
      -moz-border-radius: 8px 8px 8px 8px;
      -webkit-border-radius: 8px 8px 8px 8px;
      border: 0px solid #000000;
      width: 100px;
      height: 40px;
      color: #fff;
      font-size: 16px;
      position: relative;
      left: 450px;
      top: 200px;
    }

    .barra_azul {
      background-color: #247cc0;
      border-radius: 10px;
      display: block;
      height: 25px;
      line-height: 25px;
      text-align: center;
      width: 0%;
    }

    .barra_verde {
      background-color: #2ea265 !important;
    }

    .barra_roja {
      background-color: #de3152 !important;
    }

    #form_subir {
      margin: 1.5% 0;
      padding: 2%;
    }

    #barra_estado span {
      color: #fff;
      font-weight: bold;
      line-height: 25px;
    }

<!-- language: lang-html -->

    <link href="https://fonts.googleapis.com/css?family=Archivo+Black|Concert+One|Contrail+One|Days+One|Fredoka+One|Hammersmith+One|Krona+One|Prosto+One|Righteous|Roboto|Roboto+Condensed|Source+Sans+Pro|Spectral+SC|Ubuntu|Volkhov|Work+Sans" rel="stylesheet">
    <header>
      <div id="header">
      </div>
    </header>
    <div id="principal">
      <form action="" id="form_subir">
        <div class="form-1-2">
          <input type="file" name="archivo" required>
        </div>
        <div class="barra">
          <div class="barra_azul" id="barra_estado">
            <span></span>
          </div>
        </div>
        <div class="acciones">
          <input type="submit" class="btn" value="Subir">
          <input type="button" class="cancel" id="cancelar" value="Cancelar">
        </div>
      </form>
    </div>

<!-- end snippet -->

Ahora al intentar subir un archivo en la consola de Stack Snippet se ve registra lo siguiente


<!-- language: lang-none -->

    POST https://stacksnippets.net/subir.php 404 (Not Found)    
      (anonymous) @ VM783:1
      subir_archivos @ js:155
      (anonymous) @ js:122
    NaN                                                snippet-javascript-console.min.js?v=1:1 

Faltaría ver si luego de haber corregido el '>' en tu ambiente de desarrollo ya funciona correctamente.

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/142782\|https://es.stackoverflow.com/q/142782]]

