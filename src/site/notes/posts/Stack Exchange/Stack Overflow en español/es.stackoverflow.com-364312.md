---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-364312.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-364312/","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.728-06:00","updated":"2024-04-05T16:43:56.697-06:00"}
---

---
title: Error al ingresar datos : TypeError: Cannot read property '4' of undefined
Site: Stack Overflow en español
Stack Exchange Post ID: 364312
Stack Exchange Type: Answer
Stack Exchange Post Created: 10/06/20 23:31
Stack Exchange Post Last Edit: 
Stack Exchange Edited By: 
Score: 1
Favorites: 
Views: 449
Accepted: 
CW: 
Closed: 
---
# Error al ingresar datos : TypeError: Cannot read property '4' of undefined

El error quiere decir que `fechas[semana]` es está devolviendo `undefined`. Justo en la línea previa tienes

    let semana = datos[2][c]

Es probable que `datos[2][c]` está devolviendo un valor mayor al índice del último elemento de `fechas`.

Te sugiero aprender a utilizar el depurador de código del editor de Google Apps Script así como el uso de `console.log` / `console.info`

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/364312\|https://es.stackoverflow.com/q/364312]]

