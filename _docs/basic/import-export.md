---
title: Import and Export
description: Import encodings to and export from mei-friend
permalink: /docs/basic/import-export/
layout: page 
---
# Import and Export

## Supported file types for import

mei-friend is able to open a variety of music encoding formats. If not MEI, it will convert on the fly to MEI using Verovio. 
mei-friend will attempt to guess your file type from its content, regardless of file extension. 

{% include alert.html type="warning" title='ABC (".abc") and compressed musicXML (".mxl") files are guessed by their file extension' %}

* MEI
* MusicXML (Uncompressed, such as ".xml", ".musicXml"; and compressed, file name must end with ".mxl")
* Humdrum Kern (Verovio release versions only)
* PAE (Plaine and Easie)
* ABC (file name must end with ".abc")

{% include alert.html type="warning" title="Humdrum Kern is supported in Verovio's release versions, but not in the current development version" %}

## Supported import modes

<!-- * Open local file
    * Through file dialog `Menu - Open file`
    * Through Drag'n'Drop (best onto notation)
* Open URL
* Public repertoire (see Public Repertoire doc page)
* GitHub (see GitHub documentation page) -->

### Open local file through file dialog

By clicking `Menu --> Open file` (or pressing `CTRL + O` or `CMD + O` on macOS, see Fig.&thinsp;1), a file dialog window will open that allows you to select any file from your local file system. All supported files will be handled as described above. There are separate menus for handling specific file types (musicXML, Humdrum kern, PAE and ABC); those file dialogs will filter by typical file ending. The functionality of these menu items is actually covered by the generic open file dialog; we have kept them in the file menu list to spell out the import capabilities to a new user.

<figure class="figure">
    <div class="figure-title">Fig.&thinsp;1: mei-friend file menu list.</div>
        <img class="figure-img" src="{{ site.baseurl }}/assets/img/mei-friend-file-menu-list.png" 
            alt="Screenshot of mei-friend file menu list" />
    <figcaption class="figure-caption">Screenshot of the file menu list showing all possible import and export possibilities of mei-friend. The screenshot is taken on a computer running macOS; the keyboard shortcuts may look differently on your operating system.</figcaption>
</figure>

### Drag'n'Drop any supported file onto mei-friend

As a convenience to the user, mei-friend supports Drag'n'Drop for any supported file. So, just drag any file onto the notation panel and mei-friend will show this typical blue import modal (see Fig.&thinsp;2). When releasing the mouse button, mei-friend will import the file as described above and display both encoding and notation.

<figure class="figure">
    <div class="figure-title">Fig.&thinsp;2: mei-friend Drag'n'Drop look.</div>
        <img class="figure-img" src="{{ site.baseurl }}/assets/img/mei-friend-drag-n-drop.png" 
            alt="Drag'n'Drop functionality of mei-friend" />
    <figcaption class="figure-caption">Screenshot of the Drag'n'Drop functionality of mei-friend: just drag any file type onto the notation panel to import it into mei-friend.</figcaption>
</figure>

### Open URL and public repertoire

mei-friend allows you to open ...

<figure class="figure">
    <div class="figure-title">Fig.&thinsp;3: mei-friend Drag'n'Drop look.</div>
        <img class="figure-img" src="{{ site.baseurl }}/assets/img/mei-friend-public-repertoire.png" 
            alt="Screenshot of mei-friend public repertoire and open URL dialog" />
    <figcaption class="figure-caption">Screenshot of the open URL and public repertoire dialog. You may chose a piece from the public repertoire by composer and title or enter the URL of a file.</figcaption>
</figure>

### GitHub integration

Please see the detailed description for [GitHub integration]({{ site.baseurl }}/docs/basic/github) of mei-friend. 

## Supported export modes

* Save MEI
* Save MIDI
* Save SVG (for current notation view)
* Git Commit (see GitHub documentation page)

### Notification of changes
* File status indicator will show when any changes were made. This is cleared once you save MEI or git commit.



## Fundamental functionalities
Probably move this somewhere else...

![Demonstration of fundamental functionalities]({{ site.baseurl }}/assets/img/demo/mei-friend-01.gif)

