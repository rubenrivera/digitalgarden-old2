---
{"dg-publish":true,"dg-path":"Publicaciones Externas/Stack Exchange/Stack Overflow en español/es.stackoverflow.com-51839.md","permalink":"/publicaciones-externas/stack-exchange/stack-overflow-en-espanol/es-stackoverflow-com-51839/","title":"¿Cómo puedo integrar esta validación para acceder al OWA de Office 365 o portal.office.com?","hide":true,"noteIcon":"\"0\"","created":"2024-04-03T12:49:10.759-06:00","updated":"2024-04-05T16:43:49.186-06:00"}
---

# ¿Cómo puedo integrar esta validación para acceder al OWA de Office 365 o portal.office.com?

Realizando una búsqueda rápida encontré un [artículo][1] en inglés que aplica para Windows Server 2016, Windows Server 2012 R2. Este artículo indica lo siguiente (mas abajo está la traducción):


>In order to enable multi-factor authentication (MFA), you must select at least one additional authentication method. By default, in Active Directory Federation Services (AD FS) in Windows Server 2012 R2, you can select Certificate Authentication (in other words, smart card-based authentication) as an additional authentication method.

> >Note

> >If you select Certificate Authentication, ensure that the smart card certificates have been provisioned securely and have pin requirements.

A continuación un borrador de traducción (énfasis mío).

Con la finalidad de habilitar la autenticación de múltiples factores, deberás seleccionar al menos un método de autenticación. De forma predeterminada, en los servicios federados del Directorio Activo (AD FS por sus siglas en inglés) en Windows Server 2012 R2, puedes seleccionar la Autenticación de Certificados ( en otras palabras, autenticación basada en tarjetas inteligentes) como un método adicional de autenticación.

Nota:

Si seleccionas la Autenticación de Certificados, **asegura que los certificados de tarjeta inteligente han sido provistos de forma segura y tiene requerimientos de número de identificación personal** (PIN por sus siglas en inglés).

  [1]: https://technet.microsoft.com/en-us/windows-server-docs/identity/ad-fs/operations/configure-additional-authentication-methods-for-ad-fs

# Metadata
Source:: Stack Overflow en español
URL:: [[https://es.stackoverflow.com/q/51839\|https://es.stackoverflow.com/q/51839]]

