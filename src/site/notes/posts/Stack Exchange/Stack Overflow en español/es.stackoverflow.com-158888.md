---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-158888.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-158888/","title":"Como aplicar un filtro a un spreadsheet desde script","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.626-06:00","updated":"2024-04-05T16:43:53.659-06:00"}
---

# Como aplicar un filtro a un spreadsheet desde script

Lo más probable es que el error se deba a que aún no has activado el servicio avanzado de las hojas de cálculo de Google.

La forma de habilitarlo se explica en inglés en https://developers.google.com/apps-script/guides/services/advanced#enabling_advanced_services

Donde dice (traducción mía, texto original más abajo):

**Habilitar servicios avanzados**

Para usar un servicio avanzado de Google, sigue estas instrucciones:

1. En el editor de scripts, selecciona Recursos > Servicios avanzados de Google...
2. En el diálogo que se muestra, haz clic en el botón de encendido/apagado a un lado del servicio que quieres usar.
3. En la parte inferior del diálogo, haz clic en el enlace a la Consola de APIs de Google.
4. En la consola, haz clic en la caja de filtro y teclea parte del nombre de la API (por ejemplo, "Calendar"), luego haz clic en el nombre que veas. En la siguiente pantalla, haz clic en Habilitar API.
5.  Cierra la Consola de API y regresa al editor de scripts. Haz clic en el diálogo. El servicio avanzado que habilitaste ahora está disoponible en el autocompletado.

> **Enabling advanced services**  
>
> To use an advanced Google service, follow these instructions:
> 
> 1. In the script editor, select Resources > Advanced Google services....
> 1. In the dialog that appears, click the on/off switch next to the service you want to use.
> 1. At the bottom of the dialog, click the link for the Google API Console.
> 1. In the console, click into the filter box and type part of the name of the API (for example, "Calendar"), then click the name once you see
> it. On the next screen, click Enable API.
> 1. Close the API Console and return to the script editor. Click OK in the dialog. The advanced service you enabled is now available in
> autocomplete.

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/158888\|https://es.stackoverflow.com/q/158888]]

