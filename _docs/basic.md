---
title: Basic concepts
permalink: /docs/basic/
layout: page 
---
# Basic concepts

## MEI basic concepts

MEI-Friend is a online tool designed to work with and edit MEI (Music Encoding Initiative). MEI is an xml-based encoding language that supports most western music notation from mensural notation, to tablature to modern music notation (Common Music Notation, CMN). In short MEI tries to encode music notation in a machine-readable structure. 
If you don't know how MEI works or have never worked with xml-tpye languages there are very beginner friendly tutorials [here] (https://music-encoding.org/resources/tutorials.html){:target="_blank"}. You can also find a thorough documentation [here] (https://music-encoding.org/guidelines/v4/content/){:target="_blank"}.

MEI-friend is not designed to write MEI by hand but to import an already existing MEI file (that was converted from musicXML for example) and edit and correct it.

## Application screen regions

MEI-friend has two major screen regions: the editor panel and the notation panel. The editor panel is where the MEI encoding is displayed and the notation panel where it is rendered. These two panels are always connected so that every change that is made in one of them will result in a change also in the other one.

![screen regions of mei-friend]({{ site.baseurl }}/assets/img/Basic_concepts/screenshot_screen_regions.png "screen regions of mei-friend")

At the top you can find a menu bar with the options: Login, File, Code, View, Manipulate, Insert and Help. Using `View` you can change the layout of the screen regions the way you prefer to have them arranged. Right next to those options you can see the name of the displayed file

On the far right you will find three icons to toggle the following panels: the [facsimile panel](_docs\facsimile.md), the annotations panel and the settings panel. For now the settings panel is the most relevant with its secondary options:

- **mei-friend**: settings regarding mei-friend as a whole
- **editor**: settings regarding the editor panel
- **verovio**: settings regarding the music notation engraving library [verovio](https://www.verovio.org/index.xhtml){:target="_blank"} used here that translates the written out encoding into actual music notation

The notation menu bar lets you navigate the notation panel among other things.

> {% include alert.html type="info" title="Info" %} The small box between menu bar and file name (in this case "ALL 4.0.1") contains information regarding the type of music notation and the schema used in the file. For now it is not important!

## Modifying layout of screen regions

As mentioned already you can use `View` to swap the position of the two major panels around. Additionally you can also toggle the three panels facsimile, annotations and settings from this menu and reposition the facsimile panel.

If you want to resize the screen regions you can click and drag the separating line between them.

## Interaction between editor and notation

A very important and central feature of the mei-friend is the already briefly mentioned link between the notation and the editor panel. To establish this link it is necessary that every element in the editor panel has the attribute `<xml:id>` with some string of characters following. With this ID mei-friend is able to connect any changes made between the two panels. Important for synchronized updates is also the blue "Updates" checkmark in the notation menu bar. Otherwise changes have to be updated manually.

> {% include alert.html type="info" title="No ID's" %} Even without ID's changes in the editor panel will be visible in the notation panel but not vice versa. 

If your MEI-file is missing ID's or might be using the same ID twice (i.e. due to copying an element) you can rerender the file with `Manipulate -> Re-render MEI (with ID's)` which will generate any missing ID's for your elements while also reformating identations, spaces and similar things. `Manipulate -> Re-render MEI (remove ID's)` will remove any ID that is not referenced somewhere else while reformating.

To make changes directly in the notations panel you need to use hotkeys that you can find under `Help -> Show help page`. You will find that they are similar to hotkeys used by conventional music notation software.

![navigation in the notation menu bar]({{ site.baseurl }}/assets/img/Basic_concepts/navigation_notation_panel.png "navigation in the notation menu bar")

Using the navigation section in the notation menu bar you can flip through the pages of your rendered MEI-file or put in a page number that you want to jump to. Important to note is that the editor panel will follow the notation panel to the corresponding encoding part as long as this feature is enabled by the blue checkmark to the right.
The downwards arrow to the left allows you to select a [section](https://music-encoding.org/guidelines/v4/elements/section) {:target="_blank"} and jump directly to it. Among other things sections are simply useful to segment a work semantically (like in this case for Beethovens "Sechs Variationen": "Tema, Var-I, Var-II ..."). This arrow wont appear if you don't have any sections in your encoding!

If you are working with larger files the [speedmode](_docs\largefiles.md) option (in the notation menu bar) is essential. In this mode only the current page is rendered instead of the whole file which reduces rendering times immensly.

> {% include alert.html type="info" title="Local storage" %} mei-friend remembers your most recent work and settings in your browser's local storage to persist them even if your browser is closed as long as you don't delete it automatically

## Where next?

Kurzer Text mit Wegweisern zu anderen Kapiteln