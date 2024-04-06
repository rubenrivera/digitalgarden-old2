---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/Stack Overflow en español Meta/es.meta.stackoverflow.com-1892.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/stack-overflow-en-espanol-meta/es-meta-stackoverflow-com-1892/","title":"Pruebas de formato (Sandbox)","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.593-06:00","updated":"2024-04-05T16:44:01.072-06:00"}
---

# Pruebas de formato (Sandbox)

> Prueba de pasar el código de https://es.stackoverflow.com/q/66520/65 a stack snippet

El siguiente código, corresponde al primer bloque de código en la pregunta referida. Devolvía el error indicado abajo porque las referencias a librerías externas incluían `http` en lugar de `https`

    Error: {
      "message": "Uncaught ReferenceError: webix is not defined",
      "filename": "https://stacksnippets.net/js",
      "lineno": 18,
      "colno": 1
    }

<!-- begin snippet: js hide: true console: true babel: false -->

<!-- language: lang-html -->

<link rel="stylesheet" href="https://cdn.webix.com/edge/webix.css" type="text/css">
<script type="text/javascript" charset="UTF-8" src="https://cdn.webix.com/edge/webix_debug.js"></script>


<!-- language: lang-js -->

    webix.ready( function( ) {
      var w = 50,
          h = 50,
          s = 10;

      webix.ui( {
          rows: [
            { cols: [
              { view: 'button', width: w, height: h },
              { width: s },
              { view: 'button', width: w, height: h },
              { width: s },
              { view: 'button', width: w, height: h },
              ]
            },
            { height: s },
            { cols: [
              { view: 'button', width: w, height: h },
              { width: s },
              { view: 'button', width: w, height: h },
              { width: s },
              { view: 'button', width: w, height: h },
              ]
            },
            { height: s },
            { cols: [
              { view: 'button', width: w, height: h },
              { width: s },
              { view: 'button', width: w, height: h },
              { width: s },
              { view: 'button', width: w, height: h },
              ]
            }
          ]
        } )
      } );

<!-- end snippet -->


# Metadata
Source:: Stack Overflow Meta en español
URL:: [[https://es.meta.stackoverflow.com/q/1892\|https://es.meta.stackoverflow.com/q/1892]]

