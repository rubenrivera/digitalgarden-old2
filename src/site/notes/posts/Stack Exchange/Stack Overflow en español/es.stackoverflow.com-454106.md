---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-454106.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-454106/","title":"Añadir varios replace a la vez para la primera columna","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.507-06:00","updated":"2024-04-05T16:43:57.359-06:00"}
---

# Añadir varios replace a la vez para la primera columna

Parece que el código no hace nada porque 

1. se tienen dos líneas que estan replazando valores del mismo dato original (`range[i]`)
   ```
   var vacios = range[i].toString().replace(/ /g, ""); 
   var comas = range[i].toString().replace(",", "/");
   ```
2. se tienen dos líneas escribiendo diferentes valores en la misma celda
   ```
   var eliminarEspacios = sheet.getRange(i+2,1).setValue(vacios)
   var reemplazarComas = sheet.getRange(i+2,1).setValue(comas);
   ```


Una manera de lograr lo que estas buscando es que "encadenes" los `replace`.
 ```
var valor = range[i].toString()
    .replace(/ /g, "")
    .replace(/,/g, "/")
sheet.getRange(i+2,1).setValue(valor)
```

NOTAS:  
1. En primer parámetro del segundo `replace` se usó una expresión regular con el modificar `g` en lugar de una cadena de texto, para que se reemplacen todas las comas.
2. No es necesario declarar una variable si no vas a hacer nada con el rango al que estas asignado el valor.
3. Si quieres optimizar el tiempo de ejecución del código, en lugar de escribir en la hoja de cálculo en cada iteración del `for` es mejor que pases los datos a un Array y después del `for` pases todos los valores en una sólo llamada

```
function reemPlazar() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName("BBDD");
  var getLastRow = sheet.getLastRow();
  var range = ss.getRange("A2:A" + getLastRow ).getValues();
  var valores = []; // Inicializar el Array donde pondremos los valores corresponsientes a cada celda
  for (var i = 0 ; i<range.length ; i++) {
   var valor = range[i].toString()
       .replace(/ /g, "")
       .replace(/,/g, "/");
   valores.push([valor]); // Agregar un Array con un valor que corresponde a una fila con una celda.
  }
  sheet.getRange(2,1,valores.length,1).setValues(valores);
}
```

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/454106\|https://es.stackoverflow.com/q/454106]]

