---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-491.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-491/","title":"¿Cómo puedo conservar el formato de un dato obtenido con la función VLookup()?","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.416-06:00","updated":"2024-04-05T16:43:48.294-06:00"}
---

# ¿Cómo puedo conservar el formato de un dato obtenido con la función VLookup()?

Las funciones "nativas" como `vlookup()` de Excel devuelven valores o información sobre una celda pero no ambos.

La alternativa es utilizar copiar y pegar o bien copiar y pegar especial en alguna de sus variantes. A continuación un ejemplo de copiar y pegar.

    Sub ConservarFormato()
        Dim rgOrigen As Range, rgDestino As Range
        ActiveSheet.Activate
        Set rgOrigen = Range("B1")
        Set rgDestino = Range("F2")
        rgOrigen.Copy Destination:=rgDestino
    End Sub

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/491\|https://es.stackoverflow.com/q/491]]

