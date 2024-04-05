---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-433517.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-433517/","title":"Transponer en dos rangos, el segundo rango convertir valores en negativo y agregar dos columnas con valores (fecha, tipo)","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.417-06:00","updated":"2024-04-05T16:43:57.148-06:00"}
---

# Transponer en dos rangos, el segundo rango convertir valores en negativo y agregar dos columnas con valores (fecha, tipo)

Utiliza la siguiente función para transponer:

```
function transpose(a) {
  return Object.keys(a[0]).map(function (c) { return a.map(function (r) { return r[c]; });});
}
```

Tomado de la respuesta de Mogsdad a [Google Spreadsheet Script - How to Transpose / Rotate Multi-dimensional Array?](https://stackoverflow.com/q/16621470/1595451)

Una forma de aplicar lo anterior es

```
var Ingresos = transpose(LastColum1),
    Egresos = transpose(LastColum2) 
```

Nótese que el ejemplo hace uso de `push`. Esto es lo que está causando el que tengas "tres corchetes", es decir estar insertando un Array de Array (Array "bidimencional") en un Array (con lo cual creas un Array "tridimencional").

Si aplica lo anterior en el código incluido en la pregunta, en llos `setValues` de las últimas líneas  en lugar de usar `Ingresos[0]` y `Egresos[0]` deberás usar `Ingresos` y `Egresos`

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/433517\|https://es.stackoverflow.com/q/433517]]

