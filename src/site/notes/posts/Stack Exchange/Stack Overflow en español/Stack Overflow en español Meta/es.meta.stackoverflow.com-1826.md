---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/Stack Overflow en español Meta/es.meta.stackoverflow.com-1826.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/stack-overflow-en-espanol-meta/es-meta-stackoverflow-com-1826/","title":"¿Cómo debuggear los errores que devuelve stacksnippet?","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.593-06:00","updated":"2024-04-05T16:44:00.921-06:00"}
---

# ¿Cómo debuggear los errores que devuelve stacksnippet?

Una de las cosas que puede ayudar es usar las herramientas del desarrollador del navegador. En el caso de usar Google Chrome, presiona <kbd>F12</kbd> y mira la pestaña Consola. (Gracias a ArtEze quien en un [comentario del chat][1] lo sugirió).


[![][2]][2]

En el caso [referido][3], se muestra que hay 9 errores, dos de los cuales se deben a error de sintaxis.

>Uncaught TypeError: google.maps.places.Searchbox is not a constructor  
>Uncaught TypeError: google.maps.places.searchBox is not a constructor

De acuerdo a la [referencia oficial][3], las sintaxis correcta es google.maps.places.SearchBox

Sin embargo, al tratar de "reproducir" la pantalla mostrada arriba, no he logrado obtener una similar. Aparentemente la pregunta no ha tenido cambios, así que "algo" seguramente metió "ruido".

  [1]: http://chat.stackexchange.com/transcript/message/36884211#36884211
  [2]: https://i.stack.imgur.com/dlNT1.png
  [3]: https://developers.google.com/maps/documentation/javascript/reference#SearchBox

# Metadata
Source:: Stack Overflow Meta en español
URL:: [[https://es.meta.stackoverflow.com/q/1826\|https://es.meta.stackoverflow.com/q/1826]]

