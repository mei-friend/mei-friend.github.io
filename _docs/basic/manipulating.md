---
title: Manipulating
description: Using mei-friend functionality to manipulate encodings
permalink: /docs/basic/manipulating/
layout: page
---
# Manipulate menu

mei-friend provides several useful functions to manipulate specific elements or the entire encoding (under item `Manipulate` in the menu bar or by using the corresponding keyboard shortcuts). Most of the following functions can be used on one or multiple selected elements (such as notes, chords or beams). 

### Inverting placement

The placement, curve direction, or stem direction of a selected element may be set (if absent) or inverted using `X` multiple times. This will flip the `@place`, `@curvedir`, or `stem.dir` attribute to the opposite value, depending on the selected element. This also works on selected `beam`, `beamSpan` or `tuplet` elements.

<figure class="figure">
    <div class="figure-title">Fig.&thinsp;1: Moving and deleting elements.</div>
        <img class="figure-img" src="{{ site.baseurl }}/assets/img/manipulating/move_delete.gif" 
            alt="Moving and deleting elements" />
    <figcaption class="figure-caption">Notes moved in different ways, deleting a slur and sforzatos.</figcaption>
</figure>

A special case is between placement, such as typically found in piano music: `SHIFT X` will set the `@place` attribute to `between`, while simultaneously adding (or modifying an existing) `@staff` attribute. mei-friend will search for the embracing staff group of the selected element's staff to determine the two staff numbers that the selected element will sit between. If the staff group does not have exactly two staves (as typically in piano music), it will try to infer the two staff numbers and post a warning alert. Pressing `SHIFT X` a second time, will set `@place` to a default `above`. 


### Creating vertical groups

If you want some elements in your score to be aligned vertically, select all of them and use `Add vertical group` or shortcut `V`. This will add an attribute [`@vgrp`](https://music-encoding.org/guidelines/v5/attribute-classes/att.verticalgroup.html) with a group number unused on the current page to your elements. Elements with the same group number will be vertically aligned by Verovio. A typical case would be a hairpin-dynamic connection as seen in Fig. 1 with the crescendo-forte. 

<figure class="halfwidth">
    <div class="figure-title">Fig.&thinsp;2: Example of vertical groups with dynamics.</div>
        <img class="figure-img" src="{{ site.baseurl }}/assets/img/manipulating/vgrps.PNG" 
            alt="Example of vertical groups with dynamics" />
    <figcaption class="figure-caption">On the left the crescendo-forte connection with vertical group and on the right without.</figcaption>
</figure>

### Deleting elements

Simply delete an element with the `DELETE` or `BACKSPACE` key. The delete operation not only removes the selected element, it will also tidy up the encoding as required. For example, deleting an `octave` element will remove also all `oct.ges` of the notes under the octave extender line; or removing a beam, will remove the beam tag around the selected notes and readjust the indentation of the encoding.

### Moving notes in pitch and across staves

To modify the pitch of one or several selected notes, use `SHIFT - UP/DOWN` for shifting the pitch by one (chromatic) semi-tone, `ALT - SHIFT - UP/DOWN` (`OPTION - SHIFT - UP/DOWN` under macOS) for shifting the pitch diatonically, or in combination with a modifier key (`CTRL` on PC or `CMD` under macOS) by an octave. 

Selected notes or chords may be moved across staves (such as required in piano scores), using `CTRL - ALT - UP/DOWN` (`CMD - OPTION - UP/DOWN` under macOS). This will modify (or add or remove) the `@staff` attribute for all selected elements to indicate the altered staff number that the selected element should appear in. 
### Checking gestural accidentals (@accid.ges)

The MEI schema allows having the attributes `@accid` and `@key.sig` or `keySig@sig` independently of the sounding, the gestural pitch accidental of the notes. So, to encode semantically correct tones in CMN, the `@accid.ges` attribute depends on the accidental context by the key signature or the current measure. Thus, there is ample opportunity for encoding inconsistencies. 

In order to help find those inconsistencies, select `Manipulate -> Check @accid.ges` in the dropdown menu or use the keyboard shortcut given there. `Check @accid.ges` will check all notes for the existence of a missing or superfluous @accid.ges in relation the the current key signature (`@key.sig` inside `staffDef` or `scoreDef` or `@sig` inside `keySig` elements) or any accidentals provided in the current measure. Also redundant `@accid.ges` will be tracked. 

All occurrences will be listed in the code checker panel and provided with a fix button that corrects both the encoding and the display, or an ignore button that will diable a given occurrence in the list (or re-enable it when pressed again). To bulk-process many occurrence at the same time, press the `fix all` button. This will process all enabled fixes in the list. 

<figure class="figure">
    <div class="figure-title">Fig.&thinsp;3: Code checker panel with accid.ges report.</div>
        <img class="figure-img" src="{{ site.baseurl }}/assets/img/manipulating/codeCheckerAccidGes.png" 
            alt="Code checker panel with accid.ges report" />
    <figcaption class="figure-caption">Code checker panel with accid.ges report. Issue number 3 has been disabled through the ignore button, issue number 4 has already been executed through the fix button.</figcaption>
</figure>

### Renumbering measures

There are a couple of important settings for renumbering measures in the settings panel under `mei-friend Settings -> Renumber measures`, i.e. how to name incomplete measures, wether to continue counting measures across endings or not or what suffixes to use for endings (for details see [here]({{ site.baseurl }}/docs/basic/settings/#renumber-measures))

Before using `Renumber measures (exec)` it is recommended to use `Renumber measures (test)`: This will show how the renumbering will be done in an infobox before you can actually execute it.

<figure class="figure">
    <div class="figure-title">Fig.&thinsp;4: Renumbering measures.</div>
        <img class="figure-img" src="{{ site.baseurl }}/assets/img/manipulating/renumber_measures.gif" 
            alt="Renumbering measures" />
    <figcaption class="figure-caption">In this example the measure containing the upbeat is counted as a separate measure. To change that `@metcon` is set to `false` for that measure. Running `Renumber measures (test)` opens a window that shows the proposed changes which can then be executed with `Renumber measures (exec)`.</figcaption>
</figure>


### Add ids to or remove from MEI encoding

`xml:id` can be either added or removed with `Add ids to MEI` and `Remove ids from MEi`. Ids will only be removed inside of `<body>` elements so e.g., `<meiHead>` is no affected. Removing keeps all `@xml:id` that are referenced somewhere (e.g., by a slur) to not lose any information about the encoding. The style of ids that are being generated can be selected in the [settings]({{ site.basurl }}/docs/basic/settings/#general). 

<figure class="figure">
    <div class="figure-title">Fig.&thinsp;5: Removing and adding ids.</div>
        <img class="figure-img" src="{{ site.baseurl }}/assets/img/manipulating/ids.gif" 
            alt="Removing and adding ids" />
    <figcaption class="figure-caption">After removing ids the infobox shows how many ids have been removed and how many could not be removed due to them being referenced somewhere else. The infobox after adding ids shows how many ids have been added and the style used to generate them. Note: As you can see ids are only removed from the body.</figcaption>
</figure>

### Re-render via Verovio

With this feature the encoding can be newly rendered running once through Verovio. Rerendering will also correct the formating of the file like indentation (to just indent a selected part of a file use `Code -> Indent selection`). Note that the MEI encoding returned from Verovio might have a different schema referenced than your original MEI file. 

### Add or ingest Facsimile

For more information see [facsimile]({{ site.baseurl }}/docs/advanced/facsimile/#creating-your-own-mei-file-with-facsimile-information)