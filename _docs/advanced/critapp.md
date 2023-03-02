---
title: Critical apparatus
description: Interact with MEI critical apparatus 
permalink: /docs/advanced/critapp/
layout: page
---
# Critical apparatus    
At the moment, mei-friend's functionalities targeting MEI's critical apparatus and editorial markup is limited to insertion and display of [`supplied`](https://music-encoding.org/guidelines/v4/elements/supplied.html){:target="_blank"} elements, as described below.  We plan to support working with [`<app>`](https://music-encoding.org/guidelines/v4/elements/app.html){:target="_blank"} and [`<choice>`](https://music-encoding.org/guidelines/v4/elements/choice.html){:target="_blank"} in future development. 
## Supplied editorial content
### Displaying supplied elements

Supplied elements (i.e., elements wrapped within [`<supplied>`](https://music-encoding.org/guidelines/v4/elements/supplied.html){:target="_blank"}) are highlighted in the notation panel when the respective option in the 'Handle editorial content' section of the [mei-friend settings menu]({{ site.baseurl }}/docs/basic/settings) is activated. This menu also allows the highlight color to be selected using a color picker (default: orange), and provides for the selection of responsibilities for supplied elements inserted with mei-friend ([see below](#inserting-supplied-element)). 

An example of a scholarly encoding with supplied elements is provided in Fig. 1, showing an excerpt of the first movement of the Symphony K.550 by Wolfgang Amadeus Mozart available from the <a href="https://dme.mozarteum.at/en/music/edition/" target="_blank">Digital Interactive Mozart Edition (DIME)</a> by <a href="https://mozarteum.at" target="_blank">The Salzburg Mozarteum Foundation</a>. 

<figure class="figure">
    <div class="figure-title">Fig.&thinsp;1: Supplied elements highlighted in orange.</div>
    <a href="https://dme.mozarteum.at/movi/navigator/11586" target="_blank">
       <img class="figure-img" src="{{ site.baseurl }}/assets/img/markup/Critical-supplied-DIME.png" 
        alt="Highlighted supplied elements in an excerpt by the Digital Interactive Mozart Edition." />
    </a>
    <figcaption class="figure-caption">Supplied elements (highlighted in orange) in an excerpt of an MEI encoding from the <a href="https://dme.mozarteum.at/en/music/edition/" target="_blank">Digital Interactive Mozart Edition (DIME)</a> by <a href="https://mozarteum.at" target="_blank">The Salzburg Mozarteum Foundation</a>.</figcaption>
</figure>

### Inserting supplied element

To mark one or more [permitted elements](https://music-encoding.org/guidelines/v4/elements/supplied#mayContain){:target="_blank"} as supplied, select the elements in the notation and press `U`. This will enclose the selected elements in a [`supplied`](https://music-encoding.org/guidelines/v4/elements/supplied#mayContain){:target="_blank"} element, which will be furnished with a responsibility attribute (`@resp`). The value of this attribute must first be chosen from the `Select <supplied> responsibility` drop-down menu in the 'Handle editorial content' section of the [mei-friend settings]({{ site.baseurl }}/docs/basic/settings). The values available in this drop-down menu are automatically populated from the responsibility statement list in the header of the current MEI file. 

There are two more specialized functions to enclose a child `artic` (`CTRL-U`) or `accid` (`CTRL-SHIFT-U`) element of a selected `note` or `chord` element in a `surround` element as described above. When the articulation or the accidental is coded as attribute (e.g., `note@artic`), these get converted to separate child elements before embedded in the supplied element. When the target element to be manipulated is a `chord`, please make sure to `ALT-click` on (or `ALT-drag-select`) a note in the chord to select the chord rather than solely the note in that chord.

Note: If the `xml:id` of the selected element follows the coding convention of the [DIME](https://mozarteum.at/dime){:target="_blank"} (such as `note_4836`), the trailing number will be retained for the ids of the inserted elements while updating the beginning of the id with the respective element name. 

(Thanks to Oleksii Sapov (`@o-sapov`) of the DIME for providing the suggestion for some of this functionality.)
