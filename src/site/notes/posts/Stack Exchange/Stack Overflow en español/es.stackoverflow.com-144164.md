---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-144164.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-144164/","title":"Cancelar evento de input","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.727-06:00","updated":"2024-04-05T16:43:53.129-06:00"}
---

# Cancelar evento de input

Guarda el valor en una variable, si se trata de muchos valores podrías usar un array.

A continuación un ejemplo simple usando eventos "click"

<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-js -->

    //Inicializar
    var valorAnterior = 0;

    //Agregar monitores de eventos
    document.getElementById('botonG').addEventListener('click', guardar);
    document.getElementById('botonD').addEventListener('click', deshacer);

    //Funciones de eventos

    // Guarda el valor en una variable global
    function guardar() {
      valorAnterior = document.getElementById('entrada').value;
      console.info(valorAnterior);
    }
    
    // Deshace el cambio realizado, es decir, asigna el valor en la variable global que fue guardado.
    function deshacer() {
      document.getElementById('entrada').value = valorAnterior;
    }

<!-- language: lang-html -->

    <input id="entrada" type="number">
    <input id="botonG" type="button" value="Guardar">
    <input id="botonD" type="button" value="Deshacer">

<!-- end snippet -->

A continuación un segundo ejemplo que en lugar de usar botones usa el evento input.

<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-js -->

    // Inicializar
    var entrada = document.getElementById('entrada');
    var valorAnterior = 0;

    // Agrevar monitor de cambios de elementos input
    entrada.addEventListener('input', control);

    // En caso de que se ingrese una cadena vacía o un 0 se coloca el valor anterior
    function control() {
      var valor = entrada.value;
      if (valor == "") {
        entrada.value = valorAnterior;
        console.info('Se agregó valor anterior');
      }
      valorAnterior = entrada.value;
    }

<!-- language: lang-html -->

    <input id="entrada" type="number">

<!-- end snippet -->



# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/144164\|https://es.stackoverflow.com/q/144164]]

