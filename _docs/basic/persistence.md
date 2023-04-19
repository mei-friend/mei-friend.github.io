---
title: Persistence
description: Persistence &ndash; always keep your edits
permalink: /docs/basic/persistence/
layout: page
---
# Persistence

{% include alert.html type="info" title='What is persistence in mei-friend?' content="mei-friend ensures you don't lose any work, even if you leave the Web page, close your browser tab, or if your laptop unexpectedly runs out of battery. Your input is saved automatically, and persists within your browser's local storage." %}

All modifications you have made to the currently loaded encoding, as well as any changes you have made to the mei-friend screen layout or settings, will be retained within your Web browser -- even if you leave the mei-friend page, reload it, or close and re-open your browser entirely. This is accomplished using your browser's [local storage](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API){:target="_blank"}, which is used to persist data associated with a given URL locally on your system. 

Local storage size depends on your browser and is normally around 5 MB. Files exceeding this capacity cannot be persisted in this way. In such cases, a red warning message will appear next to the file name in the menu bar ("LOCAL STORAGE DISABLED", see Fig.&thinsp;1). You are still able to edit your file in this situation, but be aware that unsaved changes will disappear after a page refresh or browser restart.

<figure class="figure">
    <div class="figure-title">Fig.&thinsp;1: Encoding of Mahler 4 exceeds local storage.</div>
    <img class="figure-img" src="{{ site.baseurl }}/assets/img/persistence/mei-friend-local-storage-disabled.png" 
        alt="mei-friend notation update behavior" />
    <figcaption class="figure-caption">Local storage is disabled for larger files, such as this encoding of the first movement of Mahler's 4th Symphony. A corresponding red warning indicator is displayed next to the file name.</figcaption>
</figure>

{% include alert.html type='primary' title='Limitation' content='At the moment, mei-friend creates one local storage session per URL. When multiple tabs are open in the same browser, spill-over effects may therefore occur. This will be addressed in future releases of mei-friend.' %}

## Reset to default

To reset mei-friend, use `Help --> Reset to default`. This will clear all local storage, reset all settings to their default values, and load the default MEI encoding used for demonstration purposes. To reset individual settings menu tabs, press the reset button at the bottom of each tab (please see [Settings]({{ site.baseurl }}/docs/basic/settings) for more information).

