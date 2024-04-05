---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-315005.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-315005/","title":"Como extraer la cantidad de días entre un rango de fechas? SpreadSheep Google Apps Script","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.417-06:00","updated":"2024-04-05T16:43:56.395-06:00"}
---

# Como extraer la cantidad de días entre un rango de fechas? SpreadSheep Google Apps Script

En Google Apps Script las fechas se manejan como objetos tipo `Date` de JavaScript por lo que para calcular la cantidad de días entre un par de fechas deberás usar los métodos y técnicas para este propósito basados en JavaScript.

Lo primero a tener en mente es que en JavaScript las fechas se determinan en milisegundos a partir de las 00:00:00 UTC del 1 de enero de 1970.

Considerando lo anterior la forma de hacerlo es convertir los objetos fechas a milisegundos y calcular la diferencia entre estos valores y convertir los milisegundos a días.

Cabe destacar que existen librerías de JavaScript como moment.js que incluyen métodos que hacen lo descrito anteriormente.

Para incluir una librería como moment.js en JavaScript la forma más sencilla es copiar el código de la librería en un archivo .gs en tu proyecto de Google Apps Script.

Relacionado

- https://es.stackoverflow.com/q/22073/65

Referencias

- https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Date

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/315005\|https://es.stackoverflow.com/q/315005]]

