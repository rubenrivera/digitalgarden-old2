---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-1510.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-1510/","title":"Cómo modificar la presentación de un formulario de Google usando estilos de usuario","hide":true,"noteIcon":"default","created":"2024-04-03T12:49:10.504-06:00","updated":"2024-04-05T16:43:48.364-06:00"}
---

# Cómo modificar la presentación de un formulario de Google usando estilos de usuario

#Respuesta corta
En lugar de utilizar el enfoque de convertir a tabla, es mejor sacar del flujo normal del contenido algunos de los elementos usando las propiedades `float` y `clear`. La excepción son los títulos de sección, encabezado de página y las preguntas de tipo cuadrícula.

#Código
##Versión compacta (anchos iguales)
Se asignan ancho de 50%. Se probó en Chrome OS version 48.0.2564.48 beta y usando la extensión [Stylish](https://chrome.google.com/webstore/detail/stylish/fjnbnpbmkenffdnngjfgmeleoegfcffe).
    
    .freebirdFormviewerViewItemsItemItem,
    .freebirdFormviewerViewItemsGridContainer,
    .freebirdFormviewerViewNavigationNavControls {
    	clear:both;
    }
    .freebirdFormviewerViewItemsItemItemheader,
    .freebirdFormviewerViewItemsItemItemheader 
    + div:not(.freebirdFormviewerViewItemsGridContainer) {
    	float:left;
        width:50%;
    }

##Versión anchos desiguales

    .freebirdFormviewerViewItemsItemItem,
    .freebirdFormviewerViewItemsGridContainer,
    .freebirdFormviewerViewNavigationNavControls {
    	clear:both;
    }
    .freebirdFormviewerViewItemsItemItemheader
    	float:left;
        width:30%;
    .freebirdFormviewerViewItemsItemItemheader 
    + div:not(.freebirdFormviewerViewItemsGridContainer) {
    	float:left;
        width:70%;
    }

##Expresiones regulares (regex)
para delimitar las páginas a las que aplica el estilo de usuario anterior

Página de inicio del formulario

    \bhttps://docs.google.com/forms/\S+viewform\b

Página `siguiente`

    \bhttps://docs.google.com/forms/\S+formResponse\b

#Notas

- El ancho original está limitado a 600px.
- Las preguntas con respuesta de tipo párrafo requieren un ancho mayor al 50% del ancho indicado arriba.  Una ventaja de usar `float` es que en lugar de desbordar el ancho definido, se colocará en el siguiente renglón.

#Referencias
## Mozilla Developer Network (MDN) en español

- [CSS](https://developer.mozilla.org/es/docs/Web/CSS)
- [float](https://developer.mozilla.org/es/docs/Web/CSS/float)
- [clear](https://developer.mozilla.org/es/docs/Web/CSS/clear)

##Extensiones para navegadores

- [Stylish - Chrome Web Store](https://chrome.google.com/webstore/detail/stylish/fjnbnpbmkenffdnngjfgmeleoegfcffe)


# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/1510\|https://es.stackoverflow.com/q/1510]]

