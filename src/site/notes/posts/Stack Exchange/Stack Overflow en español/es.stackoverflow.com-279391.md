---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-279391.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-279391/","title":"poner un ternario a una funcion en javascript","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.592-06:00","updated":"2024-04-05T16:43:55.603-06:00"}
---

# poner un ternario a una funcion en javascript

Los más probable es que el problema se deba a que no has tenido el debido cuidado con la  [precedencia de operaciones][1]. Coloca entre paréntesis la condición de cada uno de las operadores ternarios

Por ejemplo,

    var arrayDate= _firstExec == null ? null: _firstExec.split('-');

cámbiala a 

    var arrayDate= (_firstExec == null) ? null: _firstExec.split('-');


  [1]: https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/Operator_Precedence

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/279391\|https://es.stackoverflow.com/q/279391]]

