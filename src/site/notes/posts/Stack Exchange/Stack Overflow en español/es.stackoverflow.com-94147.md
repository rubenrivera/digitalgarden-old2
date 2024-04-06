---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-94147.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-94147/","title":"¿Que función tiene el \"(e)\" en los códigos Js?","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.759-06:00","updated":"2024-04-05T16:43:52.492-06:00"}
---

# ¿Que función tiene el "(e)" en los códigos Js?

En `function miFuncion(e){...}` lo que se encuentra entre paréntesis son los parámetros, también llamados argumentos, de la función de nombre `miFuncion`. Es común encontrar que se usa `e` como nombre de parámetro que se refiere a un evento, por ser la inicial de `event`, término en inglés que se traduce como evento.

Algunas funciones como  `window.addEventListener`, lo que hacen es crear otras funciones. En el caso de `addEventListener` se crea un "oyente" o monitor que al ocurrir un evento llaman la función especificada pasando a esta un objeto como parámetro. En este caso se trata de un objeto que incluye propiedades que describen lo sucedido. 

Si en el enunciado de declaración de la función no se incluye de forma explítica la `e` o cualquier otro nombre de parámetro, de todas formas se podría hacer referencia al objeto enviado usando la propiedad `arguments`, sin embargo, esto ha sido desaprobado y aunque algunos navegadores aún lo soportan podría dejar de hacerlo en cualquier momento.

Referencias

- https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/function
- https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Function/arguments
- https://developer.mozilla.org/es/docs/Web/API/EventTarget/addEventListener

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/94147\|https://es.stackoverflow.com/q/94147]]

