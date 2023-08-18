---
title: MIDI Playback
description: MIDI Playback – Listening to your encoding in the browser
permalink: /docs/basic/midiplayback/
layout: page
---
# MIDI playback

Besides [exporting your encoding as a MIDI file]({{ site.baseurl }}/docs/basic/import-export/#save-midi), it is possible to listen to a current MIDI-rendition of your encoding straight in the browser. This rendition is automatically updated whenever the encoding is changed, making this a useful tool for quickly sanity-checking the state of your encoding by listening to it.  

MIDI playback is implemented in mei-friend using the open-source [html-midi-player](https://github.com/cifkao/html-midi-player). This is itself powered by [Magenta.js](https://github.com/magenta/magenta-js/tree/master/music/), which also provides the [SGM_Plus sound font](https://storage.googleapis.com/magentadata/js/soundfonts/sgm_plus/soundfont.json) used to sonify your encoding. 

<figure class="figure">
    <div class="figure-title">Fig.&thinsp;1: Listen to your encoding using the MIDI playback control bar.</div>
    <img class="figure-img" src="{{ site.baseurl }}/assets/img/midiplayback/midiplayback2.png" 
        alt="Screenshot of mei-friend interface showing MIDI playback control bar" />
    <figcaption class="figure-caption">The MIDI playback control bar (image bottom) can be used to listen to the encoding in its current state, as part of your encoding workflow.</figcaption>
</figure>

## MIDI playback control bar
The MIDI playback control bar houses the MIDI playback interface. There are several ways to open or close the bar:
* click on the 'loudspeaker' panel icon in the top-right corner of the mei-friend interface (see Fig.&thinsp;1);
* or, use the checkbox labeled 'Show MIDI playback control bar' in the ['mei-friend' tab of the settings panel]({{ site.baseurl }}/docs/basic/settings);

Or, to open the bar and cause playback to begin immediately:
* click on the MIDI playback shortcut bubble that appears in the bottom-left corner of the mei-friend interface when the bar is closed (see Fig.&thinsp;2); note that this shortcut disappears if 'Show playback shortcut' is disabled in the ['mei-friend' tab of the settings panel]({{ site.baseurl }}/docs/basic/settings).
* or, press `SPACE` on your keyboard when the bar is closed.

The bar will always be opened on the bottom of the interface, just above the status bar, regardless of the [screen layout's current orientation]({{ site.baseurl }}/docs/basic/getting-started/#modifying-layout-of-screen-regions).

To close the bar, you may also use the `ESC` key.
<figure class="figure thirdwidth">
    <div class="figure-title">Fig.&thinsp;2: Playback shortcut.</div>
    <a href="http://mei-friend.mdw.ac.at?file=https://raw.githubusercontent.com/trompamusic-encodings/Beethoven_Op31_No3_HenleUrtext/master/Beethoven_Op31_No3_3-HenleUrtext.mei&scale=57&select=note-0000000052456173&page=4&speed=false" target="_blank">
        <img class="figure-img" src="{{ site.baseurl }}/assets/img/midiplayback/bubble.png" 
            alt="Screenshot of MIDI playback contextual bubble" />
    </a>
    <figcaption class="figure-caption">Click on the playback shortcut bubble (bottom-left) to open the MIDI control bar and start playback. </figcaption>
</figure>

## Controlling playback

To start playback, click on the 'Play' button in the control bar. This will cause the button to display the 'Pause' symbol, which can be clicked to halt playback again. Alternatively, you may use the `SPACE` key on your keyboard. The time indicators to the right of this button display the current playback time and the total length of the MIDI rendition, which will correspond either to the full encoding or to the end of the current page [if speed mode is enabled](#speed-mode-and-midi-playback). 

Initial playback will start on the page currently displayed in the notation panel, either at the first selected score element or -- if no selection has been made -- at the beginning of the page. When 'Play' is clicked after the player has been paused, playback will resume at the previous playback position. 

Making a selection (in the notation or editor panel) or flipping the current page will cause the MIDI player to seek accordingly, both during playback and while paused.

## Score-following during playback

By default, the page displayed in the notation panel will flip itself in time to the music while the MIDI player is playing back, and the panel will scroll to display the currently-sounding score elements, which will be highlighted in the notation -- see Fig.&thinsp;1, specifically the note (left-hand) and chord (right-hand) highlighted at this moment of playback. These behaviours can be configured (i.e., disabled or re-enabled) in the ['mei-friend' tab of the settings panel]({{ site.baseurl }}/docs/basic/settings), respectively via the 'Page-follow MIDI playback,' 'Scroll-follow MIDI playback,' and 'Highlight currently-sounding notes' checkboxes. 

When 'Page-follow MIDI playback' is enabled, this behaviour also makes it possible to 'flip through' the encoding by seeking along the MIDI player's progress bar.

## Speed mode and MIDI playback
{% include alert.html type="warning" title='Why can I only listen to the current page?' content="Please ensure that 'speed mode' is disabled in order to listen to the full encoding" %}
The optimizations provided by mei-friend's [speed mode]({{ site.baseurl }}/docs/advanced/largefiles/) work by loading only the current page (plus some minimal additional information) into memory at a given time.

This speeds up performance, particularly when working with very large files, but also means that only the current page is available for MIDI playback. A speed-mode indicator is displayed in the MIDI playback control bar when the mode is enabled (see Fig.&thinsp;1, bottom center), to remind you of this limitation. Please adjust your workflow accordingly, e.g., by toggling speed mode off before playback and back on thereafter, when working with large files.

## Following repetitions through selected expansion element

The MIDI control bar offers a drop-down menu listing the expansion elements in the encoding (see `expansion-default` selected for the [3rd movement of Beethoven's Op.&nbsp;31 No.&nbsp;3](http://mei-friend.mdw.ac.at?file=https://raw.githubusercontent.com/trompamusic-encodings/Beethoven_Op31_No3_HenleUrtext/master/Beethoven_Op31_No3_3-HenleUrtext.mei&scale=57&select=note-0000000052456173&page=4&speed=false){:target="_blank"} in Figure&nbsp;1). If an expansion element is selected, mei-friend will follow the property list attribute to render the MIDI playback and thus following the expanded repetitions during the encoding. 

