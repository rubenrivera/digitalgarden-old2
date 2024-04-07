---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-236050.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-236050/","title":"Fórmula de Excel en Google sheet","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.627-06:00","updated":"2024-04-05T16:43:54.729-06:00"}
---

# Fórmula de Excel en Google sheet

Si bien la mayoría de las aplicaciones de hoja de cálculo ofrece exportar/importar archivos de Excel este supuesta compatibilidad es limitada.

En este caso en particular la función de tablas de Excel no es soportada por la Hoja de Cálculo de Google, pero existen características y funciones de hoja de cálculo propias de esta aplicación que podrían darte un servicio similar.

Podrías hacer uso [QUERY][1] la cual te permite usar [Google Query Language][2] por ejemplo `=QUERY(A2:E6;"select avg(A) pivot B")`

NOTA sobre el uso de nombres de rango.

En QUERY se puede usar el nombre de rango en el primer argumento, pero los "nombres de campos" sólo pueden ser la letra de la columna, o bien de la forma Col1 cuando el primer argumento es una matriz bidimencional, como sería el resultado de IMPORTRANGE, FILTER, `{}`, por mencionar algunas.

  [1]: https://support.google.com/docs/answer/3093343?hl=es
  [2]: https://developers.google.com/chart/interactive/docs/querylanguage

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/236050\|https://es.stackoverflow.com/q/236050]]

