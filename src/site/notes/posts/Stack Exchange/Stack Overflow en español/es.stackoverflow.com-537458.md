---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-537458.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-537458/","title":"¿Cómo obtener la diferencia de días entre dos fechas?","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.355-06:00","updated":"2024-04-05T16:43:57.744-06:00"}
---

# ¿Cómo obtener la diferencia de días entre dos fechas?

En lugar de usar el activador al editar (`onEdit`)considera usar una función personalizada. Ejemplo

Código del lado del servidor (archivo .gs)
```
/**
 * Días transcurridos desde una fecha al día de hoy
 * 
 * @customformula
 */
function elapsedDays(date) {
  const diff = new Date().getTime() - date.getTime();
  return  diff / (1000*60*60*24)
}
```

Para usarlo escribe una fórmula como la siguiente

```
=elapsedDays(A1)
```
NOTA: Por lo general la fórmula anterior devolverá un valor con decimales debido a que `new Date()` devuelve un objeto tipo Date que include también hora con una precisión de milisegundos. Puedes usar el formato de celda para limitar el número de decimales, usar una función de hoja de cálculo como `ROUND`, o bien usar métodos de JavaScript en el código del lado del servidor.

El resultado de la función personalizada se actualizará cada vez que abras la hoja de cálculo y cuando se modifique el parámetro.

Otra opción sería el uso de un activador basado en tiempo (time-driven trigger) configurado para ejecutarse diariamente, pero requiere una función más elaborada para poder identificar cuáles celdas son las que se deberán actualizar, además de consumir cuota del tiempo límite de ejecución de los activadores instalables.

Referencias

- https://developers.google.com/apps-script/guides/sheets/functions
- https://developers.google.com/apps-script/guides/triggers
- https://developers.google.com/apps-script/quotas

Relacionado

- https://es.stackoverflow.com/q/22073/65

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/537458\|https://es.stackoverflow.com/q/537458]]

