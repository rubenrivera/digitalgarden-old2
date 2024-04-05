---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-321186.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-321186/","title":"¿Cómo puedo decirle al script que solo quiero que guarde el rango tamaño carta de la primer hoja?","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.593-06:00","updated":"2024-04-05T16:43:56.485-06:00"}
---

# ¿Cómo puedo decirle al script que solo quiero que guarde el rango tamaño carta de la primer hoja?

No es posible de hacerlo de forma directa pero puedes hacerlo de la siguiente forma

1. Crear un nuevo spreadsheet
   - Hay dos métodos, uno que crea el spreadsheet con el número de filas y columnas predeterminado y otro para especificar cuantas debe tener el nuevo spreadsheet
2. Copiar el intervalo
   - Dependiendo de lo que necesites pasar, quizás debas primero crear una nueva hoja a la que copies el intervalo y luego copiar la hoja al nuevo spreadsheet. Si requieres sólo los datos puedes pasarlos directamente al nuevo spreadsheet
3. Ajustar las dimensiones
   - Dependiendo del como hayas realizado el paso anterior, quizás debas ajustar el ancho y altura de de columnas y filas respectivamente, quizás mas ajustes.
4. Guardar como PDF
   - Si has copiado una hoja primero deberas borrar la hoja predetermina luego creas el PDF como lo has hecho en tu código.

Referencias

- https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet-app
- https://developers.google.com/apps-script/reference/spreadsheet/drive-app

Relacionado

- https://es.stackoverflow.com/q/313162/65
- https://es.stackoverflow.com/q/312433/65

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/321186\|https://es.stackoverflow.com/q/321186]]

