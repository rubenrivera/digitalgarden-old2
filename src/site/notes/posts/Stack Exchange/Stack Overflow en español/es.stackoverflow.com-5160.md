---
dg-publish: true
dg-hide: true
title: Fórmula de matriz (arrayformula) para numeración jerárquica de entrada de usuario tabuladas
Site: Stack Overflow en español
Stack Exchange Post ID: 5160
Stack Exchange Type: Question
Stack Exchange Post Created: 03/03/16 16:39
Stack Exchange Post Last Edit: 04/03/16 1:32
Stack Exchange Edited By: 
Score: 0
Favorites: 
Views: 628
Answers: 1
CW: 
Closed: 
---
# Fórmula de matriz (arrayformula) para numeración jerárquica de entrada de usuario tabuladas

# Resumen
En un segundo intento se optó por usar columnas auxiliares procurando que todas ellas usen fórmulas de matriz para que posteriormente dichas fórmulas sean anidadas. Se logró obtener el resultado esperado pero de proceder a anidar las fórmulas de las columnas auxiliares resultaría en una fórmula demasiado compleja.

Por lo anterior agregué la etiqueta [tag:revisión-de-código]. En específico el trabajo por hacer sería 

1. simplificar las fórmula de las columnas auxiliares.
2. proponer una fórmula que no requiera hacer referencia a columnas auxiliares
3. comparar el desempeño de este enfoque con otros.

