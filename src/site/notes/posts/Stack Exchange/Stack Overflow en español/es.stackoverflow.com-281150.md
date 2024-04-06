---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-281150.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-281150/","title":"¿Como deshabilitar un select cuando el valor ya ha sido seleccionado anteriormente?","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.593-06:00","updated":"2024-04-05T16:43:55.630-06:00"}
---

# ¿Como deshabilitar un select cuando el valor ya ha sido seleccionado anteriormente?

Agrega el atributo `hidden` a la poción a ocultar.

Ejemplo:

En este ejemplo, al seleccionar un valor del desplegable, es se oculta de la lista de opciones.. Para ello se usa el evento `change` y una función anónima.

<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-js -->

    document.addEventListener('change',function(e){
      document.querySelector('option[value="' + e.target.value +'"]').hidden = true;
    });

<!-- language: lang-html -->

    <select>
      <option>Seleccione una opción</option>
      <option value="0">Primero</option>
      <option value="1">Segundo</option>
      <option value="2">Tercero</option>
    </select>

<!-- end snippet -->

Nótese que el valor seleccionado se mostrará como el valor del desplegable pero no en la lista de opciones.


# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/281150\|https://es.stackoverflow.com/q/281150]]

