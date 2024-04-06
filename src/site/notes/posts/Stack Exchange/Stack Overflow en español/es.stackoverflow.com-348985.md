---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-348985.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-348985/","title":"¿Cómo vuelco el mapaCalendarios ordenado en rangoCalendarios de la SpreadSheet?","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.627-06:00","updated":"2024-04-05T16:43:56.564-06:00"}
---

# ¿Cómo vuelco el mapaCalendarios ordenado en rangoCalendarios de la SpreadSheet?

La forma básica de volcar datos en una hoja de cálculo de Google usando Google Apps Script es mediante el método `setValues(values)` de `Class Range` donde el parámetro values es un objeto de tipo Array bidimiensional.

Si cuentas on objeto de tipo Map deberas convertirlo a un Array bidimensional, para lo cual podrías usar [Array.from()][1]


  [1]: https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/from

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/348985\|https://es.stackoverflow.com/q/348985]]

