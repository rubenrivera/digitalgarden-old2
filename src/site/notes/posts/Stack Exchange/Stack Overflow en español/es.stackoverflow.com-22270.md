---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-22270.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-22270/","title":"Variable CountryCriteriaId ya no existe en los informes de Click_performance_report?","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.626-06:00","updated":"2024-04-05T16:43:48.666-06:00"}
---

# Variable CountryCriteriaId ya no existe en los informes de Click_performance_report?

De acuerdo  https://developers.google.com/adwords/api/docs/reference/#reporting_3, **ContryCriteriaId** fue removido en la version 201605 (ir a la referencia para ver los enlaces incluídos):


> ### *Removed report fields*
> 
> The following fields were removed from the CLICK_PERFORMANCE_REPORT:
> 
> - CityCriteriaId  
> - **CountryCriteriaId**  
> - MetroCriteriaId  
> - RegionCriteriaId  
> 
> For geographic information, use the AoiMostSpecificTargetId and
> LopMostSpecificTargetId fields instead. To get additional information
> (such as location names and parent location IDs) for the IDs returned
> in those fields, use LocationCriterionService or the tables on the
> Geographical targeting page.    
> 
> The following fields related to final URLs were removed from the
> PRODUCT_PARTITION_REPORT because final URLs cannot be specified for
> ProductPartition criteria:
> 
>  - FinalAppUrls 
>  - FinalMobileUrls  
>  - FinalUrls

En [Depracation Schedule][1] aún no se indica la fecha del ocaso de la versión 201605. Te recomiendo revisar la [guía de migración a 201607][2]


  [1]: https://developers.google.com/adwords/api/docs/sunset-dates
  [2]: https://developers.google.com/adwords/api/docs/guides/migration/v201607

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/22270\|https://es.stackoverflow.com/q/22270]]

