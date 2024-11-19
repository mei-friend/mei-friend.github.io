---
title: Getting started
description: First steps in mei-friend
permalink: /docs/basic/getting-started/
layout: page 
---
# Getting started

## MEI basic concepts

mei-friend is a friendly, browser-based editor for music encodings. The Music Encoding Intiative ([MEI](https://music-encoding.org){:target="_blank"}) is a welcoming community of music technologists, librarians, historians, theorists, and other music scholars engaged in an ongoing effort to define best practices for representing musical documents and structures. Based on this initiative, a family of <a href="https://music-encoding.org/resources/schemas.html" target="_blank">MEI XML schemas</a> express a core set of rules for recording physical and intellectual characteristics of documents in a variety of notation systems, including modern common Western music notation (CMN), Renaisance-era mensural and Medieval neume notations, and several types of guitar and lute tablature notations. In short, MEI is used to encode music notation in a machine-readable structure.

If you are unfamiliar with MEI (or with XML schemas in general), please refer to the [tutorials published by the Music Encoding Initiative](https://music-encoding.org/resources/tutorials.html){:target="blank} to get up to speed. For comprehensive documentation of MEI's schemas, please refer to the [MEI Guidelines](https://music-encoding.org/guidelines/v5/content/){:target="_blank"}.

Beside MEI, mei-friend is able to [open a number of different music encoding formats]({{ site.baseurl }}/docs/basic/import-export). These are all automatically converted to MEI for you in the background when opened. Editing in mei-friend is thus always done in MEI, even on files that originate in a different encoding format. This makes mei-friend especially suitable for 'cleaning up' encodings as the final step in a workflow that may start with, e.g., a rough MusicXML encoding produced by an [Optical Music Recognition (OMR)](https://ddmal.music.mcgill.ca/research/OMR/resources/OMRBibliography/) process, or via conversion from notation software such as [MuseScore](https://musescore.org){:target="_blank"}, [Sibelius](https://www.sibelius.com){:target="_blank"}, [Finale](https://www.finalemusic.com){:target="_blank"}, or [Dorico](https://www.steinberg.net/dorico/){:target="_blank"}. For this reason, we refer to mei-friend as a *last-mile* encoding editor. 


## Application screen regions

mei-friend has two primary screen regions: the **editor panel** and the **notation panel**. The editor panel contains a text editor view of the current encoding using MEI XML. The notation panel displays an interactive digital score, rendered from the editor panel's MEI XML using the wonderful [Verovio](https://www.verovio.org){:target="_blank"} open-source notation engraving library. The contents of the two panels are tightly coupled; changes made using either panel will immediately be reflected in both (XML and visual) representations.

<figure class="fullwidth">
    <div class="figure-title">Fig.&thinsp;1: Screen regions of the mei-friend.</div>
        <img class="figure-img" src="{{ site.baseurl }}/assets/img/getting_started/screenshot_screen_regions.PNG" 
            alt="Screenshot of mei-friends layout" />
    <figcaption class="figure-caption">Basic application layout. The relative positions of the two main panels may be re-arranged by choosing a notation panel placement from <span class="code">View</span> in the menu bar.</figcaption>
</figure>

At the top of the mei-friend interface, the **menu bar** offers the following options: [`Login`]({{ site.base_url }}/docs/basic/github), [`File`]({{ site.base_url }}/docs/basic/import-export), [`Code`]({{ site.base_url }}/docs/basic/editing), [`View`](#modifying-layout-of-screen-regions), [`Manipulate`]({{ site.base_url }}/docs/basic/manipulating), [`Insert`]({{ site.base_url }}/docs/basic/inserting), and [`Help`]({{ site.base_url}}/docs/basic/help). <!--Using `View` you can change the layout of the screen regions the way you prefer to have them arranged. --> 


The area to the right of the menu bar displays some basic information about the currently opened **file's status**: the file name and [location]({{ site.base_url }}/docs/basic/import-export#file_locations), and the version of the deployed MEI schema. 

{% include alert.html type="info" title="Schema indicator" content='The <strong>schema indicator</strong> (Fig.&thinsp;1) identifies <a href="https://music-encoding.org/resources/schemas.html" target="_blank">the specific type and version of the MEI schema</a> deployed in your file.' %}

When working with [local files]({{ site.base_url }}/docs/basic/import-export#open-local-file-through-file-dialog), you can click on the file name to rename the file in mei-friend's buffer. An asterisk (`*`) indicator appears to the right of the file name to alert you to unsaved changes in the file (see Fig.&thinsp;2). A 'save' in this context involves either [saving the MEI file locally]({{ site.base_url}}/docs/basic/import-export#save_mei) to your device, or [committing to a GitHub repository]({{ site.base_url }}/docs/basic/github). Note that the state of your encoding [persists]({{ site.base_url }}/docs/basic/persistence) in your browser's local storage regardless of save status to keep your work safe.


<figure class="thirdwidth">
    <div class="figure-title">Fig.&thinsp;2: File-changed status.</div>
        <img class="figure-img" src="{{ site.baseurl }}/assets/img/getting_started/un_saved.png" 
            alt="File status" />
    <figcaption class="figure-caption"><em>Top</em>: No changes since opening or last save. <br><em>Bottom</em>: Unsaved changes exist.</figcaption>
</figure>


On the top right of the interface, you will find four **panel icons** used to access the following panels and control bars: 
* the [MIDI playback control bar]({{ site.base_url }}/docs/basic/midiplayback) allows you to listen to a sonification of your encoding;
* the [facsimile panel]({{ site.base_url }}/docs/advanced/facsimile) lets you interact with source images referenced from the encoding;
* the [annotations panel]({{ site.base_url}}/docs/advanced/annotation) provides an interface to read and generate in-line and stand-off score annotations;
* the [settings panel]({{ site.baseurl }}/docs/basic/settings) permits configuration and personalization of mei-friend on three tabs: 
    * *mei-friend* general application settings
    * *Editor*: settings supplied to the [CodeMirror](https://www.codemirror.net){:target="_blank"} text editor component integrated in mei-friend's editor panel
    * *Verovio*: settings supplied to the [Verovio](https://www.verovio.org/index.xhtml){:target="_blank"} engraving library, used to generate the content of mei-friend's notation panel

## Modifying layout of screen regions

The `View` menu bar item may be used to modify the relative positions of the [**notation** and **editor panels**](#application-screen-regions), using `Notation top`, `bottom`, `left`, and `right`. The `View` menu may further be used to toggle display of the various panels and control bars (also accessible as **panel icons**); and, it allows the repositioning of the [**facsimile panel**]({{ site.base_url }}/docs/facsimile) relative to the notation panel, using `Facsimile top` and so on.

The notation, editor, and facsimile panels may be resized relative to one another by clicking and dragging on the **resizer bars** (thick grey horizontal or vertical lines labeled with `···`) dividing the panels.

## Interaction between editor and notation

The **editor** and **notation panels** are tightly coupled; changes made using the text editor are reflected in the notation immediately if the `Update` checkbox (automatic updates) in the **notation control bar** is checked, or otherwise, as soon as the 'update notation manually' icon to the right of this checkbox is clicked (Fig.&thinsp;3). 

<figure class="thirdwidth">
    <div class="figure-title">Fig.&thinsp;3: Automatic update.</div>
        <img class="figure-img" src="{{ site.baseurl }}/assets/img/getting_started/update_checkmark.png" 
            alt="Automatic update" />
    <figcaption class="figure-caption">When the 'Update' checkbox is active, the notation panel automatically updates whenever changes are made in the editor panel. When unchecked, click the icon next to the checkbox to update manually.</figcaption>
</figure>

mei-friend also allows you to make changes to your encoding directly from the notation panel, allowing you to update the MEI XML without requiring any manual (textual) intervention. For this to work, the MEI elements in your encoding must be furnished with [`@xml:id`](https://music-encoding.org/guidelines/v5/content/shared.html#sharedCommonAttributes){:target="_blank"} identifiers, which are used to connect the graphical (SVG) elements in the notation panel back to the textual (MEI XML) elements the editor. If some of your MEI elements are missing these identifiers, or might be using the same `@xml:id` twice (e.g., due to copying an element), you can [generate the missing `@xml:id`]({{ site.baseurl }}/docs/basic/manipulating/#addremove-ids-tofrom-mei) attributes automatically using the `Manipulate` menu.

{% include alert.html type="warning" title="Why doesn't the text editor respond to my interactions with the notation?" content='MEI elements must be furnished with <span class="code">@xml:id</span> attributes to connect your interactions with the notation back to the editor panel. Please <a href="/docs/basic/manipulating/#addremove-ids-tofrom-mei">generate these identifiers</a> and try again.' %}

Connecting the notation and editor panels using `@xml:id` also allows selections in either modality to result in equivalent selections in the other; see, e.g., the b3 in the second measure (highlighted in blue) and line 142 in the text editor (highlighted in orange) in Fig.&thinsp;1. 

Changes can be made via the notation panel using the [`Inserting`]({{ site.base_url }}/docs/basic/inserting) and [`Manipulating`]({{ site.base_url }}/docs/basic/manipulating) menus. To speed up your editing, these options may also be activated using the keyboard shortcuts listed next to the menu items; these are chosen to reflect conventional music notation software, and will become familiar to you with further use. All keyboard shortcuts are summarised in our handy [cheat sheet]({{ site.base_url }}/cheatsheet ){:target="_blank"}.

## Internationalization

To satisfy mei-friend's aspiration to user-friendliness, selection of the language of the user interface is provided through the world panel icon at the top-right corner of the mei-friend window. Currently, the most common languages are supported (English as the default language, and currently Catalan, German, Spanish, French, Italian, Japanese, Polish and Ukrainian); however, we are aware that many are missing. Please note that we have used automatic translation support to generate many of those language files. If there is any strange formulation in a language you know or you feel that a specific language is missing, please provide us feedback through a [GitHub issue](https://github.com/mei-friend/mei-friend/issues/new/choose){:target="_blank"} or &ndash; even better &ndash; through a pull request with the edited or added language file of [your fork of the mei-friend repository](https://github.com/mei-friend/mei-friend/fork){:target="_blank"}. The language pack files are simple JavaScript files in the [`app/static/lang`](https://github.com/mei-friend/mei-friend/tree/main/app/static/lang){:target="_blank"} directory. The language pack contains a constant object named `lang` with a key/value combination for each menu item with text; the key name is simultaneously the element identifier in the user interface.

## mei-friend appearance
You may personalize the visual appearance of mei-friend by choosing among the themes available under `Editor -> Editor appearance` in the [settings]({{ site.base_url }}/docs/basic/settings). There are a variety of bright and dark themes available; *Eulise the Owl*'s circadian rhythm will adjust accordingly. If `Theme` is set to default, a pre-configured theme matching the dark-mode / night-shift settings of your operating system will be applied. You may also choose to math the notation's appearance to your selected theme by activating the `Notation matches theme` checkbox. In case of a dark theme, this will invert the usual colors of the notation.

<figure class="figure">
    <div class="figure-title">Fig.&thinsp;4: Themes.</div>
        <img class="figure-img" src="{{ site.baseurl }}/assets/img/getting_started/themes.gif" 
            alt="Themes" />
    <figcaption class="figure-caption">A variety of themes allows you to personalize mei-friend's appearance.</figcaption>
</figure>

## Where next?
Detailed documentation on a variety of [basic topics]({{ site.base_url }}/docs/basic) is available through this documentation website's navigation menu. To learn more about opening and working with music encoding files in mei-friend, including information about supported filetypes, check out the chapters on [file import-export]({{ site.baseurl }}/docs/basic/import-export) and on [GitHub]({{ site.baseurl }}/docs/basic/github). You can find out more about the various editing operations available to you in the chapters on [inserting]({{ site.baseurl }}/docs/basic/inserting) and [manipulating]({{ site.baseurl }}/docs/basic/manipulating). Also read through [validation]({{ site.baseurl }}/docs/basic/validation) to see how mei-friend helps you find and correct encoding errors. To find out how to listen to your encoding, read up on [MIDI playback]({{ site.base_url }}/docs/basic/midiplayback). If you need further help, continue to the [Help]({{ site.base_url }}/docs/basic/help) chapter or consider [raising an issue](https://github.com/mei-friend/mei-friend.github.io/issues/new/choose){:target="_blank"} on the [mei-friend documentation issue tracker](https://github.com/mei-friend/mei-friend.github.io/issues){:target="_blank"}.

For more advanced techniques like working with [facsimile source images]({{ site.base_url}}/docs/advanced/facsimile) or with [very large encodings]({{ site.base_url }}/docs/advanced/largefiles) please refer to our [advanced topics]({{ site.baseurl }}/docs/advanced).