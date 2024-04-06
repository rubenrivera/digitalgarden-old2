---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-47927.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-47927/","title":"¿Cómo puedo leer un elemento de Movie y ponerlo en una celda de Excel?","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.679-06:00","updated":"2024-04-05T16:43:48.967-06:00"}
---

# ¿Cómo puedo leer un elemento de Movie y ponerlo en una celda de Excel?

> Contenido tomado de la pregunta el cual fue publicado por el OP en la [version 4][1]

Ya me resolvieron:

    Sub getData()
    
        Dim Movie As Object
        Dim R As Object
        Dim sc As Object, x
    
        Set sc = CreateObject("MSScriptControl.ScriptControl")
        sc.Language = "JScript"
    
        With CreateObject("MSXML2.XMLHTTP")
            .Open "GET", "https://api.coinmarketcap.com/v1/ticker/shift/", False
            .send
            sc.Eval ("var i, o = (" + .responsetext + ")")
            sc.Eval "function l(){return o.length;}"
            sc.Eval "function indx(n){i=n;}"
            sc.Eval "function p(pname){return o[i][pname];}"
    
            .abort
    
            With Sheets(1)
                For x = 1 To sc.Eval("l()")
                    sc.Eval "indx(" & x - 1 & ")" 'set array index
    
                    'get properties at that index
                    .Cells(1, 2).Value = sc.Eval("p('name')")
                    .Cells(1, 2).Value = sc.Eval("p('price_btc')")
                    .Cells(1, 3).Value = sc.Eval("p('price_usd')")
                    .Cells(1, 4).Value = sc.Eval("p('Rank')")
    
                Next x
            End With
        End With
    
    End Sub


  [1]: https://es.stackoverflow.com/revisions/37728/4

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/47927\|https://es.stackoverflow.com/q/47927]]

