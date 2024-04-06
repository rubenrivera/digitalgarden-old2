---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-451574.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-451574/","title":"Alerta basada en comparativa de dos columnas (función ui)","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.507-06:00","updated":"2024-04-05T16:43:57.341-06:00"}
---

# Alerta basada en comparativa de dos columnas (función ui)

`getValue()` devuelve el valor o objeto tipo Date de la celda superior izquierda. Si tu quieres obtener todos los valores del rango, en su lugar debes usar `getValues()`. Este método te devolverá un Array que incluirá un Array por cada fila del rango el cual a su vez incluirá un valor u objeto tipo Date por cada celda de la fila correspondiente.

Sobre la comparación  del Array de una columna con el correspondiente a la otra faltaría tener claro si deseas hacer la comparación de una fila a fila o si debe realizarse de otra manera. En cualquier caso te resultarán muy útiles los métodos de `Array.prototype` como `reduce`, `map`, `every`, `some`, etc.

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/451574\|https://es.stackoverflow.com/q/451574]]

