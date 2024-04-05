---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-230603.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-230603/","title":"Cantidad de OR que puedo colocar en una misma consulta","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.506-06:00","updated":"2024-04-05T16:43:54.608-06:00"}
---

# Cantidad de OR que puedo colocar en una misma consulta

QUERY no tiene límites de `OR`.

Quizás el problema se deba a que en la columna estés combinando datos de diferentes tipos, por decir, tienes algunas celdas con fecha pero otras con números. QUERY infiere un tipo de dato para cada columna, los datos que no corresponden al dato inferido son ignorados (los considera como celdas vacías).

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/230603\|https://es.stackoverflow.com/q/230603]]

