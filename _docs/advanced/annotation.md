---
title: Annotating music encodings
description: Handle annotations in and of MEI encodings
permalink: /docs/advanced/annotation/
layout: page
---
# Annotating music encodings

Annotation is an important affordance of musical score within a variety of use-cases including music rehearsal, performance, and scholarly analysis. Currently, mei-friend features rudimentary support for different kinds of annotation, and this is a feature we are planning to develop further in the future. [Feature requests](https://github.com/mei-friend/mei-friend/issues/new?template=feature_request.md){:target="_blank"} on this topic, as well as other aspects of mei-friend, are gladly received!

## Inline vs. stand-off annotations

mei-friend supports two distinct annotation modalities: inline annotations, created within the MEI document, using the <a href="https://music-encoding.org/guidelines/v5/elements/annot.html">`<annot>` element</a>; and, stand-off annotations, created using external [Linked Data](https://www.w3.org/DesignIssues/LinkedData.html){:target="_blank"} structures which target elements within the document.

The two modalities each have their benefits and drawbacks. Inline annotations are housed within the MEI document, which is useful where they are intended to be readily available to the encoding's audience -- they are tightly coupled (indeed, part of) the MEI document they are describing. However, they can only be created by those with write-access to the MEI encoding. Of course, a user might download an MEI file from a Web server and then add `<annot>` elements locally; but these annotations would not be available to others viewing the file at its original location, unless it were overwritten by the newly-annotated version. 

In contrast, stand-off annotations use Linked Data structures to annotate target elements within Web-hosted MEI documents. As these annotations are not housed directly within the MEI document, they must be discovered in order to be read; however, as the annotations refer directly to the MEI document in order to identify elements within it (see [Targetting stand-off annotations](#background-targetting-stand-off-annotations)), the targetted document can be implicitly discovered from a given annotation. 

{% include alert.html type="warning" title="Reading and writing annotations" content="mei-friend currently supports reading and writing of inline annotations, and reading (loading) simple stand-off annotations stored on the Web in compliance with the Web Annotation Data Model. Writing stand-off annotations in this format, automated mapping between inline and stand-off annotations, and support for more music-specific stand-off annotation models, are planned for future development." %}


## The enrichment panel 
Annotations may be generated and listed using the enrichment panel. This panel may be accessed via the menu by selecting `View->Enrichment panel`, via keyboard shortcut `CTRL-A`(or `CMD-A`on a Mac), or by clicking the corresponding 'highlighter' icon in the panel icons area at the top-right of the interface (Fig.&thinsp;1). 

<figure class="thirdwidth">
    <div class="figure-title">Fig.&thinsp;1: The 'enrichment panel' icon.</div>
        <img class="figure-img" src="{{ site.baseurl }}/assets/img/annotation/panelIcons-Highlight.png" 
            alt="'Annotation Panel' icon" />
    <figcaption class="figure-caption">The 'enrichment panel' (highlighter) icon at the top-right corner of the interface may be used to open and close the annotation panel. </figcaption>
</figure>

The enrichment panel has four tabs -- `Annotation Tools` to generate annotations, `Markup Tools`  to create editorial observations in and interventions to the text, `List` to obtain a quick overview of the annotations currently present within your encoding and an option to log in to Solid.

### Tools for making annotations 
To generate inline annotations using mei-friend, you must first [select one or more score elements]({{ site.base_url }}/docs/basic/inserting/#selecting-elements) that you wish to annotate. Note that [each element must possess a valid `@xml:id` attribute]({{ site.base_url }}/docs/basic/manipulating/#add-ids-to-or-remove-from-mei-encoding) in order to be annotated. 

Choose among the tools available through the annotation panel to annotate your selection (Fig.&thinsp;2). Currently implemented annotation types include [`Highlight`](#highlight) (highlighter icon), [`Describe`](#describe) (pencil icon), and [`Link`](#link) (chain-link icon). 

<figure class="thirdwidth">
    <div class="figure-title">Fig.&thinsp;2: Annotation tools.</div>
        <img class="figure-img" src="{{ site.baseurl }}/assets/img/annotation/annotationPanel-Tools.png" 
            alt="'Tools' tab of the Annotation panel" />
    <figcaption class="figure-caption">The 'Tools' tab of the Annotation Panel provides access to the currently implemented annotation functionalities. </figcaption>
</figure>

#### Highlight 
The 'Highlight' tool (highlighter icon) creates an inline annotation that targets each selected element: an <a href="https://music-encoding.org/guidelines/v5/elements/annot.html">`annot` element</a> with each selected element's `@xml:id` in its [`<annot@plist>`](https://music-encoding.org/guidelines/v5/elements/annot.html#attributes){:target="_blank"}. The `<annot>` is placed within the encoding at the [closest valid location](https://music-encoding.org/guidelines/v5/elements/annot.html#containedBy){:target="_blank"} relative to the first selected element.

If the [`Show annotations`]({{ site.base_url}}/docs/basic/settings#annotations) setting is not disabled, the selected elements will be highlighted using green shading within the notation panel (Fig.&thinsp;3).

<figure class="thirdwidth">
    <div class="figure-title">Fig.&thinsp;3: A 'highlight' annotation.</div>
        <img class="figure-img" src="{{ site.baseurl }}/assets/img/annotation/highlight.png" 
            alt="Rendered 'highlight' annotation" />
    <figcaption class="figure-caption">A highlighted grace-note (green shading). </figcaption>
</figure>

#### Describe
The `Describe` tool (pencil icon) creates an inline annotation using the same mechanism as the [`Highlight`](#highlight) tool. In addition, it pops up an alert window to prompt the user to enter a textual description. This description is then entered into the [body of the generated `annot` element](https://music-encoding.org/guidelines/v5/elements/annot.html#mayContain){:target="_blank"} as textual content. 

#

<figure class="thirdwidth">
    <div class="figure-title">Fig.&thinsp;4: A 'describe' annotation.</div>
        <img class="figure-img" src="{{ site.baseurl }}/assets/img/annotation/describe.png" 
            alt="Rendered 'describe' annotation" />
    <figcaption class="figure-caption">Some described notes (blue shading). The description appears as a tooltip on hover. </figcaption>
</figure>

#### Link
The `Link` tool (chain-link icon) creates an inline annotation using the same mechanism as the [`Highlight`](#highlight) tool. In addition, it pops up an alert window to prompt the user to enter a URI (Web address). This URI is then entered into the [body of the generated `annot` element](https://music-encoding.org/guidelines/v5/elements/annot.html#mayContain){:target="_blank"} as a [`ptr`](https://music-encoding.org/guidelines/v5/elements/ptr.html){:target="_blank"} element with its [`<ptr@target>`](https://mu/ic-encoding.org/guidelines/v4/elements/ptr.html#attributes){:target="_blank"} pointing to the supplied URI. 

If the [`Show annotations`]({{ site.base_url}}/docs/basic/settings#annotations)) setting is not disabled, the selected elements will be highlighted using red shading within the notation panel (Fig.&thinsp;3). The mouse cursor will turn into a pointer indicator when hovering over the selected elements, and a tooltip will display the URI entered by the user (Fig.&thinsp;5). Clicking on a selected element will open the URI in a new browser tab.

<figure class="halfwidth">
    <div class="figure-title">Fig.&thinsp;5: A 'link' annotation.</div>
        <img class="figure-img" src="{{ site.baseurl }}/assets/img/annotation/link.png" 
            alt="Rendered 'link' annotation" />
    <figcaption class="figure-caption">A linked phrase (red shading). The link target URI appears as a tooltip on hover; clicking will open the target in a new tab. </figcaption>
</figure>

### The annotations list

<figure class="thirdwidth">
    <div class="figure-title">Fig.&thinsp;6: Annotations list.</div>
        <img class="figure-img" src="{{ site.baseurl }}/assets/img/annotation/annotationPanel-List.png" 
            alt="'List' tab of the Annotation panel" />
    <figcaption class="figure-caption">The 'List' tab of the Annotation Panel lists all currently loaded annotations. </figcaption>
</figure>

The 'List' tab of the annotations panel (Fig.&thinsp;6) provides a convenient overview of all annotations loaded for the current encoding -- all inline `<annot>` alongside any [stand-off annotations loaded from the Web](#loading-stand-off-annotations-from-the-web), unless these exceed the [maximum number of annotations setting]({{ site.base_url}}/docs/basic/settings#annotations)). 

Each annotation is represented by a 'bubble' (rounded rectangle), each split into an upper and lower region (see Fig.&thinsp;6). 

The upper region characterizes the annotation's meaning, location, and extent:
* *Type*, represented by a corresponding icon (highlighter: [highlight](#highlight), pencil: [describe](#describe), chain-link: [link](#link))
* *Location*, represented by a page number (or span of page numbers) corresponding to the (current) page location of the annotated element(s) in the rendered notation -- updated dynamically to track layout changes
* *Extent*, representing the number of elements annotated
* *Body*, in the case of [describe](#describe) and [link](#link) annotations, reflecting the textual description or link entered when creating the annotation

The lower region exposes four icons used to interact with the annotation:
* *Flip to page* (page icon with arrow), to jump to and select the `<annot>` (inline annotations) or the first annotated element (stand-off annotations) annotated element within the editor and notation panels
* *Inline indicator* (page icon with `<>` symbol), when not grayed out, indicates that the annotation is represented by an inline `<annot>` -- click the icon to copy the corresponding `<annot@xml:id>`to the 
clipboard. 
* *Stand-off indicator* (RDF icon, three connected circles -- nodes -- representing a graph), when not grayed out, indicates that the annotation is represented by a stand-off Web Annotation -- click the icon to copy the corresponding URI to the clipboard.
* *Delete annotation* (square icon with `-`), to delete an annotation; this will remove inline `<annot>` elements, send an `HTTP DELETE` request to attempt to remove stand-off Web Annotations, and unload the annotation from the annotation list. 

Note that we are planning functionality to convert between inline and stand-off annotations using the respective indicator icons in future development. 

#### Loading stand-off annotations from the Web
When working with an encoding [loaded from the Web via URL]({{ site.base_url }}/docs/basic/import-export/#open-url-and-public-repertoire) or through the [GitHub integration]({{ site.base_url }}/docs/basic/import-export), [Web Annotations targetting element (fragment) URIs within the encoding](#background-targetting-stand-off-annotations) may be loaded in by clicking on the `Load Web Annotation(s)` button with the RDF icon at the top of the [annotations list](#the-annotations-list). When prompted for a URI after clicking this button, you may either enter the URI of a Web Annotation to load it directly; or, you may enter the URI of a [Linked Data Platform](https://www.w3.org/TR/ldp/){:target="_blank"} (LDP) container -- such as those offered by [Solid Pods](https://solidproject.org/){:target="_blank"} -- in which case, any Web Annotations targetting the currently loaded encoding within the container (or, recursively, within contained containers) will be loaded for you.

## Background: Targetting stand-off annotations 
The Linked Data paradigm involves the interconnection (linking) of resources stored on the Web by reference to their Web addresses or URIs. Any MEI document stored on the Web has its own URI; for instance, the following URI is the Web address of a sample encoding of an arrangement of Beethoven's *Hymn to Joy*:

<https://raw.githubusercontent.com/music-encoding/sample-encodings/main/MEI_4.0/Music/Complete_examples/Beethoven_Hymn_to_joy.mei>

You can [click here](https://mei-friend.mdw.ac.at/?file=https://raw.githubusercontent.com/music-encoding/sample-encodings/main/MEI_4.0/Music/Complete_examples/Beethoven_Hymn_to_joy.mei&select=d1e5417,d1e5433,d1e5449,d1e5463,d1e6205,d1e6219,d1e6233,d1e6249){:target="_blank"} to open this file using mei-friend. If you do so, you should see a number of MEI elements selected for you: eight notes forming the first half of the opening phrase of the verse in the trombone part. Each of these notes has an `@xml:id` associated with it; in this case, `d1e5417`, `d1e5433`, and so on. Each `@xml:id` can be turned into a globally-unique URI referencing the specified note within this particular Web-hosted MEI file, using a concept called [URI fragments](https://en.wikipedia.org/wiki/URI_fragment){:target="_blank"}. This works by taking the URI of the MEI file as provided above, and appending a `#` symbol, followed by the respective `@xml:id`, like so:

* <https://raw.githubusercontent.com/music-encoding/sample-encodings/main/MEI_4.0/Music/Complete_examples/Beethoven_Hymn_to_joy.mei#d1e5417>
* <https://raw.githubusercontent.com/music-encoding/sample-encodings/main/MEI_4.0/Music/Complete_examples/Beethoven_Hymn_to_joy.mei#d1e5433>
* and so on.

{% include alert.html type="info" title="Identifiers and URI fragments" content="Any MEI element identified with an <code>@xml:id </code> can be refered to by a URI using the 'fragments' approach discussed above, as long as the MEI file itself has a URI (i.e., is hosted on the Web). Conversely, MEI elements <em>must</em> have an <code>@xml:id</code> to be referenced via a URI." %}

Different Linked Data structures of varying complexity and abstraction may be used to annotate MEI elements by reference to their (fragment) URIs. Currently, mei-friend supports annotations adhering to the [Web Annotation Data Model](https://www.w3.org/TR/annotation-model/){:target="_blank"}, but support of more music-specific annotation models -- see [further reading](/docs/furtherreading) -- is under development.
