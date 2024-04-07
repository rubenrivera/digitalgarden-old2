---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-55704.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-55704/","title":"¿A qué se debe que REGEXEXTRACT devuelve un único valor cuando se espera que devuelva una matriz de 1 renglón y varias columnas?","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.417-06:00","updated":"2024-04-05T16:43:49.530-06:00"}
---

# ¿A qué se debe que REGEXEXTRACT devuelve un único valor cuando se espera que devuelva una matriz de 1 renglón y varias columnas?

La característica de manejo de matrices de las hojas de cálculo de Google resulta conveniente y combinada con las funciones que manejan expresiones regulares como REGEXMATCH y REGEXEXTRACT entre otras, lo hace especialmente útil.

Tengo un caso que en el que no sé a qué se debe que no da el resultado esperado. A continuación describo lo que estoy intentando:

**Configuración de hoja de cálculo**  
Configuración regional: México (usar . como separador decimal)  

**Entrada**  
A1: `abcde`  

**Fórmula**  
B1: `=ArrayFormula(REGEXEXTRACT(A1,{".{1}",".{2}"}))`  

**Resultado esperado**  
B1: `a`  
B2: `ab`  

**Resultado obtenido**  
B1: `a`  
B2: 

**Solución provisional conocida**  
`=ArrayFormula(TRANSPOSE(REGEXEXTRACT(A1,{".{1}";".{2}"})))` 

Esta pregunta también ha sido publicada en el sitio en inglés -> https://stackoverflow.com/q/42826011/1595451

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/55704\|https://es.stackoverflow.com/q/55704]]

