---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-97994.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-97994/","title":"Eliminar valores nulos o vacios de un JSON Object en Google AppScript","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.759-06:00","updated":"2024-04-05T16:43:52.542-06:00"}
---

# Eliminar valores nulos o vacios de un JSON Object en Google AppScript

# Respuesta corta

Usa la función `filter`.

# Explicación

La función filter devuelve los elementos que cumplen con una condición. En el caso descrito, el objeto es un "array" de "arrays" por lo que deberás usar algun tipo de bucle para que recorra cada uno de los "arrays".

A continuacón un ejemplo usando `for` para fines de demostración rápida, usando Stacksnippet:

<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-js -->

    var unObjeto = [
      [
        "asm-tree.jar",
        "",
        "",
        "commons-beanutils.jar",
        "",
        "",
        "commons-collections.jar",
        "",
        "",
        "util-java.jar",
        "",
        "",
        "bcprov-jdk14-1.38.jar",
        "",
        "",
        ""
      ],
      [
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
      ],
      [
        "\nDependencies",
        "",
        "",
        "\nDependencies",
        "",
        "",
        "\nDependencies",
        "",
        "",
        "\nDependencies",
        "",
        "",
        "\nDependencies",
        "",
        "",
        "\nDependencies"
      ],
      [
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
      ]
    ]

    for(var i = 0; i< unObjeto.length;i++){
      unObjeto[i] = unObjeto[i].filter(function(n){ return n != "" }); 
    }
    console.log(unObjeto)

<!-- end snippet -->

El código del OP quedaría de la siguiente forma

    function listValues() {
      var activeSheet = SpreadsheetApp.getActiveSheet();
      var dataRange = activeSheet.getDataRange();
      var data = dataRange.getValues();
    
      for(var i = 0; i< data.length;i++){
        data[i] = data[i].filter(function(n){ return n != "" }); 
      }
      
      var json = JSON.stringify(data,function(key, value) {
        if (value === '') { 
          return null; 
        } 
        return value; 
      });
    
      
      SpreadsheetApp.getUi().alert(json);
    
    }



# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/97994\|https://es.stackoverflow.com/q/97994]]

