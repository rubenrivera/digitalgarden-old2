---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-551583.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-551583/","title":"guardar en una celda distinta estoy usando ws.appendRow","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.418-06:00","updated":"2024-04-05T16:43:57.964-06:00"}
---

# guardar en una celda distinta estoy usando ws.appendRow

Si vas a agregar varias filas en una ejecución de tu función de Google Apps Script, `Sheet.appendRow` podría no ser la opción más eficiente e inclusive to podría generar errores de exceder el tiempo máximo de ejecución

En lugar de concatenar deberías crear un Array de Arrays (array 2D / bidimiensional)

La siguiente modificación de tu código crea una columna


    var pedido = [];
    for (var i = 0; i < cart.Data.length; i++) {             
        pedido.push([cart.Data[i].producto ]);
    }

Luego para pasar los datos a la hoja de cálculo usa `Range.setValue(pedido)` (donde Range es un objeto de tipo Class Range). Puedes encontrar la última fila del rango de datos usando `Sheet.getLastRow()` (donde Sheet es un objeto de tipo Class Sheet).

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/551583\|https://es.stackoverflow.com/q/551583]]

