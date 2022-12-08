---
title: Critical apparatus
description: Interact with MEI critical apparatus 
permalink: /docs/advanced/critapp/
layout: page
---
# Critical apparatus    

Here we describe functionality yet to be completed. We plan to support  `<app>` and `<choice>` with all allowed children in a useful way yet to be discussed.
To date, only the `<supplied>` element is supported for display and in inserting.

## Supplied element

### Displaying supplied elements

Supplied elements are highlighted by color in mei-friend, when the respective option in the mei-friend settings menu is activated. There, also the display color can be chosen from a color picker interface (by default orange). An example of a scholarly encoding with supplied elements is provided in Fig. 1, showing an excerpt of the first movement of the Symphony K.550 by Wolfgang Amadeus Mozart in the <a href="https://dme.mozarteum.at/movi/en" target="_blank">Digital Mozart Edition</a> of the Stiftung Mozarteum Salzburg. 

<figure class="figure">
    <div class="figure-title">Fig.&thinsp;1: Supplied elements highlighted in orange.</div>
    <a href="https://dme.mozarteum.at/movi/navigator/11586" target="_blank">
       <img class="figure-img" src="{{ site.baseurl }}/assets/img/markup/Critical-supplied-DIME.png" 
        alt="Highlighted supplied elements in an excerpt by the Digital Mozart Edition." />
    </a>
    <figcaption class="figure-caption">Highlighted supplied elements in an excerpt of an MEI encoding by the <a href="https://dme.mozarteum.at/movi/en" target="_blank">Digital Mozart Edition</a> by the Mozarteum Salzburg. Note that the encoding of the first movement of the Symphony K.550 exceeds the local storage capacity of the browser, resulting in a warning message next to the file name.</figcaption>
</figure>

### Inserting supplied element

To insert an supplied element into an encoding, select an [allowed element](https://music-encoding.org/guidelines/v4/elements/supplied){:target="_blank"} in the notation and press `U`. This will surround the selected elements with a supplied element and a responsibility attribute (`@resp`) to each of it.
The responsibility statement has to be chosen beforehand from an input select in the mei-friend settings menu, which is automatically populated from the responsibility statement list in the header of the MEI file. 
