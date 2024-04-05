---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-295714.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-295714/","title":"tabla dinámica con un origen de datos con dos cabeceras, una de ellas agrupada","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.760-06:00","updated":"2024-04-05T16:43:56.046-06:00"}
---

# tabla dinámica con un origen de datos con dos cabeceras, una de ellas agrupada

De acuerdo a [Create a PivotTable to analyze worksheet data](https://www.microsoft.com/en-us/microsoft-365/blog/2015/12/15/learn-how-to-unpivot-static-tables-in-excel-2016/)

Las tablas dinámicas requieren que la fuente de datos sea una tabla simple:

- La primera fila debe incluir los encabezados de columna
- Las segunda fila y siguientes deben incluir los valores
- No deben haber filas ni columnas en blanco

Considerando lo anterior, tu primera tarea es preparar los datos para que estos sean aptos como fuente de datos de una tabla dinámica. Para esto, deberás tomar deciones, por ejemplo, 

- si lo harás "manual" o de de forma "automática", 
- si lo harás de forma automática si usarás características incluídas del propio Excel o recurrirás a un complemento o aplicación de terceros

En el artículo [Learn how to unpivot static tables in Excel 2016](https://support.office.com/en-us/article/create-a-pivottable-to-analyze-worksheet-data-a9a84538-bfe9-40a9-a8e9-f99134456576) se indica cómo usar una función de Excel 2016, que permite "despivotar" (en inglés *unpivot*) una tabla de datos como la que se muestra en la pregunta.

Los pasos básicos son

1. Haz clic en una celda de la tabla
2. Haz clic en la pestaña *Data*, luego en la sección *Get & Transform*, haz clic *From Table* y lo cual mostrará en *Query Editor*
3. En el el *Query Editor*, haz uso de la las funciones para "despivotar" (en inglés *unpivot*).

Relacionado

- https://es.stackoverflow.com/q/6091/65
- https://es.stackoverflow.com/q/84086/65




# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/295714\|https://es.stackoverflow.com/q/295714]]

