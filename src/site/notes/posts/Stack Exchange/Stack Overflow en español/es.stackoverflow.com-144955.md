---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-144955.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-144955/","title":"Retorno de cadenas en separadores de miles Javascript","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.727-06:00","updated":"2024-04-05T16:43:53.136-06:00"}
---

# Retorno de cadenas en separadores de miles Javascript

Como mencioné en [mi respuesta](https://es.stackoverflow.com/a/136072/65) a otra pregunta similar, 

> Hoy día, la mayoría de los navegadores modernos soportan [Intl.NumberFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat) lo cual nos ayuda a dar formato a un número sin necesidad de recurrir a expresiones regulares ni a funciones específicas de jQuery.

En la liga anterior, al final de la página se incluye la compatibilidad con navegadores de escritorio, móviles y servidor.

A continuación el ejemplo que incluí en la respuesta referida, adaptado para mostrar el formato de pesos argentinos, es decir, signo $, punto como separador de miles y coma como separador de decimales.

<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-js -->

    var numero = 1E6 + 56 / 100; //Un millón y 56 centésimas
    document
      .getElementById('salida')
      .innerHTML = new Intl.NumberFormat('es-AR', {
        style: 'currency',
        currency: 'ARS'
      }).format(numero);

<!-- language: lang-html -->

    <div id="salida"></div>

<!-- end snippet -->

En el siguiente ejemplo intenté aplicar lo anterior para permitir que un input agregue automáticamente el separador de miles y permita la inclusión de decimales pero **está incompleto** ya que le falta considerar varios casos como el que usuario cambie el punto de inserción de texto o que quiera escribir un centavo (0,01).

<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-js -->

    var monto = document.querySelector('input');
    var options = {
    	style:'currency',
      currency:'ARS',
      minimumFractionDigits:0
    };
    monto.addEventListener('input',function(){
      // Si el último caracter es una coma, deberemos agregarla
      var separador = (this.value.substr(this.value.length - 1,1)===',')?',':''; 
    	var monto1 = this.value
      .replace(/[^\d,]/g,"") //remover $ punto y otros caracteres no validos
      .replace(",","."); // JavaScript usa punto como separador decimal para los números,entonces reemplazamos la coma por un punto
      this.value = Intl.NumberFormat('es-AR',options).format(monto1)
      + separador; // Si el último caracter es una coma, agregarlo.
    });

<!-- language: lang-html -->

    <input type="text" placeholder="$ 10.000">

<!-- end snippet -->

Muy probablemente la solución sea adoptar una librería para enmascarar entrada que incluya el formato de moneda deseado o bien que permita personalizarlo.

Preguntas relacionadas

- https://es.stackoverflow.com/q/17308/65

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/144955\|https://es.stackoverflow.com/q/144955]]

