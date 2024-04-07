---
dg-publish: true
dg-hide: true
title: Convertir reporte tabular (matriz) a formato de tabla simple
Site: Stack Overflow en español
Stack Exchange Post ID: 6092
Stack Exchange Type: Answer
Stack Exchange Post Created: 21/03/16 5:19
Stack Exchange Post Last Edit: 
Stack Exchange Edited By: 
Score: 1
Favorites: 
Views: 845
Accepted: Accepted
CW: 
Closed: 
---
# Convertir reporte tabular (matriz) a formato de tabla simple

En [este archivo](https://docs.google.com/spreadsheets/d/1JzjaQTKV8sRVda2vrhsKAQIl6qGs56ttftsnfI0w3jg/edit?usp=sharing) se encuentra un ejemplo de como realizar la conversión. A continuación se describen los pasos a seguir.

1. Crear una hoja y llamarla "Aux".
2. En la hoja creada en paso anterior agregar las siguientes fórmulas:
Se asume que los datos de reporte tabular se encuentran en una hoja llamada `data`, que la celda A1 está en blanco y que no incluye datos ajenos al reporte.  
A1: `=COUNTA(data!A:A)` Número de renglones.  
A2: `=COUNTA(data!1:1)` Número de columnas.  
A3: `=CELL("address",data!A1)` Cálculo intermedio.  
A4: `=LEFT(A3,FIND("!",A3)-1)` Nombre de la hoja con los datos fuente.  
3. Crear una nueva hoja  
4. En la nueva hoja agregar lo siguiente  
A1: Encabezados de fila  
A2:  
<pre>
=ArrayFormula(
  VLOOKUP(
    MOD(ROW(INDIRECT("A1:A"&Aux!A1*Aux!A2))-1,Aux!A1)+1+1,
    {(ROW(INDIRECT("A1:A"&Aux!A1+1))),INDIRECT(Aux!A4&"!R1C1:R"&Aux!A1+1&"C"&Aux!A2+1,false)},
    2
  )
)
</pre>
B1: Encabezados de columna  
B2:   
<pre>
=ArrayFormula(
  VLOOKUP(
    SIGN(ROW(INDIRECT("A1:A"&Aux!A1*Aux!A2))),
    {(ROW(INDIRECT("A1:A"&Aux!A1+1))),INDIRECT(Aux!A4&"!R1C1:R"&Aux!A1+1&"C"&Aux!A2+1,false)},
    MOD(ROW(INDIRECT("A1:A"&Aux!A1*Aux!A2))-1,Aux!A2)+1+2
  )
)
</pre>
C1: Valores  
C2:   
<pre>
=ArrayFormula(
  VLOOKUP(
    MOD(ROW(INDIRECT("A1:A"&Aux!A1*Aux!A2))-1,Aux!A1)+1+1,
    {(ROW(INDIRECT("A1:A"&Aux!A1+1))),INDIRECT(Aux!A4&"!R1C1:R"&Aux!A1+1&"C"&Aux!A2+1,false)},
    MOD(ROW(INDIRECT("A1:A"&Aux!A1*Aux!A2))-1,Aux!A2)+1+2
  )
)
</pre>

# Descripción de los constructos utilizados
`ROW(INDIRECT("A1:A"&Aux!A1*Aux!A2))` determina una matriz de números consecutivos cuyo tamaño corresponde al número de filas que se requieren en el resultado final.

`MOD(ROW(INDIRECT("A1:A"&Aux!A1*Aux!A2))-1,Aux!A1)+1` determina el índice del encabezado de la fila.

`MOD(ROW(INDIRECT("A1:A"&Aux!A1*Aux!A2))-1,Aux!A2)+1` determina el índice del encabezado de la columna.

`{(ROW(INDIRECT("A1:A"&Aux!A1+1))),INDIRECT(Aux!A4&"!R1C1:R"&Aux!A1+1&"C"&Aux!A2+1,false)}` crea una matriz cuya primera columna es el índice de la fila y las siguientes corresponde a los datos del reporte tabular.

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/6092\|https://es.stackoverflow.com/q/6092]]

