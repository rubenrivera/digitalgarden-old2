---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-21779.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-21779/","title":"Fórmula para separar valores de una columna","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.626-06:00","updated":"2024-04-06T20:22:14.929-06:00"}
---

# Fórmula para separar valores de una columna

La hoja de cálculo de Google cuenta con la función SPLIT para separar valores de una cadena pero no puede utilizarse usando como argumento un rango o matriz de 1 X n o n X 1, por ejemplo A1:A3 mediante ARRAYFORMULA.

La fórmula siguiente da como resultado \#VALOR

    =ARRAYFORMULA(SPLIT(A1:A3,",") 


Cuando son dos columnas, una alternativa es combinar funciones como IZQUIERDA, DERECHA, por ejemplo

    =ArrayFormula(
       {
          IZQUIERDA(A1:A3,ENCONTRAR(",",A1:A3)-SIGNO(FILA(A1:A3))),
          DERECHA(A1:A3,LARGO(A1:A3)-ENCONTRAR(",",A1:A3))
        }
     )

¿Qué función se puede utilizar cuando el número de columnas es mayor para evitar tener una fórmula demasiado larga y complicada de mantener?

P.D. La hoja de cálculo de Google recientemente incorporó un comando de menú para separar texto en columnas. Esta pregunta se refiere específicamente a cómo hacer la separación usando usando fórmulas.

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/21779\|https://es.stackoverflow.com/q/21779]]

