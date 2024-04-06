---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-533209.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-533209/","title":"Expresiones condicionales para un if","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.728-06:00","updated":"2024-04-05T16:43:57.725-06:00"}
---

# Expresiones condicionales para un if

En lugar de 
```
if(SpreadsheetApp.getActiveSheet().getRange("V5!D"+ contador).getValue()=="8*")
```
podrías usar

```
const value = SpreadsheetApp.getActiveSheet().getRange("V5!D"+ contador).getValue();
if(value.slice(0,1) === "8" || value.slice(0,1) === "9")
```

- `String.prototype.slice` extrae un parte de una cadena de texto con base en los índices de inicio y fin
- `||` operador O lógico

o bien

```
const value = SpreadsheetApp.getActiveSheet().getRange("V5!D"+ contador).getValue();
if(/^8|9/.test(value))
```

- `/^8|9/`es una expresión regular
- `RegEx.prototype.test` evalua si la cadena de texto coincide con la expresión regular. 
<hr>

Google Apps Script usa JavaScript como lenguaje de programación con algunas limitaciones con respecto lo que se puede hacer en una navegador web y otras plataformas como Node.js.

En primer lugar, evita los "oneliner" (hacer muchas cosas en una sóla línea de código) ya que esto dificulta la lectura del código y en su momento su depuración.

Aprende acerca de los tipos de datos y objetos de JavaScript. En este caso en particular `string` (primitivo) y `String` (objeto) son esenciales. También `RegEx` (expresiones regulares) te sería de mucha utilidad.

Para hacer tu código eficiente evita hacer llamadas a métodos de los servicios de Google Apps Script en bucles debido a que son lentos. Para ello aprende el manejo de Arrays y a realizar operaciones por lotes.


# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/533209\|https://es.stackoverflow.com/q/533209]]

