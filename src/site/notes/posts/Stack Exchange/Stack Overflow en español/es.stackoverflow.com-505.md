---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-505.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-505/","title":"Cómo puedo probar una función disparadora (activador) en Google Apps Script","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.416-06:00","updated":"2024-04-05T16:43:48.299-06:00"}
---

# Cómo puedo probar una función disparadora (activador) en Google Apps Script

_Google Apps Script_ soporta disparadores ([_Triggers_][1]), también llamados activadores, que pasan eventos ([_Events_][2]) a las funciones disparadoras/activadoreas para  disparar/activar funciones. Lamentablemente el ambiente de desarrollo no permite probar las funciones sin pasar parámetros así que no es posible simular un evento de esa forma. Cuando se intenta, resulta un error como:

    ReferenceError: 'e' is not defined.

Uno puede tratar el evento como un parámetro opcional e insertar un valor predeterminado en la función disparadora usando las técnicas de ["Is there a better way to do optional function parameters in Javascript?"][3]. Pero esto introduce el riesgo de que un programador perezoso (¿Quién dijo yo?) dejara ese código con efectos colaterales no intencionados.

Con toda seguridad hay mejores maneras.


**Referencias**  
Basado en [How can I test a trigger function in GAS?](https://stackoverflow.com/q/16089041/1595451) por [Mogsdad](https://stackoverflow.com/users/1677912/mogsdad) edición de 2014-11-14 19:40:55Z


  [1]: https://developers.google.com/apps-script/understanding_triggers
  [2]: https://developers.google.com/apps-script/understanding_events
  [3]: https://stackoverflow.com/questions/148901/is-there-a-better-way-to-do-optional-function-parameters-in-javascript

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/505\|https://es.stackoverflow.com/q/505]]

