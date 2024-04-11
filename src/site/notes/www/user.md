---
{"title":{"{ userData | i18n }":null},"description":"Página para mostrar los datos del usuario","dg-publish":true,"dg-pass-frontmatter":true,"permalink":"/www/user/","secure":{"unauthenticatedRedirect":"/"},"dgPassFrontmatter":true}
---

<h2>{{ user.name or user.full_name or user.localizedFirstName }}, {{thisPageIsSecure | i18n }}</h2>

{% include "src/site/notes/www/logout.njk" %}

<img src="{{ user.avatar_url or user.avatar or user.picture or user["profilePicture"]["displayImage~"]["elements"][0]["identifiers"][0]["identifier"] }}" lang="{{ page.url }}"alt="{{ avatar | i18n }}  user.name or user.full_name or user.localizedFirstName }}">

<h3>{{ | i18n }}</h3>
<pre>
{{ user | dump(2) }}
</pre>