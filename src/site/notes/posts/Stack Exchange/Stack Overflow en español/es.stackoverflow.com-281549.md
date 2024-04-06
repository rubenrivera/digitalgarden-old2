---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-281549.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-281549/","title":"Limpiar filas con emails inválidos de una hoja de cálculo de Google","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.627-06:00","updated":"2024-04-05T16:43:55.671-06:00"}
---

# Limpiar filas con emails inválidos de una hoja de cálculo de Google

Como regla de dedo siempre que sea posible debe evitarse o minimizarse el uso de métodos de los servicios de Google Apps Script en bucles (loops) porque usualmente estas llamadas son muy lentas. En este caso `deletRow` es particularmente lento y si tienes muchos emails inválidos pues he ahí la explicación.

Una solución es que te olvides del script y uses la función incluida de hoja de cálculo [ISEMAIL](https://support.google.com/docs/answer/3256503?hl=es) en conjunto con las funciones de la interfaz, como ordenar, filtrar y eliminar filas. Con un poco de práctica en un santiamén depuraras tu lista.

Si persistes en la idea de usar scripts, si tu hoja sólo se usa para datos planos, es decir, no incluyes notas, comentarios, texto con formato, algo que ayudaría mucho es que en lugar de eliminar filas de la hoja de cálculo, use getDataRange y getValues para obtener un Array 2D con todos los valores de la hoja, luego borras el contenido de la hoja y pases el Array 2D depurado.

Par lo anterior, me parece que lo optimo sería usar `Array.prototype.filter`, por ejemplo:

    var values = ss.getDataRange().getValues();
    var output = values.filter(function(row){
       return validar_mail(row[4]);
    });

Otra de las cosas que podría incidir en que tu script tarde tanto es que esta iterando sobre **todas las filas** que tiene la hoja ya que estas usando una referencia abierta `E:E`. Si tu hoja tiene muchas más de las necesarias tu script está "perdiendo el tiempo". Eliminar las filas en blanco podría ayudar, si esto es significativo o no dependerá de tu hoja.



# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/281549\|https://es.stackoverflow.com/q/281549]]

