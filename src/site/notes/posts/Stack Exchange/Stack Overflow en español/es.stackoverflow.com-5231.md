---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-5231.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-5231/","title":"Fórmula para rellenar las celdas en blanco en una columna de una hoja de cálculo de Google","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.505-06:00","updated":"2024-04-05T16:43:48.467-06:00"}
---

# Fórmula para rellenar las celdas en blanco en una columna de una hoja de cálculo de Google

Tengo datos en una columna de una hoja de cálculo de Google con celdas en blanco entre ellos. Deseo que esos espacios en blanco se rellenen automáticamente.

En la siguiente tabla, en la columna A se muestran los datos de entrada y en la columna B el resultado esperado.
<pre>
+----+---+---+
|    | A | B |
+----+---+---+
|  1 | a | a |
|  2 |   | a |
|  3 |   | a |
|  4 | b | b |
|  5 |   | b |
|  6 | c | c |
|  7 |   | c |
|  8 | d | d |
|  9 |   | d |
| 10 |   | d |
+----+---+---+
</pre>

En Excel usaba en la primer celda en blanco, en este caso A2, colocaba una fórmula como la siguiente `=A1`. Luego la copiaba, seleccionaba el rango, y el comando seleccionar las celdas vacías y pegar. La hoja de cálculo de Google no tiene este comando incluído "de fábrica".

Tengo la siguiente fórmula de matriz pero implica ajustar la referencias para cada caso.

<pre>
=ArrayFormula(vlookup(ROW(1:10),{IF(LEN(A1:A10)>0,ROW(1:10),""),A1:A10},2))
</pre>

¿Hay una fórmula de matriz con un mínimo de parámetros que se tengan que ajustar a cada caso?

Atribución  
La fórmula fue publicada previamente por mí como [respuesta](https://webapps.stackexchange.com/a/88400/88163) a  [An arrayformula to find the previous non-empty cell in another column](https://webapps.stackexchange.com/q/88394/88163).

Posteriormente esta fue referida en [An arrayformula to find the previous non-empty cell in another column and find the last row to work with](https://webapps.stackexchange.com/q/90469/88163) por EumirAMC lo cual, junto con mi experiencia personal inspiró esta pregunta.

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/5231\|https://es.stackoverflow.com/q/5231]]

