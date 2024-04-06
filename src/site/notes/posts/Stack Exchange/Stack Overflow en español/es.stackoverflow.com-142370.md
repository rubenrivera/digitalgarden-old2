---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-142370.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-142370/","title":"Expresión regular y Javascript para texto desperdigado entre etiquetas HTML","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.626-06:00","updated":"2024-04-05T16:43:53.098-06:00"}
---

# Expresión regular y Javascript para texto desperdigado entre etiquetas HTML

Una solución sin utilizar expresiones regulares. En su lugar se divide la cadena en partes tomando `::` como el separador y se descarta la subcadena  a partir de `}}` en caso de que este se incluya. Para fines de mostrar los elementos se agregar como texto de un `<p>` y se numera cada uno.


<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-js -->

    var texto1 = '{{c1::Del<span>&nbsp;</span><abbr style="box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: inherit; line-height: initial; font-family: inherit; vertical-align: baseline; color: inherit; background-color: rgb(232, 232, 232) !important; letter-spacing: 0.015em; cursor: pointer;" title="árabe hispánico">ár. hisp.</abbr><span>&nbsp;</span><em style="box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; font-style: italic; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: inherit; line-height: initial; font-family: inherit; vertical-align: baseline; background-color: rgb(232, 232, 232) !important; letter-spacing:0.015em;">alḡára,</em><span>&nbsp;</span>y este del<span>&nbsp;</span><abbr style="box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: inherit; line-height: initial; font-family: inherit; vertical-align: baseline; color: inherit; background-color: rgb(232, 232, 232) !important; letter-spacing: 0.015em; cursor: pointer;" title="árabe clásico">ár. clás.</abbr><span>&nbsp;</span><em style="box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; font-style: italic; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: inherit; line-height: initial; font-family: inherit; vertical-align: baseline; background-color: rgb(232, 232, 232) !important; letter-spacing: 0.015em;">ḡārah.</em>::Origen etimológico}} continuaría habiendo texto durante largo tiempo {{c1::Del<span>&nbsp;</span><abbr style="box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: inherit; line-height: initial; font-family: inherit; vertical-align: baseline; color: inherit; background-color: rgb(232, 232, 232) !important; letter-spacing: 0.015em; cursor: pointer;" title="árabe hispánico">ár. hisp.</abbr><span>&nbsp;</span><em style="box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; font-style: italic; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: inherit; line-height: initial; font-family: inherit; vertical-align: baseline; background-color: rgb(232, 232, 232) !important; letter-spacing:0.015em;">alḡilála,</em><span>&nbsp;</span>y este del<span>&nbsp;</span><abbr style="box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: inherit; line-height: initial; font-family: inherit; vertical-align: baseline; color: inherit; background-color: rgb(232, 232, 232) !important; letter-spacing: 0.015em; cursor: pointer;" title="árabe clásico">ár. clás.</abbr><span>&nbsp;</span><em style="box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; font-style: italic; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: inherit; line-height: initial; font-family: inherit; vertical-align: baseline; background-color: rgb(232, 232, 232) !important; letter-spacing:0.015em;">ḡalālah</em><span>&nbsp;</span>o<span>&nbsp;</span><em style="box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; font-style: italic; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: inherit; line-height: initial; font-family: inherit; vertical-align: baseline; background-color: rgb(232, 232, 232) !important; letter-spacing:0.015em;">ḡilālah</em><span>&nbsp;</span>\'túnica\'.::Origen etimológico}}';

    var resultado = texto1.split('::');
    var element = document.getElementById('salida');
    for (var i in resultado) {
      if( i == 0) continue;
      var l = resultado[i].indexOf('}}');
      element.innerHTML += '<p>'+ i +': ' + resultado[i].substring(0,(l>0)?l:resultado[i].length) + '</p>'; 
    }
    

<!-- language: lang-html -->

    <div id="salida"></div>

<!-- end snippet -->



# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/142370\|https://es.stackoverflow.com/q/142370]]

