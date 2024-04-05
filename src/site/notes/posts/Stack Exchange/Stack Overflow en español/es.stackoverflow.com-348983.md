---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-348983.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-348983/","title":"Cómo ejecutar una macro al cambiar una celda en googlesheet","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.627-06:00","updated":"2024-04-05T16:43:56.559-06:00"}
---

# Cómo ejecutar una macro al cambiar una celda en googlesheet

En las hojas de cálculo de Google las macros son un tipo especial de código. Cuando se trata de ejecutar algo de forma automática ya no sería una macro, sino una función.

Hay activadores simples e instalables. Los activadores simples usan palabras reservas que en el caso de lo que estás buscando sería `onEdit`. Se usa de la siguiente forma

    function onEdit(e){
      // Aquí incluye el código
    }

Los activadores pasan a la función que llaman un objeto evento, en este caso es recibido por el parámetro `e`. Este objeto evento tiene varias propiedades, como `source`, `range`, `value` entre otras. Ver los detalles en las referencias.

Cabe destacar que los activadores simples tiene varias limitaciones, por ejemplo, el tiempo máximo de ejecución es de 30 segundos. En tu caso esto no debe ser problema.

La función quedaría de la siguiente forma:

    function onEdit(e){
      if(e.range.rowStart >= 33 && 
         e.range.rowEnd <=36 && 
         e.range.columnStart === 22 && 
         e.range.columnEnd == 22
        ){
        e.source.getRange('O33:V36').sort({column: 22, ascending: true});
      }
    }

Referencias

- https://developers.google.com/apps-script/guides/triggers
- https://developers.google.com/apps-script/guides/triggers/events

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/348983\|https://es.stackoverflow.com/q/348983]]

