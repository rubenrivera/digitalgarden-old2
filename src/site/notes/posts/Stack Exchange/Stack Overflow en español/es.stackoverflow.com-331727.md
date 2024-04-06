---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-331727.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-331727/","title":"obtener el numero mayor de un arreglo","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.627-06:00","updated":"2024-04-05T16:43:56.535-06:00"}
---

# obtener el numero mayor de un arreglo

La sintaxis de `Math.max` es que su argumento deber ser una lista de números pero `number` es un Array. Una forma de convertir una Array en una lista es mediante `apply` pero si el interprete objetivo de JavaScript, que podría ser una navegador, soporta ECMAScript recientes podrías usar el operador `spread`


Usando `apply`

<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-js -->

    var number = [];
    var input_number = "";

    for(i=1; i<=5; i++){
      if(input_number !== 0){
        input_number = parseInt(prompt("Ingrese un número"));
        number.push(input_number);
      }
    }

    console.log(Math.max.apply(null,number));

<!-- end snippet -->

Usando el operador `spread`

<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-js -->

    var number = [];
    var input_number = "";

    for(i=1; i<=5; i++){
      if(input_number !== 0){
        input_number = parseInt(prompt("Ingrese un número"));
        number.push(input_number);
      }
    }

    console.log(Math.max(...number));

<!-- end snippet -->

Otra forma que no requiere el uso de `Math.max` es usar el operador ternario, el cual podría ser recomendable en caso de que no requieras conservar todos los valores ingresados.

<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-js -->

    
    var input_number = "";
    var mayor = 0;

    for(i=1; i<=5; i++){
      if(input_number !== 0){
        input_number = parseInt(prompt("Ingrese un número"));
        mayor = (mayor > input_number) ? mayor: input_number;
        
      }
    }

    console.log(mayor);

<!-- end snippet -->

Referencias

- https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Math/max
- https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/Conditional_Operator

Relacionado

- https://es.stackoverflow.com/q/238972/65

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/331727\|https://es.stackoverflow.com/q/331727]]

