---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-408651.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-408651/","title":"como sumar objetos en javascript","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.355-06:00","updated":"2024-04-05T16:43:56.822-06:00"}
---

# como sumar objetos en javascript

Hay varias formas de hacer esto. La más elegante es agregar un método a tu clase que se haga cargo de realizar la suma de las propiedades que sean de tipo numérico.

<hr>

En JavaSCript no todos los objetos se pueden sumar, sólo los que se pueden convertir a números. Las sumas básicas se pueden realizar usando literales numéricos o variables que devuelvan un número ya sea de forma directa o porque los objetos referidos se han convertido a número.  

Cabe destacar que un "problema" con JavaScript es que el operador `+` se usa tanto para sumar como para concatenar. 

Como tu expresión de suma está usando como operandos **expresiones** que devuelven objetos, JavaScript intenta convertirlos a **primitivos** (número,  cadena de texto, entre otros) que pueda manejar. Dado que que la clase no incluye un método para hacer la conversión busca entre los prototipos el método a utilizar. En este caso el prototipo es `Object` y como no puede hacer la conversión a número, lo hace a una cadena de texto.

Relacionado


- https://es.stackoverflow.com/q/85853/65
- https://es.stackoverflow.com/q/294763/65

Recursos

- https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/class

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/408651\|https://es.stackoverflow.com/q/408651]]

