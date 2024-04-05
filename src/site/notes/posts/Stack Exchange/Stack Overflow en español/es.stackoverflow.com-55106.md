---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-55106.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-55106/","title":"Cómo ejecutar codigo para varias celdas de Excel a la vez","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.353-06:00","updated":"2024-04-05T16:43:49.513-06:00"}
---

# Cómo ejecutar codigo para varias celdas de Excel a la vez

En el código que de la pregunta se indica ActiveCell.Value, lo cual te devuelve el valor de la celda activa, pero lo que deberías hacer es escoger una forma de obtener múltiples celdas. Para ello lee [Bucles en un rango de celdas](https://msdn.microsoft.com/es-mx/library/office/ff840655.aspx).

Nótese que puedes usar `For...Next` o `For Each...Next` para aplicar la misma operación a varias celdas y que puedes usar `Cells` o `CurrentRegion`.

Por otro lado, veo que estas usando múltiples IF. Considera en lugar de hacerlo así, usar [Select Case][1] ya que resulta mas conveniente en estos casos.

Otra obsevación más, es acerca de los intervalos que has indicado en el código, se translapan, lo cual no es una buena práctica porque bajo ciertas condiciones podría causar problemas, por ejemplo, Si score1 es 0.2 el valor de `result` primero será 2 y luego será 3.


  [1]: https://msdn.microsoft.com/es-mx/library/office/gg278665.aspx

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/55106\|https://es.stackoverflow.com/q/55106]]

