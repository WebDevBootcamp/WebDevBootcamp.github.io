---
layout: default
title: Troy Solberg
userid: TDSolberg
---

{% for user in site.data.users %}
  {% if user.userid == page.userid %}
    {% assign current = user %}
  {% endif %}
{% endfor %}


