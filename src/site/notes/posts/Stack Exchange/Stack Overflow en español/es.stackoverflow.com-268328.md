---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-268328.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-268328/","title":"Script google sheet que muestre valor o dato de una celda","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.355-06:00","updated":"2024-04-05T16:43:55.391-06:00"}
---

# Script google sheet que muestre valor o dato de una celda

[Class UI][1] tiene varios métodos para mostrar diferentes tipos de diálogos. Si sólo se trata de mostrar el valor de una celda usa `alert`. El siguiente ejemplo muestra el valor de la celda A1 de la hoja activa:

```
function mostrarValorA1(){
 SpreadsheetApp.getUi().alert(SpreadsheetApp.getActiveSheet().getRange('A1').getValue());
}
```

Para agregar un botón, inserta una image, luego haz clic con el botón derecho en ella y selecciona asignar script. Luego escribes el nombre de la función (sin paréntesis). En el caso del ejemplo escribe `mostrarValorA1`.



  [1]: https://developers.google.com/apps-script/reference/base/ui

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/268328\|https://es.stackoverflow.com/q/268328]]

