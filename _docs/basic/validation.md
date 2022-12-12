---
title: Validation
description: Schema validation in mei-friend
permalink: /docs/basic/validation/
layout: page
---
# XML Schema Validation

The MEI validation and RNG loading code is adapted from the implementation in the [Verovio editor](https://editor.verovio.org){:target="_blank"}, kindly contributed by Laurent Pugin. It makes use of [libxml2](https://gitlab.gnome.org/GNOME/libxml2/){:target="_blank"} by the GNOME project. 


## Loading the RNG schema

mei-friend will attempt to follow the target URL given as schema information of the xml-model in the document's prolog. Once successfully loaded, it will display a short version of the schema name next to the file name (see Fig.&thinsp;1 for a click sequence). If the schema is one of the standard schemata provided at [music-encoding.org](https://music-encoding.org/resources/schemas.html), it will use a standard abbreviation consisting of a profile abbreviation ('CMN', 'Mensural', 'Neumes', 'All', or 'Any') and the version number (such as '4.0.1' or 'dev'). A typical schema would be displayed as `CMN 4.0.1` in the header.

While downloading the schema, the schema status will display an orange downwards-pointing arrow. If a download error occurs, the schema status will display a red question tag. In all cases, more detailed information is displayed when hovering with the mouse above the schema status. Whenever the schema target URL is changed in the editor, mei-friend will automatically attempt to load the new schema file and change the schema status display accordingly.

Upon download completion, the schema information is automatically connected with the editor's code completion functionality and used for code validation. 

<figure class="figure">
    <div class="figure-title">Fig.&thinsp;1: mei-friend schema validation.</div>
        <img class="figure-img" src="{{ site.baseurl }}/assets/img/mei-friend-validation.gif" 
            alt="Animated GIF demonstrating the schema loading and validation functionality, as well as code-completion." />
    <figcaption class="figure-caption">Animated GIF showing a loaded standard CMN 4.0.1 MEI schema changed by the user to All 4.0.1. This new schema is loaded and a new validation initiated. Upon manually entering new encoding, this schema serves for as-you-type recommendations (recommending also a neume at entering a note). It then demonstrates switching to manual validation mode and loading an MEI file with several validation errors displayed in the validation report. Clicking on the message will make editor flip to those lines in the encodinig, highlighted by red wavy lines.</figcaption>
</figure>

## Code completion

mei-friend uses CodeMirror's hinting functionality to display schema-informed recommendations while typing new MEI encoding in the editor panel. The editor displays small modals showing recommendation to complete tag, attribute and value information in accordance with the loaded schema. 

## Schema validation

mei-friend uses [libxml2](https://gitlab.gnome.org/GNOME/libxml2/){:target="_blank"} to validate against the RNG schema given in the MEI file's prolog (see above). 

The status of the validation process is displayed in the little **validation status icon** at the upper-left corner of the editor panel (see Fig.&thinsp;1 in [getting-started]({{ site.baseurl }}/docs/basic/getting-started)). It shows a green tick to show successful validation without any messages, an orange downwards-pointing arrow during schema download and an orange spinning clock during validation, a red question-tag for a missing schema file, and a red triangle to indicate completed validation with validation messages. 

Validation messages are shown in the validation report next to the validation status icon. The validation report modal can be shown and hidden through a mouse click on the validation icon. The validation report lists the validation messages as output by libxml2 together with the line number to which each message belongs. The validation messages in the report are clickable making the editor jump to the respective line number upon mouse click.

The validation frequency depends on the auto validation settings in the editor settings menu (`View --> Settings panel --> Editor settings`). When "Auto validation" is checked (as it is by default), validation is initiated after each edit operation in the editor panel or through mei-friend functionality of the notation panel. If this potentially high frequency of validation operations is too much, you may uncheck this option. When "Auto validation" is unchecked (set to manual), the validation status icon shows a grey question-tag and validation can be initiated by clicking on the validation status icon or selecting `Code --> Validate` in the menu bar or keyboard shortcut provided there. 


