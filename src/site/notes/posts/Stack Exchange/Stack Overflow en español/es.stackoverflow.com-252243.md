---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-252243.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-252243/","title":"No se ejecuta correctamente google apps script","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.759-06:00","updated":"2024-04-05T16:43:55.067-06:00"}
---

# No se ejecuta correctamente google apps script

>Encuentro los siguientes problemas:
>
>1. Cuando se edita la celda no se ejecuta inmediatamente el script (tarda muchísimo cuando por fin se ejecuta)

El script es ineficiente. Para mejorar su desempeño, reduce las llamadas a servicios de Google Apps Script, por ejemplo, usa el objeto evento

- cambia `function onEdit()` por `function onEdit(e)` (el nombre del argumento puede ser el que tu quieras, generalmente se usa `e` por la inicial de "event"). Luego puedes obtener el rango que ha sido editado con `e.range`.
- estas reusando la misma variable inmediatamente, esto sólo consume tiempo. Me refiero a 

```
var ss = sss.getSheetByName('BD1'); 

var ss = SpreadsheetApp.getActiveSpreadsheet();
```
No tiene sentido usar `openById` pues los activadores simples como `onEdit` se ejecutan con permisos limitados.

- Existen varios reportes de que getLastRow() en ocasiones es muy lento. En su lugar puedes intentar con `sheet.getDataRange().getValues().length` donde `sheet` es un objeto Sheet del cual quieres obtener su última fila con datos.

El tiempo de recálculo de la hoja afecta el desempeño aparente de `onEdit`. Quizás debas revisar las fórmulas para reducir el tiempo de recálculo y así mejorar el desempeño aparente de `onEdit`

>2. No oculta la fila

Dado que el objeto evento incluye el rango que ha sido editado, puedes cambiar radicalmente la lógica y resolver esto, por ejemplo, dado que `e.range` te devuelve el rango editado ya no tienes que iterar sobre todas las filas. Para obtener la fila usa `e.range.getRow()`

>3. Aparece el mensaje antes de ocultar la fila si la oculta.

Esto usualmente se resuelve incluyendo `SpreadsheetApp.flush()` antes de llamar diálogos.

Cabe destacar que el uso de Browser no lo recomienda el propio Google. En su lugar usa `SpreadsheetApp.getUI().alert(mensaje)`

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/252243\|https://es.stackoverflow.com/q/252243]]

