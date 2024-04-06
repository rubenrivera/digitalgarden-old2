---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-79174.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-79174/","title":"Cómo obtener el href de una etiqueta ancla actualizada dinámicamente por una aplicación insertable","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.727-06:00","updated":"2024-04-05T16:43:51.244-06:00"}
---

# Cómo obtener el href de una etiqueta ancla actualizada dinámicamente por una aplicación insertable

A raíz de trabajar en un prototipo me surgió la duda que originalmente es para un aplicación de terceros en concreto pero me parece que se puede extender a cualquier aplicación. 

En síntesis en la situación original en mi página web hay un div que es actualizado dinámicamente 
por una libreria de terceros. En este `div` la actualización dinámica incluye un `href` para descargar datos que podrían haber sido filtrados mediante controles de una visualización de datos. La idea es "arreglar" el href para que al hacer doble clic en el archivo csv desgargado se abra en Excel con la codificación correcta.

A continuación narro la situación original de forma un poco más amplia.

La aplicación [Awesome Tables][1] importa datos de una hoja de cálculo de Google y devuelve una **visualización de datos** en algunos casos realizando una transformación especificada por el **adoptador** mediante la función "template" y filtrada mediante una consulta SQL. Se puede insertar en un sitio de Google (Google Sites) mediante un gadget o en cualquier página web insertando un unas pocas líneas de código, como mínimo un etiqueta para indicar la posición y una llamada a la librería de Awesome Table.

La siguiente imagen es tomada de [Setting un an Awesome Table on any website][2]
[![][3]][3].

Véase que son cuatro líneas de código más espacios en blanco. Dos de las líneas son comentarios, una línea es un `DIV` con un par de atributos y la otra un `SCRIPT` con un `src`.

Entre las opciones está el permitir al usuario de la visualización el descargar los datos en formato CSV para lo cual inserta una enlace (URI) que empieza con `data:text/csv;charset=utf-8`. El problema *para ciertos usuarios* es que al hacer doble clic el archivo se abre en Excel *mostrando caracteres extraños*. Una solución es importar el archivo, especificando la codificación, pero esto le parece muy engorroso a un subgrupo de los usuarios referidos. 

Según entiendo la solución implica reemplazar `utf-8` por `utf-8-sig`. [Pregunté][4] en la comunidad de Awesome Table cómo podría hacerlo usando las opciones de la misma aplicación pero mi publicación fue marcada "offtopic".

Entiendo que podría hacerlo con un userscript, pero eso implica algo engorroso para cierto perfil de usuarios y lo que busco es simplificarles las cosas.


  [1]: https://sites.google.com/site/scriptsexamples/available-web-apps/awesome-tables
  [2]: https://support.awesome-table.com/hc/en-us/articles/115001091105-Setting-up-Awesome-Table-on-any-website
  [3]: https://i.stack.imgur.com/ZuFki.png
  [4]: https://plus.google.com/106510732909452072295/posts/NuQgPRxkyNj

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/79174\|https://es.stackoverflow.com/q/79174]]

