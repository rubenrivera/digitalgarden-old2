---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-373275.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-373275/","title":"¿Cómo puedo crear un campo autoincremental en una tabla dinámica?","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.728-06:00","updated":"2024-04-05T16:43:56.702-06:00"}
---

# ¿Cómo puedo crear un campo autoincremental en una tabla dinámica?

Mi primera impresión es que no es posible usar la función de tabla dinámica (pivot table) en la hoja de cálculo de Google por sí sola para agregar un número auto incremental. Por lo anterior yo intentaría otras cosas. 

En las hojas de cálculo de Google, la forma más sencilla de agregar un número *autoincremental* es quizás creando una serie, quizás ya sabes, en `A1` escribes `1`, en `A2`, escribes `2`, en `A3`, escribes `3`, seleccionas las tres celdas, haces clic en la esquina inferior derecha y arrastras.

Otra forma es usar la función `ROW`; en `B1` escribes `=ROW(A1:A10)` luego presionas <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Enter</kbd>, sueltas y presionas <kbd>Enter</kbd>, Voilà!


Quizás usar *Google Apps Script*, siendo programador quizás te resulte más cómodo pues es cosa de aprender a usar un *IDE* web muy básico, aprender de "Spreadsheet Service" y lo básico de JavaScript para el manejo de vectores y matrices (Array y Array anidados, particularmente bidimensionales.


Guía oficial [Extending Google Sheets][1]. En el mismo sitio se encuentran "quickstarts" y codelabs


  [1]: https://developers.google.com/apps-script/guides/sheets

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/373275\|https://es.stackoverflow.com/q/373275]]

