---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-270389.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-270389/","title":"Mandar correo cuando se cambia una celda en especifico","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.355-06:00","updated":"2024-04-05T16:43:55.420-06:00"}
---

# Mandar correo cuando se cambia una celda en especifico

# Respuesta corta
Una solución muy simplista es llamar la función que envía el email antes del último `}` de tu función onEdit

    function onEdit(e){
      // Aquí el código original
    
      // Esta es la nueva línea
      myFunction(e);
    }

# Explicación

`onEdit` es un nombre reservado para el activador simple "al editar" pero `myFunction` no lo es, por ello no se ejecuta de igual forma que `onEdit` y este debe ser llamado ya sea por la función onEdit o por medio de un activador instalable al editar o al cambiar.

Otra alternativa de solución es agregar el código entre `myFunction(e) {` y el último `}` dentro de los `{}` de `onEdit`


# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/270389\|https://es.stackoverflow.com/q/270389]]

