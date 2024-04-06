---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-5232.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-5232/","title":"Fórmula para rellenar las celdas en blanco en una columna de una hoja de cálculo de Google","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.505-06:00","updated":"2024-04-05T16:43:48.472-06:00"}
---

# Fórmula para rellenar las celdas en blanco en una columna de una hoja de cálculo de Google

# Fórmula sin comentarios para "copiar y pegar"
<pre>
=ArrayFormula(ARRAY_CONSTRAIN(vlookup(ROW(A:A),{IF(LEN(A:A)>0,ROW(A:A),""),A:A},2),10,1))
</pre>

# Explicación
La explicación se incluye como "comentario de código". La fórmula que se puede "copiar y pegar" se encuentra al inicio. Al final se incluye una variante.

## Fórmula simple
<pre>
=ArrayFormula(                           // Fórmula de matriz.
   ARRAY_CONSTRAIN(                      // Limitar el tamaño del resultado final.
     VLOOKUP(                            // Buscar vertical. Devolverá una matriz. En una
                                         // fórmula de matriz funciona como un bucle.
       ROW(A:A),                         // Indica que se debe buscar todas las filas. 
                                         // Al no especificar una fila final el límite
                                         // se establece con ARRAY_CONSTRAIN.
                                         // por su número de fila.
       {IF(LEN(A:A)>0,ROW(A:A),""),A:A}, // Devuelve una matriz de dos columnas. La 
                                         // primera indica el número de fila de las  
                                         // filas con un valor y vacío en la celdas sin 
                                         // valor y la segunda es una "copia" de 
                                         // la columna A.
       2                                 // Indica la columna de la cual obtener el valor.
    ),                                   
    10,                                  // Indica el número de filas que se desea obtener.
                                         // Es el límite del bucle.
                                         // Este sería el único valor editar manualmente. 
    1
  )                                      // Indica el número de columnas que se desea 
                                         // obtener.
)
</pre>


## Variante
En lugar de indicar el número de filas como un valor fijo, en inglés dirían "harcoded", se indica la referencia a la celda A10. En caso de requerir más filas, insertar las que sean necesarias entre la última celda con un valor y la celda A10.

<pre>
=ArrayFormula(ARRAY_CONSTRAIN(vlookup(ROW(A:A),{IF(LEN(A:A)>0,ROW(A:A),""),A:A},2),A10,1))
</pre>


# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/5232\|https://es.stackoverflow.com/q/5232]]

