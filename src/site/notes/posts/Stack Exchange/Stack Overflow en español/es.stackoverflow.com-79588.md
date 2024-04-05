---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-79588.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-79588/","title":"Cómo hacer que Excel abra correctamente un archivo CSV con diacríticos al hacer doble clic en el mismo","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.759-06:00","updated":"2024-04-05T16:43:51.317-06:00"}
---

# Cómo hacer que Excel abra correctamente un archivo CSV con diacríticos al hacer doble clic en el mismo

El usuario cuenta con Excel como aplicación predeterminada para abrir archivos CSV y desea que luego de descargar un archivo CSV de mi aplicación al hacer doble clic en este y ser abierto en Excel, los diacríticos se vean correctamente.

Los datos son 

<!-- language: lang-none -->

    País	Estado		Ciudad
    México	Nuevo León	Monterrey
    México	Tamaulipas	Güémez

pero se ven de la siguiente forma

<!-- language: lang-none -->

    Estado	Ciudad	
    MÃ©xico	Nuevo LeÃ³n	Monterrey
    MÃ©xico	Tamaulipas	GÃ¼Ã©mez

Adapté el código de [Use JavaScript to Export Your Data as CSV][1] para poder explicar la situación de forma general con un ejemplo completo mínimo y verificable.

- Se tiene datos en una matriz de objetos que incluyen diacríticos
- Se genera un enlace para descargar los datos como archivos CSV.


<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-js -->

    var datos = [
      {
        País: "México",
        Estado: "Nuevo León",
        Ciudad: "Monterrey"
      },
      {
        País: "México",
        Estado: "Tamaulipas",
        Ciudad: "Güémez"
      }
    ];

    function convertArrayOfObjectsToCSV(args) {
      var result, ctr, keys, columnDelimiter, lineDelimiter, data;

      data = args.data || null;
      if (data == null || !data.length) {
        return null;
      }

      columnDelimiter = args.columnDelimiter || ',';
      lineDelimiter = args.lineDelimiter || '\n';

      keys = Object.keys(data[0]);

      result = '';
      result += keys.join(columnDelimiter);
      result += lineDelimiter;

      data.forEach(function(item) {
        ctr = 0;
        keys.forEach(function(key) {
          if (ctr > 0) result += columnDelimiter;

          result += item[key];
          ctr++;
        });
        result += lineDelimiter;
      });

      return result;
    }

    function downloadCSV(args) {
      var data, filename, link;

      var csv = convertArrayOfObjectsToCSV({
        data: datos
      });
      if (csv == null) return;

      filename = args.filename || 'export.csv';

      if (!csv.match(/^data:text\/csv/i)) {
        csv = 'data:text/csv;charset=utf-8' + csv;
      }
      data = encodeURI(csv);

      link = document.createElement('a');
      link.setAttribute('href', data);
      link.setAttribute('download', filename);
      link.click();
    }

<!-- language: lang-html -->

    <a href='#' onclick='downloadCSV({ filename: "ciudades-con-diacríticos.csv" });'>Descargar CSV</a>

<!-- end snippet -->

Sobre lo que he intentado para solucionarlo encontré que agregar el caracter BOM genera una excepción ya que utf-8 es de caracter simple y no funciona en Mac, y también intenté reemplazando `utf-8` por `utf-8-sig` y agregué los octetos 0xEF,0xBB,0xBF pero no me funcionarion.

**Pregunta en inglés relacionada**

[Microsoft Excel mangles Diacritics in .csv files?][2]


  [1]: https://halistechnology.com/2015/05/28/use-javascript-to-export-your-data-as-csv/
  [2]: https://stackoverflow.com/q/155097/1595451

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/79588\|https://es.stackoverflow.com/q/79588]]

