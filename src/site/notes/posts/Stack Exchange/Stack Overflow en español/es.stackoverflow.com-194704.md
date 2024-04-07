---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-194704.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-194704/","title":"Extraer de varios Elementos un Elemento en concreto","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.354-06:00","updated":"2024-04-05T16:43:54.361-06:00"}
---

# Extraer de varios Elementos un Elemento en concreto

Lo que te falta es agregar el número de instancia, además podrías usar un xPath más corto, por ejemplo

`=IMPORTXML("https://play.google.com/store/apps/details?id=es.lfp.gi.main","(//span[contains(@class, 'htlgb')])[3]")`

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/194704\|https://es.stackoverflow.com/q/194704]]

