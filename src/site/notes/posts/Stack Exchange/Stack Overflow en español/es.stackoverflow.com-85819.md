---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-85819.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-85819/","title":"Recibir como parámetro un número entre imprimir esa cantidad de caracteres","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.505-06:00","updated":"2024-04-05T16:43:51.770-06:00"}
---

# Recibir como parámetro un número entre imprimir esa cantidad de caracteres

Al correr el código en VBA para Excel 2016 en inglés obtengo

> Compile error: Argument not optional.   

[![][1]][1]

Esto se traduce como error de compilación, argumento no opcional y quiere decir que la llamada que se está haciendo es incorrecta pues omite un argumento obligatorio.

La sentencia `Public Sub dibujarT(num As Integer, i As Integer, j As Integer)` indica tres argumentos, los cuales son números enteros.

La "solución" sería llamar la función usando tres argumentos de tipo número, sin embargo esto no tiene sentido porque en la función dibujarT se declaran con valores de 1, por otro lado, hay otros errores.

Por ejemplo, en la función pedirnum falta la sentencia que asigna el valor a devolver.

Me parece que la documentación oficial sobre cómo [escribir una función][2] sólo está disponible en inglés, así que te dejo una adapatación del ejemplo incluido en ella

    Sub Main() 
     temp = Application.InputBox(Prompt:= _ 
     "Favor de escribir la temperatura en grados F.", Type:=1) 
     MsgBox "La temperatura es " &; Celsius(temp) &; " grados C." 
    End Sub 
    
    Function Celsius(fDegrees) 
     Celsius = (fDegrees - 32) * 5 / 9 
    End Function

Espero que lo anterior te sirva para corregir tu código.

  [1]: https://i.stack.imgur.com/mYg8j.png
  [2]: https://msdn.microsoft.com/en-us/vba/language-reference-vba/articles/writing-a-function-procedure

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/85819\|https://es.stackoverflow.com/q/85819]]

