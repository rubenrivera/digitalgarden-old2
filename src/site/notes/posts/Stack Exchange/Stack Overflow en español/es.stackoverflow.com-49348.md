---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-49348.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-49348/","title":"obtener value de span","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.727-06:00","updated":"2024-04-05T16:43:49.132-06:00"}
---

# obtener value de span

Define una matriz, en el ejemplo siguiente es `data`, y luego usa el método `push` para agregar los valores a esta.

Ejemplo:

<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-js -->
    var data = [];
    $('#usuarios').children('ul').each(function () {
       data.push($(this).children('span').text());
    });
    console.log(data);

<!-- language: lang-css -->

    #usuarios ul{
    display:inline-block;
    }
    ul{
    width:100px;
    text-align:center;
    }

<!-- language: lang-html -->

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
    <div id="usuarios">
      <ul><span>ayer</span> </ul>
      <ul><span>amor</span></ul>
      <ul><span>gab</span> </ul>
      <ul><span>rio</span> </ul>
      <ul><span>bestia</span> </ul>
      <ul><span>gorro</span> </ul>
      <ul><span>abrigo</span> </ul>
      <ul><span>jaula</span> </ul>
      <ul><span>zorra</span> </ul>
      <ul><span>tele</span> </ul>
    </div>

<!-- end snippet -->



# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/49348\|https://es.stackoverflow.com/q/49348]]

