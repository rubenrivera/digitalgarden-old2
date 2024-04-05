---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-77150.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-77150/","title":"Cómo heredar el estilo del sitio a un gadget de Google Apps Script","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.727-06:00","updated":"2024-04-05T16:43:51.132-06:00"}
---

# Cómo heredar el estilo del sitio a un gadget de Google Apps Script

Tengo una aplicación web de Google Apps Script para ser insertada mediante un gadget en sitio de Google (Google Sites). Me gustaría que el gadget se integrara visual y funcionalmente al sitio, es decir, que herede los estilos del sitio. En términos de etiquetas, lo que hace un gadget es poner el contenido dentro de varias capas de etiquetas `iframe`.  Intenté jalar el tema usando JavaScript pero me muestra error de política de origen.

En Google Sites los temas se manejan desde "Administración del Sitio". Se tiene la opción de seleccionar temas y de personalizar muchos de los elementos sin utilizar código. Se me ocurrió buscar una opción de exportar el tema en formato de archivos CSS y JavaScript pero no encuentro esa opción. La documentación oficial no menciona esta posibilidad, sólo el uso del gadget Caja HTML pero lo que se aplique con ese gadget que restringido a su contenido.

Por otro lado, he intentado jalar el contenido HTML de una página de Google Sites para aplicarle formato usando Bootstrap pero al jalar este contenido, no se incluye el código HTML original que se ve desde el modo de edición de la página, sino que muchos elementos vienen insertados en etiquetas ancla (en inglés anchor, `<a></a>`).

Busqué preguntas similares en inglés pero he encontrado información contradicoria, unos dicen que si se puede, y otros que no.

Por ejemplo en [esta respuesta][1] a [Can HTML iframes inherit css and javascript data][2] dice que no se puede pero en [esta otra][3] que responde a [Iframe inherit from parent][4] dice que se puede usando JavaScript. Al usar el código de esta respuesta es que me ha salido el error de política de origen.



Recapitulando, la pregunta es cómo heredar el estilo de un sitio de Google a una aplicación de Google Apps Script insertada mediante un gadget.
<hr>
A continuación un ejemplo. Es una página en dos columnas. La del lado izquierdo incluye el contenido insertado en el editor de Google Sites, la del lado derecho es el mismo contenido insertado en una aplicación web de Google Apps Script insertada como gadget.

[![Ejemplo de sitio de Google][5]][5]

A continuación el código HTML incluido en ambas columnas, una de forma directa y la otra por medio del gadget.

<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-html -->

    <h2>Título 2</h2>
      <h3>Título 3</h3>
      <div><a href="www.rubenrivera.mx">Mi sitio</a></div>
      <div><p>Este es un ejemplo de párrafo.</p></div>
      <ol>
        <li>Introducción</li>
        <li>Desarrollo</li>
        <li>Conclusión</li>
      </ol>
      <ul>
        <li>Manzana</li>
        <li>Naranja</li>
        <li>Sandía</li>
      </ul>
    <code>Este es un texto entre etiquetas code</code>


<!-- end snippet -->

<hr>
NOTAS:  

En Google Apps Script es posible hacer solicitudes GET del lado del servidor usando UrlFetchApp. Esto podría servir para importar el estilo sólo cuando se realicen cambios en lugar de hacerlo cada vez que se cargue la página.

<hr>
Como prueba, manualmente copié la etiqueta HEAD a un archivo HTML en mi proyecto de Google Apps Script y "junté" los HEAD usando `append`

    function doGet(e) {
      var output = HtmlService.createHtmlOutputFromFile('head');
      var body = HtmlService.createHtmlOutputFromFile('Index').getContent();
      output.append(body);
      return output;
    }

Funcionó "más o menos". Lo que no funcionó es debido a que me faltó aplicar al gadget la clase correspondiente al contenido de la página, para lo cual me hace falta entender las clases que usa Google Sites.

[![][6]][6]


  [1]: https://stackoverflow.com/a/12235841/1595451
  [2]: https://stackoverflow.com/q/12235806/1595451
  [3]: https://stackoverflow.com/a/4613196/1595451
  [4]: https://stackoverflow.com/q/4612374/1595451
  [5]: https://i.stack.imgur.com/Fw46j.png
  [6]: https://i.stack.imgur.com/UIsZe.png

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/77150\|https://es.stackoverflow.com/q/77150]]

