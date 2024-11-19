---
title: Editorial Markup
description: Interact with the Markup tools 
permalink: /docs/advanced/markup/
layout: page
---
# Editorial Markup    
The editorial markup records changes made to a musical text during its creation and editing. It documents alterations by the composer, copyists, or editors, ensuring transparency and clarity in the editorial process.

## Markup tools
The markup tools may be accessed by clicking the corresponding 'highlighter' icon in the panel icons area at the top-right of the interface (Fig.&thinsp;1).

<figure class="halfwidth">
    <div class="figure-title">Fig.&thinsp;1: The 'enrichment panel' icon.</div>
    
        <img class="figure-img" src="{{ site.baseurl }}/assets/img/annotation/panelIcons-Highlight.png" 
            alt="'Annotation Panel' icon" />
    <figcaption class="figure-caption">The 'enrichment panel' (highlighter) icon at the top-right corner of the interface may be used to open and close the enrichment panel. </figcaption>
</figure>

The enrichment panel has three tabs:

* `Enrichment list`, to obtain a quick overview of the annotations and editorial markups currently present within your encoding
* `Markup tools`, to create editorial observations in and interventions to the text
* `Annotation tools`, to generate annotations

### Markup settings

In the markup settings, the person responsible for the editorial changes and the corresponding elements can be selected (Fig.&thinsp;2).

Under `Selected elements`  you can either select you own elements (one or more) in the editor panel or in the notation panel. 
Under `Accidentals` and `Articulation`

<figure class="halfwidth">
    <div class="figure-title">Fig.&thinsp;2: Markup settings</div>
        <img class="figure-img" src="{{ site.baseurl }}/assets/img/markup/selecting_resp.gif" 
            alt="Inserting dynamics and inverting its placement" />
    <figcaption class="figure-caption">Selecting the markup responsibility and the element selection for the markup.</figcaption>
</figure>

But in order to have responsible persons to choose from the drop down menu, there must be a responsibility statement (<a href="https://music-encoding.org/guidelines/v5/elements/respStmt.html">`<respStmt>`</a>) in the MEI-Header (<a href="https://music-encoding.org/guidelines/v5/elements/meiHead.html">`<meiHead>`</a>). It is important that each `<persName>` entry has an `xml:id` attribute (Fig.&thinsp;3).

<figure class="figure">
    <div class="figure-title">Fig.&thinsp;3: Responsibility statement</div>
        <img class="figure-img" src="{{ site.baseurl }}/assets/img/markup/respStmt.png"/>
    <figcaption class="figure-caption">The two names from the markup setting appear because they are defined in the responsibility statement in the MEI-Header.</figcaption>
</figure>




