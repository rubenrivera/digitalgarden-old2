---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-79589.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-79589/","title":"Cómo hacer que Excel abra correctamente un archivo CSV con diacríticos al hacer doble clic en el mismo","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.759-06:00","updated":"2024-04-05T16:43:51.320-06:00"}
---

# Cómo hacer que Excel abra correctamente un archivo CSV con diacríticos al hacer doble clic en el mismo

> He probado con Windows 10 64bits con Excel 2016 y funciona. Si pruebas con otro SO y/o versión de Excel por favor deja un comentario con los datos.

La solución es usar utf-16 en lugar de utf-8 y agregar el caracter de marca de orden de bytes (BOM por sus siglas en inglés)  `\uFEFF`.

El código de la pregunta quedaría de la siguiente forma

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
        csv = 'data:text/csv;charset=utf-16,\uFEFF' + csv;
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



# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/79589\|https://es.stackoverflow.com/q/79589]]

