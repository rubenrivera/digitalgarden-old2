---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-273620.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-273620/","title":"Eliminar elementos repetidos de un array","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.355-06:00","updated":"2024-04-05T16:43:55.434-06:00"}
---

# Eliminar elementos repetidos de un array

Si tu "engine"  soporta  ECMAScript 2015 (6th Edition, ECMA-262), como es el caso de los navegadores modernos, como se sugiere en la [respuesta][1] de Fernando, usa `Set`, en caso contrario, sigue leyendo.

Para devolver un arreglo (Array) que incluya únicamente los valores únicos puedes usar lo siguiente (tomado de la [respuesta][2] a [Get all unique values in a JavaScript array (remove duplicates)](https://stackoverflow.com/q/1960473/1595451) )

<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-js -->

    function onlyUnique(value, index, self) { 
        return self.indexOf(value) === index;
    }

    // ejemplo de uso:
    var a = ['a', 1, 'a', 2, '1'];
    var unique = a.filter( onlyUnique ); // devuelve ['a', 1, 2, '1']
    console.info(unique)

<!-- end snippet -->

<hr>

Por otro lado, si no quieres crear un nuevo objeto de tipo Array, sino modificar el objeto actual puedes usar algo como lo siguiente:

<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-js -->

    var a = ['a', 1, 'a', 2, '1'];
    for(var i = a.length -1; i >=0; i--){
      if(a.indexOf(a[i]) !== i) a.splice(i,1);
    }
    console.info(a)

<!-- end snippet -->

Cabe hacer notar que el recorrido del iterable se realiza en forma invertida. Esto se hace así porque al eliminar un elemento del iterable cambia su tamaño y cambian los índices de los elementos siguientes, si bien es posible manejar esto con un bucle hacia adelante se vuelve más complejo pues hay que ajustar el iterador lo cual es muy proclive a errores.

<hr>

Si fuera el caso que por eliminar los valores se está buscando hacerlo sin modificar el tamaño del objeto Array, es decir, reemplazar el valor por una cadena vacía usa algo como lo siguiente:

<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-js -->

    function reemplazarDuplicados(value, index, self) { 
        return (self.indexOf(value) === index)?value:'';
    }

    // ejemplo de uso:
    var a = ['a', 1, 'a', 2, '1'];
    var b = a.map( reemplazarDuplicados ); // devuelve ['a', 1, 2, '1']
    console.info(b)

<!-- end snippet -->

Por otro lado, si no quieres crear un nuevo objeto de tipo Array, sino modificar el objeto actual *asignando un cadena vacía* puedes usar algo como lo siguiente:

<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-js -->

    var a = ['a', 1, 'a', 2, '1'];
    for(var i = a.length -1; i >=0; i--){
      if(a.indexOf(a[i]) !== i) a[i] = '';
    }
    console.info(a)

<!-- end snippet -->

  [1]: https://es.stackoverflow.com/a/273733/65
  [2]: https://stackoverflow.com/a/14438954/1595451

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/273620\|https://es.stackoverflow.com/q/273620]]

