---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-188428.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-188428/","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.728-06:00","updated":"2024-04-05T16:43:54.216-06:00"}
---

---
title: Por que mi código funcionó con el siguiente símbolo: (`ejemplo`) pero no con ('ejemplo2')?
Site: Stack Overflow en español
Stack Exchange Post ID: 188428
Stack Exchange Type: Answer
Stack Exchange Post Created: 13/08/18 15:26
Stack Exchange Post Last Edit: 14/08/18 18:26
Stack Exchange Edited By: 
Score: 1
Favorites: 
Views: 74
Accepted: 
CW: 
Closed: 
---
# Por que mi código funcionó con el siguiente símbolo: (`ejemplo`) pero no con ('ejemplo2')?

Lo primero que intentaste  

`const audio = document.querySelector('audio[data-key="${e.keycode}"]');`

no funciona porque has incluido una expresión entre marcadores `${expresión}` dentro de un par de apóstrofes, lo que hace que este sea interpretado de forma literal y no como el objeto o valor al que hace referencia.

en su lugar podrías haber usado

`const audio = document.querySelector('audio[data-key="'+ e.keycode + '"]');`

En el segundo caso, reemplazaste los apóstrofes por el [acento grave][1] que en inglés algunos llaman "backtick". Este caracter es usado para delimitar [plantillas de texto][2].

De la liga anterior

> Las plantillas de cadena de texto se delimitan con el caracter (sic) de comillas o tildes invertidas (\` \`) ([grave accent][3]) , en lugar de las comillas simples o dobles. Las plantillas de cadena de texto pueden contener marcadores, indentificados (sic) por el signo de pesos, y envueltos en llaves (`${expresión}`). Las expresiones contenidas en los marcadores, junto con el texto entre ellas, son enviados como argumentos a una función. La función por defecto simplemente concatena las partes para formar una única cadena de texto. Si hay una expresión antes de la plantilla de cadena de texto (i.e. `tag`),  llamamos a esta plantilla de cadena de texto "plantilla de cadena de texto con etiqueta". En este caso, la expresión de etiqueta  (típicamente una función) es llamada a partir de la cadena resultante de procesar la plantilla de cadena de texto, que luego puede ser manipulada antes de ser devuelta.


  [1]: https://es.wikipedia.org/wiki/Acento_grave
  [2]: https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/template_strings
  [3]: http://en.wikipedia.org/wiki/Grave_accent

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/188428\|https://es.stackoverflow.com/q/188428]]

