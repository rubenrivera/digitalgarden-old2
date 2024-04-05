---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-60017.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-60017/","title":"Porque no Funciona Var Options Min y Max dentro de un loop de gauge chart Google","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.505-06:00","updated":"2024-04-05T16:43:49.786-06:00"}
---

# Porque no Funciona Var Options Min y Max dentro de un loop de gauge chart Google

# Respuesta corta
Si bien es posible dibujar varios manómetros usando un único callback, estos deberán tener las mismas opciones. Cuando se requieren que sean distintos, deben dibujarse por separado.

# Explicación
En la [documentación][1] (en inglés) de las gráficas de Google (Google Charts), la [sección][2] sobre los manómetros (gauges) se incluye un ejemplo en el que se muestran tres manómetros. En dicho ejemplo aunque los valores del indicador (data) varían para cada caso, las marcas de división, los valores mínimos y máximos y otro parámetros (options), son los mismos. Esto es porque usando el hacer una llamada es válido porque las opciones (options) son las mismas para los tres manómetros.

Dado que en este caso se requiere que cada gráfica tenga opciones distintas, deberían dibujarse por separado, tal como se explica en la [sección][3] sobre cómo colocar varias gráficas en una página web. Es dicha sección  se indica que se llame google.charts.setOnLoadCallback() con el callback que dibuja cada gráfica como entrada e incluye un ejemplo. Esto implica que se requiere incluir un `<div>` por cada gráfica.

El siguiente código está basado en el código de la pregunta. 

- se separó el código según corresponde a cada sección del fragmento JavaScript/HTML/CSS
- se cambió el nombre a la función drawChart original y se 
- En la sección HTML Se incluyeron tres div y para efectos de que se visualice en esta página se redujo el tamaño a 100 px.
- En la sección JavaScript:
    - Se incluyeron tres llamadas `google.charts.setOnLoadCallback()`
    - Se incluyeron tres funciones `drawChartn`, donde n es 1, 2 o 3 
    - A la función original drawChart se le cambió el nombre, se eliminaron las líneas que corresponden al dibujo de los manómetros y se comentaron algunas líneas de código como el for.

<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-js -->

    google.charts.load('current', { 'packages': ['gauge'] });
    google.charts.setOnLoadCallback(drawChart1);
    google.charts.setOnLoadCallback(drawChart2);
    google.charts.setOnLoadCallback(drawChart3);

    function drawChart1(){
      var i = 1;
      var manometro = dibujarManometro(i);
      var cellName = manometro[0];
      var cellValue = manometro[1]
      var options = manometro[2];
      var data = new google.visualization.DataTable();
      data.addColumn('string', 'Name');
      data.addColumn('number', 'value');
      data.addRows([
             [cellName, cellValue]
      ]);

      var chart = new google.visualization.Gauge(document.getElementById('chartID' + i));
      chart.draw(data, options);
    }
    function drawChart2(){
      var i = 2;
      var manometro = dibujarManometro(i);
      var cellName = manometro[0];
      var cellValue = manometro[1]
      var options = manometro[2];
      var data = new google.visualization.DataTable();
      data.addColumn('string', 'Name');
      data.addColumn('number', 'value');
      data.addRows([
             [cellName, cellValue]
      ]);

      var chart = new google.visualization.Gauge(document.getElementById('chartID' + i));
      chart.draw(data, options);
    }
    function drawChart3(){
      var i = 3;
      var manometro = dibujarManometro(i);
      var cellName = manometro[0];
      var cellValue = manometro[1]
      var options = manometro[2];
      var data = new google.visualization.DataTable();
      data.addColumn('string', 'Name');
      data.addColumn('number', 'value');
      data.addRows([
             [cellName, cellValue]
      ]);

      var chart = new google.visualization.Gauge(document.getElementById('chartID' + i));
      chart.draw(data, options);
    }
    function dibujarManometro(i) {
        /**
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Name');
        data.addColumn('number', 'value');
        */

        //gets table
        var oTable = document.getElementById('myTable');

        //for (i = 1; i < rowLength; i++) {

            //gets cells of current row
            var oCells = oTable.rows.item(i).cells;
            var ID = parseFloat(oCells.item(0).innerHTML);
            var chartID = 'chart_div_' + ID;
            var cellName = String(oCells.item(1).innerHTML);
            var cellValue = parseInt(oCells.item(2).innerHTML);
            var cellValMin = parseFloat(oCells.item(3).innerHTML);
            var cellValMax = parseFloat(oCells.item(4).innerHTML);

            //calculate major tick increments
            var increment = (parseFloat(cellValMax) - parseFloat(cellValMin)) / 4;
            var tick0 = cellValMin;
            var tick1 = parseFloat(cellValMin) + parseFloat(increment);
            var tick2 = parseFloat(tick1) + parseFloat(increment);
            var tick3 = parseFloat(tick2) + parseFloat(increment);
            var tick4 = cellValMax;

            var Ticks = [tick0, tick1, tick2, tick3, tick4];

            /**
            data.addRows([
                   [cellName, cellValue]
            ]);
            */
            
            var options = {
                width: 100, height: 100,
                greenFrom: tick3, greenTo: cellValMax,
                yellowFrom: tick1, yellowTo: tick3,
                redFrom: cellValMin, redTo: tick1,
                minorTicks: cellValMin,
                majorTicks: Ticks,
                max: cellValMax,
                min: cellValMin
            };
        //}
        return [cellName,cellValue,options];
    }

<!-- language: lang-html -->

    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>


    <table id="myTable">
        <tr>
            <th>
                ID
            </th>
            <th>
                Name
            </th>
            <th>
                Value
            </th>
            <th>
                Value Min
            </th>
            <th>
                Value Max
            </th>
        </tr>
        <tr>
            <td id="ID">1</td>
            <td id="gauge">gauge1</td>
            <td id="value">20</td>
            <td id="min">0</td>
            <td id="max">40</td>
        </tr>
        <tr>
            <td id="ID">2</td>
            <td id="gauge">gauge2</td>
            <td id="value">800000</td>
            <td id="min">500000</td>
            <td id="max">1000000</td>
        </tr>
        <tr>
            <td id="ID">3</td>
            <td id="gauge">gauge3</td>
            <td id="value">25</td>
            <td id="min">10</td>
            <td id="max">30</td>
        </tr>
    </table>
        <table>
            <tr>
                <td>
                    <div id="chartID1" style="width:100px"></div>
                </td>
                <td>
                    <div id="chartID2" style="width:100px"></div>
                </td>
                <td>
                    <div id="chartID3" style="width:100px"></div>
                </td>
            </tr>
        </table>

<!-- end snippet -->



# Relacionado:

- https://es.stackoverflow.com/questions/2795/c%C3%B3mo-insertar-varias-gr%C3%A1ficas-de-google-charts-en-la-misma-p%C3%A1gina


  [1]: https://developers.google.com/chart/interactive/docs/
  [2]: https://developers.google.com/chart/interactive/docs/gallery/gauge
  [3]: https://developers.google.com/chart/interactive/docs/basic_multiple_charts#draw-multiple-charts-on-one-page

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/60017\|https://es.stackoverflow.com/q/60017]]

