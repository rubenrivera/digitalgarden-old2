---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-486418.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-486418/","title":"indexOf devuelve -1","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.680-06:00","updated":"2024-04-05T16:43:57.556-06:00"}
---

# indexOf devuelve -1

El problema se origina en 

```
var rubro = hojadatos.getActiveCell().getValues();
```

`getValues()` devuelve una matriz cuadrada, un objeto de tipo Array, que contiene un objeto tipo Array por cada fila, con un valor u objeto tipo Date por cada celda de la fila.

La solución simple podría ser usar `getValue()` en su lugar.

```
var rubro = hojadatos.getActiveCell().getValue();
```

ya que `getValue()` devuelve un valor o un objeto tipo Date correspondiente a la celda o celda superior izquierda del rango cuando este tiene más de una celda.

Si la celda contiene una fecha, `indexOf` devolverá -1 por lo que para que tu script sea robusto deberás implementar medidas para manejar este caso.

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/486418\|https://es.stackoverflow.com/q/486418]]

