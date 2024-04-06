---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-82095.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-82095/","title":"¿Cómo puedo cambiar el tamaño de mi marcador dentro de google maps?","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.759-06:00","updated":"2024-04-05T16:43:51.456-06:00"}
---

# ¿Cómo puedo cambiar el tamaño de mi marcador dentro de google maps?

La documentación se encuentra en español en [Marcadores][1], más específicamente en la sección, [íconos complejos][2].

En resumen, debes crear un objeto para el marcador en el que además de espcificar el tamaño deberás indicar la dirección del ícono, origen y ancla (anchor). Más abajo pongo el código referido como ejemplo, del cual la parte de declaración del objeto del marcador es la siguiente (traduje los comentarios para facilitar su comprensión):

    // Orígenes, posición de ancla y coordenadas del marcador se incrementan en la dirección X
    // a la drecha y en la dirección Y hacia abajo..
    var image = {
      url: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
      // Este marcador tiene 20 pixeless de ancho por 32 pixeles de alto.
      size: new google.maps.Size(20, 32),
      // El origen para esta imagen es (0, 0).
      origin: new google.maps.Point(0, 0),
      // El ancla para esa imagen es la base del asta bandera en (0, 32).
      anchor: new google.maps.Point(0, 32)
    };


> Nota: Sólo agregué mi llave para que vea cómo funciona. Los comentarios son los originales en inglés.

<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-js -->

    // The following example creates complex markers to indicate beaches near
    // Sydney, NSW, Australia. Note that the anchor is set to (0,32) to correspond
    // to the base of the flagpole.

    function initMap() {
      var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: {
          lat: -33.9,
          lng: 151.2
        }
      });

      setMarkers(map);
    }

    // Data for the markers consisting of a name, a LatLng and a zIndex for the
    // order in which these markers should display on top of each other.
    var beaches = [
      ['Bondi Beach', -33.890542, 151.274856, 4],
      ['Coogee Beach', -33.923036, 151.259052, 5],
      ['Cronulla Beach', -34.028249, 151.157507, 3],
      ['Manly Beach', -33.80010128657071, 151.28747820854187, 2],
      ['Maroubra Beach', -33.950198, 151.259302, 1]
    ];

    function setMarkers(map) {
      // Adds markers to the map.

      // Marker sizes are expressed as a Size of X,Y where the origin of the image
      // (0,0) is located in the top left of the image.

      // Origins, anchor positions and coordinates of the marker increase in the X
      // direction to the right and in the Y direction down.
      var image = {
        url: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
        // This marker is 20 pixels wide by 32 pixels high.
        size: new google.maps.Size(20, 32),
        // The origin for this image is (0, 0).
        origin: new google.maps.Point(0, 0),
        // The anchor for this image is the base of the flagpole at (0, 32).
        anchor: new google.maps.Point(0, 32)
      };
      // Shapes define the clickable region of the icon. The type defines an HTML
      // <area> element 'poly' which traces out a polygon as a series of X,Y points.
      // The final coordinate closes the poly by connecting to the first coordinate.
      var shape = {
        coords: [1, 1, 1, 20, 18, 20, 18, 1],
        type: 'poly'
      };
      for (var i = 0; i < beaches.length; i++) {
        var beach = beaches[i];
        var marker = new google.maps.Marker({
          position: {
            lat: beach[1],
            lng: beach[2]
          },
          map: map,
          icon: image,
          shape: shape,
          title: beach[0],
          zIndex: beach[3]
        });
      }
    }

<!-- language: lang-css -->

    /* Always set the map height explicitly to define the size of the div
     * element that contains the map. */

    #map {
      height: 100%;
    }


    /* Optional: Makes the sample page fill the window. */

    html,
    body {
      height: 100%;
      margin: 0;
      padding: 0;
    }

<!-- language: lang-html -->

    <div id="map"></div>
    <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCNxoGTPoMGagF7hfE8OwOkxYDvSEwgTRw&callback=initMap">
    </script>

<!-- end snippet -->


  [1]: https://developers.google.com/maps/documentation/javascript/markers?hl=es-419
  [2]: https://developers.google.com/maps/documentation/javascript/markers?hl=es-419#complex_icons

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/82095\|https://es.stackoverflow.com/q/82095]]

