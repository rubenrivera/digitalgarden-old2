---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-612182.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-612182/","title":"Como definir una fecha como Variable en apps script","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.593-06:00","updated":"2024-04-05T16:43:58.186-06:00"}
---

# Como definir una fecha como Variable en apps script

Para declarar una variable llamada `fecha` en Google Apps Script / JavaScript, es opicional usar `var`, `let` o `const`, luego el nombre de la variable. Si usas `const` debes asignarle el valor.

Ejemplos:


Declaración de variable en el ámbito global:  

```
fecha;
```

Declaración de variable en el ámbito local:

```
let fecha;
```


Declaración de variable usando `const` y asignando un objeto de fecha:

```
const fecha = new Date(2024,0,24);
```

Nota en JavaScript los meses usan índice base 0, es decir, el índice para enero es 0, para febrero es 1 y así sucesivamente.

---

Si cuentas con una cuenta de Google Workspace Enterprise Plus o una cuenta de Google Workspace for Education Plus podrías usar el complemento "Macro Converter". Si tienes una de estas cuentas, lo primero que debes saber es que en Google Apps Script el lenguage de programación que se utiliza es JavaScript.

No trates de traducir el código VBA a Google Apps Script línea por línea. Primero entiende que hace el código y luego escribo el código de nuevo usando Google Apps Script/JavaScript.

Esto porque hay diferencias importantes, por ejemplo, en JavaScript a las variables no se les asigna un tipo de dato. 



# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/612182\|https://es.stackoverflow.com/q/612182]]

