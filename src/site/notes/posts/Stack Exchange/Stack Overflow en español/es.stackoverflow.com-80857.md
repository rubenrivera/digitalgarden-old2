---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-80857.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-80857/","title":"mostrar valores en barras de graficos en google charts","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.759-06:00","updated":"2024-04-05T16:43:51.340-06:00"}
---

# mostrar valores en barras de graficos en google charts

Como en las revisiones previas el código en la pregunta no generaba la gráfica<sup>1</sup>, para mostrar cómo agregar las etiquetas a las barras he adaptado uno de los ejemplos en https://developers.google.com/chart/interactive/docs/gallery/barchart#labeling-bars. Básicamente el "truco" consiste en agregar `{role: 'annotation'}` y los valores correspondientes al `arrayToDataTable`.
<hr>
> En un comentario mencioné que al código de la pregunta le faltan varias cosas. En la parte del HTML, le falta la llamada a loader.js, en la parte de JavaScript le faltan las llamadas google.charts, tiene un `}` que está demás, en el cuerpo de la pregunta  se dice que es ColumnChart pero en el código se llama a una gráfica Bar, entre otros posibles problemas cosas.

<hr>
<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-js -->

    google.charts.load("current", {packages: ["corechart"]});
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
      var data = google.visualization.arrayToDataTable([
        ['Element', 'Density', {role: 'style'}, {role: 'annotation'}],
        ['Copper', 8.94, '#b87333', 'Cu'],
        ['Silver', 10.49, 'silver', 'Ag'],
        ['Gold', 19.30, 'gold', 'Au'],
        ['Platinum', 21.45, 'color: #e5e4e2', 'Pt']
      ]);


      var options = {
        title: "Density of Precious Metals, in g/cm^3",
        width: 600,
        height: 200,
        bar: {
          groupWidth: "95%"
        },
        legend: {
          position: "none"
        },
      };
      var chart = new google.visualization.ColumnChart(document.getElementById("barchart_values"));
      chart.draw(data, options);
    }

<!-- language: lang-html -->

    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
    <div id="barchart_values"></div>

<!-- end snippet -->



# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/80857\|https://es.stackoverflow.com/q/80857]]

