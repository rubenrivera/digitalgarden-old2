---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-65895.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-65895/","title":"Como unir dos paginas html sin usar iframe","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.626-06:00","updated":"2024-04-05T16:43:50.267-06:00"}
---

# Como unir dos paginas html sin usar iframe

No se debe tomar todo el texto y adjuntarlo porque hay etiquetas que deben usarse una única vez por página, en su lugar, toma el contenido por partes.

Lo primero es usar [Fetch API][1] en la página en la que quieres jalar los recursos externos, en este caso una página HTML.

> El método fetch() toma un argumento obligatorio, la ruta de acceso al recurso que desea recuperar. Devuelve una [Promise][2] que resuelve en [Response][3] a esa petición, sea o no correcta. También puede pasar opcionalmente un objeto de opciones init como segundo argumento (ver [Request][4]).

Aunque lo anterior es posible, no lo considero una "buena práctica universal". En cuanto a las funciones, en ciertos casos lo mejor que ponerlas en un archivo, es decir crear una librería, y cargar este en cada página que se requieran las funciones que contiene.

En cuanto a las etiquetas HTML en ciertos casos lo ideal es poner la estructura en una página y mediante clases y/o JavaScript manejar la lógica de, es decir controlar, cuándo se deben mostrar.

**Bibliografía**  

- https://developer.mozilla.org/es/docs/Web/API/Fetch_API
- https://developer.mozilla.org/es/docs/Web/JavaScript
- https://jquery.com/


  [1]: https://developer.mozilla.org/es/docs/Web/API/Fetch_API
  [2]: https://developer.mozilla.org/es/docs/Web/API/Promise
  [3]: https://developer.mozilla.org/es/docs/Web/API/Response
  [4]: https://developer.mozilla.org/es/docs/Web/API/Request

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/65895\|https://es.stackoverflow.com/q/65895]]

