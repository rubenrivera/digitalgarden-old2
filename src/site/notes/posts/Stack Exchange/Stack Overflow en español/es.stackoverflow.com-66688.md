---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-66688.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-66688/","title":"¿Cómo puedo añadir una linea horizontal en las gráficas de google? (Google Charts)","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.626-06:00","updated":"2024-04-05T16:43:50.415-06:00"}
---

# ¿Cómo puedo añadir una linea horizontal en las gráficas de google? (Google Charts)

Para poner varios tipos de representación de datos en una gráfica usa "[Combo Chart][1]". Si dejas que Google Charts calcule la tendencia por tí, pasa tres columnas de datos, el eje horizontal, el valor de principal y el valor de la línea fija. Para la tendencia agrega `trendlines`y sus parámetros a `options`.

Ejemplo:

<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-js -->

    google.charts.load('current', {packages: ['corechart']});
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
          var data = new google.visualization.DataTable();
          data.addColumn('number', 'Tiempo');
          data.addColumn('number', 'Rendimiento Real');
          data.addColumn('number', 'Referencia');

          data.addRows([
            [0, 0, 20],    [1, 10, 20],   [2, 23, 20],  [3, 17, 20],   [4, 18, 20],  [5, 9, 20],
            [6, 11, 20],   [7, 27, 20],  [8, 33, 20],  [9, 40, 20],  [10, 32, 20], [11, 35, 20]
          ]);

          var options = {
            hAxis: {
              title: 'Tiempo'
            },
            vAxis: {
              title: 'Rendimiento'
            },
            legend: 'bottom',
            seriesType: 'area',
            series: {1: {type: 'line'}},
            trendlines: {
              0: {type: 'linear', color:"grey", opacity: 1}
            }
          };
          
     
          var chart = new google.visualization.ComboChart(document.getElementById('chart_div'));
          chart.draw(data, options);
        }

<!-- language: lang-html -->

    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
    <div id="chart_div"></div>

<!-- end snippet -->


  [1]: https://developers.google.com/chart/interactive/docs/gallery/combochart

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/66688\|https://es.stackoverflow.com/q/66688]]

