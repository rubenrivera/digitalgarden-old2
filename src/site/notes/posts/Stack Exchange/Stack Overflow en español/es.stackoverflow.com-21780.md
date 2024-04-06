---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-21780.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-21780/","title":"Fórmula para separar valores de una columna","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.626-06:00","updated":"2024-04-05T16:43:48.661-06:00"}
---

# Fórmula para separar valores de una columna

#Respuesta corta

[REGEXEXTRACT](https://support.google.com/docs/answer/3098244?hl=es) con una expresión regular calculada

#Ejemplo
Asumamos que los valores a separar están en A1:A3 y usan una coma como separador. La fórmula a utilizar sería:

    =ArrayFormula(
       SI.ERROR(
         REGEXEXTRACT(
           ","&
           A1:A3,
           "^"&
           REPETIR(
             ",+[^,]+",
             COLUMNA(DESREF(A1,,,1,6))-1
           )&
           ",+([^,]+)"
         )
       )
     )

COLUMNA(DESREF(A1,,,1,6))-1) dentro de una función ARRAYFORMULA da como resultado {0,1,2,3,4,5} lo cual usamos para extraer, el primer, segundo, y así hasta el sexto elemento que se encuentre entre el caracter utilizado como separador, que en este caso es una coma. Para incluir más elementos cambiar el 6 por otro valor.

Nota: Se puede calcular el número de columnas pero al estar esto afectaría el desempeño de la hoja de cálculo de forma notoria cuanda se tiene un número de filas alto.

Para facilitar el mantenimiento, se puede usar la característica de [asignación de nombres a rangos][1] tanto para indicar el rango con los datos a separar como indicar el separador y el límite de columnas, por ejemplo, de la siguiente forma:

    =ArrayFormula(
      SI.ERROR(
        REGEXEXTRACT(
          separador&
          datos,
          "^"&
          REPETIR(
            separador&"+[^"&separador&"]+",
            COLUMNA(DESREF(A1,,,1,columnas))-1
          )&
          separador&
          "+([^"&separador&"]+)"
         )
       )
     )

#Referencias

- [Respuesta](https://stackoverflow.com/a/26138109/1595451) por [AdamL](https://stackoverflow.com/users/1373663/adaml) a [ARRAYFORMULA() does not work with SPLIT()](https://stackoverflow.com/q/26137115/1595451) en Stack Overflow (en inglés).
- [Split a column of strings with a single formula returning an array](https://webapps.stackexchange.com/q/88517/88163) en Stack Exchange Web Applications (en inglés)


  [1]: https://support.google.com/docs/answer/63175?hl=es

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/21780\|https://es.stackoverflow.com/q/21780]]

