---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-281559.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-281559/","title":"Contar colores en google sheet","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.627-06:00","updated":"2024-04-05T16:43:55.687-06:00"}
---

# Contar colores en google sheet

Asumiendo que por "crea una formula" quieres decir que el script es una función personalizada la cual la pones en una celda de la hoja de cálculo como fórmula `=contarcolor ("#FF0000", "A1:B5")`, esta no se actualiza cuando realizas cambios en la hoja de cálculo porque las funciones personalizadas sólo se actualizan al abrir la hoja de cálculo y cuando se modifica uno de los argumentos de la función personalizada. Si te decides agregar un tercer argumento ten en cuenta que las funciones personalizadas no pude tener como argumento funciones volátiles como `AHORA()`, `ALEATORIO()`, etc.

Para usar tu función con `onEdit` en lugar de hacerlo en una formula, deberás indicar la celda en la que quieres que se escriba el valor, por ejemplo:


    function onEdit(e){
      var color = '#FF0000';
      var inputRange = 'A1:B5';
      e // Objeto evento
      .range // Intervalo editado
      .getParent() // Hoja editada
      .getRange('A1') // Intervalo de destino
      .setValue(contarcolor (color, inputRange)) // Agregar resultado de la funcion contar color al intervalo de destino
    }

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/281559\|https://es.stackoverflow.com/q/281559]]

