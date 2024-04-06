---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-281154.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-281154/","title":"no entiendo el cannot read property addEventListener","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.593-06:00","updated":"2024-04-05T16:43:55.633-06:00"}
---

# no entiendo el cannot read property addEventListener

Se podría decir que error ocurre porque el código está incompleto, en específico, los `querySelector` no encuentran los elementos con id `boton` y `NM` por lo cual devuelven `null` y null no tiene una propiedad llamada `addEventListener`

Agregando estos elementos en el HTML funciona. Ejemplo:

<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-js -->

    'use strict'
    function Color(){
    		console.log("ok");
    		var bg=boton.style.background
    	if(bg == "yellow"){
    		bg=boton.style.background="blue";
    	}
    	else{
    		bg=boton.style.background="yellow";
    	
    	}
    	
    		return true;
    }
    // click
    var boton=document.querySelector("#boton");
    	boton.addEventListener("click", function(){
    		Color();
    	});
    //mouse over
    boton.addEventListener("mouseover", function(){
    		var mo=boton.style.background
    		if(mo=="white")
    			mo=boton.style.background=("pink");
    		
    	});
    //mouse out
    boton.addEventListener("mouseout", function(){
    		var mu=boton.style.background
    		if(mu=="pink")
    			mu=boton.style.background=("white");
    		
    	});
    boton.style.background=("white");
    //focus
    var tetero=document.querySelector("#NM");
    	debugger
    	tetero.addEventListener("focus",function(){
    		console.log("profin");
    	});

<!-- language: lang-html -->

    <button id="boton">Color</button>
    <input id="NM">

<!-- end snippet -->



# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/281154\|https://es.stackoverflow.com/q/281154]]

