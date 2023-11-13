---
layout: page
title: Cheat sheet
permalink: /cheatsheet/
---

<script src="{{ site.baseurl }}/assets/js/icons.js">></script>

# Keyboard Shortcuts Cheat sheet

Most of the keyboard shortcuts are listed in the respective menu items in mei-friend's menu bar; however, some of them you will only find here.

### Getting help

<table>
    <tr>
        <td class="icons"><span class="keyIcon cmdKey"></span><span class="keyIcon">?</span></td>
        <td class="explanation">Open mei-friend documentation</td>
    </tr>
    <tr>
        <td class="icons"><span class="keyIcon altKey"></span><span class="keyIcon">.</span></td>
        <td class="explanation">Open MEI documentation for selected element</td>
    </tr>
</table>

### Navigating through notation

<table>
    <tr>
        <td class="icons"><span class="keyIcon">&rarr;</span></td>
        <td class="explanation">Select next note, rest, or mRest</td>
    </tr>
    <tr>
        <td class="icons"><span class="keyIcon">&larr;</span></td>
        <td class="explanation">Select previous note, rest, or mRest</td>
    </tr>
    <tr>
        <td class="icons"><span class="keyIcon">&uarr;</span></td>
        <td class="explanation">Select note, rest, or mRest one layer up</td>
    </tr>
    <tr>
        <td class="icons"><span class="keyIcon">&darr;</span></td>
        <td class="explanation">Select note, rest, or mRest one layer down</td>
    </tr>
    <tr>
        <td class="icons"><span class="keyIcon cmdKey"></span><span class="keyIcon">&rarr;</span></td>
        <td class="explanation">Select note, rest, mRest in next measure</td>
    </tr>
    <tr>
        <td class="icons"><span class="keyIcon cmdKey"></span><span class="keyIcon">&larr;</span></td>
        <td class="explanation">Selected note, rest, mRest in previous measure </td>
    </tr>
    <tr>
        <td class="icons"><span class="keyIcon cmdKey"></span><span class="keyIcon cmd2Key"></span><span class="keyIcon">&rarr;</span></td>
        <td class="explanation">Go to next page (or <span class="keyIcon">&#8671;</span>)</td>
    </tr>
    <tr>
        <td class="icons"><span class="keyIcon cmdKey"></span><span class="keyIcon cmd2Key"></span><span class="keyIcon">&larr;</span></td>
        <td class="explanation">Go to previous page (or <span class="keyIcon">&#8670;</span>)</td>
    </tr>
    <tr>
        <td class="icons"><span class="keyIcon cmdKey"></span><span class="keyIcon">&uarr;</span></td>
        <td>Go to first page (or <span class="keyIcon">END</span>)</td>
    </tr>
    <tr>
        <td class="icons"><span class="keyIcon cmdKey"></span><span class="keyIcon">&darr;</span></td>
        <td class="explanation">Go to last page (or <span class="keyIcon">HOME</span>)</td>
    </tr>
</table>

### Zooming and display

Some zooming keyboard shortcuts apply for the currently active panel (notation panel, editor panel, or the facsimile panel).

<table>
    <tr>
        <td class="icons"><span class="keyIcon cmdKey"></span><span class="keyIcon">+</span>, <span class="keyIcon cmdKey"></span><span class="keyIcon">–</span></td>
        <td class="explanation">Zoom notation/encoding/facsimile in or out</td>
    </tr>
    <tr>
        <td class="icons"><span class="keyIcon cmdKey"></span><span class="keyIcon">Mouse wheel</span></td>
        <td class="explanation">Zoom notation/encoding/facsimile in or out (depending on mouse wheel direction)</td>
    </tr>
    <tr>
        <td class="icons"><span class="keyIcon cmdKey"></span><span class="keyIcon">0</span></td>
        <td class="explanation">Zoom notation to 100%</td>
    </tr>
    <tr>
        <td class="icons"><span class="keyIcon cmdKey"></span><span class="keyIcon">5</span></td>
        <td class="explanation">Zoom notation to 50%</td>
    </tr>
</table>

### Selecting elements

Most comfortably, use mouse click and drag to select elements.
Please consult `Settings->mei-friend->Drag select` to choose the element types while drag-selecting.
You can use the following shortcuts in combination with click and drag for selecting elements.

<table>
    <tr>
        <td class="icons"><span class="keyIcon cmdKey"></span><span class="keyIcon">click</span></td>
        <td class="explanation">Select multiple notes by mouse click</td>
    </tr>
    <tr>
        <td class="icons"><span class="keyIcon altKey"></span><span class="keyIcon">click</span></td>
        <td class="explanation">Select the chord when clicking onto a note</td>
    </tr>
    <tr>
        <td class="icons"><span class="keyIcon shiftKey"></span><span class="keyIcon altKey"></span><span class="keyIcon">SPACE</span></td>
        <td class="explanation">Switch focus between notation panel and editor panel</td>
    </tr>
</table>

<!-- MANIPULATE -->

### Manipulating elements

<table>
    <tr>
        <td class="icons"><span class="keyIcon">X</span></td>
        <td class="explanation">Invert attribute `@place` (dir, dynam, trill, tuplet number, ...),
        `@curvedir` (slur, tie, ...), `@stem.dir` (note, chord)
        from above to below or below to above for selected element</td>
    </tr>
    <tr>
        <td class="icons"><span class="keyIcon shiftKey"></span><span class="keyIcon">X</span></td>
        <td class="explanation">Set att.placement (dir, dynam, trill, ...) to @place="between" 
        and determine staff attribute from staff group of selected element (has to contain exactly two staves)</td>
    </tr>
    <tr>
        <td class="icons"><span class="keyIcon">V</span></td>
        <td class="explanation">Insert vertical group (`@vgrp`) attribute to selected elements with a new value for the displayed page</td>
    </tr>
</table>

### Deleting elements

<table>
    <tr>
        <td class="icons"><span class="keyIcon">BACKSPACE</span> or <span class="keyIcon">DELETE</span></td>
        <td class="explanation">Delete selected elements both in encoding and notation. 
            Applies to all control elements, clef change, accid, artic, beam, beamSpan, note, chord, rest, mRest, multiRest. 
            When deleting the last note inside a chord, beam, tuplet, fTrem, bTrem, these parent elements will also get deleted. 
            When deleting an element that is been pointed to by another element (such as by a slur through `@startid` or `@endid`), 
            this pointing element will also be deleted.
        </td>
    </tr>
</table>

### Manipulate elements

<table>
    <tr>
        <td class="icons"><span class="keyIcon">C</span></td>
        <td class="explanation">Convert selected note(s) to a new chord (having selected notes as children and cue, dur, dots, grace, stem.dir attributes in chord element) and vice versa (remove chord element while copying cue, dur, dots, grace, stem.dir attributes to note elements)</td>
    </tr>
    <tr>
        <td class="icons"><span class="keyIcon shiftKey"></span><span class="keyIcon">N</span></td>
        <td class="explanation">Convert selected note(s) to rest(s) and vice versa, retaining pitch and octave information (each element receives new xml:id)</td>
    </tr>
</table>

### Moving elements

<table>
    <tr>
        <td class="icons"><span class="keyIcon shiftKey"></span><span class="keyIcon">&uarr;</span></td>
        <td class="explanation">Move note, rest, mRest, multiRest chromatically upwards </td>
    </tr>
    <tr>
        <td class="icons"><span class="keyIcon shiftKey"></span><span class="keyIcon">&darr;</span></td>
        <td class="explanation">Move note, rest, mRest, multiRest chromatically downwards</td>
    </tr>
    <tr>
        <td class="icons"><span class="keyIcon altKey"></span><span class="keyIcon shiftKey"></span><span class="keyIcon">&uarr;</span></td>
        <td class="explanation">Move note, rest, mRest, multiRest diatonically upwards </td>
    </tr>
    <tr>
        <td class="icons"><span class="keyIcon altKey"></span><span class="keyIcon shiftKey"></span><span class="keyIcon">&darr;</span></td>
        <td class="explanation">Move note, rest, mRest, multiRest diatonically downwards</td>
    </tr>
    <tr>
        <td class="icons"><span class="keyIcon cmdKey"></span><span class="keyIcon shiftKey"></span><span class="keyIcon">&uarr;</span></td>
        <td class="explanation">Move note, rest, mRest, multiRest one octave upwards </td>
    </tr>
    <tr>
        <td class="icons"><span class="keyIcon cmdKey"></span><span class="keyIcon shiftKey"></span><span class="keyIcon">&darr;</span></td>
        <td class="explanation">Move note, rest, mRest, multiRest one octave downwards</td>
    </tr>
    <tr>
        <td class="icons"><span class="keyIcon altKey"></span><span class="keyIcon cmdKey"></span><span class="keyIcon">&uarr;</span></td>
        <td class="explanation">Move note, rest, mRest, multiRest one staff downwards </td>
    </tr>
    <tr>
        <td class="icons"><span class="keyIcon altKey"></span><span class="keyIcon cmdKey"></span><span class="keyIcon">&darr;</span></td>
        <td class="explanation">Move note, rest, mRest, multiRest one staff upwards</td>
    </tr>
</table>

### Manipulate duration

<table>
    <tr>
        <td class="icons"><span class="keyIcon shiftKey"></span><span class="keyIcon">&rarr;</span></td>
        <td class="explanation">Increase duration of a note, chord, rest, etc.</td>
    </tr>
    <tr>
        <td class="icons"><span class="keyIcon shiftKey"></span><span class="keyIcon">&larr;</span></td>
        <td class="explanation">Decrease duration of a note, chord, rest, etc.</td>
    </tr>
    <tr>
        <td class="icons"><span class="keyIcon">.</span></td>
        <td class="explanation">Toggle single dotting of a note, chord, rest, etc. </td>
    </tr>
</table>

### MEI encoding manipulation

<table>
    <tr>
        <td class="icons"><span class="keyIcon cmdKey"></span><span class="keyIcon shiftKey"></span><span class="keyIcon">C</span></td>
        <td class="explanation">Remove @accid.ges when @accid is present </td>
    </tr>
    <tr>Renumber measures (counts successive measures with `@metcon="false"` as one, counts multiple endings with same numbering)
        <td class="icons"><span class="keyIcon shiftKey"></span><span class="keyIcon">R</span></td>
        <td class="explanation">Test renumbering (output to console)</td>
    </tr>
    <tr>
        <td class="icons"><span class="keyIcon cmdKey"></span><span class="keyIcon shiftKey"></span><span class="keyIcon">R</span></td>
        <td class="explanation">Execute renumbering</td>
    </tr>
    <tr>
        <td class="icons"><span class="keyIcon cmdKey"></span><span class="keyIcon">M</span></td>
        <td class="explanation">Add XML ids to MEI (done natively in mei-friend)</td>
    </tr>
    <tr>
        <td class="icons"><span class="keyIcon cmdKey"></span><span class="keyIcon shiftKey"></span><span class="keyIcon">M</span></td>
        <td class="explanation">Add XML ids from MEI, except those used for referencing other elements (done natively in mei-friend)</td>
    </tr>
    <tr>
        <td class="icons"><span class="keyIcon cmdKey"></span><span class="keyIcon">I</span></td>
        <td class="explanation">Ingest facsimile</td>
    </tr>
    <tr>
        <td class="icons"><span class="keyIcon cmdKey"></span><span class="keyIcon">E</span></td>
        <td class="explanation">Surround selected encoding in the editor with a tag to be specified in context menu (entire current tag selected, if only single cursor position provided)</td>
    </tr>
    <tr>
        <td class="icons"><span class="keyIcon cmdKey"></span><span class="keyIcon">/</span></td>
        <td class="explanation">Surround selected encoding in the editor with last tag specified in context menu (entire current tag selected, if only single cursor position provided)</td>
    </tr>
</table>

### Inserting elements

Key bindings insert elements without placement attribute by default. To insert or invert placement, use <span class="keyIcon">X</span>. The elements are inserted using `@startid` and `@endid` attributes by default. To insert them with `@tstamp` and `@tstamp2` attributes instead, press <span class="keyIcon cmd2Key"></span> together with the keyboard shortcuts listed below. Time stamp insertion is supported for these elements: `slur`, `tie`, `hairpin`, `fermata`, `dir`, `dynam`, `pedal`, `mordent`, `trill`, `turn`, `glissando`.

<table>
    <tr>
        <td class="icons"><span class="keyIcon">N</span></td>
        <td class="explanation">Insert a note, chord, rest (that is, duplicate (last) selected note, chord, rest. When selection is a layer, append a new quarter-note C4 to that layer)</td>
    </tr>
    <tr>
        <td class="icons"><span class="keyIcon">+</span></td>
        <td class="explanation">Insert accidental sharp &#9839; to currently selected note(s)</td>
    </tr>
    <tr>
        <td class="icons"><span class="keyIcon">=</span></td>
        <td class="explanation">Insert accidental natural &#9838; to currently selected note(s)</td>
    </tr>
    <tr>
        <td class="icons"><span class="keyIcon">&ndash;</span></td>
        <td class="explanation">Insert accidental flat &#9837; to currently selected note(s)</td>
    </tr>
    <tr>
        <td class="icons"><span class="keyIcon shiftKey"></span><span class="keyIcon">T</span></td>
        <td class="explanation">Insert tempo at selected note(s)</td>
    </tr>
    <tr>
        <td class="icons"><span class="keyIcon">I</span></td>
        <td class="explanation">Insert directive at selected note(s)</td>
    </tr>
    <tr>
        <td class="icons"><span class="keyIcon">D</span></td>
        <td class="explanation">Insert dynamics at selected note, with extender if two notes selected</td>
    </tr>
    <tr>
        <td class="icons"><span class="keyIcon">S</span></td>
        <td class="explanation">Insert <strong>slur</strong> starting/ending on selected notes</td>
    </tr>
    <tr>
        <td class="icons"><span class="keyIcon">T</span></td>
        <td class="explanation">Insert tie starting/ending on selected notes</td>
    </tr>
    <tr>
        <td class="icons"><span class="keyIcon">H</span></td>
        <td class="explanation">Insert crescendo hairpin starting/ending at selected notes</td>
    </tr>
    <tr>
        <td class="icons"><span class="keyIcon shiftKey"></span><span class="keyIcon">H</span></td>
        <td class="explanation">Insert diminuendo hairpin starting/ending at selected notes</td>
    </tr>
    <tr>
        <td class="icons"><span class="keyIcon">B</span></td>
        <td class="explanation">Insert beam on selected notes/chords sharing identical parent</td>
    </tr>
    <tr>
        <td class="icons"><span class="keyIcon shiftKey"></span><span class="keyIcon">B</span></td>
        <td class="explanation">Insert beamSpan element on selected elements</td>
    </tr>
    <tr>
        <td class="icons"><span class="keyIcon">U</span></td>
        <td class="explanation">Surround selected elements with a supplied element; responsibility attribute to be selected in settings</td>
    </tr>
    <tr>
        <td class="icons"><span class="keyIcon ctrlKey"></span><span class="keyIcon">U</span></td>
        <td class="explanation">Make artic attribute a separate element and surround it with a supplied element;  responsibility attribute to be selected in settings</td>
    </tr>
    <tr>
        <td class="icons"><span class="keyIcon ctrlKey"></span><span class="keyIcon shiftKey"></span><span class="keyIcon">U</span></td>
        <td class="explanation">Make accid attribute a separate element and surround it with a supplied element;  responsibility attribute to be selected in settings</td>
    </tr>
    <tr>
        <td class="icons"><span class="keyIcon">A</span></td>
        <td class="explanation">Insert arpeggio for selected note(s) (with @order="up" per default, with CTRL + A @order="down")</td>
    </tr>
    <tr>
        <td class="icons"><span class="keyIcon">F</span></td>
        <td class="explanation">Insert fermata above selected note</td>
    </tr>
    <tr>
        <td class="icons"><span class="keyIcon">G</span></td>
        <td class="explanation">Insert glissando starting at first, ending at last selected note</td>
    </tr>
    <tr>
        <td class="icons"><span class="keyIcon">P</span></td>
        <td class="explanation">Insert pedal down for (first) selected note (and pedal up for last selected note, if multiple notes are selected)</td>
    </tr>
    <tr>
        <td class="icons"><span class="keyIcon shiftKey"></span><span class="keyIcon">P</span></td>
        <td class="explanation">Insert pedal up for selected note</td>
    </tr>
    <tr>
        <td class="icons"><span class="keyIcon">L</span></td>
        <td class="explanation">Insert trill to selected note(s)</td>
    </tr>
    <tr>
        <td class="icons"><span class="keyIcon">R</span></td>
        <td class="explanation">Insert turn to selected note(s) (with SHIFT: lower form)</td>
    </tr>
    <tr>
        <td class="icons"><span class="keyIcon">M</span></td>
        <td class="explanation">Insert mordent to selected note(s) (with SHIFT: upper form)</td>
    </tr>
    <tr>
        <td class="icons"><span class="keyIcon">O</span></td>
        <td class="explanation">Insert octave shift above (8va), spanning two selected notes/chords (below with CTRL)
    </td>
    </tr>
    <tr>
        <td class="icons"><span class="keyIcon shiftKey"></span><span class="keyIcon">O</span></td>
        <td class="explanation">Insert octave shift above (15va), spanning two selected notes/chords (below with CTRL)
    </td>
    </tr>
    <tr>
        <td class="icons"><span class="keyIcon shiftKey"></span><span class="keyIcon">G</span></td>
        <td class="explanation">Insert G clef <i>before</i> selected element</td>
    </tr>
    <tr>
        <td class="icons"><span class="keyIcon cmd3Key"></span><span class="keyIcon shiftKey"></span><span class="keyIcon">G</span></td>
        <td class="explanation">Insert G clef <i>after</i> selected element</td>
    </tr>
    <tr>
        <td class="icons"><span class="keyIcon shiftKey"></span><span class="keyIcon">F</span></td>
        <td class="explanation">Insert F clef <i>before</i> selected element</td>
    </tr>
    <tr>
        <td class="icons"><span class="keyIcon cmdKey"></span><span class="keyIcon shiftKey"></span><span class="keyIcon">F</span></td>
        <td class="explanation">Insert F clef <i>after</i> selected element</td>
    </tr>
    <tr>
        <td class="icons"><span class="keyIcon shiftKey"></span><span class="keyIcon">C</span></td>
        <td class="explanation">Insert C clef <i>before</i> selected element</td>
    </tr>
    <tr>
        <td class="icons"><span class="keyIcon cmd3Key"></span><span class="keyIcon shiftKey"></span><span class="keyIcon">C</span></td>
        <td class="explanation">Insert C clef <i>after</i> selected element</td>
    </tr>
</table>

### Toggle articulation

<table>
    <tr>
        <td class="icons"><span class="keyIcon shiftKey"></span><span class="keyIcon">S</span></td>
        <td class="explanation">Toggle staccato on note/chord</td>
    </tr>
    <tr>
        <td class="icons"><span class="keyIcon shiftKey"></span><span class="keyIcon">V</span></td>
        <td class="explanation">Toggle accent on note/chord</td>
    </tr>
    <tr>
        <td class="icons"><span class="keyIcon shiftKey"></span><span class="keyIcon">E</span></td>
        <td class="explanation">Toggle tenuto on note/chord</td>
    </tr>
    <tr>
        <td class="icons"><span class="keyIcon shiftKey"></span><span class="keyIcon">O</span></td>
        <td class="explanation">Toggle marcato on note/chord</td>
    </tr>
    <tr>
        <td class="icons"><span class="keyIcon shiftKey"></span><span class="keyIcon">I</span></td>
        <td class="explanation">Toggle staccatissimo on note/chord</td>
    </tr>
    <tr>
        <td class="icons"><span class="keyIcon shiftKey"></span><span class="keyIcon">Y</span></td>
        <td class="explanation">Toggle spiccato on note/chord</td>
    </tr>
</table>

### MIDI playback

<table>
    <tr>
        <td class="icons"><span class="keyIcon">SPACE</span></td>
        <td class="explanation">Play/pause (opens player if required)</td>
    </tr>
    <tr>
        <td class="code"><span class="keyIcon">ESC</span></td>
        <td class="explanation">Stop playback and hide player</td>
    </tr>
</table>

### URL Parameters

<p>mei-friend may ba called with several parameters passed through the URL
in the form of <span class="code">https://mei-friend.mdw.ac.at/?file=fileURL&select=beamId</span>.</p>
<table>
    <tr>
        <td class="code">file=<i>fileURL</i></td>
        <td class="explanation">Open specified file URL</td>
    </tr>
    <tr>
        <td class="code">scale=<i>number</i></td>
        <td class="explanation">Specify scaling of notation (default: 55; min: 10; max: 200)</td>
    </tr>
    <tr>
        <td class="code">breaks=<i>none|line|encoded|auto</i></td>
        <td class="explanation">Specify breaks option of Verovio</td>
    </tr>
    <tr>
        <td class="code">select=<i>n1,n2,n3</i>&<br>select=<i>ch1</i>&<br>select=<i>slur1</i></td>
        <td class="explanation">Specify selected elements (pass multiple
        comma-separated xml:ids and/or repeat select parameter); notation and
        encoding will page-flip and scroll to first selected element; overrides page parameter</td>
    </tr>
    <tr>
        <td class="code">page=<i>number</i></td>
        <td class="explanation">Specify a page number to be displayed (depends on breaks settings; overridden by select, see above)</td>
    </tr>
    <tr>
        <td class="code">speed=<i>true|false</i></td>
        <td class="explanation">Set speed mode</td>
    </tr>
    <tr>
        <td class="code">fork=<i>true|false</i></td>
        <td class="explanation">If a <span class="code">https://raw.githubusercontent.com</span> URL is supplied via
        the <span class="code">file</span> parameter (see above), direct the user to fork the corresponding
        repository and open their forked version (logging them in first if necessary)</td>
    </tr>
    <tr>
        <td class="code">autoValidate=<i>true|false</i></td>
        <td class="explanation">Activate (default) or deactivate automatic validation upon MEI text input</td>
    </tr>
    <tr>
        <td class="code">notationOrientation=<i>top|right|<br />bottom|left</i></td>
        <td class="explanation">Set relative position of notation in window</td>
    </tr>
    <tr>
        <td class="code">notationProportion=<i>0.5&ndash;0.95</i></td>
        <td class="explanation">Size of notation panel relative to window</td>
    </tr>
    <tr>
        <td class="code">facsimileOrientation=<i>top|right|<br />bottom|left</i></td>
        <td class="explanation">Set relative position of facsimile relative to notation panel</td>
    </tr>
    <tr>
        <td class="code">facsimileProportion=<i>0.5&ndash;0.95</i></td>
        <td class="explanation">Size of facsimile panel relative to notation panel</td>
    </tr>
</table>

#### Examples using URL parameters

<p>
<a class="code" target="_blank"
href="https://mei-friend.mdw.ac.at/?file=https://raw.githubusercontent.com/trompamusic-encodings/Schumann-Clara_Romanze-in-a-Moll/master/Schumann-Clara_Romanze-ohne-Opuszahl_a-Moll.mei&orientation=top&select=beam-0000001097443359,staff-0000001071700568,chord-0000002117575656,chord-0000000554871076&select=slur-0000000400617177,slur-0000001381747608&speed=true&breaks=auto">Schumann piece with several elements 
selected in the middle</a>
</p>
<p>
<a class="code" target="_blank"
href="http://mei-friend.mdw.ac.at/?notationOrientation=top&notationProportion=.6&facsimileOrientation=left&facsimileProportion=.6&breaks=line&file=https://raw.githubusercontent.com/trompamusic-encodings/Beethoven_Op76_BreitkopfHaertel/master/Beethoven_Op76-Breitkopf-Haertel.mei">Beethoven Op.76 containing facsimile
elements with measure-wise zones</a>
</p>
