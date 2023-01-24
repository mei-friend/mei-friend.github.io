---
title: Working with large files
description: Keeping mei-friend performant when working with large files
permalink: /docs/advanced/largefiles/
layout: page
---
# Handling large MEI files

Editing large encodings -- more than 25,000 lines of MEI -- may result in slow performance and sluggish response behavior of mei-friend, as after each edit operation the entire MEI encoding has to be parsed and laid out by [Verovio](https://www.verovio.org){:target="_blank"} before the rendered SVG of the requested page can be returned for display in the notation panel. 

## Controlling notation update behavior

By default, mei-friend automatically updates the rendered notation each time you make a change in the editor panel, repeating this intensive process after each edit. To circumvent this issue, automatic updates may be disabled in mei-friend’s interface (see Fig.&thinsp;1). When disabled, re-rendering can be manually initiated by clicking on the 'Update notation manually' button next to the 'Update' checkbox in the control bar.

<figure class="figure twothirdswidth">
    <div class="figure-title">Fig.&thinsp;1: Notation update behavior.</div>
    <img class="figure-img" src="{{ site.baseurl }}/assets/img/speedmode/notation-menu-bar-update.png" 
        alt="mei-friend notation update behavior" max-width="50%" />
    <figcaption class="figure-caption">Checkbox to control notation update behavior of mei-friend: when checked, the notation is automatically re-rendered after each edit, and the 'update notation manually' button is deactivated. When unchecked, re-renderings may be initiated manually upon button click.</figcaption>
</figure>

## Speed mode

To further reduce the loading and reprocessing requirements posed by large files, we have implemented a “speed mode” (see [implementation notes](#implementation-notes), below). Instead of requiring the entire MEI encoding to be processed, speed mode only transfers a single-page excerpt encompassing the most recently selected element to Verovio. Depending on the breaks settings in the notation control bar, the excerpt may refer to a system, an entire page, or is processed automatically to accommodate the current window size. With speed mode enabled, only a constantly small portion of the MEI encoding (i.e., the excerpt) is transferred to Verovio, limiting its processing load and thus keeping editing interactions swift and smooth.


### Speed mode and automatic page breaks

Speed mode relies on system and page beginnings (`<sb>`, `<pb>`) in the MEI encoding to display a requested page instantaneously. When the breaks selector is set to "auto" in the notation control bar, mei-friend has to compute a page layout for a given screen size and panel settings, before being able to serve individual pages. This pagination process is accomplished in a separate worker thread running in the background. While this pagination process is running, a quick first page of notation is shown to the user and the page count display in the notation menu bar is set to "?". This is replaced with the actual page count after the pagination process has finished. Subsequently, another background process computes the time-spanning elements reaching into and out of the excerpt (see [implementation notes](#implementation-notes)). These are shown once this process completes. 

So, when opening a large file, such as Beethoven's Diabelli Variations Op.&thinsp;120 (Fig.&thinsp;2), the first page will load quickly while the pagination process is running, with progress indicated by the status bar at the center of the page footer. To visually indicate that the pagination process is running, the Verovio icon will spin in a clockwise manner. After the process completes, the time-spanning process starts, indicated by the Verovio icon spinning counter-clockwise. The results of this process is shown immediately after completion (in Fig.&thinsp;2, the slur at the right side of the system appears).  

<figure class="figure">
    <div class="figure-title">Fig.&thinsp;2: Speed mode with pagination and spanning thread.</div>
    <img class="figure-img" src="{{ site.baseurl }}/assets/img/speedmode/mei-friend-speedmode-auto.gif" 
        alt="mei-friend notation update behavior" max-width="50%" />
    <figcaption class="figure-caption">Speed mode demonstration: 1) Opening a large file from GitHub (Beethoven Op.&thinsp;120) with breaks option set to 'system' (<span class="code">--breaks=line</span>): a first page is shown immediately; the time spanning elements are computed in the background (Verovio icon spinning counter-clockwise); the slur at the right-hand side appears when the computation completes. 2) changing breaks option to 'automatic' causes the pagination process to start (Verovio icon spinning clockwise, progress animation in the status bar in footer). Upon completion of pagination (slur disappears), the spanning process is again executed and slur re-appears when this process has been completed.</figcaption>
</figure>

## Examples of large files

To compare the responsiveness of mei-friend with and without speed mode,you may try these large files:

[Beethoven Diabelli Variations Op.&thinsp;120: 56.6k lines](https://mei-friend.mdw.ac.at/?file=https://raw.githubusercontent.com/trompamusic-encodings/Beethoven_Op120_BreitkopfHaertel/master/Beethoven_Op120-Breitkopf.mei&speed=true){:target="_blank"}

[Beethoven 100k lines with a selection at second-last page](https://mei-friend.mdw.ac.at/?file=https://raw.githubusercontent.com/trompamusic/mei-friend/master/eval/Beethoven-100k-lines.mei&speed=true&select=beam-0000000394677671){:target="_blank"}

## Implementation notes
The excerpting and insertion operations for 'speed mode' are performed on an XML DOM representation of the MEI encoding (Fig.&thinsp;3), allowing for them to be processed very efficiently. To correctly display time spanning elements (such as slurs and hairpins) reaching into or out of the excerpt, a pair of (invisible) “dummy” MEI pages are generated surrounding the excerpt. The preceding dummy page contains a score definition configured with the clef, meter, and key signature current at the beginning of the excerpt. Each dummy page also contains a measure with staff and layer elements containing a single note from and to which time spanning elements (such as slurs and hairpins) are connected.

The search for time-spanning elements (containing `@tstamp`, `@tstamp2` or `@startid/@endid` attributes) is performed in a separate thread in the background (the speed-worker) and added to the notation display after the process has been completed. 

<figure class="figure">
    <div class="figure-title">Fig.&thinsp;3: Processing diagram for speed mode.</div>
    <img class="figure-img" src="{{ site.baseurl }}/assets/img/speedmode/mei-friend-speedMode.svg" 
        alt="Schematic of the mei-friend speed mode" />
    <figcaption class="figure-caption">Processing flow chart from encoding to notation engraving. <strong>a.</strong> In “normal mode” the entire content of the encoding is passed to the Verovio toolkit. After the notation layout for the entire encoding is processed, a selected page is rendered to the notation panel as SVG. <strong>b.</strong> In “speed mode” the MEI encoding is loaded into the DOM. To render the requested page, its corresponding MEI elements are extracted from the DOM and used to generate an artificial MEI encoding, placing dummy pages around the requested page to incorporate single-note “anchors” for spanning elements. Verovio is then used to render the requested (middle) page (Figure taken from <a href="{{ site.baseurl }}/about#GoeblWeigl-MEC2021" title="Goebl &amp; Weigl, MEC 2021: Alleviating the Last Mile of Encoding...">Goebl &amp; Weigl, 2022</a>).</figcaption>
</figure>


For debugging, the current three-page speed mode MEI file may be downloaded into the local download folder of your browser using `CTRL-SHIFT-S` on Windows or Linux; and `CMD-SHIFT-S` on MacOS.