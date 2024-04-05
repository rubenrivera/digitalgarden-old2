---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-146239.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-146239/","title":"Cadenas compuestas por caracteres numéricos","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.354-06:00","updated":"2024-04-05T16:43:53.163-06:00"}
---

# Cadenas compuestas por caracteres numéricos

> Hola necesito un poco de asesoria al respecto, resulta que tengo esta
> cadena
> 
>     var timestamp = 20160525083000

El valor que estas asignando a timestamp no es una cadena, es un número. Para que sea tratado como una cadena deberías hacer la asignación colocando el valor entre comillas simples o dobles, de la siguiente forma:


    var timestamp = '20160525083000';

Existen varias formas para extraer subcadenas y luego usar estas para "armar" otras cadenas. A continuación te muestro dos de ellas:

1. Usar substr

<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-js -->

    var timestamp = '20160525083000';

    var var1 = timestamp.substr(0,4) + '-' + timestamp.substr(4,2) + '-' + timestamp.substr(6,2);
    console.info(var1);

    var var2 = timestamp.substr(8,2) + ':' + timestamp.substr(10,2);
    console.info(var2);

<!-- end snippet -->

2. Usar expresiones regulares

<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-js -->

    var timestamp = '20160525083000';

    var var1 = timestamp.replace(/(\d{4})(\d{2})(\d{2})(\d{6})/, '$3-$2-$1');
    console.info(var1);

    var var2 = timestamp.replace(/(\d{8})(\d{2})(\d{2})(\d{2})/, '$2:$3');
    console.info(var2);

<!-- end snippet -->

En cuanto al error, este ocurre porque JavaScript no tiene una sintaxis como `oFecha(valor1,valor2)` para variables. Esa sintaxis se podría usar para funciones, pero eso debería tratarse en otra pregunta.

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/146239\|https://es.stackoverflow.com/q/146239]]

