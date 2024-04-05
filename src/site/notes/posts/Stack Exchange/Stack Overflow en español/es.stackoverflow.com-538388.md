---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-538388.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-538388/","title":"¿Cómo llenar una columna en google sheet automáticamente con apps script?","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.355-06:00","updated":"2024-04-05T16:43:57.758-06:00"}
---

# ¿Cómo llenar una columna en google sheet automáticamente con apps script?

El código está escribiendo hasta abajo debido a que la fila en la cual escribir se está determinando por medio de `Sheet.getLastRow()` el cual devuelve la última fila con datos de la hoja. Para escribir en la posición C1, deberías pasar 1 como número de fila. Cabe mencionar siempre que sea posible debe buscarse usar el menor número de llamadas a servicios de Apps Script porque son muy lentos.

Cambia 
```
  const lastRow = asistencia.getLastRow() + 1;
  asistencia.getRange(lastRow, 1).setValue(correo);
  asistencia.getRange(lastRow, 2).setValue(id);
  asistencia.getRange(lastRow, 3).setValue(nombre);
  asistencia.getRange(lastRow, 4).setValue(new Date());
```
por
```
const row = 1; // número de la fila en la que quieres escribir los datos
asistencia.getRange(row,1,1,4).setValues([[correo,id,nombre,new Date()\|correo,id,nombre,new Date()]])
```
Para escribir en la primera celda vacía, deberás leer la columna y luego iterar hasta encontrar la primera celda vacía, por ejemplo

```
const values = asistencia.getRange('C:C').getValues(); // Leer todos los valores de la columna C
let index = 0; // Los índices de los Arrays en JavaScript empiezan en 0
while(values[index][0] !== ''){
  index++;
}
const row = index + 1; // Los números de fila en la hoja de cálculo empiezan en 1
```
Nota: Este código asume que siembre habrá al menos una celda vacía. Quizás debes de tomar medidas para manejar el caso de que no haya celdas vacías.

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/538388\|https://es.stackoverflow.com/q/538388]]

