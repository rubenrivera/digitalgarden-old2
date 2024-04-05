---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-86212.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-86212/","title":"Al comparar dos booleanos iguales devuelve verdadero pero no al comparar dos objetos iguales no ¿Por qué?","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.505-06:00","updated":"2024-04-05T16:43:51.842-06:00"}
---

# Al comparar dos booleanos iguales devuelve verdadero pero no al comparar dos objetos iguales no ¿Por qué?

En el siguiente código se usa la función Boolean para devolver un valor. Si se hace una comparación estricta del resultado de dos funciones que devuelven el mismo valor el resultado es verdadero, pero si se comparan dos objetos creados con usando new Boolean el resultado es falso. 


<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-js -->

    var salidas = [ 
      Boolean(true),
      Boolean(true) === Boolean(true),
      new Boolean(true) === new Boolean(true),
    ]

    console.log(salidas.join('\n'));

<!-- end snippet -->


¿A qué se debe que al comparar dos objetos que han sido creados usando el mismo código el resultado es falso? ¿Cómo explica esto la ECMAScript 2016?

<hr>
Intuyo que la respuesta va por lo siguiente

- `Boolean(true)` devuelve un dato primitivo de tipo booleano con valor `true`
- `new Bolean(true)` devuelve un objeto que hereda las propiedades del objeto `Boolean`.
- Cada vez que se llama `new Bolean(true)` se tienen objetos que tienen la misma estructura heredada del objeto Boolean, no confundir con el primitivo Boolean.
- Por estructura heredada me refiero a ambos objetos tendrán las propiedades al el menos de nombre, sin embargo, hay algo que hace distintos a los dos objetos y que por ende una comparación estricta de estos devuelve `false`. 

¿Qué es lo que hace distintas a dos objetos que heredan propiedades del mismo objeto?

<hr>
Nota:  

Según entiendo, en términos coloquiales podríamos decir que los dos objetos son instancias de la misma clase, sin embargo, no estoy seguro que en términos estrictos esto sea correcto pues JavaScript si bien es un lenguaje orientado a objetos, hasta la versión 6 no se tenía implentado el manejo de clases, si no que que se trata de un lenguaje tipado. En ECMAScript 2015 (versión 6) se ha introducido class, véase [14 ECMAScript Language: Functions and Classes][1] para la versión 2015 y [14 ECMAScript Language: Functions and Classes][2] para la versión 2016.

<hr>

Al parecer aquí los conceptos clave a diferenciar son igualdad e identidad

Por __igualdad__, entiéndase que dos cosas son iguales cuando estos cuentan con los mismos valores y cuando se trata de objetos cuentan con las mismas propiedades y estas con los mismos valores

Por __identidad__, entiéndase que dos cosas son idénticas, es decir que no son dos cosas, sino que se trata de la misma cosa, ambas son una y sólo una cosa.

Dos instancias de un objeto no son idénticas, aunque se hayan creado prácticamente al mismo tiempo, son dos cosas independientes.

Cabe mencionar que "JavaScript puro" no ofrece identificadores únicos para los objetos, pero alguna librerías o frameworks podrían hacerlo.

En las ECMAScript no encontré que se hablara de lo anterior, pero sí en cierta medida en [Equality comparisons and sameness][1]

Nota: En enlace anterior apunta a la versión en inglés pues la de español no incluye referencias a las versiones más recientes de ECMAScript siendo que la de inglés si lo hace.

<hr>
Pregunta relacionada

- https://es.stackoverflow.com/q/57528/65


  [1]: http://ecma-international.org/ecma-262/6.0/#sec-ecmascript-language-functions-and-classes
  [2]: http://ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-functions-and-classes

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/86212\|https://es.stackoverflow.com/q/86212]]

