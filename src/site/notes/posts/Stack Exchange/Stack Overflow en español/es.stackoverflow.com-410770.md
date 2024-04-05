---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-410770.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-410770/","title":"Botón para Generar un Número aleatorio en una celda de una Hoja de Calculo de Google","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.355-06:00","updated":"2024-04-05T16:43:56.896-06:00"}
---

# Botón para Generar un Número aleatorio en una celda de una Hoja de Calculo de Google

De la pregunta

> Si hasta ahora voy bien...

No es así. Debes cambiar

    var rango_min = sheet.getRange("B2");
    var rango_max = sheet.getRange("B3");

a


    var rango_min = sheet.getRange("B2").getValue();
    var rango_max = sheet.getRange("B3").getValue();

de lo contrario habrá un error en la siguiente línea

    cell.setValue(Math.floor((Math.random()*(rango_max - rango_min) + rango_min));

porque no puedes hacer operaciones aritméticas teniendo objetos Range como operandos

Consejo para facilitar la depuración de tus scripts: Procura evitar expresiones completas como parámetro de métodos como `setValue`, es mejor asignar la expresión compleja a una variable y luego usar esa variable como susodicho argumento, por ejemplo, podrías poner un `console.log` antes de la línea con el `setValue` para tener en la página de ejecuciones el resultado de tu expresión compleja.

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/410770\|https://es.stackoverflow.com/q/410770]]

