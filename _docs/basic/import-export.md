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

For debugging purposes, you may download the current speed mode MEI page excerpt by pressing `CTRL-SHIFT-S` (or `CMD-SHIFT-S` under macOS). 
This will save the currently displayed page surrounded with dummy pages for setting the score definition and connecting time-spanning elements (such as slurs) that reach into the current page (for longer description, see [Working with large files]({{ site.baseurl }}/docs/advanced/largefiles/#the-speed-mode)).

### Save SVG

Clicking on `Save SVG` will generate an SVG file from the currently displayed notation page and download it to the download folder. 
A comprehensive PDF download interface has yet to be implemented.

### Save MIDI

Clicking on `Save MIDI` will generate a standard MIDI file from the current encoding and download it the browser's download folder. 

### Preview and save PDF

Clicking the menu item `Preview PDF` (or standard `CTRL-P` under Windows/Linux and `CMD-P` under Mac operating systems) will activate the preview mode as shown in Fig.&thinsp;4. 

This mode takes the page size and margin settings from the Verovio settings panel to display the notation as a full page. It will also provide a page range selection modal to select all pages, the current page, a specific page range, or selected pages and page ranges by directly typing the page numbers (such as `2, 5-8`, separated by commas for individual pages and hyphens for page ranges). Switching into the preview-PDF mode will change certain Verovio settings (`'Adjust page height': false, 'mm output': true`) to enable the full-page view through Verovio. It also hides certain notation control bar items (flip-to-page and udpate) and shows the notation font selector.  When closing the preview-PDF mode (by clicking the `x` button or pressing `ESC`), the original notation control bar settings, as shown in the mei-friend settings panel, will be restored. 

{% include alert.html type="info" title="Why only one page is selected in speed mode?" content='When speed mode is activated, only the current page will be exported to the PDF file. Please deactivate speed mode, to have all pages available for selection and export to the PDF file.' %}

To generate and download the PDF file for the selected pages, press the `Save PDF` button at the top-right of the notation control bar. Your browser will notify you about the downloaded PDF file, using the encoding file name with a `.pdf` file extension. 

<figure class="figure fullwidth">
    <a href="https://mei-friend.mdw.ac.at/" target="_blank">
    <div class="figure-title">Fig.&thinsp;4: Preview PDF with a full-page view.</div>
        <img class="figure-img" src="{{ site.baseurl }}/assets/img/mei-friend-preview-pdf.png" 
            alt="Screenshot of mei-friend in preview PDF mode, showing the notation in full page alongside the settings panel to adjust the details of the preview." />
    </a>
    <figcaption class="figure-caption">Screenshot of mei-friend in preview PDF mode, showing the notation as a full page with an additional page-range selector modal and a save-PDF button in the notation control bar. At the right-hand side, Verovio settings panel is shown to adjust the details of the preview.</figcaption>
</figure>

### Git Commit

Please see the detailed description for [GitHub integration]({{ site.baseurl }}/docs/basic/github) of mei-friend. 

### Notification of changes

A file status indicator shows that a file contains changes by altering the color of the file name from green (no changes) to red (changes since last download) and adding a red asterisk next to the file name. 
Once the file has been downloaded (saved as MEI) or the changes committed to GitHub, this file status indicator will be cleared (color is reverted from red to green) and the red asterisk disappears.



<!--
## Fundamental functionalities
![Demonstration of fundamental functionalities]({{ site.baseurl }}/assets/img/demo/mei-friend-01.gif) 
-->