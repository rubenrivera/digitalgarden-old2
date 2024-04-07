---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-65056.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-65056/","title":"Varias condiciones fórmula SI Excel","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.626-06:00","updated":"2024-04-06T20:12:36.249-06:00"}
---

# Varias condiciones fórmula SI Excel

# Fórmula
Asumiendo que el valor a comparar se encuentra en A1,  para obtener como resultado `VERDADERO` o `FALSO`, si el valor en A1 se encuentre entre 0,1 y 0,15 basta con usar [Y()][1], ejemplo:

    =Y(A1>0,1; A1<0,15)

# Explicación

> Pero, ¿cómo puedo poner para que A esté comprendido entre dos valores posibles? Es decir, que A sea por ejemplo > 0,1 y < 0,15?  
> He probado lo siguiente:
>
>   =SI(A>0,1(O(A<0,15));VERDADERO;FALSO)

En la fórmula anterior hay un error claro y otros tres muy probables ya que no se indica que se hayan designado *A*, *VERDADERO* y *FALSO* como [nombres][2] de un rango o fórmula, ni la versión de Excel. Vamos por partes. 

- Los cálculos básicos se realizan a través de fórmulas, las cuales inicia con `=`.
- Las fórmulas admiten números, cadenas de texto, funciones o referencias a celdas o rangos, "errores" (como \#DIV/0), nombres definidos por el usuario.
- Las cadenas de texto deben indicarse entre comillas, ejemplo `"rojo"`. Algunas cadenas como *VERDADERO* y *FALSO* en versiones modernas de Excel con interpretados como los valores booleanos, lo cual no ocurría en versiones antiguas.
- Los operadores de fórmulas de Excel son `+`, `-`, `/`, `*`, `^`, `&`.
 Nota: La lista anterior no es exhaustiva, por ejemplo, se omiten intencionalmente `%`, `E` (estos corresponden a "notaciones numéricas") entre otros.
- Los valores booleanos se obtienen mediante una comparación usando los operadores `>`, `<`, `=`, `>=`, `<=`, mediante las funciones `VERDADERO()`, `FALSO()` o mediante las funciones lógicas `Y()`, `O()`, `NO()`.


Por ejemplo, asumiendo que en A1 está el valor a comparar, una fórmula de una única comparación sería

    =A1>0,1

Lo anterior daría como resultado los valores `VERDADERO` o `FALSO`

Para evaluar si el valor en A1 cumple con dos condiciones usando la función lógicas [Y()][1]

    =Y(A1>0,1;A1<0,15) 

Lo anterior daría como resultado los valores `VERDADERO` o `FALSO`. Nótese que cada comparación se include como argumento de la función.

Cómo se observa, para obtener el resultado `VERDADERO` o `FALSO` no hace falta usar SI(), la cual tiene sentido cuando se desea que valores diferentes a estos sean el resultado de evaluar condiciones, por ejemplo, si en lugar de `VERDADERO` y `FALSO`, digamos que se desea como resultado "VERDE" o "ROJO" respectivamente, se puede usar 

    =SI(Y(A1>0,1; A1<0,15);"VERDE";"ROJO")

Nota: Existen otras formas para valorar si un valor o matriz cumple con ciertas condiciones, pero abordar todas ellas haría demasiado extensa esta publicación.

# Referencias

- [Fórmulas y Funciones][3]


  [1]: https://support.office.com/es-es/article/Y-funci%C3%B3n-Y-5f19b2e8-e1df-4408-897a-ce285a19e9d9?ui=es-ES&rs=es-ES&ad=ES
  [2]: https://support.office.com/es-es/article/Definir-y-usar-nombres-en-f%C3%B3rmulas-4d0f13ac-53b7-422e-afd2-abd7ff379c64
  [3]: https://support.office.com/es-es/article/F%C3%B3rmulas-y-funciones-294d9486-b332-48ed-b489-abe7d0f9eda9?ui=es-ES&rs=es-ES

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/65056\|https://es.stackoverflow.com/q/65056]]

