---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-391791.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-391791/","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.728-06:00","updated":"2024-04-05T16:43:56.728-06:00"}
---

---
title: TypeError: Cannot read property 'parse' of undefined (línea 67, archivo "Código")
Site: Stack Overflow en español
Stack Exchange Post ID: 391791
Stack Exchange Type: Answer
Stack Exchange Post Created: 23/09/20 20:28
Stack Exchange Post Last Edit: 23/09/20 20:33
Stack Exchange Edited By: 
Score: 0
Favorites: 
Views: 693
Accepted: 
CW: 
Closed: 
---
# TypeError: Cannot read property 'parse' of undefined (línea 67, archivo "Código")

Lo más probable que que en alguna parte the tu proyecto hayas usado `var JSON;` o algo similar con lo que se "sobreescribió" el objeto global `JSON` como `undefined` y por ello tienes los errorers de que no se encontraron (`cannot read property...  of undefined`)`parse` ni `stringify`.

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/391791\|https://es.stackoverflow.com/q/391791]]

