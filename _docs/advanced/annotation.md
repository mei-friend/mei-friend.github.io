---
title: Annotating music encodings
description: Handle annotations in and of MEI encodings
permalink: /docs/advanced/annotation/
layout: page
---
# Annotating music encodings

Annotation is an important affordance of musical score within a variety of use-cases including music rehearsal, performance, and scholarly analysis. Currently, mei-friend features rudimentary support for different kinds of annotation, and this is a feature we are planning to develop further in the future. [Feature requests](https://github.com/mei-friend/mei-friend/issues/new?template=feature_request.md) on this topic, as well as other aspects of mei-friend, are gladly received!

## Inline vs. stand-off annotations

mei-friend supports two distinct annotation modalities: inline annotations, created within the MEI document, using the <a href="https://music-encoding.org/guidelines/v4/elements/annot.html">`<annot>` element</a>; and, stand-off annotations, created using external [Linked Data](https://www.w3.org/DesignIssues/LinkedData.html) structures which target elements within the document.

The two modalities each have their benefits and drawbacks. Inline annotations are housed within the MEI document, which is useful where they are intended to be readily available to the encoding's audience -- they are tightly coupled (indeed, part of) the MEI document they are describing. However, they can only be created by those with write-access to the MEI encoding. Of course, a user might download an MEI file from a Web server and then add `<annot>` elements locally; but these annotations would not be available to others viewing the file at its original location, unless it were overwritten by the newly-annotated version. 

In contrast, stand-off annotations use Linked Data structures to annotate target elements within Web-hosted MEI documents. As these annotations are not housed directly within the MEI document, they must be discovered in order to be read; however, as the annotations refer directly to the MEI document in order to identify elements within it (see [Targetting stand-off annotations](#targetting-stand-off-annotations)), the targetted document can be implicitly discovered from a given annotation. 


## Background: Targetting stand-off annotations 
The Linked Data paradigm involves the interconnection (linking) of resources stored on the Web by reference to their Web addresses or URIs. Any MEI document stored on the Web has its own URI; for instance, the following URI is the Web address of a sample encoding of an arrangement of Beethoven's *Hymn to Joy*:

<https://raw.githubusercontent.com/music-encoding/sample-encodings/main/MEI_4.0/Music/Complete_examples/Beethoven_Hymn_to_joy.mei>

You can [click here](https://mei-friend.mdw.ac.at/?file=https://raw.githubusercontent.com/music-encoding/sample-encodings/main/MEI_4.0/Music/Complete_examples/Beethoven_Hymn_to_joy.mei&select=d1e5417,d1e5433,d1e5449,d1e5463,d1e6205,d1e6219,d1e6233,d1e6249) to open this file using mei-friend. If you do so, you should see a number of MEI elements selected for you: eight notes forming the first half of the opening phrase of the verse in the trombone part. Each of these notes has an `@xml:id` associated with it; in this case, `d1e5417`, `d1e5433`, and so on. Each `@xml:id` can be turned into a globally-unique URI referencing the specified note within this particular Web-hosted MEI file, using a concept called [URI fragments](https://en.wikipedia.org/wiki/URI_fragment). This works by taking the URI of the MEI file as provided above, and appending a `#` symbol, followed by the respective `@xml:id`, like so:

* <https://raw.githubusercontent.com/music-encoding/sample-encodings/main/MEI_4.0/Music/Complete_examples/Beethoven_Hymn_to_joy.mei#d1e5417>
* <https://raw.githubusercontent.com/music-encoding/sample-encodings/main/MEI_4.0/Music/Complete_examples/Beethoven_Hymn_to_joy.mei#d1e5433>
* and so on.

{% include alert.html type="info" title="Identifiers and URI fragments" content="Any MEI element identified with an <code>@xml:id </code> can be refered to by a URI using the 'fragments' approach discussed above, as long as the MEI file itself has a URI (i.e., is hosted on the Web). Conversely, MEI elements <em>must</em> have an <code>@xml:id</code> to be referenced via a URI." %}

Different Linked Data structures of varying complexity and abstraction may be used to annotate MEI elements by reference to their (fragment) URIs. Currently, mei-friend supports annotations adhering to the [Web Annotation Data Model](https://www.w3.org/TR/annotation-model/), but support of more music-specific annotation models -- see [further reading](/docs/furtherreading) -- is under development.


## The annotation panel 

TODO screenshot showing annotation panel icon

TODO screenshot of panel with labels

{% include alert.html type="warning" title="Reading and writing annotations" content="mei-friend currently supports reading and writing of inline annotations, and reading (loading) simple stand-off annotations stored on the Web in compliance with the Web Annotation Data Model. Writing stand-off annotations in this format, automated mapping between inline and stand-off annotations, and support for more music-specific stand-off annotation models, are planned for future development." %}

### Reading annotations using the annotations list

#### Loading stand-off annotations from the Web

### Tools for writing annotations 

#### Selecting elements to annotate
#### Highlight, Describe, Link
