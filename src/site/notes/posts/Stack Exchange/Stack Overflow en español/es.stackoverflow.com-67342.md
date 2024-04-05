---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-67342.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-67342/","title":"¿Cuál es el valor primitivo de [] con base en ECMAScript 2016 (versión 7)?","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.679-06:00","updated":"2024-04-05T16:43:50.540-06:00"}
---

# ¿Cuál es el valor primitivo de [] con base en ECMAScript 2016 (versión 7)?

# Respuesta corta

El valor primitivo de `[]` es `''` (cadena de texto vacía).

# Explicación


Finalmente me decidí a googlear y encontré esta [respuesta][1] a [Why does ++\[\[\]\]\[+\[\]\]+\[+\[\]\] return the string “10”?][2]<sup>1</sup>, la cual es similar a mi [respuesta][3] a https://es.stackoverflow.com/q/66292/65 en cuando a que hace referencia a una especificación ECMASCript sólo que aquella no especifica a cual versión se refieren las citas, sin embargo, me ha sido útil para llenar el "hueco" que derivó en esta pregunta.

Mas abajo incluyo un par de extractos los cuales se pueden resumir como

<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-js -->

    document.write([].join() === '') // Resultado true

<!-- end snippet -->


## Extractos de la [ECMAScript 2016 (versión 7)][4]
<hr>
> ### 12.2.5Array Initializer

> >NOTE
> >An ArrayLiteral is an expression describing the initialization of an Array > object, using a list, of zero or more expressions each of which represents an array element, enclosed in square brackets. The elements need not be literals; they are evaluated each time the array initializer is evaluated.

> Array elements may be elided at the beginning, middle or end of the element list. Whenever a comma in the element list is not preceded by an AssignmentExpression (i.e., a comma at the beginning or after another comma), the missing array element contributes to the length of the Array and increases the index of subsequent elements. Elided array elements are not defined. If an element is elided at the end of an array, that element does not contribute to the length of the Array.

<hr>

> ### 7.1.1 ToPrimitive ( input [ , PreferredType ] )#
> 
> The abstract operation ToPrimitive takes an input argument and an
> optional argument PreferredType. The abstract operation ToPrimitive
> converts its input argument to a non-Object type. If an object is
> capable of converting to more than one primitive type, it may use the
> optional hint PreferredType to favour that type. Conversion occurs
> according to Table 9:
> 
> Table 9: ToPrimitive Conversions

<!-- language: lang-none -->

    Input Type	Result
    Undefined	Return input.
    Null		Return input.
    Boolean		Return input.
    Number		Return input.
    String		Return input.
    Symbol		Return input.
    Object		Perform the steps following this table.


>When Type(input) is Object, the following steps are taken:
> 
> 1. If PreferredType was not passed, let hint be "default".  
> 1. Else if PreferredType is hint String, let hint be "string".  
> 1. Else PreferredType is hint Number, let hint be "number".  
> 1. Let exoticToPrim be ? GetMethod(input, @@toPrimitive).  
> 1. If exoticToPrim is not undefined, then  
>   1. Let result be ? Call(exoticToPrim, input, « hint »).  
>   1. If Type(result) is not Object, return result.  
>   1. Throw a TypeError exception.  
> 1. If hint is "default", let hint be "number".  
> 1. Return ? OrdinaryToPrimitive(input, hint).  
> 
> When the abstract operation OrdinaryToPrimitive is called with
> arguments O and hint, the following steps are taken:  
> 
> 1. Assert: Type(O) is Object.  
> 1. Assert: Type(hint) is String and its value is either "string" or "number".  
> 1. If hint is "string", then  
>   1. Let methodNames be « "toString", "valueOf" ».  
> 1. Else,  
>   1. Let methodNames be « "valueOf", "toString" ».  
> 1. For each name in methodNames in List order, do  
>   1. Let method be ? Get(O, name).  
>   1. If IsCallable(method) is true, then  
>     1. Let result be ? Call(method, O).  
>     1. If Type(result) is not Object, return result.  
> 1. Throw a TypeError exception.  
> 
> NOTE
> 
> When ToPrimitive is called with no hint, then it generally behaves as
> if the hint were Number. However, objects may over-ride this behaviour
> by defining a @@toPrimitive method. Of the objects defined in this
> specification only Date objects (see 20.3.4.45) and Symbol objects
> (see 19.4.3.4) over-ride the default ToPrimitive behaviour. Date
> objects treat no hint as if the hint were String.

En el caso de un objeto de tipo Array, el método para determinar el valor primitivo es join() de acuerdo a lo siguiente:

<hr>
 
> ### 22.1.3.28 Array.prototype.toString ( )#
> 
> When the toString method is called, the following steps are taken:
> 
> 1. Let array be ? ToObject(this value).
> 1. Let func be ? Get(array, "join").
> 1. If IsCallable(func) is false, let func be the intrinsic function %ObjProto_toString%.
> 1. Return ? Call(func, array).
> 
> NOTE
> 
> The toString function is intentionally generic; it does not require
> that its this value be an Array object. Therefore it can be
> transferred to other kinds of objects for use as a method.

<hr>


  [1]: https://stackoverflow.com/questions/7202157/why-does-return-the-string-10/7202287#7202287
  [2]: https://stackoverflow.com/q/7202157/1595451
  [3]: https://es.stackoverflow.com/a/67153/65
  [4]: https://www.ecma-international.org/ecma-262/7.0/index.html

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/67342\|https://es.stackoverflow.com/q/67342]]

