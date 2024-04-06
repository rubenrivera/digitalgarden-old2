---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-81281.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-81281/","title":"Error en Geocolización asp.net app google maps","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.759-06:00","updated":"2024-04-05T16:43:51.379-06:00"}
---

# Error en Geocolización asp.net app google maps

# Resumen
Lo más probable es que el problema se deba a que desde la versión 50 de Google Chrome se bloquean las consultas de ubicación del usuarios desde alojamientos de código no seguros. Véase [Geolocation API Removed from Unsecured Origins in Chrome 50][1].

No puedo reproducir el problema usando stack snippet, aparentemente no es posible porque el navegador bloquea la detección de mi ubicación que de cierta forma coincide con la situación del OP, y que está ejecutando su código desde una ubicación no segura (sin https) lo cual puede observarse en el enlace comportido por el OP en [el chat][2].

# TL;DR
He pasado el código del OP a stack snippet. Quité algunas líneas que no se requiren para hacer funcionar el código en stack snippet y cambié

    <%--  <li><a href="#">Page 3</a></li>--%>

por

    <!--  <li><a href="#">Page 3</a></li>-->
y

    <%= Session["0"].ToString()%>

por

    <!-- <%= Session["0"].ToString()%> -->Cadena

Los errores que muestra la consola son

> Failed to load resource: the server responded with a status of 404 (Not Found)

Estos ocurren por las direcciones relativas. Por lo demás, aparentemente no hay problema con el código, así que lo más probable es que el problema sea con el alojamiento de este.

Considerando lo anterior, quité el menú y las llamadas a Bootstrap, quedando el código de la siguiente forma:

<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-js -->

    function initialize() {
      var fenway = {
        lat: -12.092497600000002,
        lng: -77.0548962
      };
      var map = new google.maps.Map(document.getElementById('map'), {
        center: fenway,
        zoom: 17
      });
      var panorama = new google.maps.StreetViewPanorama(
        document.getElementById('pano'), {
          position: fenway,
          pov: {
            heading: 34,
            pitch: 10
          }
        });
      map.setStreetView(panorama);
    }

    function reloadMap(myLat, myLong) {
      var fenway = {
        lat: myLat,
        lng: myLong
      };
      var map = new google.maps.Map(document.getElementById('map'), {
        center: fenway,
        zoom: 17
      });
      var panorama = new google.maps.StreetViewPanorama(
        document.getElementById('pano'), {
          position: fenway,
          pov: {
            heading: 34,
            pitch: 10
          }
        });
      map.setStreetView(panorama);
    }


    var map = null;

    function showlocation() {
      // One-shot position request.
      navigator.geolocation.getCurrentPosition(callback);
    }

    function callback(position) {

      var lat = position.coords.latitude;
      var lon = position.coords.longitude;

      document.getElementById('latitude').innerHTML = lat;
      document.getElementById('longitude').innerHTML = lon;

      //var latLong = new google.maps.LatLng(lat, lon);

      //var marker = new google.maps.Marker({
      //    position: latLong
      //});

      console.log("la variable del map es:");
      console.log(map);

      //marker.setMap(map);
      //map.setZoom(8);
      //map.setCenter(marker.getPosition());

      reloadMap(lat, lon);
    }

    //  google.maps.event.addDomListener(window, 'load', initMap);
    function initMap() {
      var mapOptions = {
        center: new google.maps.LatLng(0, 0),
        zoom: 1,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };
      map = new google.maps.Map(document.getElementById("map-canvas"),
        mapOptions);

    }

<!-- language: lang-css -->

    html,
    body {
      height: 100%;
      margin: 0;
      padding: 0;
    }

    #map,
    #pano {
      float: left;
      height: 100%;
      width: 45%;
    }

<!-- language: lang-html -->

    <center>
      <input type="button" value="Show my location on Map" onclick="javascript: showlocation()" /> <br/>
    </center>

    Latitude: <span id="latitude"></span> <br/> Longitude: <span id="longitude"></span>
    <br/><br/>
    <div id="map"></div>
    <div id="pano"></div>

    <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDOVmgMrLBpBMmHRlu7hqX7Ti3g-mmhiEE&callback=initialize">
    </script>

<!-- end snippet -->


  [1]: https://developers.google.com/web/updates/2016/04/geolocation-on-secure-contexts-only
  [2]: https://chat.stackexchange.com/transcript/message/38345651#38345651

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/81281\|https://es.stackoverflow.com/q/81281]]

