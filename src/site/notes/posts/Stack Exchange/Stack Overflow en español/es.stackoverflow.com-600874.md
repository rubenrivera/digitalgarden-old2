---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-600874.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-600874/","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.507-06:00","updated":"2024-04-05T16:43:58.057-06:00"}
---

---
title: TypeError: Cannot read properties of undefined (reading 'tarea')
Site: Stack Overflow en español
Stack Exchange Post ID: 600874
Stack Exchange Type: Answer
Stack Exchange Post Created: 05/08/23 18:15
Stack Exchange Post Last Edit: 05/08/23 18:29
Stack Exchange Edited By: 
Score: 2
Favorites: 
Views: 530
Accepted: 
CW: 
Closed: 
---
# TypeError: Cannot read properties of undefined (reading 'tarea')

Entre otros posibles problemas, al formulario del HTML le falta ejecutar `event.preventDefault()`. Esto es necesario para prevenir que se haga un llamada HTTP POST que en este caso es necesaria ya que en su lugar se está llamando una función del servidor usando `google.script.run`.

La manera más sencilla me parece que sería que cambiaras

```html
<form onsubmit="handleFormSubmit(this)">
```

por

```html
<form onsubmit="event.preventDefault(); handleFormSubmit(this)">
```


---
### Addendum

#### Sobre el Error

El error `TypeError: Cannot read properties of undefined (reading '<<nombre de la propiedad>>')` es un error muy común de JavaScript.

Si no lo sabías Google Apps Script (GAS) usa JavaScript como lenguaje de programación y usa `V8`, un motor de código abierto, para ejecutar JavaScript e interpretar los servicios de GAS como `SpreadsheetApp`.

En JavaScript `undefined` es un objeto que se asigna de forma predeterminada a las variables. El mensaje significa que hay una expresión que ha tratado de llamar la propiedad `tarea` del objeto `undefined`. El código del lado del cliente que aparentemente has puesto en un archivo .html del editor de GAS, entre las etiquetas `script` y el código del lado del servidor, archivos .gs del editor de GAS, tienen expresiones que hacen esto.

#### Sobre ChatGPT

Como estás iniciando en la programación te recomiendo evitar usar ChatGPT gratuito. Hay demasiada contenido que sólo busca sacar provecho del revuelo que causó el lanzamiento de esta herramienta mucho de ese contenido es sensacionalista, confuso y en muchos caso desinforma.

Yo no he usado el ChatGPT de pago. En mi opinión aún es muy pronto para confiar en sus respuestas.



# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/600874\|https://es.stackoverflow.com/q/600874]]

