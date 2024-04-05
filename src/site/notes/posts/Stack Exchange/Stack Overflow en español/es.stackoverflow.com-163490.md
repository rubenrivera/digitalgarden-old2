---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-163490.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-163490/","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.626-06:00","updated":"2024-04-05T16:43:53.769-06:00"}
---

---
title: Error 13 en macro: no coinciden los tipos
Site: Stack Overflow en español
Stack Exchange Post ID: 163490
Stack Exchange Type: Answer
Stack Exchange Post Created: 11/05/18 3:18
Stack Exchange Post Last Edit: 
Stack Exchange Edited By: 
Score: 3
Favorites: 
Views: 6475
Accepted: 
CW: 
Closed: 
---
# Error 13 en macro: no coinciden los tipos

No está claro lo que quieres hacer pero sí está claro que uno de los problemas de tu procedimiento Sub es que `Worksheets("TNC B").Range("Q14:Q16").Value` devuelve un objeto de tipo Variant que es un array y luego lo comparas con un número ( `valor <= 3 `)

Tal vez deberías usar un bucle para recorrer todos los valores del array.



# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/163490\|https://es.stackoverflow.com/q/163490]]

