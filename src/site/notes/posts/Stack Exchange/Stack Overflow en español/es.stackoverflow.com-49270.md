---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-49270.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-49270/","title":"Separar una url con Javascript y guardarla en una variable","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.727-06:00","updated":"2024-04-05T16:43:49.128-06:00"}
---

# Separar una url con Javascript y guardarla en una variable

Usa una expresión regular como la siguiente:

    /(^.+\/).+\..{3}$/

- `()` grupo de captura
- `^` inicio de la expresión
- `.` cualquier caracter
- `+` Al menos uno o más cacteres
- `\/` La diagonal es una caracter especial por lo que hay que escaparlo
- `\.` El punto es una caracter especial por lo que hay que escaparlo
- `{3}` Tres caracteres iguales al predecesor
- `$` fin de la expresión

Ejemplo:  

<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-js -->

    var URL = "https://www.midominio.com/sites/document/indice1.txt";
    var re =/(^.+\/).+\..{3}$/
    var resultado = re.exec(URL);
    console.log(resultado[1]);

<!-- end snippet -->



# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/49270\|https://es.stackoverflow.com/q/49270]]

