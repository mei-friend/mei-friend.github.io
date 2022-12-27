---
title: Navigation
description: The many ways to navigate in encodings and notation
permalink: /docs/basic/navigation/
layout: page 
---
# Navigation

To navigate the notation you can use various keyboard shortcuts using the arrow keys specified [here]({{ site.baseurl}}/cheatsheet/#navigating-through-notation).

<figure class="halfwidth">
    <div class="figure-title">Fig.&thinsp;1: Navigation in the notation panel.</div>
        <img class="figure-img" src="{{ site.baseurl }}/assets/img/navigation/navigation_notation_panel.PNG" 
            alt="Navigation in the notation panel" />
    <figcaption class="figure-caption">The navigation control bar in the notation panel.</figcaption>
</figure>

Using the navigation section in the notation control bar you can flip through the pages of your rendered MEI-file or put in a page number that you want to jump to. Important to note is that the notation panel will follow curser location in the editor panel to the corresponding encoding part as long as this feature is enabled ("auto flip page").

It might make sense to insert `<section>` elements into your encoding to better structure the music. You can directly jump to one of these sections in the drop down menu labeled "select section" in Fig.1. The list will contain any section AND also all `<ending>` elements which count as sections.

<figure class="thirdwidth">
    <div class="figure-title">Fig.&thinsp;2: Drop down section menu.</div>
        <img class="figure-img" src="{{ site.baseurl }}/assets/img/navigation/section-menu.PNG" 
            alt="Drop down section menu" />
    <figcaption class="figure-caption">Example from Beethoven "Sechs Variationen", WoO 70.</figcaption>
</figure>