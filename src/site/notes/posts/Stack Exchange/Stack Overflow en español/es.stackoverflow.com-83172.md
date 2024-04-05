---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-83172.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-83172/","title":"Detección de errores de escritura falla al presionar la tecla retroceso (backspace)","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.354-06:00","updated":"2024-04-05T16:43:51.635-06:00"}
---

# Detección de errores de escritura falla al presionar la tecla retroceso (backspace)

> Importante: De acuerdo a [KeyboardEvent.keyCode][1], `keyCode` ha sido retirado de los estándares web por lo que recomienda evitar su uso cuando sea posible. En [KeyboardEvent][2] se recomienda usar `key` cuando esté disponible.

El problema se debe a cuando se omite un caracter, el valor de `index` ya no coincide para el resto de los caracteres de la palabra. La forma de solucionar esto es sumar uno al valor de  `index` (`index +=1;`) cuando se haya omitido un caracter. Una forma de hacerlo es agregando el bloque `else` inclueyendo lo siguiente al enunciado `if` de la función `esLaMisma`:

     /* Inicia fragmento nuevo*/ 
      else {
        if(key_id == texto.charAt(i + 1)) {
          index -= 1;
          res = true;
        }
      } 
      /* Termina fragmento nuevo*/




Poniendo lo anterior en el código, quedaría de la siguiente forma:

>Nota: No se ha reemplazado keyCode por key, porque ello es tema para otra pregunta.

<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-js -->

    var texto = document.getElementById('captureInput');
    var index = 0;
    var errores = [];
    var textoEstatico = "hola soy el texto estatico de prueba";
    var posiciones = [];
    var indexActual = 0;
    var flagDoubleEspacio = false;

    function is_special_key(key_id) {
      var tecladoEspecial = [8, 9, 13, 17, 18, 19, 27, 33, 34, 35, 36, 37, 38, 39, 40, 45, 46, 91, 93, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 145];
      if (tecladoEspecial.indexOf(key_id) == 0) {
        return true;
      }
      return false;

    }


    function esLaMisma(key_id, texto, i) {
      var res = false;

      if (key_id == texto.charAt(i)) {
        res = true;
      } 
      /* Inicia fragmento nuevo*/ 
      else {
        if(key_id == texto.charAt(i + 1)) {
          index -= 1;
          res = true;
        }
      } 
      /* Termina fragmento nuevo*/ 
      return res;
    }

    function posicionPalabras(texto, done) {
      var posiciones = [];
      var ini, fin, cp, tamPalabras = 0;
      ini = fin = 0, cp = 0;
      var copiaEstatica, palabra = "";
      var arrayEstatico = textoEstatico.split(" ");
      var arregloPosiciones = []
      for (var i = 0; i < arrayEstatico.length; i++) {
        tamPalabras = arrayEstatico[i].length - 1;
        if (fin == 0) {
          fin = fin + tamPalabras + 1;
        } else {
          fin = fin + tamPalabras + 2;
        }
        var auxPos = {
          ini,
          fin
        };
        palabra = arrayEstatico[i];
        arregloPosiciones.push({
          palabra: palabra,
          posiciones: auxPos
        });
        ini = fin + 1;

      };
      return done(null, arregloPosiciones);
    }

    function buscarPalabra(mapeo, indice, done) {

      getPosiciones();
      var intervalIni = 0,
        intervalFin = 0;
      mapeo.forEach(function(current, index, verdadero) {
        intervalIni = current.posiciones.ini;
        intervalFin = current.posiciones.fin;
        if (indice >= intervalIni && indice <= intervalFin) {
          return done(null, current.palabra)
        }
      })
    }


    texto.addEventListener('keydown', function(keyboardEvent) {

      if (!is_special_key(keyboardEvent.keyCode)) {

        flagDoubleEspacio = true;
        let keyC = keyboardEvent.key;

        if ((!esLaMisma(keyC, textoEstatico, index))) {
          arregloPosiciones = posicionPalabras(textoEstatico, function(err, result) {
            buscarPalabra(result, index, function(err, res) {
              let simbol = textoEstatico.charAt(index);
              let mensaje = 'palabra: ' + res + '    \tletra Original: ' + simbol + '    \tletra erronea: ' + keyC;
              mostrarMensaje(mensaje, "erroresFrecuentes");
              errores.push({
                palabra: res,
                posiciones: {
                  simbol,
                  keyC
                }
              });
            });
          });

        }
      } else {
        if (keyboardEvent.keyCode == 8) { //backspace
          index -= 2;
        }

      }
      if (keyboardEvent.keyCode == 32) { //espacio

        if (flagDoubleEspacio) {
          index = posiciones[indexActual];
          indexActual++;
          flagDoubleEspacio = false;
        }
      } else {
        index++;
      }

    });

    function mostrarMensaje(mensaje, caja) {
      var contenedor = document.getElementById(caja);
      var res = contenedor.innerText.split('\n');
      res.push(mensaje);
      contenedor.innerText = res.join('\n');
      contenedor.scrollTop = contenedor.scrollHeight - contenedor.clientHeight;
    }

    function getPosiciones() {

      for (var i = 0; i <= textoEstatico.length - 1; i++) {
        if (textoEstatico.charAt(i) == " ") {
          posiciones.push(i + 1);
        }

      }
    }

<!-- language: lang-html -->

    <p>hola soy el texto estatico de prueba</p>
    <textarea id="captureInput" placeholde="escribe aqui"></textarea>
    <pre id="erroresFrecuentes" style="overflow-y: scroll; height:200px;"></pre>

<!-- end snippet -->

  [1]: https://developer.mozilla.org/es/docs/Web/API/KeyboardEvent/keyCode
  [2]: https://developer.mozilla.org/es/docs/Web/API/KeyboardEvent/


# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/83172\|https://es.stackoverflow.com/q/83172]]

