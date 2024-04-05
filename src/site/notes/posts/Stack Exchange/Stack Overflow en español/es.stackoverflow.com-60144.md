---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-60144.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-60144/","title":"¿Cuáles son los valores no válidos para la propiedades de estilos en IE9?","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.505-06:00","updated":"2024-04-05T16:43:49.854-06:00"}
---

# ¿Cuáles son los valores no válidos para la propiedades de estilos en IE9?

> NOTA: Esta respuesta corresponde a la [revisión 2][1] de la pregunta.

# Respuesta corta
De acuerdo a la [documentación wiki][2], Internet Explorer 9 está dentro de los entornos soportados, por lo que deberías publicar una pregunta más específica siguiendo las indicaciones de [Ejemplo mínimo, completo y verificable][3].

# Información adicional
La [respuesta aceptada][4] en [SO][5] a su vez hace referencia a la [documentación wiki][2] de d3.js en la que supuestamente se sugiere el uso de [aight][6], sin embargo, yo no encontré tal sugerencia. Por el tiempo que ha pasado, podría deberse a una actualización de la documentación.

De la [documentación wiki][2] referida arriba, (énfasis mío, véase la fuente original para ver los enlaces incluídos):

> ### Supported Environments
> 
> D3 supports so-called “modern” browsers, which generally means
> everything except IE8 and older versions. D3 is tested against
> Firefox, Chrome, Safari, Opera, **IE9+**, Android and iOS. Parts of D3 may
> work in older browsers, as the core D3 library has minimal
> requirements: JavaScript and the W3C DOM API. D3 uses the Selectors
> API Level 1, but you can preload Sizzle for compatibility. You'll need
> a modern browser to use SVG and CSS3 Transitions. D3 is not a
> compatibility layer, so if your browser doesn't support standards,
> you're out of luck. Sorry!
> 
> D3 also runs on Node and web workers. To use the DOM in Node, you must
> provide your own DOM implementation; JSDOM is recommended. To avoid
> defining a global document, pass a DOM element to d3.select or a
> NodeList to d3.selectAll, like so:
> 
>     var d3 = require("d3"),
>         jsdom = require("jsdom");
>     
>     var document = jsdom.jsdom(),
>         svg = d3.select(document.body).append("svg");


  [1]: https://es.stackoverflow.com/revisions/59985/2
  [2]: https://github.com/mbostock/d3/wiki
  [3]: https://es.stackoverflow.com/help/mcve
  [4]: https://stackoverflow.com/a/16828638/1595451
  [5]: http://stackoverflow.com
  [6]: https://github.com/shawnbot/aight

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/60144\|https://es.stackoverflow.com/q/60144]]

