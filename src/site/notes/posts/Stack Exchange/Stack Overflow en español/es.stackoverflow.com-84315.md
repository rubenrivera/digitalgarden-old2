---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-84315.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-84315/","title":"como dejar un botón activo con css?","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.354-06:00","updated":"2024-04-05T16:43:51.675-06:00"}
---

# como dejar un botón activo con css?

# Primera parte

En CSS se define la presentación de los elementos del DOM. La pseudo-clase `:active` se aplica cuando el usuario realiza una acción. Si el usuario no va a realizar la acción, lo que requires es aplicar la misma presentación a los elementos en cuestión.

Hay muchas formas de hacerlo, una de ellas es asignando el estilo de la pseudo-clase activo a una clase. El ejemplo siguiente es muy simple, el botón tiene la clase "activo", la cual tiene fondo verde y letra blanca.

<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-css -->

    .activo {
      color:white;
      background-color:green;
    }


<!-- language: lang-html -->

    <input type="button" value="V" class="activo">

<!-- end snippet -->

# Segunda parte

Para obtener los ids de los botones, puedes usar alguno de los selectores de elementos del DOM como getElementsByTagName, getElementsByClassName, querySelectAll, entre otros y luego usas `.id`

Los que he mencionado te devuelven una colección, así que deberás usar algún iterador para obtener los id de cada uno.

Ejemplo

En este ejemplo se incluyen tres botones, se querySelectorAll para seleccionar todos los input de tipo botón y se usa for..of para escribir en la consola los id's de cada uno.

<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-js -->

    var botones = document.querySelectorAll('input[type=button]');
    for(var boton of botones){
      console.log(boton.id);
    }

<!-- language: lang-html -->

    <input id="uno" type="button" value="Botón 1"/>
    <input id="dos" type="button" value="Botón 2"/>
    <input id="tres" type="button" value="Botón 3"/>

<!-- end snippet -->



# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/84315\|https://es.stackoverflow.com/q/84315]]

