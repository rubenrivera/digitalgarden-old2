---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-85854.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-85854/","title":"Todo en JavaScript es un objeto ¿cierto o falso?","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.505-06:00","updated":"2024-04-05T16:43:51.781-06:00"}
---

# Todo en JavaScript es un objeto ¿cierto o falso?

# Respuesta corta
En lo que a tipos de datos se refiere, en JavaScript hay dos clases básicas, primitivos y objetos, así que *no todo es un objeto en JavaScript*, pero cuidado, este podría convertir los primitivos en un objeto de forma temporal.

## Demostración

# Explicación

## Con código

`instanseof` es un operador para probar si el primer operando, un objeto, es una instancia del segundo, un constructor. Sigue toda la cadena de prototipos, si lo encuentra devuelve `true`, si no lo encuentra devuelve `false`.


<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-js -->

    console.log(1 instanceof Object); //Devuelve false
    console.log(Object(1) instanceof Object); //Devuelve true

<!-- end snippet -->


## Con base en la documentación

La siguiente es una declaración proveniente del glosario de Mozilla Developer Network, la cual de forma muy sintética aclara que **no todo en JavaScript es un objeto**, énfasis mío.


De [Primitivo][1]

> Un primitivo (valor primitivo, tipo de datos primitivo) es un dato que **no es un objeto** y no tiene métodos. En JavaScript hay 6 tipos de datos primitivos: string , number , boolean , null , undefined , symbol (nuevo en ECMAScript 2015).

De [Gramática y Tipos][2]  

> ### Literales Booleanos
>
>Los literales de tipo Booleanos tienen 2 valores posibles: true y false.
>
> NO confundir los valores primitivos Booleanos  true y false con los valores true y false del Objeto Booleano. El objeto Booleano es un contenedor alrededor del tipo de dato Primitivo Booleano. Para más información revisa [Booleano][3] .

<br/>  
  
> ### Literales String
>
>Un literal String corresponde a Cero o mas caracteres, encerrados dentro de comillas dobles (") o sencilla (') . Un string debe estar delimitado por comillas del mismo tipo; esto quiere decir que, siempre ambas son dobles o sencillas en cada uno de los casos. Los siguientes son ejemplos de literales String:

> - "foo"
> - 'bar'
> - "1234"
> - "Una linea \n otra linea"
> - "El gato de Jhon"
>
> Puedes utilizar cualquiera de los métodos del objeto  String en un literal de tipo string—JavaScript automáticamente convierte el literal string en un objeto String de manera temporal, llama al método, y finalmente destruye el objeto temporal de tipo String. También puedes usar la propiedad String.length con un literal string:

A continuación lo que me parece son las secciones de la ECMAScript 2016 (Versión 7) que aclaran esto

> [§4.3.2 primitive value][4]
> 
> member of one of the types Undefined, Null, Boolean, Number, Symbol,
> or String as defined in clause 6
> 
> NOTE  
> A primitive value is a datum that is represented directly at the
> lowest level of the language implementation.
> 
> [§4.3.3 object][5]
> 
> member of the type Object
> 
> NOTE  
> An object is a collection of properties and has a single
> prototype object. The prototype may be the null value.

Nótese que un objeto no está al nivel más bajo de la implementación del lenguaje, contrario a lo que ocurre con los primitivos.

La explicación completa sobre los tipos de datos y valores en ECMAScript 2016 (versión 7) está en [§6 ECMAScript Data Types and Values][6]

<hr>
Sobre las diferencias entre primitivos y objetos primitivos

- https://es.stackoverflow.com/q/36993/65


  [1]: https://developer.mozilla.org/es/docs/Glossary/Primitivo
  [2]: https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Grammar_and_Types
  [3]: https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Booleano
  [4]: http://ecma-international.org/ecma-262/7.0/#sec-primitive-value
  [5]: http://ecma-international.org/ecma-262/7.0/#sec-terms-and-definitions-object
  [6]: http://ecma-international.org/ecma-262/7.0/#sec-ecmascript-data-types-and-values

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/85854\|https://es.stackoverflow.com/q/85854]]

