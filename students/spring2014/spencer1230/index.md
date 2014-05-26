---
layout: default
title: Spencer Winter
userid: spencer1230
---

{% for user in site.data.users %}
  {% if user.userid == page.userid %}
    {% assign current = user %}
  {% endif %}
{% endfor %}


### {{ page.title }}

#### {{ current.city }}, {{ current.state }} {{ current.postal }}