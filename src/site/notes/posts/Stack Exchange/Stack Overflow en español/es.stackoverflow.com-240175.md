---
dg-publish: true
dg-hide: true
title: No suma sino que concatena los datos
Site: Stack Overflow en español
Stack Exchange Post ID: 240175
Stack Exchange Type: Answer
Stack Exchange Post Created: 22/02/19 14:19
Stack Exchange Post Last Edit: 23/02/19 15:19
Stack Exchange Edited By: 
Score: 1
Favorites: 
Views: 7815
Accepted: 
CW: 
Closed: 
---
# No suma sino que concatena los datos

# Respuesta corta
Alguno de los valores que se han tomado no es número. Por ejemplo, las funciones de Hoja de Cálculo de Google interpretan como `0` las celdas vacías, pero Google Apps Script las interpreta como cadena vacía `""`.

Usa [filter][1] e [isNaN][2] para descartar los valores que no sean número y [reduce][3] para realizar la suma. Los tres métodos son de JavaScript.

NOTA: Si el valor del lado de la hoja de cálculo es tipo texto pero incluye una coma como separador de decimales, antes de hacer la conversión de cadena a número deberá reemplazarse la coma como por punto debido a la sintaxis de JavaScript.

## Ejemplo

El siguiente ejemplo tiene fines ilustrativos, no contempla todos los posibles casos, como el de usar coma como separador de decimales en un valor tipo texto.

    var monto1 = hoja1.getRange(row,13).getValue();  
    var monto2 = hoja1.getRange(row,15).getValue();
    var monto3 = hoja1.getRange(row,19).getValue();
    var monto4 = hoja1.getRange(row,21).getValue();
    
    var values = [monto1, monto2, monto3, monto4];
    var soloNumeros = values.filter(function(a) {
    return !isNaN(a);
    });
    var montototal = soloNumeros.reduce(function(a, b) {
    return parseFloat(b) + a;
    });
        hoja1.getRange(row,5).setValue(montototal);

## Comprobación

<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-js -->

    var monto1 = "a";
    var monto2 = 1;
    var monto3 = 1;
    var monto4 = "1";

    var values = [monto1, monto2, monto3, monto4];
    var soloNumeros = values.filter(function(a) {
    return !isNaN(a);
    });
    var montototal = soloNumeros.reduce(function(a, b) {
    return parseFloat(b) + a;
    });
    console.log(montototal)

<!-- end snippet -->

# Explicación

En Google Apps Script, el método getValue de Class Range del Servicio de Hoja de Cálculo (SpreadsheetApp) devuelve 

- una cadena vacía (`""`) como valor de las celdas vacías 
- un número como valor de las celdas que tienen números
- un objeto fecha como valor de celdas que tienen números con formato de fecha, hora, duración, fecha-hora (internamente la hoja de cálculo de Google maneja estos datos como números seriales)
- una cadena para celdas que tienen valores tipo texto y mensajes de error (!\#N/A,  !\#REF, etc.)
- un booleano para celdas que tienen valores booleanos (`VERDADERO`, `FALSO`)

Por otro lado JavaScript usa símbolo el `+` tanto como `operador suma` como `operador concatenar`. Si el primer operando es número, trata de convertir el segundo operando a número, si no puede, concatena. Si el primero operando es una cadena, lo concatena con el segundo operando.

Algunos usan métodos de JavaScript como [parseInt(*string*,*base*)][4] para convertir cadenas que incluyen números a número entero, por ejemplo, convertir `"10"` a `10`, así como métodos similares según corresponda al tipo de número deseado como resultado. Otros usan la validación de datos de la hoja de cálculo de Google pero esta no impide dejar una celda en blanco por lo que además podrías usar el método [isBlank()][5] de Google Apps Script o bien [isNaN(*valor*)][2] de JavaScript para determinar si el valor evaluado es un número.

Referencias

- [Expresiones y Operadores][6]


  [1]: https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/filter
  [2]: https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/isNaN
  [3]: https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/reduce
  [4]: https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/parseInt
  [5]: https://developers.google.com/apps-script/reference/spreadsheet/range#isblank
  [6]: https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Expressions_and_Operators

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/240175\|https://es.stackoverflow.com/q/240175]]

