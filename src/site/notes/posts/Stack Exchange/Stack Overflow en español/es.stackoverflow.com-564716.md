---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-564716.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-564716/","title":"Demora en carga scritps en google sheet","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.507-06:00","updated":"2024-04-05T16:43:57.999-06:00"}
---

# Demora en carga scritps en google sheet

Por lo que se puede ver en la imágen que muestra la celda con el error, estás llamando la función en una fórmula, los parámetros abarcan muchas celdas y la hoja de cálculo es compleja.

Considerando lo anterior, lo mejor es que cambies el enfoque y en lugar de usar una función personaliza, modifiques tu script para lograr el mismo efecto llamado tu función de otra manera. Entre las opciones están usar un menú personalizado, usar uno o varios activadores instalables, por ejemplo, "on open", "on edit" o "on change". 

Lo anterior debido a que las funciones personalizadas tiene un tiempo límite de ejecución de 30 segundos el cual no se puede extender, las métodos de Apps Script son relativamente lentos y cada vez que se cambie una celda includida en los parámetros de la fórmula esta se recalculará y si tienes dependencias la hoja de cálculo tomará más tiempo.

Algo que podrías explorar es usar el servicio avanzado de Google Sheets, que es bastante más eficiente, pero valora bien si tienes el tiempo para experimentar porque quizás dicho servicio no sea lo sufiente rápido para tu caso particular.


# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/564716\|https://es.stackoverflow.com/q/564716]]