[Archivo](https://docs.google.com/spreadsheets/d/1ezmZlDj-8XtbntgNZ7JPQjYMZWZTwJNAiUDl0-v3qOY/edit#gid=0)

Al final se incluyen las fórmulas.

# Escenario

Se requiere capturar una jerarquía de elementos en una hoja de cálculo de Google. Para ello, se están utilizando una columna para cada nivel como se muestra a continuación.

<pre>
+---+-----------+-------------+-----------------+----------------------+
|   |     A     |      B      |        C        |          D           |
+---+-----------+-------------+-----------------+----------------------+
| 1 | Elementos |             |                 |                      |
| 2 | Título 1  |             |                 |                      |
| 3 |           | Subtítulo 1 |                 |                      |
| 4 |           | Subtítulo 2 |                 |                      |
| 5 |           |             | Sub subtítulo 1 |                      |
| 6 |           |             |                 | Sub sub sub título 1 |
| 7 | Título 2  |             |                 |                      |
+---+-----------+-------------+-----------------+----------------------+
</pre>

A lo anterior se desea agregar de forma automática y mediante una fórmula de matriz la numeración jerárquica de los elementos.

El resultado esperado es similar a lo siguiente:
<pre>
+---+----------------+-----------+-------------+-----------------+----------------------+
|   |       A        |     B     |      C      |        D        |          E           |
+---+----------------+-----------+-------------+-----------------+----------------------+
| 1 | No. Jerárquica | Elementos |             |                 |                      |
| 2 | 1              | Título-1  |             |                 |                      |
| 3 | 1.1            |           | Subtítulo-1 |                 |                      |
| 4 | 1.2            |           | Subtítulo-2 |                 |                      |
| 5 | 1.2.1          |           |             | Sub-subtítulo-1 |                      |
| 6 | 1.2.1.1        |           |             |                 | Sub-sub-sub-título-1 |
| 7 | 2              | Título-2  |             |                 |                      |
+---+----------------+-----------+-------------+-----------------+----------------------+
</pre>

# Esfuerzos previos
##Intento 1
Se transformaron los datos de entrada en una tabla simple con la siguiente estructura

- nombre del elemento
- ID
- ID del padre 

para aplicar una fórmula como la siguiente

<pre>
=ArrayFormula(
   IFERROR(
      INDEX($D$2:$D,MATCH($C2,$B$2:$B,0))
        &"."
        &COUNTIF($C$2:$C2,C2),
      "1")
 )
</pre>

Si bien es una fórmula de matriz no cumple con el objetivo porque 

1. devuelve un único valor
2. No calcula correctamente el no. jerárquico de los elementos del primer nivel

<pre>
+---+----------------------+----+----------+----------------+--------------------+
|   |          A           | B  |    C     |       D        |         E          |
+---+----------------------+----+----------+----------------+--------------------+
| 1 | Elemento             | ID | ID Padre | Formula matriz | Resultado esperado |
| 2 | Título-1             | 1  |          | 1              | 1                  |
| 3 | Subtítulo-1          | 2  | 1        | 1.1            | 1.1                |
| 4 | Subtítulo-2          | 3  | 1        | 1.2            | 1.2                |
| 5 | Sub-subtítulo-1      | 4  | 3        | 1.2.1          | 1.2.1              |
| 6 | Sub-sub-sub-título-1 | 5  | 4        | 1.2.1.1        | 1.2.1.1            |
| 7 | Título-2             | 6  |          | 1              | 2                  |
| 8 | Título-2             | 7  |          | 1              | 3                  |
+---+----------------------+----+----------+----------------+--------------------+
</pre>

Al modificar los parámetros de entrada para que fueran devueltos múltiples valores, se encontró que COUNTIF no devuelve múltiples valores y el uso de otras alternativas no devuelven los resultados esperados.

# Intento 2

[![Cálculo de numeración jerárquica][1]][1]

**Observaciones**
- Para evitar tener que actualizar manualmente las referencias, se utilizan referencia abiertas (A:A), y la función MMULT
- Para reducir el tiempo de recálculo requerido, se eliminaron las filas en blanco. 
- Para prevenir que por "accidente" se agreguen automáticamente más filas de las requeridas se incluyó ARRAY_CONSTRAIN para limitar el número de filas.

##Columnas Auxiliares	
###ID
<pre>
=ArrayFormula(ARRAY_CONSTRAIN(ROW(B4:B)-ROW(B3),MAX(IF(LEN(A4:D),ROW(A4:D),0))-1,1))
</pre>
###ID Padre
<pre>
=ArrayFormula(
IFERROR(
hlookup(
MMULT(NOT(ISBLANK(A4:D))*{1,2,3,4},TRANSPOSE(SIGN(COLUMN(A4:D))))-1,
{1,2,3,4;{
vlookup(ROW(A4:A)-ROW(B3),{IF(LEN(A4:A)>0,ROW(A4:A)-ROW(B3),""),ROW(A4:A)-ROW(B3)},2),
vlookup(ROW(A4:A)-ROW(B3),{IF(LEN(B4:B)>0,ROW(A4:A)-ROW(B3),""),ROW(A4:A)-ROW(B3)},2),
vlookup(ROW(A4:A)-ROW(B3),{IF(LEN(C4:C)>0,ROW(A4:A)-ROW(B3),""),ROW(A4:A)-ROW(B3)},2),
vlookup(ROW(A4:A)-ROW(B3),{IF(LEN(D4:D)>0,ROW(A4:A)-ROW(B3),""),ROW(A4:A)-ROW(B3)},2)
}}
,ROW(A4:A)-ROW(B3),1),""))
</pre>
###Numeración por nivel jerárquico 
####Primer Nivel
<pre>
=ArrayFormula(IFERROR(
ARRAY_CONSTRAIN(
vlookup(ROW(A4:A)-1,{IF(LEN(A4:A)>0,ROW(A4:A)-1,""),
ARRAY_CONSTRAIN(
MMULT((F4:F=TRANSPOSE(F4:F))*(COUNT(E4:E)-E4:E&LTTRANSPOSE(COUNT(E4:E)-E4:E)),
SIGN(ROW(E4:E)))+1,COUNTA(E4:E),1)},2),
MAX(IF(ISBLANK(A4:D),0,ROW(A4:D))),1),""))
</pre>
####Segundo a cuarto nivel
Se requieren tres columnas con prácticamente la misma fórmula. Sólo cambia la columnas a las que se hace referencia.
<pre>
=ArrayFormula(IFERROR(
ARRAY_CONSTRAIN(
vlookup(ROW(B4:B)-1,{IF(LEN(B4:B)>0,ROW(B4:B)-1,""),
ARRAY_CONSTRAIN(
MMULT((F4:F=TRANSPOSE(F4:F))*(COUNT(E4:E)-E4:E&LTTRANSPOSE(COUNT(E4:E)-E4:E)),
SIGN(ROW(E4:E)))+1
,COUNTA(E4:E),1),1/SIGN(LEN(A4:A))},2),
MAX(IF(ISBLANK($A$4:D),0,ROW($A$4:$D))),
1),""))
</pre>
###Nivel
<pre>
=ArrayFormula(ARRAY_CONSTRAIN(
MMULT(NOT(ISBLANK(A4:D))*{1,2,3,4},TRANSPOSE(SIGN(COLUMN(A4:D)))),
MAX(IF(LEN(A4:D),ROW(A4:D),0))-1,1))
</pre>
###Resultado
<pre>
=ArrayFormula(G4:G&IF(K4:K>=2,"."&H4:H,"")&IF(K4:K>=3,"."&I4:I,"")&IF(K4:K>=4,"."&J4:J,""))
</pre>	


  [1]: https://i.stack.imgur.com/JwY6Q.png

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/5160\|https://es.stackoverflow.com/q/5160]]

