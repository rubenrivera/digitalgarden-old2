---
{"dg-publish":true,"dg-permalink":"logout.njk","permalink":"/logout.njk/","title":{"{ logout | i18n }":null}}
---

{}

<form action="{{ page.url }}" method="get">
  <input type="hidden" name="logout" value="">
  <button type="submit">Logout</button>
</form>
<br>