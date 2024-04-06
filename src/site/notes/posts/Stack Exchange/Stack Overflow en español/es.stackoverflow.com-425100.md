---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-425100.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-425100/","title":"No funciona mi script. No encuentro el error","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.417-06:00","updated":"2024-04-05T16:43:57.069-06:00"}
---

# No funciona mi script. No encuentro el error

Lo primero es verificar si tus checkboxes están configurados con valores booleanos o con valores tipo texto.

<hr>

Me parece que tu código tiene varios problemas.

1. Eficiencia: No estás aprovechando el objeto evento . Más información en [Edit][1].  
    Este objeto incluye la propiedades `range` y `value` (este último sólo se incluye cuando se edita una celda). Además el objeto referenciado por range incluye las propiedades `rowStart`, `rowEnd`, `columnStart` y `columnEnd`.
2. El `rangoOrigen` no está apropiadamente especificado  
   Esto porque los últimos dos parámetros se refieren a la cantidad de filas y cantidad de columnas, en lugar de `hojaOrigen.getLastColumn()` se debería indicar `hojaOrigen.getLastColumn() - 2` porque la columna de inicio es la 3.
3. El valor devuelto de una celda con un casilla de verificación puede ser complicado. De forma prederminada se asignan los valores booleanos `VERDADERO` y `FALSO` pero se pueden personalizar para usar valores de texto `"VERDADERO"` y `"FALSO"`. En el primer caso `getValue()` va a devolver `true` y `false` respectivamente pero si los has personalizado te devolverá el valor correspondiente. 
4. Eficiencia. La última línea (`hojaDestino.getRange(hojaDestino)`) un rango pero no se hace nada con este.


  [1]: https://developers.google.com/apps-script/guides/triggers/events#edit

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/425100\|https://es.stackoverflow.com/q/425100]]

