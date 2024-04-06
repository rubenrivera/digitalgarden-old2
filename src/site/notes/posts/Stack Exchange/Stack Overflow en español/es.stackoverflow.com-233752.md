---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-233752.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-233752/","title":"Bucle en la hoja de calculo de google","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.506-06:00","updated":"2024-04-05T16:43:54.718-06:00"}
---

# Bucle en la hoja de calculo de google

[Revisión 8][1]  

En relación al mensaje de error, 

> La referencia de celda está fuera del intervalo. at onEdit(Ordenar:10)

Los índices de getCells las líneas siguientes están mal

    RangeAsignacion.getCell(2,1).getValue(),
    RangeAsignacion.getCell(5,1).getValue(),


El error es que se pusieron los índices relativos a a la hoja de cálculo, cuando deberían ser relativos al rango. Por ejemplo, para si el rango es `A2:F2` y se quiere hacer referencia a `A2`, en lugar de usar 

    RangeAsignacion.getCell(2,1).getValue()

se debe usar

    RangeAsignacion.getCell(1,1).getValue()



<hr>
[Revisión 3][2]  

Uno de los problemas que tiene tu fórmula es en que el el segundo argumento de QUERY, el de la SQL se incluye

`"select "&Asignacion!T9:AX9` 

donde `Asignacion!T9:AX9` es un rango de valores cuando lo que se debería incluir es el nombre de una columna de la forma Col1, Col2, etc.

Otro de los problemas es que el concepto de "bucle" como se muestra en la imagen no se puede llevar a cabo usando fórmulas. Podría resultar confuso el que no se pueda editar una celda del rango `Asignacion!A9:AX1000` que está vacía, y que al editarla agregue "explote". Lo que pasa es que aunque la celda está en vacía, este vacío forma parte de la matriz resultante de la formula que toma los datos de Copia 2.

La alternativa es hacerlo por pasos, usar la formula para importar los datos, copiar y pegar los valores y luego editar. Esto se puede automatizar usando Google Apps Script o bien hacer una solución basada por completo en esto, que no requiera fórmulas.


  [1]: https://es.stackoverflow.com/revisions/233480/8
  [2]: https://es.stackoverflow.com/revisions/233480/3

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/233752\|https://es.stackoverflow.com/q/233752]]

