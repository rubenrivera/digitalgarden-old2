---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-218552.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-218552/","title":"¿Como hacer que este script de google sheet funcione en varios rangos?","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.355-06:00","updated":"2024-04-05T16:43:54.539-06:00"}
---

# ¿Como hacer que este script de google sheet funcione en varios rangos?

<hr>
NOTA: Respuesta correspondiente a la [revisión 3](https://es.stackoverflow.com/revisions/218357/3) de la pregunta. Para el error introducido en la [revisión 5](https://es.stackoverflow.com/revisions/218357/5) de la pregunta 

> Al intentar ejecutar este script me sale este error : No se puede leer la propiedad "range" de undefined. (línea 4, archivo "Dia1")

véase mi [segunda respuesta](https://es.stackoverflow.com/a/219030/65).
<hr>
# Respuesta corta

Para detectar el rango que está siendo editado usa

    function onEdit(e){
      var colInicio = e.range.columnStart; // Número de fila de la primera columna del rango editado
      var filaInicio = e.range.rowStart; // Número de fila de la primera celda del rango editado
      var ref = e.range.getA1Notation(); // Notación tipo A1 o A1:B2
    }

# Repuesta ampliada

Lo primero a tener presente es que se puede editar más de una celda a la vez.

Considero muy inusual llamar `HoraModificacion` al parámetro de la función `onEdit` o de cualquier otro nombre reservado para funciones de activadores simples e incluso a funciones a ser llamadas por activadores instalables. Lo usual es usar `event` o `e`.

Al parámetro de la función onEdit le será asignado un objeto de evento que entre sus propiedades incluye el rango que fue editado. El nombre de esta propiedad es `range`. Puedes consultar el resto de las propiedades en https://developers.google.com/apps-script/guides/triggers/events#edit

Cabe mencionar, que el objeto evento del activador "edit", además de las propiededades mencionadas en las documetnación incluye `columnStart` y `rowStart` que indican la columna y fila respectivamente de la primera celda del rango editado



# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/218552\|https://es.stackoverflow.com/q/218552]]

