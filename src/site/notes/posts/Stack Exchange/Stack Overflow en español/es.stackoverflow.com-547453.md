---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-547453.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-547453/","title":"Macro Google Sheet Buscar y Remplazar","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.418-06:00","updated":"2024-04-05T16:43:57.955-06:00"}
---

# Macro Google Sheet Buscar y Remplazar

Cambia
```
const f = /Desarrollador de proyectos|Hankkeen rakennuttaja|Proje Firması|Project Developer|Projectontwikkelaar|Projektentwickler|Projektutvecklare|Promotor|Promotore|Prosjektutvikler|יזם/;
```
(asignación de una [expresión regular][1] a la variable f)

por
```
const f = ['Desarrollador de proyectos','Hankkeen rakennuttaja','Proje Firması','Project Developer','Projectontwikkelaar','Projektentwickler','Projektutvecklare','Promotor','Promotore','Prosjektutvikler','יזם'];
```
(asignación de un objeto tipo Array con elementos de tipo string)
y
```
data[j][i]==f
```
por
```
f.includes(data[j][i])
```

Para entender lo anterior, deberás aprender, por lo menos, acerca de los tipos de datos, las expresiones de comparación y el método [Array.prototype.includes][2] de JavaScript el cual es el lenguaje de programación usado en Google Apps Script, así como también de [Range.getValues()][3]


  [1]: https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions
  [2]: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
  [3]: https://developers.google.com/apps-script/reference/spreadsheet/range#getvalues

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/547453\|https://es.stackoverflow.com/q/547453]]

