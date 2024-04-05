---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-278839.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-278839/","title":"como puedo reconocer o seleccionar un radioButton en un addEventListener","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.592-06:00","updated":"2024-04-05T16:43:55.581-06:00"}
---

# como puedo reconocer o seleccionar un radioButton en un addEventListener

Hay muchas formas de seleccionar un `input` de tipo `radio`, por ejemplo,

Por su id
  
    var radio = document.getElementById('rBnYes');

Por su etiqueta y tipo

    var radio = document.querySelector('input[type="radio"]');

Nota: querySelector devuelve el primer elemento, en este caso con etiqueta `input` y tipo `radio`.

Luego 

    radio.addEventListener('click',function(e){
      //Agrega aquí lo que quieras que se ejecute al hacer click
    });

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/278839\|https://es.stackoverflow.com/q/278839]]

