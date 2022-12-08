---
title: Persistence
description: Persistence &ndash; always keep your edits
permalink: /docs/basic/persistence/
layout: page
---
# Persistence

{% include alert.html type="info" title='What is persistence in mei-friend?' content='Editing files in a Browser makes saving to the local file system a little complicated. To always keep every modification in your files even after leaving the mei-friend page or after a Browser restart, mei-friend saves each of your keypresses so that your input will persist.' %}

Even after a page refresh or Browser restart, every change in your encoding and all your settings will be restored. This is made possible through the Browser's local storage that keeps information for a given URL stored persistently. mei-friend safes each and every change in the encoding and all settings in local storage and will restore it upon page refresh and Browser restart.

Local storage size may depend on your Browser and is normally around 5 MB. Files exceeding this capacity cannot be stored anymore. In this case, a red warning message will appear next to the file name in the menu bar ("LOCAL STORAGE DISABLED"). You may then still edit your files, but be aware that unsafed changes will disappear after a page refresh or Browser restart.

{% include alert.html type="primary" title='Limitation' content='At the momement, mei-friend will create a local storage session per URL. When having multiple tabs open in the same browser, spill-over effects may occur. This will be addressed in future releases of mei-friend.' %}
