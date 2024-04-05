---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-158418.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-158418/","title":"Botones Siguiente y Anterior para navegar entre celdas con fondo de color amarillo","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.506-06:00","updated":"2024-04-05T16:43:53.656-06:00"}
---

# Botones Siguiente y Anterior para navegar entre celdas con fondo de color amarillo

Usa el grabador de macros

Ejemplo del resultado de usar el grabador para encontrar la siguiente celda amarilla

    Sub Siguiente()
    '
    ' Siguiente Macro
    '
    
    '
        With Application.FindFormat.Interior
            .PatternColorIndex = xlAutomatic
            .Color = 65535
            .TintAndShade = 0
            .PatternTintAndShade = 0
        End With
        Cells.Find(What:="", After:=ActiveCell, LookIn:=xlFormulas, LookAt:= _
            xlPart, SearchOrder:=xlByRows, SearchDirection:=xlNext, MatchCase:=False _
            , SearchFormat:=True).Activate
    End Sub

Luego al código anterior le cambiamos el nombre del Sub y SearchDirection:=xlNext por SearchDirection:=xlPrevious

    Sub Anterior()
    '
    ' Anterior Macro
    '
    
    '
        With Application.FindFormat.Interior
            .PatternColorIndex = xlAutomatic
            .Color = 65535
            .TintAndShade = 0
            .PatternTintAndShade = 0
        End With
        Cells.Find(What:="", After:=ActiveCell, LookIn:=xlFormulas, LookAt:= _
            xlPart, SearchOrder:=xlByRows, SearchDirection:=xlPrevious, MatchCase:=False _
            , SearchFormat:=True).Activate
    End Sub

Luego asigna cada macro al botón correspondiente de tu formulario siguiendo las instrucciones de [Asignar una macro a un botón Formulario o Control](https://support.office.com/es-es/article/asignar-una-macro-a-un-bot%C3%B3n-formulario-o-control-d58edd7d-cb04-4964-bead-9c72c843a283?ui=es-ES&rs=es-ES&ad=ES)

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/158418\|https://es.stackoverflow.com/q/158418]]

