---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-438458.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-438458/","title":"Cómo crear un archivo que contenga una variable tipo Arreglo de Objetos desde google sheet en Google Apps Script","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.417-06:00","updated":"2024-04-05T16:43:57.215-06:00"}
---

# Cómo crear un archivo que contenga una variable tipo Arreglo de Objetos desde google sheet en Google Apps Script

Array y sus métodos son muy prácticos para el manejo de los datos de hoja de cálculo.

El siguiente fragmento usa `Array.prototype.map()` y `Array.prototype.reduce()` (asumiendo que las hoja activa tiene cuatro columnas, una por cada propiedad en cierto orden:

```
const values = SpreadsheetApp.getActiveSheet().getDataRange().getValues(); // obtener los valores
values.shift(); // remover los encabezados
const baseDeDatos = values.map(row => { // para cada fila...
    return ['id','nombre','precio','image'].reduce(  // nombre de las propiedades o "keys"
      (obj, key, col) => {
        obj[key] = row[col];
        return obj;
      }, 
      {});
});
```

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/438458\|https://es.stackoverflow.com/q/438458]]

