---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-194699.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-194699/","title":"Editar una celda Google Sheet API","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.354-06:00","updated":"2024-04-05T16:43:54.325-06:00"}
---

# Editar una celda Google Sheet API

Uno de los problemas, quizás entre otros, que tiene tu request es que las propiedades no están entre comillas y tampoco estás colocando entre comillas las cadenas. Por ejemplo

    stringValue==D2*(1-Ficha!L6)+Ficha!L2*Ficha!L6

debería ser

    "stringValue"="=D2*(1-Ficha!L6)+Ficha!L2*Ficha!L6"


Revisa el ejemplo en https://developers.google.com/sheets/api/samples/data



# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/194699\|https://es.stackoverflow.com/q/194699]]

