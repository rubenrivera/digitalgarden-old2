---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-327451.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-327451/","title":"Mover un input range desde otro objeto","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.593-06:00","updated":"2024-04-05T16:43:56.501-06:00"}
---

# Mover un input range desde otro objeto

Asigna un "event listener" a tu "span" que modifique el atributo "value" de tu "input". 

Ejemplo:



<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-js -->

    var span = document.querySelector('span');
    var input = document.querySelector('input');
    span.addEventListener('click',function(){
      if(input.value > 20){
        input.value = input.value  - 10
      } else {
        input.value = 90
      }
    });

<!-- language: lang-css -->

    body{
    height: 100vh;
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    }
    input{
    width: 100%;
    }
    span{
    color: #fff;
    padding: 10px;
    background-color: green;
    text-align: center;
    cursor:  context-menu;
    }

<!-- language: lang-html -->

    <input type="range">

    <span>Click aquí para mover el range</span>

<!-- end snippet -->

Referencias

- https://developer.mozilla.org/es/docs/Web/HTML/Elemento/input
- https://developer.mozilla.org/es/docs/Web/API/Document/querySelector
- https://developer.mozilla.org/es/docs/Web/API/EventTarget/addEventListener

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/327451\|https://es.stackoverflow.com/q/327451]]

