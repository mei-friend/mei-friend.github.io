---
title: Import and Export
description: Import encodings to and export from mei-friend
permalink: /docs/basic/import-export/
layout: page 
---
# Import and Export

## Supported file types for import

mei-friend is able to open a variety of music encoding formats. If not MEI, it will convert on the fly to MEI using Verovio. 
mei-friend will attempt to guess your file type from its content, regardless of file extension. Only for ABC (".abc") and compressed musicXML (".mxl") files are guessed by their file extension.

Supported formats (through Verovio):
* [MEI](https://en.wikipedia.org/wiki/Music_Encoding_Initiative){:target="_blank"} 
* [MusicXML](https://en.wikipedia.org/wiki/MusicXML){:target="_blank"} uncompressed (plain-text, in score-partwise format) 
* [MusicXML](https://en.wikipedia.org/wiki/MusicXML){:target="_blank"} compressed (file name must end with ".mxl")
* [Humdrum Kern](https://www.humdrum.org/guide/ch02/){:target="_blank"} (Supported in Verovio's release versions only, but not in the current development version)
* [PAE](https://en.wikipedia.org/wiki/Plaine_%26_Easie_Code){:target="_blank"} (Plaine and Easie)
* [ABC](https://en.wikipedia.org/wiki/ABC_notation){:target="_blank"} (file name must end with ".abc")

<!-- {% include alert.html type="warning" title="Humdrum Kern is supported in Verovio's release versions, but not in the current development version" %} -->

## Supported import modes

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

mei-friend allows you to open a file from a URL through clicking on the `Open URL` menu item. The dialog is shown in Fig.&thinsp;3. It accepts all supported format, but it requires that the server at which the file is located allows [Cross-Origin Resource Sharing (CORS)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS){:target="_blank"}. If CORS is not allowed, a CORS error is displayed in the dialog. In that case, you may then download the file first and open it locally in mei-friend.

For example, try to enter the following URL in this dialog:
<span class="code">https://kern.humdrum.org/cgi-bin/ksdata?location=users/craig/classical/field&file=nocturne.krn&format=kern</span>.

<figure class="figure">
    <a href="https://mei-friend.mdw.ac.at/?file=https://kern.humdrum.org/cgi-bin/ksdata?location=users/craig/classical/field&file=nocturne.krn&format=kern" target="_blank">
    <div class="figure-title">Fig.&thinsp;3: Public repertoire dialog.</div>
        <img class="figure-img" src="{{ site.baseurl }}/assets/img/mei-friend-public-repertoire.png" 
            alt="Screenshot of mei-friend public repertoire and open URL dialog" />
    </a>
    <figcaption class="figure-caption">Screenshot of the open URL and public repertoire dialog. You may choose a piece from the public repertoire by composer and title or enter the URL of a file.</figcaption>
</figure>

### GitHub integration

Please see the detailed description for [GitHub integration]({{ site.baseurl }}/docs/basic/github) of mei-friend. 

## Supported export modes

mei-friend has several ways to export or download data. 

### Save MEI

Clicking on `Save MEI` (`CTRL-S` or `CMD-S` on macOS, see Fig.&thinsp;1) will download the complete MEI exncoding as a new file to the browser's download folder.  (Note: This is the only way to save data from your browser to your local file system.) If executing this command multiple times, the browser will generate a new file with a new file name each time. 

For debugging purposes, you may download the current speedmode MEI page excerpt by pressing `CTRL-SHIFT-S` (or `CMD-SHIFT-S` under macOS). 
This will save the currently displayed page surrounded with dummy pages for setting the score definition and connecting time-spanning elements (such as slurs) that reach into the current page (for longer description, see [Working with large files]({{ site.baseurl }}/docs/advanced/largefiles/#the-speed-mode)).

### Save MIDI

Clicking on `Save MIDI` will generate a standard MIDI file from the current encoding and download it the browser's download folder. 

### Save SVG

Clicking on `Save SVG` will generate an SVG file from the currently displayed notation page and download it to the download folder. 
A comprehensive PDF download interface has yet to be implemented.
### Git Commit

Please see the detailed description for [GitHub integration]({{ site.baseurl }}/docs/basic/github) of mei-friend. 

### Notification of changes

A file status indicator shows that a file contains changes by altering the color of the file name from green (no changes) to red (changes since last download) and adding a red asterisk next to the file name. 
Once the file has been downloaded (saved as MEI) or the changes committed to GitHub, this file status indicator will be cleared (color is reverted from red to green) and the red asterisk disappears.



<!--
## Fundamental functionalities
![Demonstration of fundamental functionalities]({{ site.baseurl }}/assets/img/demo/mei-friend-01.gif) 
-->