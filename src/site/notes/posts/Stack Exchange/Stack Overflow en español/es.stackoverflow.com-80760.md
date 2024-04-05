---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-80760.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-80760/","title":"var options de geochart google no funciona","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.759-06:00","updated":"2024-04-05T16:43:51.327-06:00"}
---

# var options de geochart google no funciona

Cada visualización tiene su propio conjunto de opciones de configuración. En este caso se está usando un GeoChart. Las opciones de configuración para este tipo de visualización se indican en https://developers.google.com/chart/interactive/docs/gallery/geochart#configuration-options

Contrario al caso de un "Pie Chart" un GeoChart no incluye title entre las opciones de configuración.

En cuanto a las opciones de configuración, nótese que al llamar la gráfica

    chart.draw(data, {
        resolution: 'provinces',
        region: 'CO'
      });

No se están incluyendo el objeto `options` que definiste previamente, sino otro objeto.

A continuación una versión simplificada y corregida:

<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-js -->

    google.charts.load('current', {
      'packages': ['geochart'],
      // Note: you will need to get a mapsApiKey for your project.
      // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
      'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
    });
    google.charts.setOnLoadCallback(drawRegionsMap);

    function drawRegionsMap() {
      var data = google.visualization.arrayToDataTable([
        ['Departamento', 'Número de SE', '%'],
        ['Amazonas', 0, 0],
        ['Antioquia', 3775, 22],
        ['Arauca', 15, 0],
        ['Atlántico', 761, 4],
        ['Bogotá', 3792, 22],
        ['Bolívar', 476, 3],
      ]);
      var options = {
        backgroundColor: '#81d4fa',
        datalessRegionColor: '#f8bbd0',
        defaultColor: '#f5f5f5',
        colorAxis: {colors: ['#58D123', '#FF0000']},
        resolution: 'provinces',
        region: 'CO'
      };

      var chart = new google.visualization.GeoChart(document.getElementById('geochart-colors'));

      chart.draw(data, options);
    }

<!-- language: lang-html -->

    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
    <div id="geochart-colors" style="width: 600px; height: 200px;"></div>

<!-- end snippet -->



# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/80760\|https://es.stackoverflow.com/q/80760]]

