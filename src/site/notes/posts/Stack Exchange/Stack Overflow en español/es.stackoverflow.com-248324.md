---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-248324.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-248324/","title":"¿Cómo establecer una fecha de expiración de acceso a un archivo en Google Drive a partir de un plazo establecido en días?","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.728-06:00","updated":"2024-04-05T16:43:55.061-06:00"}
---

# ¿Cómo establecer una fecha de expiración de acceso a un archivo en Google Drive a partir de un plazo establecido en días?

Google Apps Script está basado en JavaScript el cual tiene el tipo de dato Date para las fechas.

Se puede establecer la fecha de hoy usando `new Date()` o bien usando `new Date(año,mes,día)` donde año, mes y día son números enteros, siendo mes un índice base 0, es decir el mes de enero es 0, febrero es 1, marzo 2 y así sucesivamente.

Para determinar una fecha de vigencia a partir de hoy, conociendo el año, el índice de mes y el día sólo hace falta sumar el plazo en días al número de día de hoy.

Para conocer año, indice de mes y día de hoy, podemos usar los siguientes métodos:

- getFullYear() devuelve el año, por ejemplo 2019
- getMonth(), devuelve el índice del mes, por ejemplo 2 para el mes de marzo.
- getDate(), devuelve el número del día del mes, por ejemplo 23.


Por simplicidad a continuación se incluye un ejemplo usando JavaScript

<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-js -->

    (function(){
    var plazo = prompt('Plazo en días, por ejemplo 30'); // Aunque escribamos un número la respuesta se pasa como cadena (String)

    // Inicia parte soportada por Google Apps Script

    var ahora = new Date(); // Fecha y hora 
    var Fecha_Caducidad = new Date(
    ahora.getFullYear(),
    ahora.getMonth(),
    ahora.getDate() + parseInt(plazo) // parseInt convierte una cadena en número entero
    )

    // Termina parte soportada por Google Apps Script

    alert('La fecha de caducidad es ' + Fecha_Caducidad);

    })()

<!-- end snippet -->



# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/248324\|https://es.stackoverflow.com/q/248324]]

