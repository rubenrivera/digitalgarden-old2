---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-61588.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-61588/","title":"Herencia de propiedades y métodos según los tipos de datos","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.505-06:00","updated":"2024-04-05T16:43:49.932-06:00"}
---

# Herencia de propiedades y métodos según los tipos de datos

En JavaScript el elemento fundamental es el objeto. Existen [objetos globales][1], pero no propiedades ni métodos globales en el sentido de que estos no pueden existir sin un objeto. 

El que haya propiedades iguales, como la longitud, para objetos distintos, es una característica de los lenguajes orientados a objetos, la cual se llama [polimorfismo][2]. En el [Índice de propiedades Javascript][3] se listan todas las propiedades estándar de Javascript en orden alfabético.

En Javascript, no existen métodos en el sentido que le dan los lenguajes basados en clases. Las funciones se agregan a los objetos como propiedades y son llamadas métodos. En [Índice de métodos Javascript][4] se listan todos los métodos en en orden alfabético.

Cabe hacer notar que nn los índices referidos arriba se incluye un elemento por cada propiedad y método incluso para las que se llaman igual, por un lado porque cada una se define para el objeto que corresponden y por ende cada una tiene su propia página de documentación.

De [Tipos de datos y estructuras en JavaScript][5]

En JavaScript existen 6 tipos de datos primitivos

- Boleano `boolean`
- Nulo `null`
- Indefinido `undefined`
- Número `number`
- Cadena `string`

y

- objeto `object`

Cada uno de estos tiene un objeto del mismo nombre como envoltorio `wrapper`.

De [Herencia y la cadena de prototipos][6]

> ## Herencia con la cadena de prototipos
>
> ### Heredando propiedades
>
> Los objetos JavaScript son "bolsas" dinámicas de propiedades que
> tienen un enlace a un objeto prototipo. Cuando intentamos acceder a
> una propiedad de un objeto, la propiedad no sólo se buscará en el
> propio objeto sino también en el prototipo del objeto, en el prototipo
> del prototipo, y así sucesivamente hasta que se encuentre una
> propiedad que coincida con el nombre o se alcance el final de la
> cadena de prototipos.

...

> Dar valor a una propiedad de un objeto crea una propiedad. La única
> excepción a las reglas de funcionamiento de obtener y dar valores
> ocurre cuando hay una propiedad heredada con un getter o un setter.
> 
> ### Heredando "métodos"
> 
> JavaScript no tiene "métodos" en la forma que los lenguajes basados en
> clases los define. En JavaScript, cualquier función puede añadirse a
> un objeto como una propiedad. Una función heredada se comporta como
> cualquier otra propiedad, viéndose afectada por el solapamiento de
> propiedades como se muestra anteriormente (siendo, en este caso, una
> especie de redefinición de métodos).


  [1]: https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales
  [2]: https://es.wikipedia.org/wiki/Polimorfismo_(inform%C3%A1tica)
  [3]: https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Properties_Index
  [4]: https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Methods_Index
  [5]: https://developer.mozilla.org/es/docs/Web/JavaScript/Data_structures
  [6]: https://developer.mozilla.org/es/docs/Web/JavaScript/Herencia_y_la_cadena_de_protipos

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/61588\|https://es.stackoverflow.com/q/61588]]

