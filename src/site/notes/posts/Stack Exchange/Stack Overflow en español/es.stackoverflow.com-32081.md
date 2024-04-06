---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-32081.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-32081/","title":"¿Cómo utilizar la función CONCATENAR con IMPORTRANGE en google hoja de cálculo?","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.626-06:00","updated":"2024-04-05T16:43:48.677-06:00"}
---

# ¿Cómo utilizar la función CONCATENAR con IMPORTRANGE en google hoja de cálculo?

# Formula
    =IMPORTRANGE("1lIpak48SxPpi4aWo20_BuquZ12zCQXekwSCEyBcYotQ";CONCATENATE(F1;"!A1"))

# Explicación

1. Agregar una fórmula  
Para agregar una fórmula, se escribe el símbolo igual `=` al inicio de la fórmula. Esto sólo se hace una y sólo una vez por celda.

2. Anidar funciones  
A colocar una función como argumento de otra función se le llama anidar funciones. 

3. Argumentos
  
En este caso, lo que se desea es concatenar el valor de una celda con un texto para obtener el argumento de la cadena de texto de la referencia, así que CONCATENATE debe usarse anidada dentro de IMPORTRANGE y no al revés.



# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/32081\|https://es.stackoverflow.com/q/32081]]

