---
title: Enrichment List
description: Overview of annotations and editorial markup and interacting with them
permalink: /docs/advanced/enrichlist/
layout: page
---
# Enrichment List 

The 'List' tab of the enrichment panel (Fig.&thinsp;1) provides a convenient overview of all annotations and editorial markup loaded for the current encoding -- all inline `<annot>` and any [stand-off annotations loaded from the Web](#loading-stand-off-annotations-from-the-web) alongside all [markup elements]({{ site.base_url}}/docs/advanced/markup), unless these exceed the [maximum number of annotations setting]({{ site.base_url}}/docs/basic/settings#annotations)). 

<figure class="figure">
    <div class="figure-title">Fig.&thinsp;1: The enrichment list</div>
        <img class="figure-img" src="{{ site.baseurl }}/assets/img/enrichlist/enrichmentList.gif" 
            alt="'List' tab of the Annotation panel"/>
    <figcaption class="figure-caption">The 'List' tab of the Enrichment Panel lists all currently loaded editorial markup and annotations. </figcaption>
</figure>

Each entry is represented by a coloured 'bubble' (rounded rectangle), each split into an upper and lower region (see Fig.&thinsp;1). 

The upper region characterizes the annotation's meaning, location, and extent:
* *Type*, represented by a corresponding color and icon (highlighter: [highlight]({{ site.base_url}}/docs/advanced/annotation#highlight), pencil: [describe]({{ site.base_url}}/docs/advanced/annotation#describe), chain-link: [link]({{ site.base_url}}/docs/advanced/annotation#link), magnifying glasses: [editorial markup]({{ site.base_url}}/docs/advanced/markup))
* *Location*, represented by a page number (or span of page numbers) corresponding to the (current) page location of the annotated element(s) in the rendered notation -- updated dynamically to track layout changes
* *Extent*, representing the number of elements annotated
* *Body*, in the case of [describe]({{ site.base_url}}/docs/advanced/annotation#describe) and [link]({{ site.base_url}}/docs/advanced/annotation#link) annotations, reflecting the textual description or link entered when creating the annotation

The lower region exposes four icons used to interact with the annotation:
* *Flip to page* (page icon with arrow), to jump to and select the `<annot>` (inline annotations) or the first annotated element (stand-off annotations) annotated element within the editor and notation panels
* *Inline indicator* (page icon with `<>` symbol), when not grayed out, indicates that the annotation is represented by an inline `<annot>` -- click the icon to copy the corresponding `<annot@xml:id>`to the 
clipboard. 
* *Stand-off indicator* (RDF icon, three connected circles -- nodes -- representing a graph), when not grayed out, indicates that the annotation is represented by a stand-off Web Annotation -- click the icon to copy the corresponding URI to the clipboard.
* *Delete annotation* (square icon with `-`), to delete an annotation or editorial markup; this will remove inline `<annot>` elements and editorial markup elements, send an `HTTP DELETE` request to attempt to remove stand-off Web Annotations, and unload the annotation or markup from the enrichment list. 

Note that we are planning functionality to convert between inline and stand-off annotations using the respective indicator icons in future development. 

#### Loading stand-off annotations from the Web
When working with an encoding [loaded from the Web via URL]({{ site.base_url }}/docs/basic/import-export/#open-url-and-public-repertoire) or through the [GitHub integration]({{ site.base_url }}/docs/basic/import-export), [Web Annotations targetting element (fragment) URIs within the encoding](#background-targetting-stand-off-annotations) may be loaded in by clicking on the `Load Web Annotation(s)` button with the RDF icon at the top of the [annotations list](#the-annotations-list). When prompted for a URI after clicking this button, you may either enter the URI of a Web Annotation to load it directly; or, you may enter the URI of a [Linked Data Platform](https://www.w3.org/TR/ldp/){:target="_blank"} (LDP) container -- such as those offered by [Solid Pods](https://solidproject.org/){:target="_blank"} -- in which case, any Web Annotations targetting the currently loaded encoding within the container (or, recursively, within contained containers) will be loaded for you.