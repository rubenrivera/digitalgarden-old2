---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-610849.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-610849/","title":"Como puedo mejorar la velocidad de una funcion en Google Apps Script que trabaja con muchos archivos","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.507-06:00","updated":"2024-04-05T16:43:58.152-06:00"}
---

# Como puedo mejorar la velocidad de una funcion en Google Apps Script que trabaja con muchos archivos

Las llamadas a los servicios de Google Apps Script son lentas por lo que deberías reducirlas lo más posible.

Por ejemplo, en lugar de escribir en una fila en cada iteración, crea un array y escribe varias filas a las vez. Esto es similar a usar procesamiento por lotes (batch).

Deberás monitorear el tiempo de ejecución para evitar que tu script se vea interrumpido por exceder el tiempo máximo de ejecución antes de realizar la escritura.

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/610849\|https://es.stackoverflow.com/q/610849]]

