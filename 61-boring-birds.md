---
layout: default
title: 61 Boring Birds
permalink: /61-boring-birds/
postTitlePrefixFilter: '61 Boring Birds:'
---


<header class="post-header">
  <h1 class="post-title">{{ page.title | escape }}</h1>
</header>
<ul class="post-list">


{% assign posts = site.posts | reverse %}
{%- for post in posts -%}
{% if post.title contains page.postTitlePrefixFilter %}

  <li>
    {%- assign date_format = site.minima.date_format | default: "%b %-d, %Y" -%}
    <span class="post-meta">{{ post.date | date: date_format }}</span>
    <h3>
      <a class="post-link" href="{{ post.url | relative_url }}">
        {{ post.title | replace: page.postTitlePrefixFilter, "" | escape }}
      </a>
    </h3>

      {{ post.description }}
      {% assign relatedPosts = site.tags[post.primaryTag]| reverse %}
      {% if relatedPosts.size > 1 %}
      <br>Also on:
        
        {% for relatedPost in relatedPosts  %}
            <a href="{{ relatedPost.url | relative_url }}">{{ relatedPost.date | date: '%e %B' }}</a>{% unless forloop.last %}, {% endunless %}
        {% endfor %}
       {% endif %}
  </li>
{% endif %}
{%- endfor -%}
</ul>
<h2>Bird mentions</h2>
<ul class="post-list">
{% for tag in site.tags %}
    <li><strong>{{ tag | first }}:</strong>
        {% assign posts = tag[1] | reverse %}
        {% for post in posts  %}
            <a href="{{ post.url | relative_url }}">{{ post.date | date: '%e %B' }}</a>{% unless forloop.last %}, {% endunless %}
        {% endfor %}
    </li>
{% endfor %}
</ul>
