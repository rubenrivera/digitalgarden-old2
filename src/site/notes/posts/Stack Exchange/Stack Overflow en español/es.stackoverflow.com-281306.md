---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-281306.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-281306/","title":"error sintaxis al configurar Google Script con la database Realtime de Firebase","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.627-06:00","updated":"2024-04-05T16:43:55.638-06:00"}
---

# error sintaxis al configurar Google Script con la database Realtime de Firebase

`JSON.parse(data)` devuelve un objeto no necesariamente un argumento válido para `setValue`. Los tipos de valores que acepta `setValue` son

1. Cadena de texto
2. Número
3. Boleano
4. Fecha (objeto tipo Date)

Ni objetos del tipo `{nombre:'Juan',apellido:'Pérez'}` ni del tipo Array son válidos como argumentos de `setValue`

Dependiendo del valor u objeto que devuelva la función `getFirebaseData` y particularmente lo que quieras agregar a la hoja de cálculo será la forma de solucionarlo.

Referencia

- https://developers.google.com/apps-script/reference/spreadsheet/range#setvaluevalue

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/281306\|https://es.stackoverflow.com/q/281306]]

