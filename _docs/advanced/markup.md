---
title: Critical Apparatus & Editorial Markup
description: Interact with the Markup tools 
permalink: /docs/advanced/markup/
layout: page
---
# Critical Apparatus & Editorial Markup 
Previously, mei-friend's functionalities targeting MEI's critical apparatus and editorial markup were limited to insertion and display of [`<supplied>`](https://music-encoding.org/guidelines/v5/elements/supplied.html){:target="_blank"} elements.

Since then there have been updates in adding functionalities to the editorial markup. Now it is possible to insert and display [`<supplied>`](https://music-encoding.org/guidelines/v5/elements/supplied.html){:target="_blank"}, [`<choice>`](https://music-encoding.org/guidelines/v5/elements/choice.html){:target="_blank"}, [`<unclear>`](https://music-encoding.org/guidelines/v5/elements/unclear.html){:target="_blank"}, [`<sic>`](https://music-encoding.org/guidelines/v5/elements/sic.html){:target="_blank"}, [`<corr>`](https://music-encoding.org/guidelines/v5/elements/corr.html){:target="_blank"}, [`<orig>`](https://music-encoding.org/guidelines/v5/elements/orig.html){:target="_blank"}, [`<reg>`](https://music-encoding.org/guidelines/v5/elements/reg.html){:target="_blank"}, [`<add>`](https://music-encoding.org/guidelines/v5/elements/add.html){:target="_blank"}, [`<del>`](https://music-encoding.org/guidelines/v5/elements/del.html){:target="_blank"} elements. More information [here]({{ site.baseurl }}/docs/advanced/markup).

We plan to support working with [`<app>`](https://music-encoding.org/guidelines/v5/elements/app.html){:target="_blank"} in future development. 

## Editorial Markup

The editorial markup records changes made to a musical text during its creation and editing. It documents alterations by the composer, copyists, or editors, ensuring transparency and clarity in the editorial process.

### Markup tools
The markup tools may be accessed by clicking the corresponding 'highlighter' icon in the panel icons area at the top-right of the interface (Fig.&thinsp;1).

<figure class="halfwidth">
    <div class="figure-title">Fig.&thinsp;1: The 'enrichment panel' icon.</div>
    
        <img class="figure-img" src="{{ site.baseurl }}/assets/img/annotation/panelIcons-Highlight.png" 
            alt="'Annotation Panel' icon" />
    <figcaption class="figure-caption">The 'enrichment panel' (highlighter) icon at the top-right corner of the interface may be used to open and close the enrichment panel. </figcaption>
</figure>

The enrichment panel has four tabs:

* `Enrichment list`, to obtain a quick overview of the annotations and editorial markups currently present within your encoding
* `Markup tools`, to create editorial observations in and interventions to the text
* `Annotation tools`, to generate annotations
* `Login to Solid`

#### Markup settings

##### Select markup responsibility

In the markup settings, the person responsible for the editorial changes can be selected (Fig.&thinsp;2).

But in order to have options to choose from the drop down menu of the markup responsibility setting, there must be a responsibility statement (<a href="https://music-encoding.org/guidelines/v5/elements/respStmt.html">`<respStmt>`</a>) in the MEI-Header (<a href="https://music-encoding.org/guidelines/v5/elements/meiHead.html">`<meiHead>`</a>) of your code. It is important that each `<persName>` entry has an `xml:id` attribute (Fig.&thinsp;3).


<figure class="halfwidth">
    <div class="figure-title">Fig.&thinsp;2: Markup settings</div>
        <img class="figure-img" src="{{ site.baseurl }}/assets/img/markup/selecting_resp.gif" 
            alt="Inserting dynamics and inverting its placement" />
    <figcaption class="figure-caption">Selecting the markup responsibility and the element selection for the markup.</figcaption>
</figure>

<figure class="figure">
    <div class="figure-title">Fig.&thinsp;3: Responsibility statement</div>
        <img class="figure-img" src="{{ site.baseurl }}/assets/img/markup/respStmt.png"/>
    <figcaption class="figure-caption">The two names from the markup setting appear because they are defined in the responsibility statement in the MEI-Header.</figcaption>
</figure>

#### Default selection for markup

It is possible to specify different selections for the markup. 

Under `Selected elements`  you can either select you own elements (one or more) in the editor panel or in the notation panel. 

Under `Accidentals` only the accidentals of a note or multiple notes will be selected. This function especially useful if the accidental is embedded as an attribute of the note and will turn it into an element within the note:


```
Before editing:
<note accid="n" dur="16" oct="4" pname="g" stem.dir="up" />

After using the accidental selection:
<note dur="16" oct="4" pname="g" stem.dir="up">
	<sic>
		<accid accid="n"/>
	</sic>
</note>
```
Under `Articulation` only the accidentals of a note, a chord or multiple notes/chords will be selected. This function particularly useful if the articulation is embedded as an attribute of the note and will turn it into an element within the note for example:

```
Before editing:
<note artic="stacc" dur="8" oct="5" pname="b" stem.dir="down" />

After using the articulation selection:
<note dur="8" oct="5" pname="b" stem.dir="down">
	<sic>
		<artic artic="stacc"/>
	</sic>
</note>
```

#### Add alternative encodings

The <a href="https://music-encoding.org/guidelines/v5/elements/choice.html">`<choice>`</a> element groups a series of alternative encodings for the same place in a text. 

You can either indicate and correct apparent errors (<span style="color:#b30000">`<sic>`</span> <span style="color:#408000">`<corr>`</span>) as seen in the following example:


```
<choice>
	<span style="color:#b30000">
      <sic>
         <note dur="2" oct="4" pname="g"></note>
      </sic>
	</span>      
      <corr>
         <note dur="4" oct="4" pname="g"></note>
      </corr>
</choice>
```

or indicate regularization of variant, irregular and non-standard forms (<span style="color:#993399">`<orig>`</span> <span style="color:#3300cc">`<reg>`</span>):

```
<choice>
   <orig>
      <clef line="2" shape="C"></clef>
   </orig>
   <reg>
      <clef line="2" shape="G"></clef>
   </reg>
</choice>
```
##### Interventions in the text

The <a href="https://music-encoding.org/guidelines/v5/elements/subst.html">`<subst>`</a> element groups transcriptional elements when the combination is to be regarded as a single intervention in the text. 
The most common combination is a replacement of portions of the musical text using both the <span style="color:#8585ad">`<del>`</span> and <span style="color:#00cccc">`<add>`</span> element:

```
<subst>
    <del>
    	<note dur="4" oct="4" pname="c"></note>
    </del>
    <add>
    	<beam>
            <note dur="8" oct="4" pname="c"></note>
            <note dur="8" oct="4" pname="d"></note>
    	</beam>
    </add>
</subst>
```
#### Add editorial interventions

<span style="color:#e69500">`<supplied>`</span>: Contains material supplied by the transcriber or editor for any reason.

<span style="color:#964036">`<unclear>`</span>: Contains material that cannot be transcribed with certainty because it is illegible or inaudible in the source.

<span style="color:#b30000">`<sic>`</span>: Contains apparently incorrect or inaccurate material.

<span style="color:#408000">`<corr>`</span>: Contains  the correct form of an apparent erroneous passage.

<span style="color:#993399">`<orig>`</span>: Contains material that is marked as following the original rather than being normalized or corrected.

<span style="color:#3300cc">`<reg>`</span>: Contains material that has been regularized or normalized in some sense.

#### Add descriptive markup

<span style="color:#00cccc">`<add>`</span>: Marks an addition to the text.

<span style="color:#8585ad">`<del>`</span>: Contains information deleted, marked as deleted, or otherwise indicated as superfluous or spurious in the copy text by an author, scribe, annotator, or corrector.


