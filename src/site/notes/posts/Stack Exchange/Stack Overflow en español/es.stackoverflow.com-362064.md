---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-362064.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-362064/","title":"indexOf return -1","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.680-06:00","updated":"2024-04-05T16:43:56.678-06:00"}
---

# indexOf return -1

El problemas es que estás aplicando `indexOf` a un string en lugar de hacerlo a un Array

Te doy mas detalles

getValues() devuelve un array bidimiensional pero sólo estás asignando una fila a datos originales porque has puesto `[0]`;

    var datosOriginales= EquiposStock.getRange(2, 1,EquiposStock.getLastRow(),1).getValues()[0];


luego `datosOriginales[0]` devuelve un `string`, es por ello que

    datosOriginales[0].indexOf('23?57') 

le asigna `-1` a `pos`

Si deseas buscar en la primera fila de los datos tomados del rango devuelto por `EquiposStock.getRange(2, 1,EquiposStock.getLastRow(),1)` quita el `[0]` de uno de los dos lugares donde lo has incluido.



# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/362064\|https://es.stackoverflow.com/q/362064]]

