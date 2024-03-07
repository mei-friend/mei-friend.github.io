---
title: Code structure
description: Developer documentation concering the mei-friend code structure
permalink: /docs/advanced/structure/
layout: page
---

# Code structure

## Architecture

mei-friend is implemented as an open-source single-page Web application written in “vanilla” JavaScript, served by a minimal Python Flask server which also handles basic OAuth authentication mechanisms (e.g., to support the GitHub integration). Major re-used components include [CodeMirror](https://codemirror.net/5/), a highly configurable text editor providing the basis for mei-friend’s encoding panel, and [Verovio](https://verovio.org), a powerful MEI engraving engine used for a number of purposes within our application, most significantly to provide the SVG renderings displayed in the notation panel, and to handle input and output functionalities including conversions from other formats. A comprehensive description of all components re-used within mei-friend is available in the [README.md file within the editor’s code repository](https://github.com/mei-friend/mei-friend/blob/main/README.md).

## Code structure

### Top-level directory

The top-level directory of the mei-friend codebase contains a number of files and directories, including the following:

- `app`: The main directory of the mei-friend codebase, containing the core application code (in JavaScript, HTML, and CSS), as well as the Flask server code (in Python).

- `e2e`: A directory containing end-to-end tests for the mei-friend application, written in TypeScript using the Playwright testing library.

- `npm`: A directory containing the `package.json` file, which lists the dependencies required by the Playwright testing library.

- `CHANGELOG.md`: A file containing a log of changes to the mei-friend codebase, including version numbers and release dates.

- `CONTRIBUTING.md`: A file containing guidelines for contributing to the mei-friend codebase, including information on how to report bugs, how to suggest new features, and how to submit pull requests.

- `INSTALL.md`: A file containing instructions for installing and configuring the mei-friend application on a local system.

- `LICENSE`: A file containing the text of the GNU AGPL v3.0 license, under which the mei-friend codebase is distributed.

- `README.md`: A file containing a general overview of the mei-friend application, including information on how to use the application and pointers to further details.

- `env-template`: A file containing a template for the environment variables required by the mei-friend application, including the client ID and client secret for the GitHub OAuth application used for authentication. This is described in more detail in the `INSTALL.md` file.

- `requirements.txt`: A file containing a list of Python packages required by the mei-friend application, including the Flask web framework and other dependencies.

- `gunicorn_config.py`: A file containing configuration settings for the Gunicorn web server, which can be used to deploy the mei-friend application in a production environment.

- `wsgi.py`: A file containing the entry point for the mei-friend application when deployed using the Gunicorn web server.

### app directory

The `app` directory is the main directory of the mei-friend codebase, containing the core application code (in JavaScript, HTML, and CSS), as well as the Flask server code (in Python).

- `static`: A directory containing static files used by the mei-friend application, including images, fonts, stylesheets, and JavaScript libraries.

- `templates`: A directory containing the single-page HTML template used by the mei-friend application.

- `__init__.py`: A file containing the entry point for the Flask server, which initializes the application and sets up the routes.

- `routes.py`: A file containing the route definitions for the Flask server, including the logic for handling requests and rendering responses, as well as the OAuth authentication mechanisms.

### app/static directory

The `app/static` directory contains static files used by the mei-friend application, including images, fonts, stylesheets, and JavaScript libraries.

- `CodeMirror`: A directory containing the CodeMirror text editor library, which is used as the basis for the encoding panel in the mei-friend application. This directory is included as a git submodule; see `INSTALL.md`.

- `css`: A directory containing the stylesheets used by the mei-friend application, including the main stylesheet (`default.css`) and additional stylesheets for specific components.

- `deps`: A directory containing third-party JavaScript libraries used by the mei-friend application, alongside their license files.

- `keymaps`: A directory containing the `default-keymap.js` file, which defines the keyboard shortcuts used by mei-friend.

* `lang`: A directory containing the language files used by mei-friend, each named according to the ISO 639-1 code for the language they represent. For example, the English language file (which is used as a default when no available language matches the browser's language) is named `lang.en.js`. For more information on how to contribute translations, see the `CONTRIBUTING.md` file.

- `lib`: A directory containing the JavaScript libraries used by the mei-friend application, including the main application code (`main.js`) and additional libraries for specific components.

- `owl`: A directory containing the various mei-friend logos, each featuring Eulise the owl, the application’s mascot. These are adapted for different environments and themes, and are used in the application’s user interface.

- `sampleEncodings`: A directory containing the sampleEncodings.csv file used to construct mei-friend's public repertoire menu. To contribute to this repertoire, see the `CONTRIBUTING.md` file.

- `svg`: A directory containing supplementary SVG images using within mei-friend.

- `tests`: A directory containing JavaScript-based tests which are run when mei-friend is deployed in its `develop` environment. These currently include a test to check that all language packs contain identical keys and structures. Note that these are different from the end-to-end tests contained in the top-level `e2e` directory.
