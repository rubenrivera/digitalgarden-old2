---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-65584.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-65584/","title":"¿Usar el servicio de indicaciones con SearchBox Google Maps API?","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.626-06:00","updated":"2024-04-05T16:43:50.184-06:00"}
---

# ¿Usar el servicio de indicaciones con SearchBox Google Maps API?

# Respuesta corta
A diferencia de `Autocomplete`, `SearchBox` puede devolver uno o varios resultados. Lo que requieres hacer es pasar un único resultado al servicio de direcciones.

# Ejemplo 1

En cuando a un ejemplo del uso de SearchBox, en [Places search box][1] (en español), se incluye un ejemplo "oficial". En este, se incluyen dos "subrutinas", una para el caso que se ha obtenga un único resultado, en el que el valor devuelto es un [escalar][2], y otra para el caso de resultados múltiples, en el que el valor devuelto es una matriz. 

A continuación incluyo la adaptación del código de la referencia anterior. La adaptación consiste en asegurar que siempre se muestre la ubicación de un resultado. Para esto, en la subrutina que maneja el caso en que el resultado del `SearchBox` sea una matriz, se reemplazó `forEach` por `some` incluyendo al final del enunciado `return true`, para que sólo se ejecute para el primer resultado, esto, con la finalidad de realizar una adaptación mínima a su vez para fines de demostración.

> Notas: 

> 1. Se tomó "prestado" el key de Google Maps API de la [pregunta original][3] del OP.
> 2. Se cambió el centro del mapa, por "mero orgullo localista" :)

## Instrucciones para probar
Nota: Se recomienda probar usando la opción ampliada

1. Oprimir el botón "Ejecutar"
2. Probar los siguientes casos:

### Caso "autocompletar"

Escribir `pizza` y seleccionar uno de las sugerencias con el ícono de marcador
### Caso "buscar"

Escribir `pizza` y presionar <kbd>Intro</kbd>.

## Código

<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-js -->

    // This example adds a search box to a map, using the Google Place Autocomplete
    // feature. People can enter geographical searches. The search box will return a
    // pick list containing a mix of places and predicted search terms.

    // This example requires the Places library. Include the libraries=places
    // parameter when you first load the API. For example:
    // <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">

    function initAutocomplete() {
      var map = new google.maps.Map(document.getElementById('map'), {
        // Coordenadas de Monterrey, N.L., México
        center: {lat: 25.685088, lng:-100.327482}, //{lat: -33.8688, lng: 151.2195},
        zoom: 13,
        mapTypeId: 'roadmap'
      });

      // Create the search box and link it to the UI element.
      var input = document.getElementById('pac-input');
      var searchBox = new google.maps.places.SearchBox(input);
      map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

      // Bias the SearchBox results towards current map's viewport.
      map.addListener('bounds_changed', function() {
        searchBox.setBounds(map.getBounds());
      });

      var markers = [];
      // Listen for the event fired when the user selects a prediction and retrieve
      // more details for that place.
      searchBox.addListener('places_changed', function() {
        var places = searchBox.getPlaces();

        if (places.length == 0) {
          return;
        }

        // Clear out the old markers.
        markers.forEach(function(marker) {
          marker.setMap(null);
        });
        markers = [];

        // For each place, get the icon, name and location.
        var bounds = new google.maps.LatLngBounds();
        /*
         * Para fines de minimizar las adecuaciones debido a que es este una demostración de adaptación mínima de código, se reemplaza forEach por some.
         */ 
        // places.forEach(function(place) {
        places.some(function(place) {
          if (!place.geometry) {
            console.log("Returned place contains no geometry");
            return;
          }
          var icon = {
            url: place.icon,
            size: new google.maps.Size(71, 71),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(17, 34),
            scaledSize: new google.maps.Size(25, 25)
          };

          // Create a marker for each place.
          markers.push(new google.maps.Marker({
            map: map,
            icon: icon,
            title: place.name,
            position: place.geometry.location
          }));

          if (place.geometry.viewport) {
            // Only geocodes have viewport.
            bounds.union(place.geometry.viewport);
          } else {
            bounds.extend(place.geometry.location);
          }
          // some interrumpe su ejecución en cuanto devuelve un valor verdadero (true)
          return true;
        });
        map.fitBounds(bounds);
      });
    }

