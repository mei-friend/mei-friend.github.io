---
title: Editing
description: Editing operations in mei-friend
permalink: /docs/basic/editing/
layout: page
---

# Text Editing operations

Under `Code` in the menu bar you can find various text editing operations like "Undo", "Search" or "Replace". [Keyboard shortcuts]({{ site.baseurl }}/cheatsheet){:target="_blank"} are also obviously available for these operations. Make sure that your cursor focus is actually in one of the panels when using a shortcut.

{% include alert.html type="info" title="Regexp" content="Using <a href='https://en.wikipedia.org/wiki/Regular_expression'>Regular Expression</a> (regex or regexp) in the search bar is supported to make searching more powerful." %}

## Indent selection

You can easily indent a selected part in the editor panel of your file with `Indent selection`. The indentation size can be adjusted in the [settings]({{ site.baseurl }}/docs/basic/settings/#editor-appearance). If no section over multiple lines is selected the entire MEI-file will be indentet.

## Validate

Automatic validation is [enabled]({{ site.baseurl }}/docs/basic/settings/#editor-behavior) by default but in case you turned it off with this option you can manually validate your MEI-file. More information [here]({{ site.baseurl }}/docs/basic/validation).