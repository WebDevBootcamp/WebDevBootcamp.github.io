---
layout: default
title: Nathan's Page
image: http://pics2.ds-static.com/prodimg/72645/300.JPG
userid: nw
---

{% for p in site.pages %}
  {% if p.userid == page.userid %}
  <pre>{{ p.url }}</pre>
  {% endif %}
{% endfor %}

<img src="{{ page.image }}" class="img-responsive pull-right">

### Holding Page

I'll come back around and add content to this later