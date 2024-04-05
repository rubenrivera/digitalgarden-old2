---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-499029.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-499029/","title":"¿Cómo Agregar Datos a un Objeto (arreglo)?","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.680-06:00","updated":"2024-04-05T16:43:57.572-06:00"}
---

# ¿Cómo Agregar Datos a un Objeto (arreglo)?

Para ver el "Si" en la hoja de cálculo no es suficiente con actualizar los datos en el arreglo, debes incluir una operación de escritura por ejemplo usando `SpreadsheetApp.Range.setValue`, de hecho, no es necesario actualizar el arreglo.

Una manera de hacer esto es pasar la hoja y la fila ( el índice de la fila  + 1) a `enviarCorreo`. En otras palabras, reemplaza

    enviarCorreo(candidato)

por 

    enviarCorreo(candidato,hoja,indiceFila + 1)


y reemplaza

    function enviarCorreo(candidato) {

y  

     candidato.push("Si");

por

    function enviarCorreo(candidato, hoja, fila) {
   
y

    hoja.getRange(fila, 13).setValue("Si")

respectivamente.  

<hr>

Pasar la fila como  `indiceFila + 1` es debido a que los arreglos usan índices base cero pero `getRange` usa índices base 1.

NOTAS: El código es ineficiente al basar la obtención de la hoja con base en la hoja activa ya que están usando más llamadas de las necesarias para obtener el mismo resultado además de evitar "efectos colaterales", en este caso, activar una hoja. Para solucionar esto reemplaza

```
 const libro = SpreadsheetApp.getActiveSpreadsheet();
  libro.setActiveSheet(libro.getSheetByName("Respuestas de formulario 1"));
  const hoja = SpreadsheetApp.getActiveSheet();
```
por
```
 const libro = SpreadsheetApp.getActiveSpreadsheet();
  const hoja = libro.getSheetByName("Respuestas de formulario 1");
```

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/499029\|https://es.stackoverflow.com/q/499029]]

