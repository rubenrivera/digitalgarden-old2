---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-352010.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-352010/","title":"Identificar tipo de dato en un rango","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.679-06:00","updated":"2024-04-05T16:43:56.572-06:00"}
---

# Identificar tipo de dato en un rango

Si la lista de datos se agrega a una celda las Hojas de Cálculo de Google consideran el contenido de la celdas como un valor de tipo texto.

Como la lista de datos cuenta con un separador, puedes usar SPLIT para convertir la lista en una matriz, luego para determinar el tipo de dato de cada celda de la matriz puedes usar funciones como

- [ESTEXTO (ISTEXT)][1]
- [ESNUMERO (ISNUMBER)][2]

entre otras similares.

Es importante hacer notar que las hojas de cálculo de Google usan números seriales para manejar las fechas-horas (fecha, hoja, duración)

Si quieres hacerlo todo en una única fórmula, esta será compleja. Quizás deberás primero  intentar hacerlo con fórmulas simples y usando rangos auxiliares hasta que entiendas bien como lograr lo que estás buscando.

  [1]: https://support.google.com/docs/answer/3093297?hl=es
  [2]: https://support.google.com/docs/answer/3093296?hl=es

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/352010\|https://es.stackoverflow.com/q/352010]]

