---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-86561.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-86561/","title":"Valores primitivos booleanos versus Objeto booleano","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.505-06:00","updated":"2024-04-05T16:43:52.023-06:00"}
---

# Valores primitivos booleanos versus Objeto booleano

La premisa básica es, siempre que sea posible usa un tipo de dato primitivo en lugar de un Objeto debido a que es el nivel más básico y por ende más eficiente.

> 1. ¿Utilizado un objeto booleano para compararlo en un `if` me dará `false`? 

Depende con qué y cómo lo compares, sin embardo si siempre lo usas como el único miembro de la expresión te dará `true`. Los detalles abajo.


> ¿O por qué la documentacion de [Gramatica y Tipos (MDN)][1] dice que no se debe confundir con estas dos cosas?

En el texto citado se incluye un enlace a un página que en español no existe pero en inglés sí: [Boolean][2]. En esta página dice

> Any object of which the value is not undefined or null, including a Boolean object whose value is false, evaluates to true when passed to a conditional statement. 

La traducción sería  

> Cualquier objeto cuyo valor no sea `undefined` o `null`, incluyendo un objeto Booleano cuyo valor es `false`, evalúa a `true` cuando es pasado a un enunciado condicional.

A continuación unos ejemplos de esto:

<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-js -->

    // Creamos un Objeto Booleano con valor falso.
    var x = new Boolean(false);

    // Comparación abstracta. Devuelve Verdadero
    if(x == false){
      console.info('Verdadero');
    } else {
      console.info('False');
    }

    // Comparación estricta. Devuelve Falso
    if(x === false){
      console.info('Verdadero');
    } else {
      console.info('Falso');
    }

    // Sin realizar una comparación. Devuelve verdadero.
    if(x){
      console.info('Verdadero');
    } else {
      console.info('Falso');
    }

<!-- end snippet -->


Un primitivo Booleano y un objeto Booleano no deben confundirse debido a que JavaScript convierte el tipo de los argumentos cuando estos no son del tipo requerido, que en un if se trata de un contexto Booleano.

En se la ECMAScript 2016, sobre [ConditionExpression][3] se indica:

> NOTE   
> The grammar for a ConditionalExpression in ECMAScript is
> slightly different from that in C and Java, which each allow the
> second subexpression to be an Expression but restrict the third
> expression to be a ConditionalExpression. The motivation for this
> difference in ECMAScript is to allow an assignment expression to be
> governed by either arm of a conditional and to eliminate the confusing
> and fairly useless case of a comma expression as the centre
> expression.

A continuación un intento de traducir lo anterior:

> NOTA   La gramática para ContidionalExpression en ECMAScript es
> ligeramente diferente de aquella en C y Java, donde cada una permite
> que la segunda subexpresión sera una Expresión but restringe la
> tercera expresión a ser una ConditionalExpression. La motivación de
> esta diferencia en ECMAScript es permitir que una expresión de
> asignación sea gobernada por cualquier brazo de un condicional y para
> eliminar la confusión y prácticamente casa inútil de una expresión
> coma como el centro de la expresión.


Más código para ayudar a enteder esto, donde se crea un Objeto Booleano con valor `false` y se asigna a la variable `x`.

<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-js -->

    // Crear el Objeto Booleano con valor false
    var x = new Boolean(false);
    // Comparación abstracta de x con el primitivo Booleano con valor false.
    console.info(x == false);  // Devuelve verdadero
    // Comparación del valor de la propiedad toString() con el primitivo Booleano con valor false.
    console.info(x.toString() == false); // Devuelve false
    // Comparación del valor de la propiedad valueOf() con el primitivo 
    console.info(x.valueOf() == false); // Devuelve verdadero
    // Operador ternario, en caso verdadero devolverá true, en caso contrario, devolverá false
    console.info(x ? true: false); // Devuelve verdadero

<!-- end snippet -->

En cuanto a lo que el estándar dice sobre esto, en [12.14.3 Runtime Semantics: Evaluation][4], se incluye el algoritmo para evaluar la exprsión, donde uno delos primeros paso es convertir a Booleano, lo cual se describe en [7.1.2 ToBoolean ( argument )][5], donde se indica lo siguiente:

> The abstract operation ToBoolean converts argument to a value of type
> Boolean according to Table 10:
> 
> **Table 10: ToBoolean Conversions**
> 
> <!-- language: lang-none -->
> 
>     Argument Type    Result
>     Undefined        Return false.
>     Null             Return false.
>     Boolean          Return argument.
>     Number           Return false if argument is +0, -0, or NaN; otherwise return true.
>     String           Return false if argument is the empty String (its length is zero); 
>     				   otherwise return true.
>     Symbol           Return true.
>     Object           Return true.

Nótese que se indica que cuando el argumento sea de tipo objeto se devuelve `true`.

  [1]: https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Grammar_and_types
  [2]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean
  [3]: http://ecma-international.org/ecma-262/7.0/#prod-ConditionalExpression
  [4]: http://ecma-international.org/ecma-262/7.0/#sec-conditional-operator-runtime-semantics-evaluation
  [5]: http://ecma-international.org/ecma-262/7.0/#sec-toboolean

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/86561\|https://es.stackoverflow.com/q/86561]]

