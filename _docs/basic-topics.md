---
title: Basic topics
permalink: /docs/basic/
layout: page 
---
# Basic topics

Here we describe basic topcis related to the usage of mei-friend.

This is a test code:

<div class="section-index">
    <hr class="panel-line">
    {% for post in site.docs %}  
    {% if post.url contains page.url %}
        <div class="entry">
        <h5><a href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a></h5>
        <p>post.description: {{ post.description }}</p>
        <p>post.url: {{ post.url }}</p>
        <p>section.url: {{ section.url }}</p>
        <p>page.url: {{ page.url }}</p>
    </div>
    {% endif %}
    {% endfor %}
</div>