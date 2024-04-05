---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-86382.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-86382/","title":"¿Cómo diferenciar entre un objeto y un arreglo en JavaScript?","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.505-06:00","updated":"2024-04-05T16:43:51.995-06:00"}
---

# ¿Cómo diferenciar entre un objeto y un arreglo en JavaScript?

# Respuesta corta

Si tu objetivo son navegadores modernos, usa `Array.isArray(variable)` el cual fue introducido en ECMAScript 5. Todos los detalles en [Array.isArray()][1].

# Explicación

De acuerdo a la [ECMAScript 7][2],  un arreglo, también llamado matriz, es un **objeto exótico** que da un tratamiento especial a las llaves de propiedades de indice del arreglo/matriz.

En otras palabras, un arreglo comparte es un objeto con ciertas particularidades lo cual hacía complicado distinguir entre un arreglo y un objeto que no es un arreglo. Afortunadamente `Array.isArray()` fue introducido como una función estándar y es soportado por los navegadores modernos.

Demostración

<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-js -->

    /* Primitivos */
    console.info(Array.isArray(true)); // Booleano true. Devuelve false
    console.info(Array.isArray(1)); // Entero. Devuelve false
    console.info(Array.isArray(3.14)); // Número de punto flotante. Devuelve false
    console.info(Array.isArray('Hola')); // Cadena. Devuelve false
    console.info(Array.isArray(null)); // null. Devuelve false
    console.info(Array.isArray(undefined)); // undefined. Devuelve false
    console.info(Array.isArray(Symbol())); // Symbol. Devuelve false

    /* Objetos */
    console.info(Array.isArray({nombre:"Benito",apellido:"Juárez"})); // Objeto literal. Devuelve false
    console.info(Array.isArray([1,2,3])); // Matriz. Devuelve true

<!-- end snippet -->



Sin embargo, si ocupas una solución mas general, en que se identifique el tipo de dato, considera usar `toString.call()` ya que este devolverá una cadena de la forma [object _class_] donde _class_ es indica el tipo de dato del que se trata.

Nota: No asumir que debido a que se indica object para los primitivos, todo es un objeto en JavaScript ya que esto es incorrecto. Lo que pasa es que JavaScript convierte temporalmente el primitivo a un objeto para poder llamar propiedades del objeto correspondiente, en este caso la función `toString`

<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-js -->

    function describeTipo(o){
       console.info(toString.call(o));
    }

    describeTipo(1); // Devuelve [object Number]
    describeTipo(3.14); // Devuelve [object Number]
    describeTipo('Hola'); // Devuelve [object String]
    describeTipo(null); // Devuelve [object Null]
    describeTipo(undefined); // Devuelve [object Undefined]
    describeTipo(Symbol()); // Devuelve [object Symbol]
    describeTipo({nombre:"Benito",apellido:"Juárez"});// Devuelve [object Object]
    describeTipo([1,2,3]); // Devuelve [object Array]

<!-- end snippet -->

  [1]: https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/isArray
  [2]: http://ecma-international.org/ecma-262/7.0/#sec-array-exotic-objects

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/86382\|https://es.stackoverflow.com/q/86382]]

