---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-153941.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-153941/","title":"Poner filtro en la creación de Pivot Table en App Script","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.506-06:00","updated":"2024-04-05T16:43:53.546-06:00"}
---

# Poner filtro en la creación de Pivot Table en App Script

Por los comentarios incluídos en el código, el código original pareciera que fue tomado de [Create & update Pivot Tables](https://sites.google.com/site/scriptsexamples/learn-by-example/google-sheets-api/pivot).

Analizando más a detalle tu código, copiaste

    pivotTableParams.values = [{
        summarizeFunction: "SUM",
        sourceColumnOffset: 8
      }];

y luego lo pegaste como

    pivotTableParams.criteria = [{
        summarizeFunction: "SUM",
        sourceColumnOffset: 8
      }];

reemplazando `values` por `criteria`, pero dejaste las mismas propiedades. Ahí es donde estuvo tu error. En lugar de

    [{
      summarizeFunction: "SUM",
      sourceColumnOffset: 8
    }];

debería haber sido algo con la sintaxis siguiente

    string: {
         object(PivotFilterCriteria)
    }

donde `string` es el índice de la columna de fuente de datos. Por ejemplo, si la fuente de datos fuera C10:F50, la columna C tendría el índice 0, la columna D el índice 1 y así sucesivamente.

En cuanto a `object(PivotFilterCriteria)`, éste tiene la sintaxis siguiente

    {
      "visibleValues": [
        string
      ],
    }

Referencia

- https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets#PivotTable

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/153941\|https://es.stackoverflow.com/q/153941]]

