---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-145322.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-145322/","title":"No funciona el return de una función que es validado en un if de javascript","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.727-06:00","updated":"2024-04-05T16:43:53.143-06:00"}
---

# No funciona el return de una función que es validado en un if de javascript

# Respuesta corta
El problema se debe al [ámbito de la función][1] 

> Las variables definidas dentro de una función no pueden ser accedidas desde ningún lugar fuera de la función, ya que la variable está definida sólo en el ámbito de la función. Sin embargo, una función puede acceder a todas las variables y funciones definidas dentro del ámbito en el cual está definida. En otras palabras, una función definida en el ámbito global puede acceder a todas las variables definidas en el ámbito global. Una función definida dentro de otra función, también puede acceder a todas las variables definidas en su función padre y a cualquier otra variable a la que la función padre tenga acceso.

# Explicación
El `return` de una función devuelve el objeto o valor primitivo no una variable.

Una alternativa es usar una variable global. Algo como lo que sigue

<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-js -->

    var x = '';
    setX();
    console.info(x);

    function setX(){
      x = 'Hola mundo';
    }

<!-- end snippet -->

Nótese que en la función setX no se usar var para asignar el valor a la variable global `x`.

Otra alternativa es asignar el la función a una variable. Algo como lo que sigue:

<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-js -->

    var y = setX();
    console.info(y);

    function setX(){
      var x = 'Hola mundo';
      return x;
    }

<!-- end snippet -->


  [1]: https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Funciones#%C3%81mbito_de_una_Funci%C3%B3n

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/145322\|https://es.stackoverflow.com/q/145322]]

