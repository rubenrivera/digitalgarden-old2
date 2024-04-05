---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-486010.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-486010/","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.627-06:00","updated":"2024-04-05T16:43:57.546-06:00"}
---

---
title: "Exception: La referencia de celda está fuera del intervalo" al enviar por email los cambios ocurridos en Google Sheets mediante Google Apps Script
Site: Stack Overflow en español
Stack Exchange Post ID: 486010
Stack Exchange Type: Answer
Stack Exchange Post Created: 23/09/21 1:33
Stack Exchange Post Last Edit: 
Stack Exchange Edited By: 
Score: 1
Favorites: 
Views: 954
Accepted: 
CW: 
Closed: 
---
# "Exception: La referencia de celda está fuera del intervalo" al enviar por email los cambios ocurridos en Google Sheets mediante Google Apps Script

En relación a la depuración de un activador instalable usualmente result útil registrar las propiedades del objeto evento:

```
function onChange(e)
{
   Object.keys(e).forEach(key => console.log(JSON.stringify(e[key]));
   // Agrega aquí lo demás que deseas intenta
}
```

Según entiendo para el caso que estas probando debería `changeType` debería ser igual a `"EDIT"`, si no fuera así, esta seguramente la explicación del problema, si lo fuera, en lugar de

    var activeRow = activeSheet.getActiveCell().getRow();

intenta con

    var activeCell = activeSheet.getActiveCell();
    var activeRow = activeCell.getRow();

si lo anterior no funciona, intenta con

    var activeRange = e.source.getActiveRange();
    var activeRow = activeRange.getRow();


Lo anterior porque en ocasiones no funciona encadenar métodos a métodos del tipo `getActive...`

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/486010\|https://es.stackoverflow.com/q/486010]]

