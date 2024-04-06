---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-67153.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-67153/","title":"¿Cómo funciona el condicional if (!+[]+!+[] == 2) en JavaScript?","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.679-06:00","updated":"2024-04-05T16:43:50.468-06:00"}
---

# ¿Cómo funciona el condicional if (!+[]+!+[] == 2) en JavaScript?

> Los enlaces incluídos a continuación indicados con <sup>1</sup> corresponden a secciones de [ECMAScript® 2016 Language Specification][1]. La intención en primera instancia es proporcionar las referencias específicas al estándar referido, utilizando un enfoque de "jalar" (pull) más que el tradicional de "empujar" (push)

A continuación se listan las referencias correspondientes a cada una de las partes principales de   

    !+[]+!+[] == 2

Las cuales son

- `[]` expresión para inicializar un objeto literal de tipo matriz, equivalente a `new Array()`.
- `+[]` matriz con operador unitario +.
- `!+[]` matriz con operador unitario + y operador unitario no lógico.
- `!+[]  +  !+[]` adición de dos `!+[]` .
- `!+[]  +  !+[]   ==   2` comparación abstracta de la adición de dos `!+[]`.

Empecemos

- En [Array Initializer][2] se indica que `[]` inicializa un literal de tipo matriz con ningún elemento. La propiedad longitud (`length`) de la matriz es cero. y el valor primitivo es un cadena vacía. Para más detalles véase la [respuesta][3] a https://es.stackoverflow.com/q/67171/65.
- En [Unary + operator][4]<sup>1</sup> se indica que `+` convierte su operando a tipo número. En el caso de `+ []` , el operando es una cadena vacía (probando `[].join() === ''` en la consola de Chrome devuelve `true`) y al convertir este a número, se convierte en `0`.
  - Véase [respuesta][3] https://es.stackoverflow.com/questions/67171/cu%c3%a1l-es-el-valor-primitivo-de-con-base-en-ecmascript-2016-versi%c3%b3n-7?noredirect=1&lq=1 

- En [logical operator not][5]<sup>1</sup> se indica que `!` convierte su operando a tipo booleano, y que si el valor booleano del operando es falso, devuelve verdadero y si el valor booleano del operando es verdadero, devuelve falso.

- En [ToBoolean][6]<sup>1</sup> se indica que cuando el valor es cero (`-0` ó `+0`), se devuelve falso (`false`).

- En [The Addition Operator ( + )][7]<sup>1</sup> se indica que cuando los operandos son de tipo distinto a cadena de texto,  se convierten a número.

- En [ToNumber][8]<sup>1</sup> se indica que cuando el valor es verdadero, se devuelve uno (`1`) y cuando el valor es falso, se devuelve cero (`0`).

- En [Applying the Additive Operators to Numbers][9]<sup>1</sup> se indica que cuando `+` se aplica a dos operandos numéricos, realiza la adición de estos.

- En [Abstract equality comparison][10]<sup>1</sup> se indica que cuando los dos elementos a la izquierda y derecha son iguales, devuelve verdadero (`true`)y en caso contrario devuelve falso (`false`).

Entonces

- `+[]` es una operación unitaria que devuelve cero (`0`)

- `!0` es una operación unitaria que devuelve verdadero (`true`)

- `true + true` es una operación que, primero convierte cada operando a `1` y luego devuelve su adición la cual es `2`

- `2 == 2` es una comparación de igualdad abstracta que devuelve verdadero (`true`)


A continuación un pequeño experimento para que el lector compruebe si stack-snippet y su navegador operan conforme a la especificación referida.

<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-js -->

    document.write(+[]);
    document.write('<br/>'); //Separador
    document.write(!+[]);
    document.write('<br/>'); //Separador
    document.write(!+[]+!+[]);

<!-- end snippet -->


  [1]: https://www.ecma-international.org/ecma-262/7.0/index.html
  [2]: https://www.ecma-international.org/ecma-262/7.0/index.html#sec-array-initializer
  [3]: https://es.stackoverflow.com/a/67342/65
  [4]: https://www.ecma-international.org/ecma-262/7.0/index.html#sec-unary-plus-operator
  [5]: https://www.ecma-international.org/ecma-262/7.0/index.html#sec-logical-not-operator
  [6]: https://www.ecma-international.org/ecma-262/7.0/index.html#sec-toboolean
  [7]: https://www.ecma-international.org/ecma-262/7.0/index.html#sec-addition-operator-plus
  [8]: https://www.ecma-international.org/ecma-262/7.0/index.html#sec-tonumber
  [9]: https://www.ecma-international.org/ecma-262/7.0/index.html#sec-applying-the-additive-operators-to-numbers
  [10]: https://www.ecma-international.org/ecma-262/7.0/index.html#sec-abstract-equality-comparison

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/67153\|https://es.stackoverflow.com/q/67153]]

