---
dg-publish: true
dg-hide: true
title: Cómo modificar la presentación de un formulario de Google usando estilos de usuario
Site: Stack Overflow en español
Stack Exchange Post ID: 1510
Stack Exchange Type: Answer
Stack Exchange Post Created: 22/12/15 5:56
Stack Exchange Post Last Edit: 22/12/15 15:19
Stack Exchange Edited By: 
Score: 1
Favorites: 
Views: 3096
Accepted: Accepted
CW: 
Closed: 
---
# Cómo modificar la presentación de un formulario de Google usando estilos de usuario

# Respuesta corta
En lugar de utilizar el enfoque de convertir a tabla, es mejor sacar del flujo normal del contenido algunos de los elementos usando las propiedades `float` y `clear`. La excepción son los títulos de sección, encabezado de página y las preguntas de tipo cuadrícula.

# Código
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

# Notas

- El ancho original está limitado a 600px.
- Las preguntas con respuesta de tipo párrafo requieren un ancho mayor al 50% del ancho indicado arriba.  Una ventaja de usar `float` es que en lugar de desbordar el ancho definido, se colocará en el siguiente renglón.

# Referencias
## Mozilla Developer Network (MDN) en español

- [CSS](https://developer.mozilla.org/es/docs/Web/CSS)
- [float](https://developer.mozilla.org/es/docs/Web/CSS/float)
- [clear](https://developer.mozilla.org/es/docs/Web/CSS/clear)

##Extensiones para navegadores

- [Stylish - Chrome Web Store](https://chrome.google.com/webstore/detail/stylish/fjnbnpbmkenffdnngjfgmeleoegfcffe)


# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/1510\|https://es.stackoverflow.com/q/1510]]

