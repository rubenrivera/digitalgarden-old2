---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-48748.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-48748/","title":"Obtener un mapa personalizado por partes","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.679-06:00","updated":"2024-04-05T16:43:49.003-06:00"}
---

# Obtener un mapa personalizado por partes

# Respuesta parcial y corta
Usa https://mapstyle.withgoogle.com/ para experimentar con los estilos o bien consulta [la documentación][1]

# Crítica de la pregunta

Me parece que    

1. la publicación es demasiado amplia ya que incluye varias preguntas
2. el código incluido como ejemplo puede minimizarse así como mejorar su facilidad de lectura y documentación en línea
3. el código no se ha separado apropiadamente (separación de intereses / "separation of concerns")

A continuación se muestra un ejemplo de código mínimo completo y verificable que genera un mapa de la ciudad de Barcelona sin modificar los estilos, y a su lado, un mapa con los estilos modificados, usando la herramienta incluida "fragmento HTML/JavaScript/CSS. La documentación en línea se muestra al mínimo.

Nótese que el código HTML y JavaScript estan en páneles diferentes y que funciona en Chrome

<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-js -->

    //URL del mapa estático sin estilos
    function create_url1(lat, lng, zoom)
    {
      var head = "https://maps.googleapis.com/maps/api/staticmap?center=" + lat + "," + lng;
      var zoom = "&zoom=" + zoom;
      var tail = "&size=400x400";
      return head + zoom + tail;
    }
    //URL del mapa estático con estilos
    function create_url2(lat, lng, zoom)
    {
      var head = "https://maps.googleapis.com/maps/api/staticmap?center=" + lat + "," + lng;
      var zoom = "&zoom=" + zoom;
      var tail = 
          "&size=400x400" +
          "&style=element:labels|visibility:off" +
          "&style=feature:road|color:0xffffff" +
          "&style=feature:landscape|color:0x000000" +
          "&style=feature:poi.park|color:0x00ff00" +
          "&style=feature:water|color:0x0000ff";
      return head + zoom + tail;
    }
    //Datos de Barcelona (location)
    var lat = 41.3850639;
    var lng = 2.1734035;
    //Zoom
    var zoom = 17;
    //Llamar a las funciones que generan los urls con y sin estilos
    document.getElementById("map_img1").src = create_url1(lat, lng, zoom);
    document.getElementById("map_img2").src = create_url2(lat, lng, zoom);

<!-- language: lang-html -->

    <img id="map_img1" src="" width="300" height="300"/>
    <img id="map_img2" src="" width="300" height="300"/>

<!-- end snippet -->

  [1]: https://developers.google.com/maps/documentation/javascript/style-reference

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/48748\|https://es.stackoverflow.com/q/48748]]

