---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-64827.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-64827/","title":"Alinear dos ejes \"y\" a nivel de 0 en C3 js","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.592-06:00","updated":"2024-04-05T16:43:50.043-06:00"}
---

# Alinear dos ejes "y" a nivel de 0 en C3 js

En esta [respuesta][1] a una [pregunta en inglés][2] para un sólo eje, se indica usar un fragmento que he adaptado de la siguiente forma:

    // Seleccionar el eje X
        d3.select(chart.element).select('.' + c3.chart.internal.fn.CLASS.axisX).transition()
        // y traducir a la posición de Y = 0
            .attr('transform', "translate(" + 0 + "," + chart.internal.y(0) + ")")

En cuando al segundo eje, lo que hay que hacer es agregar como mínimo un valor proporcionalmente equivalente al mínimo del primero. A continuación un ejemplo:

<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-js -->

    // Calcular el mínimo de la parte negativa del segundo eje Y
    var k = (-30 / 400 ) * 50;
    var chart = c3.generate({
        data: {
            columns: [
               	['data1', -30, 200, 100, 400, 150, 250],
                ['data2', 50, 20, 10, 40, 15, 25]
            ],
            axes: {
                data1: 'y',
                data2: 'y2'
            }
        },
         axis: {
            y: {
            },
            y2: {
                show: true,
                min: k,
            }
        }
    });

    // Seleccionar el eje X
    d3.select(chart.element).select('.' + c3.chart.internal.fn.CLASS.axisX).transition()
    // y traducir a la positición de Y = 0
        .attr('transform', "translate(" + 0 + "," + chart.internal.y(0) + ")")

<!-- language: lang-html -->

    <link href="https://rawgit.com/masayuki0812/c3/master/c3.css" rel="stylesheet"/>
    <script src="https://rawgit.com/masayuki0812/c3/master/c3.js"></script>
    <div id="chart"></div>
    <script src="https://d3js.org/d3.v3.min.js"></script>

<!-- end snippet -->


  [1]: https://stackoverflow.com/a/32438055/1595451
  [2]: https://stackoverflow.com/q/32427892/1595451

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/64827\|https://es.stackoverflow.com/q/64827]]