<!-- language: lang-css -->

    /* Always set the map height explicitly to define the size of the div
     * element that contains the map. */
    #map {
      height: 100%;
    }
    /* Optional: Makes the sample page fill the window. */
    html, body {
      height: 100%;
      margin: 0;
      padding: 0;
    }
    .controls {
      margin-top: 10px;
      border: 1px solid transparent;
      border-radius: 2px 0 0 2px;
      box-sizing: border-box;
      -moz-box-sizing: border-box;
      height: 32px;
      outline: none;
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
    }

    #pac-input {
      background-color: #fff;
      font-family: Roboto;
      font-size: 15px;
      font-weight: 300;
      margin-left: 12px;
      padding: 0 11px 0 13px;
      text-overflow: ellipsis;
      width: 300px;
    }

    #pac-input:focus {
      border-color: #4d90fe;
    }

    .pac-container {
      font-family: Roboto;
    }

    #type-selector {
      color: #fff;
      background-color: #4d90fe;
      padding: 5px 11px 0px 11px;
    }

    #type-selector label {
      font-family: Roboto;
      font-size: 13px;
      font-weight: 300;
    }
    #target {
      width: 345px;
    }

<!-- language: lang-html -->

    <input id="pac-input" class="controls" type="text" placeholder="Search Box">
    <div id="map"></div>

    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDcglr0mL358bvGoBXuKhftNS1MBz76Zhg&libraries=places&callback=initAutocomplete"
         async defer></script>

<!-- end snippet -->

<hr>

# Ejemplo 2

He tomado el [ejemplo referido][4] por el OP y realizado el mínimo de modificaciones. La premisa fué evitar insertar nuevas líneas de código para lo cual se pusieron entre `/*` y `*/` las funciones  reemplazar y luego se escribieron las funciones reemplazantes, básicamente cambiar `Autocomplete` por `SearchBox` y `getPlace()` por `getPlaces()[0]`. Nótese que en el segundo caso se incluye el índice cero con la finalidad de utilizar el primer "place".

Las modificaciones fueron como las siguientes:

- en la siguiente línea se "reemplazó" `Autocomplete` por `SearchBox`

        var originAutocomplete = new google.maps.places/*.Autocomplete*/.SearchBox(
          originInput, {placeIdOnly: true});

- en la siguiente línea se "reemplazó" `getPlace()` por `getPlaces[0]`

        var place = autocomplete/*.getPlace()*/.getPlaces()[0];

> Notas: 

> 1. Se tomó "prestado" el key de Google Maps API de la [pregunta original][3] del OP.
> 2. Se cambió el centro del mapa, por "mero orgullo localista" :)

## Instrucciones para probar
Nota: Se recomienda probar usando la opción ampliada

1. Oprimir el botón "Ejecutar"
2. Probar los siguientes casos:

### Caso "autocompletar"

1. En la primer caja, escribir `pizza` y seleccionar una de las sugerencias con el ícono de marcador
2. En la segunda caja, escribir `museo` y seleccionar una de las sugerencias en el ícono de marcador

### Caso "buscar"

1. Escribir `pizza` y presionar <kbd>Intro</kbd> y luego <kbd>Tab</kbd>.
2. Escribir `museo` y presionar <kbd>Intro</kbd>.
 
