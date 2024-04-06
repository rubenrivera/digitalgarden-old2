---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-5816.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-5816/","title":"Formato condicional con base en los valores de otra hoja en hojas de cálculo de Google","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.505-06:00","updated":"2024-04-05T16:43:48.478-06:00"}
---

# Formato condicional con base en los valores de otra hoja en hojas de cálculo de Google

# En breve
Las reglas de formato condicional en las hojas de cálculo de Google no permiten hacer referencia a otras hojas. Cuando se requiere esto usar INDIRECTO / INDIRECT.

# Explicación
INDIRECTO utiliza una cadena como parámetro de entrada y toma esta para devolver el valor de la referencia. 

INDIRECTO tiene dos modos, uno que usa notación A1 y el otro usa la notación R1C1.

El uso de la notación R1C1 tiene como ventaja que se pueden construir referencias dinámicas utilizando variables numéricas para los índices de renglones y columnas.

Por ejemplo, la siguiente fórmula utiliza FILA() y COLUMNA() para determinar los índices de renglones y columnas lo cuál hace que la misma fórmula personalizada se pueda aplicar a varias celdas especificadas por un único rango.

<pre>
=INDIRECTO("'Hoja 1'!R"&FILA()&"C"&COLUMNA(),FALSO)&lt>B2
</pre>

[![Regla de formato condicional][1]][1]


  [1]: https://i.stack.imgur.com/8VK3B.png

# Referencias

- [Respuesta](https://stackoverflow.com/a/36002062/1595451) publicada por mí a [Compare the values in two Google worksheets in the same document - Stack Overflow](https://stackoverflow.com/q/35993416/1595451)
- [Aplicar reglas de formato condicional - Ayuda de Editores de Google](https://support.google.com/docs/answer/78413?hl=es)

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/5816\|https://es.stackoverflow.com/q/5816]]

