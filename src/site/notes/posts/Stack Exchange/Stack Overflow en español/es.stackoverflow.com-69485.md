---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-69485.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-69485/","title":"¿Cómo se deben comparar dos objetos en javascript?","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.679-06:00","updated":"2024-04-05T16:43:50.600-06:00"}
---

# ¿Cómo se deben comparar dos objetos en javascript?

# Respuesta directa

Para comparar si dos objetos son "gemelos", primero determina si son "hijos" del mismo "padre" y luego si tienen el mismo "ADN", es decir, que los objetos son instancias del mismo objeto y las propiedades son iguales ( nombre, orden, atributos y valores).

> NOTA: Por simplicidad en la metáfora no se consideran otros elementos como las partes del cuerpo.

Si no te interesa que sean "gemelos" sino que sólo algunos elementos sean iguales, entonces compara dichos elementos.

A continuación un ejemplo breve sobre cómo saber si dos objetos son instancias del mismo objeto y, por brevedad, si tienen las mismas propiedades, entendiendo por esto que las propiedades de ambos tienen el mismo nombre y que su posición es la misma.

<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-js -->

    // Crear constructor personalizado
    function vivienda() {
      var puerta;
    };

    // Crear objeto casa
    var casa = new vivienda();
    casa.puerta = 1;
    
    // Crear objeto residencia
    var residencia = new vivienda();
    residencia.puerta = 2;

    /* Si los objetos son hermanos 
     * entonces verificar que sus propiedades 
     * tengan el mismo nombre y en el mismo orden */
    if (casa instanceof vivienda && residencia instanceof vivienda) {
      console.log('Casa y Residencia son instancias de vivienda por lo tanto son comparables');
      var conclusion = (Object.getOwnPropertyNames(casa).toString() == Object.getOwnPropertyNames(residencia).toString()) ?
      'Tienen las misma estructura': 'No tienen la misma estructura';
      console.log('Conclusión: ' + conclusion);
      
    } else {
      console.log('Casa ó Residencia no son instancias de vivienda y por lo tanto no son comparables');
    }

    // Mostrar los nombres y valores de las propiedades de cada objeto
    console.log('** casa **' + Object.getOwnPropertyNames(casa));
    Object.getOwnPropertyNames(casa).forEach(
      function(val, idx, array) {
        console.log(val + ' -> ' + casa[val]);
      }
    )
    console.log('** vivienda **');
    Object.getOwnPropertyNames(residencia).forEach(
      function(val, idx, array) {
        console.log(val + ' -> ' + residencia[val]);
      }
    )

<!-- end snippet -->

# Explicación
> Nota sobre el contenido de la pregunta: En el primer bloque de código se incluyen comparaciones de diversos tipos de operandos. En el segundo bloque de código se comparan variables que tienen asignados objetos creados con operaciones anidadas. De esto se puede concluir que la confusión se debe al desconocimiento de las algunos de los conceptos esenciales de JavaScript y de la Ingeniería de Software. Considerando esto, a continuación se presenta una explicación abreviada abarcando algunos conceptos clave.


El "debe" de una comparación lo establece el propósito y en el caso de JavaScript aún más.

Comparado con otros lenguajes de programación, JavaScript podría considerarse como muy flexible ya que los algoritmos sobre cómo deben realizarse las operaciones consideran los tipos de los operandos. 

Considerando lo anterior al implementar una comparación en JavaScript debemos tener presente:

1. Las variables son referencias a objetos.
2. Los objetos tienen propiedades.
3. Las propiedades pueden ser objetos o funciones (estas últimas también llamadas métodos).
4. Las propiedades tienen atributos.
4. Salvo los primitivos, los objetos heredan propiedades y funciones de un prototipo.

Considerando lo anterior así como la premisa de ser un lenguaje flexible, JavaScript incluye dos tipos de comparaciones, estricta y abstracta, cada una de las cuáles cuenta con su propio algoritmo, los cuales se describen en la especificaciones ECMAScript. A continuación los enlaces las secciones correspondientes de la versión 5.

- [The Abstract Equality Comparison Algorithm][1]
- [The Strict Equality Comparison Algorithm][2]

En síntesis

-  Una comparación estricta de dos objetos devuelve falso porque así está determinado en la especificación. La lógica de esto es similar a la identidad legal de los "gemelos" en los países "occidentales", aunque tengan los mismos padres cada uno se registra con nombre distinto y cada uno tiene los derechos y obligaciones como individuos independientes acordes a sus condiciones individuales.

- El resultado de una comparación abstracta de dos objetos se presta a "confusión" porque varía según sea el tipo de los objetos.

 


  [1]: http://www.ecma-international.org/ecma-262/5.1/#sec-11.9.3
  [2]: http://www.ecma-international.org/ecma-262/5.1/#sec-11.9.6

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/69485\|https://es.stackoverflow.com/q/69485]]

