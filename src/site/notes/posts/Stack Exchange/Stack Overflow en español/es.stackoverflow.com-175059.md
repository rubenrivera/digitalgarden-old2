---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-175059.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-175059/","title":"¿Cómo realizar suma sobre condiciones encadenadas con Google Sheets?","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.727-06:00","updated":"2024-04-05T16:43:54.107-06:00"}
---

# ¿Cómo realizar suma sobre condiciones encadenadas con Google Sheets?

Cuando se tienen dos tablas una para los elementos y otra para clasificarlos y se desea hacer cálculos con base en la clasificación, lo primero es hacer una tabla de datos para análisis en la forma de tabla simple, ya sea que la muestres en un rango de la hoja de cálculo o lo manejes como una fórmula anidada o matriz en notación `{}`

La tabla simple quedaría de la siguiente forma

<!-- language: lang-none -->

       Cantidad        |   Tipo de gasto  |  Tipo general
       ________________________________________________________
       700             |   Alquiler       |  Gasto fijo
       150             |   Comida         |  Gasto variable

Para lograr lo anterior existen varias funciones que pueden ayudar como `BUSCARV` y la combinación de `INDICE` y `COINCIDIR`. En lo personal prefiero la segunda porque se dice que es más rápida que la primera.


Suponiendo que la tabla 1 está en `'Tabla 1'!$A$1:$B$3` y que la tabla 2 está en `'Tabla 2'!$A$1:$B$4`, una de las posibles formas para crear la tabla simple sería

En `'Tabla 3'!A1` agrega

    ={'Tabla 1'!$A$1:$B$3}

En `'Tabla 3'!C1` agrega

    =INDICE('Tabla 2'!$B$1:$B$4,COINCIDIR($B1,'Tabla 2'!$A$1:$A$4,0)

y luego rellenas hacia abajo para obtener el tipo general para todos los elementos de la tabla 1.

Ya una vez que tienes la tabla simple para análisis, puedes aplicar funciones como `SUMA.SI.CONJUNTO`.

Lo anterior se puede optimizar sacando provecho de características de la hoja de cálculo de Google como ArrayFormula y otras funciones pero el propósito de lo anterior es mostrar la aplicación conceptos básicos del manejo de hojas de cálculo las cuales usan un tipo de pensamiento diferente al usado al programar en lenguajes como C#, JavaScript o SQL.

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/175059\|https://es.stackoverflow.com/q/175059]]

