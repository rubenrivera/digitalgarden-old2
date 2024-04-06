---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-143312.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-143312/","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.727-06:00","updated":"2024-04-05T16:43:53.126-06:00"}
---

---
title: Uncaught TypeError: Cannot read property 'calendar' of undefined
Site: Stack Overflow en español
Stack Exchange Post ID: 143312
Stack Exchange Type: Answer
Stack Exchange Post Created: 04/03/18 22:54
Stack Exchange Post Last Edit: 
Stack Exchange Edited By: 
Score: 0
Favorites: 
Views: 500
Accepted: 
CW: 
Closed: 
---
# Uncaught TypeError: Cannot read property 'calendar' of undefined

Seguramente el error ocurre en la línea

    var request = gapi.client.calendar.events.insert({
      'calendarId': 'xxxxxxxxxxxxxxxxxxxxxxxxx@group.calendar.google.com',
      'resource': event
    });

y ello porque seguramente no has cargado la librería de Google API para JavaScript. La guía de cómo empezar con dicha librería se encuentra en inglés en https://developers.google.com/api-client-library/javascript/start/start-js

La guía da tres opciones

1. Cargar el "API discovery document" y luego ensamblar la solicitud.
2. Usar gapi.client.request
3. Usar CORS

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/143312\|https://es.stackoverflow.com/q/143312]]

