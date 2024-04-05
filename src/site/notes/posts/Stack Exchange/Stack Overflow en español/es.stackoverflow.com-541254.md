---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-541254.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-541254/","title":"Pegar diferentes filas en otra hoja (Google sheet) bajo condiciones","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.356-06:00","updated":"2024-04-05T16:43:57.830-06:00"}
---

# Pegar diferentes filas en otra hoja (Google sheet) bajo condiciones

Como ya mencioné en mis comentarios a la pregunta, el código original tiene varios problemas. Uno que aún no había mencionado es que los datos que se están recolectando usando `Range.getDisplayValues()` en la variable `data` se pasan tal cual a dicha variable usando `Array.prototype.push`. Esto causa que `data` sea un `Array` de `Array` de `Array` de string (un "array 3D"), el problema es que que `Range.setValues(values)` espera que el parámetro sea un `Array` de `Array` (un "array 2D") de valores.

Una solución sencilla a lo anterior es modificar
```
var filasb = origen2.getRange(filas, 1, 1, 10).getValues();
data.push(filasb);
```
de la siguiente forma (agregar `[0]`)
```
var filasb = origen2.getRange(filas, 1, 1, 10).getValues()[0];
data.push(filasb);
```

Problemas mencionados en los comentarios

1. El código en la versión original de la pregunta declara la variable `destino` casi al final del de la función pero esta es llamada antes por lo que causaría un TypeError pues el `undefined` no tiene el método `getRange`.
2. El declarar variables dentro de un bucle usando métodos de Google Apps Script que devuelven lo mismo en cada iteración es potencialmente ineficiente. Digo potencialmente porque Google Apps Script internamente tiene algoritmos para eficientar pero sólo haciendo pruebas se podría saber en cada caso si están siendo efectivos. Lo mejor es no depender de dichos algoritmos. Una solución sencilla de esto es mover esos métodos fuera del bucle.
3. El tener los `if` que evalúan la respuesta del prompt dentro del bucle también ineficiente aunque el impacto podría ser relativamente menor. Por "buenas prácticas" Lo mejor es poner estos `if` fuera del bucle.

Otros problemas

La siguiente línea es altamente ineficiente:

`var celdas = origen2.setActiveSelection(ranges[i].getA1Notation());`

Lo anterior porque, dentro de un bucle, usa dos métodos de Apps Script siendo uno de ellos uno que afecta la interfaz de usuario.

una solución simple es reemplazarla por: 

`var celdas = ranges[i];`


# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/541254\|https://es.stackoverflow.com/q/541254]]

