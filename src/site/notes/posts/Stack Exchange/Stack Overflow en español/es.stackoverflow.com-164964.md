---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-164964.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-164964/","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.626-06:00","updated":"2024-04-05T16:43:53.806-06:00"}
---

---
title: Error: Se ha agotado el tiempo mientras se esperaba la respuesta del usuario
Site: Stack Overflow en español
Stack Exchange Post ID: 164964
Stack Exchange Type: Answer
Stack Exchange Post Created: 16/05/18 17:14
Stack Exchange Post Last Edit: 
Stack Exchange Edited By: 
Score: 0
Favorites: 
Views: 758
Accepted: Accepted
CW: 
Closed: 
---
# Error: Se ha agotado el tiempo mientras se esperaba la respuesta del usuario

El error significa que hay un elemento de interfaz de usuario que está en espera de respuesta pero esto ocurre de forma sincrónica por lo que el tiempo de ejecución sigue transcurriendo.

Si requieres que la espera no tenga tiempo límite, entonces debes cambiar la lógica de tu script, por ejemplo, en lugar de usar un activador simple al editar (onEdit) usa un elemento de interfaz que haga el envío cuando así lo indique el usuario.

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/164964\|https://es.stackoverflow.com/q/164964]]

