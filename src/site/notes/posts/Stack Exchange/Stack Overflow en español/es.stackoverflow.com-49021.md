---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-49021.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-49021/","title":"Alineación vertical central con CSS","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.679-06:00","updated":"2024-04-05T16:43:49.087-06:00"}
---

# Alineación vertical central con CSS

# Respuesta breve
Para el caso planteado, alineación vertical del texto en un etiqueta `div`, la forma es utilizar [display][1] y [vertical-align][2]. 

# Fragmento

Por ejemplo, usar lo siguiente:

    display: table-cell;
    vertical-align: middle;

Al aplicar lo anterior al código incluido en la pregunta, este quedaría de la forma siguiente:

<!-- begin snippet: js hide: false console: false babel: false -->

<!-- language: lang-css -->

    #box
    {
      height: 180px;
      width: 400px;
      background: #000;
      font-size: 48px;
      font-style: oblique;
      color: #FFF;
      text-align: center;
      margin-top: 20px;
      margin-left: 5px;
      display: table-cell;
      vertical-align: middle;
    }

<!-- language: lang-html -->

    <div id="box">
      Lorem ipsum dolor.
    </div>

<!-- end snippet -->

# Información adicional
Respuesta inspirada en la [respuesta][3] a [How to vertically center text with CSS?][4]


  [1]: https://developer.mozilla.org/es/docs/Web/CSS/display
  [2]: https://developer.mozilla.org/es/docs/Web/CSS/vertical-align
  [3]: https://stackoverflow.com/a/8865488/1595451
  [4]: https://stackoverflow.com/q/8865458/1595451

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/49021\|https://es.stackoverflow.com/q/49021]]

