---
title: Getting started
description: First steps in mei-friend
permalink: /docs/basic/getting-started/
layout: page 
---
# Getting started

## MEI basic concepts

mei-friend is a friendly, browser-based editor for music encodings. The Music Encoding Intiative ([MEI](https://music-encoding.org){:target="_blank"}) is a welcoming community of music technologists, librarians, historians, theorists, and other music scholars engaged in an ongoing effort to define best practices for representing musical documents and structures. Based on this initiative, the MEI XML schema expresses a core set of rules for recording physical and intellectual characteristics of documents in a variety of notation systems, including modern common Western music notation (CMN), Renaisance-era mensural and Medieval neume notations, and several types of guitar and lute tablature notations. In short, MEI is used to encode music notation in a machine-readable structure.

If you are unfamiliar with MEI (or with XML schemas in general), please refer to the [tutorials published by the Music Encoding Initiative](https://music-encoding.org/resources/tutorials.html){:target="blank} to get up to speed. For comprehensive documentation of the MEI schema, please refer to the [MEI Guidelines](https://music-encoding.org/guidelines/v4/content/){:target="_blank"}.

Beside MEI, mei-friend is able to [open a number of different music encoding formats]({{ site.baseurl }}/docs/basic/import-export). These are all automatically converted to MEI for you in the background when opened. Editing in mei-friend is thus always done in MEI, even on files that originate in a different encoding format. This makes mei-friend especially suitable for 'cleaning up' encodings as the final step in a workflow that may start with, e.g., a rough MusicXML encoding produced by an [Optical Music Recognition (OMR)](https://ddmal.music.mcgill.ca/research/OMR/resources/OMRBibliography/) process, or via conversion from notation software such as [MuseScore](https://musescore.org){:target="_blank"}, [Sibelius](https://www.sibelius.com){:target="_blank"}, [Finale](https://www.finalemusic.com){:target="_blank"}, or [Dorico](https://www.steinberg.net/dorico/){:target="_blank"}. For this reason, we refer to mei-friend as a *last-mile* encoding editor. 


## Application screen regions

mei-friend has two primary screen regions: the editor panel and the notation panel. The editor panel contains a text editor view of the current encoding using the MEI XML schema. The notation panel displays an interactive digital score, rendered from the editor panel's MEI XML using the wonderful [Verovio](https://www.verovio.org){:target="_blank"} open-source notation engraving library. The contents of the two panels are tightly interconnected; changes made using either panel will immediately be reflected in both (XML and visual) representations.

<figure class="figure">
    <div class="figure-title">Fig.&thinsp;1: Screen regions of the mei-friend.</div>
        <img class="figure-img" src="{{ site.baseurl }}/assets/img/getting_started/screenshot_screen_regions.PNG" 
            alt="Screenshot of mei-friends layout" />
    <figcaption class="figure-caption">Basic application layout. The relative positions of the two main panels may be re-arranged by choosing a notation panel placement from <span class="code">View</span> in the menu bar.</figcaption>
</figure>

At the top of the mei-friend interface, the menu bar offers the following options: `Login`, `File`, `Code`, `View`, `Manipulate`, `Insert`, and `Help`. <!--Using `View` you can change the layout of the screen regions the way you prefer to have them arranged. --> 
<!--TODO DW continue from here -->
Next to the menu bar
Right next to those options you can see the name of the displayed file and its status: Green means no unsaved changes and red with an asterisk means there are still unsaved changes (see Fig. 2). Saving can either mean locally saving the mei file to your device or commiting the changes to a git repository.

<figure class="thirdwidth">
    <div class="figure-title">Fig.&thinsp;2: File status.</div>
        <img class="figure-img" src="{{ site.baseurl }}/assets/img/getting_started/un_saved.png" 
            alt="File status" />
    <figcaption class="figure-caption">Top: Saved. <br>Bottom: Still unsaved changes in local storage.</figcaption>
</figure>

On the far right you will find three panel icons to toggle the following panels: the [facsimile panel]({{ site.baseurl }}/docs/advanced/facsimile), the annotations panel and the [settings panel]({{ site.baseurl }}/docs/basic/settings). For now the settings panel is the most relevant with its secondary options:

- **mei-friend**: settings regarding mei-friend as a whole
- **editor**: settings regarding the editor panel
- **Verovio**: settings regarding the music notation engraving library [Verovio](https://www.verovio.org/index.xhtml){:target="_blank"} used here that translates the written out encoding into actual music notation

The notation control bar lets you navigate the notation panel among other things.

{% include alert.html type="info" title="Schema indicator" content="The small box 'schema' in Fig. 1 (in this case `ALL 4.0.1`) contains information regarding the type of music notation and the schema used in the file." %}

## Modifying layout of screen regions

As mentioned already you can use `View` in the menu bar to swap the position of the two major panels around. Additionally you can also toggle the three panels facsimile, annotations and settings from this menu and reposition the facsimile panel.

If you want to resize the screen regions you can click and drag the separating line between them.

Find our how to navigate the encoding [here]({{ site.baseurl }}/docs/basic/navigation).

## Interaction between editor and notation

A very important and central feature of the mei-friend is the already briefly mentioned link between the notation and the editor panel. Elements in the notation panel are highlighted in blue and in the editor panel in orange (b3 in bar 2, line 142 in Fig. 1).

To establish this link it is necessary that every element in the editor panel has the attribute `@xml:id` with some string of characters following. With this `@xml:id` mei-friend is able to connect any changes made between the two panels. Important for synchronized updates is also the blue "Updates" checkmark in the notation control bar (see Fig. 3). Otherwise changes have to be updated manually.

<figure class="thirdwidth">
    <div class="figure-title">Fig.&thinsp;3: Automatic update.</div>
        <img class="figure-img" src="{{ site.baseurl }}/assets/img/getting_started/update_checkmark.png" 
            alt="Automatic update" />
    <figcaption class="figure-caption">The blue checkmark enables automatic updates after changes.</figcaption>
</figure>

{% include alert.html type="info" title="No `@xml:id`" content="Even without `@xml:id` changes in the editor panel will be visible in the notation panel but not vice versa." %}

If your MEI-file is missing `@xml:id` or might be using the same @xml:id twice (i.e. due to copying an element) you can [generate those missing `@xml:id`]({{ site.baseurl }}/docs/basic/manipulating/#addremove-ids-tofrom-mei).

To make changes directly in the notations panel you can use the options in the menu bar but it is recommended to use keyboard shortcuts that you can find under `Help -> Show help page` or [here]({{ site.baseurl }}/cheatsheet){:target="_blank"}. You will find that they are similar to shortcuts used by conventional music notation software. For more information read the pages about [inserting]({{ site.baseurl}}/docs/basic/inserting) and [manipulating]({{ site.baseurl}}/docs/basic/manipulating) elements.

If you are working with larger files the [speed mode]({{ site.baseurl }}/docs/advanced/largefiles) option (in the notation control bar) is essential. In this mode only the current page is rendered instead of the whole file which reduces rendering times immensely.

{% include alert.html type="info" title="Persistence: Save changes and settings in browser's local storage" content="mei-friend remembers your most recent changes in your document and settings in your browser's local storage to persist them even if your browser is closed or the mei-friend page left (more info at <a href='/docs/basic/persistence'>persistence</a>)" %}

## mei-friend appearance

Changing theme of editor will adapt mei-friend's appearance. There are a variety of bright and dark themes available.
If set to default, it will follow the night shift settings of your operating system. You may choose to have the notation match the appearance of the theme by selecting `Notation matches theme`. In case of a dark theme, this will invert the usual colors of the notation.

<figure class="figure">
    <div class="figure-title">Fig.&thinsp;4: Themes.</div>
        <img class="figure-img" src="{{ site.baseurl }}/assets/img/getting_started/themes.gif" 
            alt="Themes" />
    <figcaption class="figure-caption">Some fancy themes.</figcaption>
</figure>

## Where next?

For file management and importing or exporting files including supported filetypes check out the pages about [import-export]({{ site.baseurl }}/docs/basic/import-export) and [github]({{ site.baseurl }}/docs/basic/github).

You can find more about file editing at [inserting]({{ site.baseurl }}/docs/basic/inserting) and [manipulating]({{ site.baseurl }}/docs/basic/manipulating). Also read through [validation]({{ site.baseurl }}/docs/basic/validation) to see how mei-friend helps you write ecodings and find errors in your encoding.

For more advanced techniques like working with facsimiles see [advanced topics]({{ site.baseurl }}/docs/advanced).