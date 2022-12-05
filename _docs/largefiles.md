---
title: Large files
permalink: /docs/largefiles/
layout: page
---
# Handling large MEI files

Editing large encodings, that is MEI files with more than 25,000 lines, may result in slow performance and sluggish response behavior of mei-friend, as after each edit operation the entire MEI encoding has to be parsed and laid out by Verovio before the rendered SVG of the requested page can be returned for display in the user interface. 

## Controlling notation update behavior

When editing the MEI directly in the text buffer, automatic updating of the rendered notation involves repeating this intensive process after each edit. To circumvent this issue, automatic updates may be disabled in mei-friend’s interface (see Fig. 1), instead allowing the user to request re-rendering of the notation manually, on button click.

<figure class="figure halfwidth">
    <div class="figure-title">Fig. 1: Notation update behavior.</div>
    <img class="figure-img" src="{{ site.baseurl }}/assets/img/speedmode/mei-friend-update-notation.png" 
        alt="mei-friend notation update behavior" max-width="50%" />
    <figcaption class="figure-caption">Checkbox to control notation update behavior of mei-friend: when checked, the notation gets automatically re-rendered after each edit. When unchecked, each re-rendering is initiated manually upon button click.</figcaption>
</figure>

## The speed mode

To further ease the loading and reprocessing requirements posed by large files, we have implemented a “speed mode” (see Figure 2b). Instead of requiring the entire MEI encoding to be processed, speed mode only transfers a single-page excerpt encompassing the most recently selected element in the text buffer to Verovio. Depending on the breaks settings in the notation menu bar, the excerpt may refer to a system, an entire page, or is processed automatically depending on window size.
Two additional “dummy” MEI pages are generated to surround the MEI excerpt to be displayed. The preceding page contains a score definition that is updated to the latest clef, meter, and key signature change preceding the MEI excerpt. Both dummy pages each contain a measure with staff and layer elements, and a single note from and to which time spanning elements (such as slurs and hairpins) are connected, so that the middle page (corresponding to the excerpt) is able to show these elements correctly. 

<figure class="figure">
    <div class="figure-title">Fig. 2: Processing diagram for speed mode.</div>
    <img class="figure-img" src="{{ site.baseurl }}/assets/img/speedmode/mei-friend-speedMode.svg" 
        alt="Schematic of the mei-friend speed mode" />
    <figcaption class="figure-caption">Processing flow chart from encoding to notation engraving. a) In “normal mode” the entire content of the encoding is passed to the Verovio toolkit. After the notation layout for the entire encoding is processed, a selected page is rendered as SVG. b) In “speed mode” the MEI encoding is loaded into the DOM. To render the requested page, its corresponding MEI elements are extracted from the DOM and used to generate an artificial MEI encoding placing dummy pages around the requested page incorporating single-note “anchors” for spanning elements. Verovio is then used to render the requested (middle) page.</figcaption>
</figure>

These excerpting and insertion operations are performed on an XML DOM representation of the MEI encoding, allowing for them to be processed very efficiently. 
The search for time-spanning elements (containing `@tstamp`, `@tstamp2` or `@startid/@endid` attributes) is performed in a separate thread in the background (the speed-worker) and added to the notation display after the process has been completed. 

In speed mode, only a constantly small portion of the MEI encoding (i.e., the excerpt) is transferred to Verovio, limiting its processing load and thus keeping interactions swift and smooth.

You may download the current 3-page speed mode MEI file for debugging using `CTRL-SHIFT-S` on Windows or Linux; and `CMD-SHIFT-S` on MacOS.

## Examples of large files

To compare speed mode with normal mode, try these large files:

[Beethoven Diabelli Variations Op. 120: 56,6k lines](https://mei-friend.mdw.ac.at/?file=https://raw.githubusercontent.com/trompamusic-encodings/Beethoven_Op120_BreitkopfHaertel/master/Beethoven_Op120-Breitkopf.mei&speed=true){:target="_blank"}

[Beethoven 100k lines with a selection at second-last page](https://mei-friend.mdw.ac.at/?file=https://raw.githubusercontent.com/trompamusic/mei-friend/master/eval/Beethoven-100k-lines.mei&speed=true&select=beam-0000000394677671){:target="_blank"}
