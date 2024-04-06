---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-240549.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-240549/","title":"Función para que el script jale los campos de la segunda hoja de cálculo","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.728-06:00","updated":"2024-04-05T16:43:54.953-06:00"}
---

# Función para que el script jale los campos de la segunda hoja de cálculo

El formulario mostrado en la imagen contiene 3 preguntas así que la propiedad values del objeto evento contendrá sólo cuatro elementos, el primero correspondiente a la marca temporal y los otros tres a cada una de las preguntas. Por otro lados los índices en objetos Array son base 0.

En otras palabras, al usar los índices 23, 25, 28, 31, 32, 33 y 50 devuelven `undefined` porque esos elementos no existen en `e.values`.

Para tomar una valor de una hoja de cálculo de Google se debe tomar primero el rango donde se encuentre el valor en cuestión, para lo cual existen diversos métodos, tales como el conjunto de métodos `getRange(...)`, `getDataRange()`, `getActiveRange()`, entre otros.

Una vez que has tomado el rango, puedes usar `getValue()`, `getValues()`, `getDisplayValue()`, ó `getDisplayValues()` para tomar el valor o valores ya sea una celda o varias celdas las que abarca el rango tomado.

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/240549\|https://es.stackoverflow.com/q/240549]]

