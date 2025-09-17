---
layout: default
title: Writing
permalink: /writing/
postTitlePrefixFilter: '61 Boring Birds:'
---



<header class="post-header">
  <h1 class="post-title">{{ page.title | escape }}</h1>
</header>
<ul class="post-list">


{%- for post in site.posts -%}
{% if not post.title contains page.postTitlePrefixFilter %}
<li>
    {%- assign date_format = site.minima.date_format | default: "%b %-d, %Y" -%}
    <span class="post-meta">{{ post.date | date: date_format }}</span>
    <h3>
      <a class="post-link" href="{{ post.url | relative_url }}">
        {{ post.title | escape }}
      </a>
    </h3>

      {{ post.description }}

  </li>


{% endif %}
{%- endfor -%}
</ul>

