---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-277335.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-277335/","title":"Obtener el indice de un elemento cuando doy click","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.506-06:00","updated":"2024-04-05T16:43:55.520-06:00"}
---

# Obtener el indice de un elemento cuando doy click

Me parece que te estas complicando mucho. Para "capturar" el evento clic usa `addEventListener` usando como primer argumento `'click'` y como segundo argumento la función que quieres que se ejecute cuando ocurra el evento.

El siguiente ejemplo es muy simple. Se incluye un `select` al cual le agregamos un "listener" usando `addEventListener` según se mencionó arriba el cual registra en la consola un mensaje indicando el índice del la opción seleccionada cuando ocurrió el click.

<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-js -->

    (function(){
      document.querySelector('select').addEventListener('click',function(e){
        var index = e.target.selectedIndex;
        console.info('El índice de la opción seleccionada es %s',index)
      });
    })()

<!-- language: lang-html -->

    <select>
      <option value="1">Uno</option>
      <option value="2">Dos</option>
      <option value="3">Tres</option>
    </select>

<!-- end snippet -->

Nótese que se usa `querySelector` en lugar de `getElementsByTagName`. La razón de esto en este ejemplo además de una preferencia personal, es que `querySelector` devuelve el primer elemento que satisface la condición mientras que `getElementsByTagName` devuelve una colección de elementos.

Algunas alternativas para devolver un elemento en lugar de una colección son  usar `getElementById(id)`, `getElementsByTagName(tagName)[0]` entre otras.

Por otro lado, en tu código estás declarando variables globales lo cual no es del todo recomendable, particularmente si no tienes claro como manejar este ámbito y el ámbito local.

El siguiente ejemplo es un poco más completo, se incluye una sentencia `switch` para asignar el `width` según tres casos: indice 0, indice 3 y los demás. Si en verdad quieres usar el `size` que es para controlar el tamaño vertical del `select`, puedes modificarlo fácilmente en tu implementación.
 
<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-js -->

    (function(){
      document.querySelector('select').addEventListener('click',function(e){
        var index = e.target.selectedIndex;
        switch(index){
          case 0:
            e.target.style.width = "160px";
            break;
          case 3: 
            e.target.style.width = "55px";
            break;
          default:
            e.target.style.width = "50px";  
        }
        console.info('El índice de la opción seleccionada es %s',index)
      });
    })()

<!-- language: lang-html -->

    <select width="160px">
      <option value="">Seleccione una opción</option>
      <option value="1">Uno</option>
      <option value="2">Dos</option>
      <option value="3">Tres</option>
    </select>

<!-- end snippet -->





# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/277335\|https://es.stackoverflow.com/q/277335]]