## Código
<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-js -->

    // This example requires the Places library. Include the libraries=places
    // parameter when you first load the API. For example:
    // <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">

    function initMap() {
      var map = new google.maps.Map(document.getElementById('map'), {
        mapTypeControl: false,
        center: {lat: 25.6810658, lng: -100.3317736},//{lat: 33.8688, lng: -151.2195},
        zoom: 13
      });

      new AutocompleteDirectionsHandler(map);
    }

     /**
      * @constructor
     */
    function AutocompleteDirectionsHandler(map) {
      this.map = map;
      this.originPlaceId = null;
      this.destinationPlaceId = null;
      this.travelMode = 'WALKING';
      var originInput = document.getElementById('origin-input');
      var destinationInput = document.getElementById('destination-input');
      var modeSelector = document.getElementById('mode-selector');
      this.directionsService = new google.maps.DirectionsService;
      this.directionsDisplay = new google.maps.DirectionsRenderer;
      this.directionsDisplay.setMap(map);

      var originAutocomplete = new google.maps.places/*.Autocomplete*/.SearchBox(
          originInput, {placeIdOnly: true});
      var destinationAutocomplete = new google.maps.places/*.Autocomplete*/.SearchBox(
          destinationInput, {placeIdOnly: true});

      this.setupClickListener('changemode-walking', 'WALKING');
      this.setupClickListener('changemode-transit', 'TRANSIT');
      this.setupClickListener('changemode-driving', 'DRIVING');

      this.setupPlaceChangedListener(originAutocomplete, 'ORIG');
      this.setupPlaceChangedListener(destinationAutocomplete, 'DEST');

      this.map.controls[google.maps.ControlPosition.TOP_LEFT].push(originInput);
      this.map.controls[google.maps.ControlPosition.TOP_LEFT].push(destinationInput);
      this.map.controls[google.maps.ControlPosition.TOP_LEFT].push(modeSelector);
    }

    // Sets a listener on a radio button to change the filter type on Places
    // Autocomplete.
    AutocompleteDirectionsHandler.prototype.setupClickListener = function(id, mode) {
      var radioButton = document.getElementById(id);
      var me = this;
      radioButton.addEventListener('click', function() {
        me.travelMode = mode;
        me.route();
      });
    };

    AutocompleteDirectionsHandler.prototype.setupPlaceChangedListener = function(autocomplete, mode) {
      var me = this;
      autocomplete.bindTo('bounds', this.map);
      autocomplete.addListener(/*'place_changed'*/'places_changed', function() {
        var place = autocomplete/*.getPlace()*/.getPlaces()[0];
        if (!place.place_id) {
          window.alert("Please select an option from the dropdown list.");
          return;
        }
        if (mode === 'ORIG') {
          me.originPlaceId = place.place_id;
        } else {
          me.destinationPlaceId = place.place_id;
        }
        me.route();
      });

    };


    AutocompleteDirectionsHandler.prototype.route = function() {
      if (!this.originPlaceId || !this.destinationPlaceId) {
        return;
      }
      var me = this;

      this.directionsService.route({
        origin: {'placeId': this.originPlaceId},
        destination: {'placeId': this.destinationPlaceId},
        travelMode: this.travelMode
      }, function(response, status) {
        if (status === 'OK') {
          me.directionsDisplay.setDirections(response);
        } else {
          window.alert('Directions request failed due to ' + status);
        }
      });
    };

<!-- language: lang-css -->

    /* Always set the map height explicitly to define the size of the div
     * element that contains the map. */
    #map {
      height: 100%;
    }
    /* Optional: Makes the sample page fill the window. */
    html, body {
      height: 100%;
      margin: 0;
      padding: 0;
    }
    .controls {
      margin-top: 10px;
      border: 1px solid transparent;
      border-radius: 2px 0 0 2px;
      box-sizing: border-box;
      -moz-box-sizing: border-box;
      height: 32px;
      outline: none;
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
    }

    #origin-input,
    #destination-input {
      background-color: #fff;
      font-family: Roboto;
      font-size: 15px;
      font-weight: 300;
      margin-left: 12px;
      padding: 0 11px 0 13px;
      text-overflow: ellipsis;
      width: 200px;
    }

    #origin-input:focus,
    #destination-input:focus {
      border-color: #4d90fe;
    }

    #mode-selector {
      color: #fff;
      background-color: #4d90fe;
      margin-left: 12px;
      padding: 5px 11px 0px 11px;
    }

    #mode-selector label {
      font-family: Roboto;
      font-size: 13px;
      font-weight: 300;
    }

<!-- language: lang-html -->

    <input id="origin-input" class="controls" type="text"
        placeholder="Enter an origin location">

    <input id="destination-input" class="controls" type="text"
        placeholder="Enter a destination location">

    <div id="mode-selector" class="controls">
      <input type="radio" name="type" id="changemode-walking" checked="checked">
      <label for="changemode-walking">Walking</label>

      <input type="radio" name="type" id="changemode-transit">
      <label for="changemode-transit">Transit</label>

      <input type="radio" name="type" id="changemode-driving">
      <label for="changemode-driving">Driving</label>
    </div>

    <div id="map"></div>


    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDcglr0mL358bvGoBXuKhftNS1MBz76Zhg&libraries=places&callback=initMap"
        async defer></script>

<!-- end snippet -->


  [1]: https://developers.google.com/maps/documentation/javascript/examples/places-searchbox?hl=es-419
  [2]: https://es.wikipedia.org/wiki/Escalar_(inform%C3%A1tica)
  [3]: https://es.stackoverflow.com/q/64087/65
  [4]: https://developers.google.com/maps/documentation/javascript/examples/places-autocomplete-directions?hl=es-419

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/65584\|https://es.stackoverflow.com/q/65584]]

