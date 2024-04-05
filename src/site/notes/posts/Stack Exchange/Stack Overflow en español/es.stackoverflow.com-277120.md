---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-277120.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-277120/","title":"ImportJSON no incluye objetos \"null\"","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.506-06:00","updated":"2024-04-05T16:43:55.483-06:00"}
---

# ImportJSON no incluye objetos "null"

En la parte del código que recorre cada una de las ramas principales deberías poner una condición de si la rama tiene `null` (no me queda claro si te lo pasa como cadena o como objeto) devuelva un Array del tamaño apropiado con el valor por defecto que quieras usar el cual podría ser una cadena vacía `''`, pero no un elemento vacío.

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/277120\|https://es.stackoverflow.com/q/277120]]

