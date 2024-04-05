---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-81326.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-81326/","title":"Dudas gráficos de tipo ColumnChart de Google Charts","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.759-06:00","updated":"2024-04-05T16:43:51.428-06:00"}
---

# Dudas gráficos de tipo ColumnChart de Google Charts

> Aunque se debería incluir una y sólo una pregunta en las preguntas, como la solución a cada parte es muy sencilla y hasta cierto punto similar ya que se trata de ajustes a las opciones de gráficas del mismo tipo y cuya documentación está en la misma referencia, respondo ambas en esta respuesta.

# Primera parte
Las opciones de configuación están documentadas en https://developers.google.com/chart/interactive/docs/gallery/columnchart#configuration-options

En el primer stack snippet de la pregunta, ya se cuenta con un bloque objeto con la configuración del eje horizontal. Se trata de

    hAxis: {
      maxTextLines: 10,
      textStyle: {
        fontSize: 14,
      }
    }

Me parece que la única alternativa es que reduzcas el tamaño de la letra.

**Pregunta similar en inglés**

[Respuesta][1] a https://stackoverflow.com/q/32818836/1595451

**Demo**

He puesto el tamaño de la letra en 10 con eso aparentemente ya se ajusta el texto bastante bien.

<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-js -->

    google.charts.load('current', {
      packages: ['corechart']
    });
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
      var data = google.visualization.arrayToDataTable([
        ['', 'Excelente', {
          role: 'annotation'
        }, 'Bueno', {
          role: 'annotation'
        }, 'Regular', {
          role: 'annotation'
        }, 'Deficiente', {
          role: 'annotation'
        }],
        ['Valoración\n general\n de\n la\n atención', 75, '75', 25, '25', 0, '0', 0, '0'],
        ['Trato', 75, '75', 25, '25', 0, '0', 0, '0'],
        ['Tiempo\n de\n espera', 75, '75', 25, '25', 0, '0', 0, '0'],
        ['Información\n clara\n y\n precisa', 75, '75', 25, '25', 0, '0', 0, '0'],

      ]);
      var options = {
        chart: {
          title: 'Comunicación',
          annotations: {
            alwaysOutside: true
          },
          width: 500,
          height: 600,
          legend: 'bottom',
          isStacked: 'percent'
        },

        vAxis: {
          minValue: 0,
          maxValue: 100,
          format: '#\'%\'',
          direction: 1
        },

        hAxis: {
          maxTextLines: 10,
          textStyle: {
            fontSize: 10,
          }
        },

      };

      var chart = new google.visualization.ColumnChart(document.getElementById('div0'));

      chart.draw(data, options);
    }

<!-- language: lang-html -->

    <html>

    <head>
      <meta charset="utf-8">
      <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
    </head>

    <body>
      <div id='div0' style='position:relative;width:90%; height:400px; margin-left:4%; margin-bottom: 5% !important;'>
      </div>
    </body>

    </html>

<!-- end snippet -->

# Segunda parte

La escala vertical está definida así:


    vAxis: {
        minValue: 0,
        maxValue: 7,
        direction: 1
    }

Como no está definido el número de líneas de cuadrícula, se está aplicando el valor predeterminado que es 5. Básicamente lo que hay que hacer es agregar

    gridlines: {count: 8}

Lo anterior para que quede una línea de cuadrícula en cada unidad, partiendo de 0.

**Demo 2**

He comentado las línieas de ancho y alto para que se aprecie mejor la gráfica en stack snippet.

<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-js -->

    google.charts.load('current', {
      packages: ['corechart']
    });
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
      var data = google.visualization.arrayToDataTable([
        ['Element', 'nota', {
          role: 'style'
        }, {
          role: 'annotation'
        }],
        ['Conocimiento\n del\n tema', 7.0, 'gold', '7.0'],
        ['Puntualidad', 7.0, 'gold', '7.0'],
        ['Claridad\n en\n las\n explicaciones', 7.0, 'gold', '7.0'],
        ['Motiva\n para\n escuchar\n y\n aprender', 7.0, 'gold', '7.0'],
        ['Manejo\n de\n consultas\n y\n discusiones', 6.9, 'gold', '6.9'],
        ['Grado\n que\n cumple\n compromisos\n asumidos', 7.0, 'gold', '7.0'],
      ]);


      var options = {
        title: 'item 1',
        //width: 1000,
        //height: 400,

        bar: {
          //groupWidth: ''
        },
        legend: {
          position: 'none'
        },
        vAxis: {
          minValue: 0,
          maxValue: 7,
          direction: 1,
          gridlines: {count: 8}
        },
        hAxis: {
          slantedTextAngle: 70,
          maxTextLines: 100,
          textStyle: {

            fontSize: 12,
          } // or the number you want}
        },
      };
      var chart = new google.visualization.ColumnChart(document.getElementById('div0'));
      chart.draw(data, options);
    }

<!-- language: lang-html -->

    <html>

    <head>
      <meta charset="utf-8">
      <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>

    </head>

    <body>
      <div id='div0' style='position:relative;width:80%; height:400px; margin-left:4%; margin-bottom: 5% !important;'>
      </div>
    </body>

    </html>

<!-- end snippet -->

  [1]: https://stackoverflow.com/a/32843834/1595451


# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/81326\|https://es.stackoverflow.com/q/81326]]

