---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-6091.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-6091/","title":"Convertir reporte tabular (matriz) a formato de tabla simple","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.505-06:00","updated":"2024-04-05T16:43:48.507-06:00"}
---

# Convertir reporte tabular (matriz) a formato de tabla simple

Tengo un reporte tabular, también llamado matriz o "crosstab". Por ejemplo, en los encabezados de las columnas se indica el nombre del cliente, en los encabezados de los renglones el nombre del producto y en la intersección el número de productos vendidos a cada cliente.

<pre>
+---+------------+-----------+-----------+-----------+
|   |     A      |     B     |     C     |     D     |
+---+------------+-----------+-----------+-----------+
| 1 |            | Cliente 1 | Cliente 2 | Cliente 3 |
| 2 | Producto 1 | 4         | 2         | 6         |
| 3 | Producto 2 | 7         | 8         | 6         |
| 4 | Producto 3 | 6         | 3         | 5         |
| 5 | Producto 4 | 3         | 3         | 8         |
+---+------------+-----------+-----------+-----------+
</pre>

Requiero pasar los datos a formato de tabla simple, es decir, una columna para los encabezados de las filas, una columna para los encabezados de las columnas y una columna para los valores, como se muestra a continuación: 

<pre>
+----+---------------------+------------------------+---------+
|    |          A          |           B            |    C    |
+----+---------------------+------------------------+---------+
|  1 | Encabezados de fila | Encabezados de columna | Valores |
|  2 | Producto 1          | Cliente 1              | 4       |
|  3 | Producto 2          | Cliente 2              | 8       |
|  4 | Producto 3          | Cliente 3              | 5       |
|  5 | Producto 4          | Cliente 1              | 3       |
|  6 | Producto 1          | Cliente 2              | 2       |
|  7 | Producto 2          | Cliente 3              | 6       |
|  8 | Producto 3          | Cliente 1              | 6       |
|  9 | Producto 4          | Cliente 2              | 3       |
| 10 | Producto 1          | Cliente 3              | 6       |
| 11 | Producto 2          | Cliente 1              | 7       |
| 12 | Producto 3          | Cliente 2              | 3       |
| 13 | Producto 4          | Cliente 3              | 8       |
+----+---------------------+------------------------+---------+
</pre>
¿Cómo puedo lograr esto usando las funciones de hoja de cálculo de Google?

# Aclaraciones
Pregunta inspirada en 
[How do you create a “reverse pivot” in Google Sheets? - Stack Overflow](https://stackoverflow.com/q/24954722/1595451) y en experiencia personal.

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/6091\|https://es.stackoverflow.com/q/6091]]

