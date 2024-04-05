---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-81291.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-81291/","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.759-06:00","updated":"2024-04-05T16:43:51.413-06:00"}
---

---
title: ERROR(1): User denied Geolocation
Site: Stack Overflow en español
Stack Exchange Post ID: 81291
Stack Exchange Type: Question
Stack Exchange Post Created: 24/06/17 18:41
Stack Exchange Post Last Edit: 24/06/17 19:28
Stack Exchange Edited By: 
Score: 3
Favorites: 
Views: 2192
Answers: 1
CW: 
Closed: 
---
# ERROR(1): User denied Geolocation

Al parecer el problema se debe a que Chrome bloquea las consultas de ubicación del usuario que no son seguras, así que he publicado [una pregunta][1] en Meta SE.

<hr>

En stack snippet estoy probando el código de https://developer.mozilla.org/es/docs/Web/API/Geolocation/getCurrentPosition

Al ejecutarlo, la consola de stack snippet me muestra

> Warning: ERROR(1): User denied Geolocation

En mi configuración del navegador he dato permiso para mostrar mi ubicación a es.stackoverflow.com. ¿Qué más me falta?

[![][2]][2]

<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-js -->

    var options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };

    function success(pos) {
      var crd = pos.coords;

      console.log('Your current position is:');
      console.log('Latitude : ' + crd.latitude);
      console.log('Longitude: ' + crd.longitude);
      console.log('More or less ' + crd.accuracy + ' meters.');
    };

    function error(err) {
      console.warn('ERROR(' + err.code + '): ' + err.message);
    };

    navigator.geolocation.getCurrentPosition(success, error, options);

<!-- end snippet -->


  [1]: https://meta.stackexchange.com/q/297595/289691
  [2]: https://i.stack.imgur.com/uhAst.png

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/81291\|https://es.stackoverflow.com/q/81291]]

