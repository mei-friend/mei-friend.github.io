---
title: Automation in mei-friend
description: How to use automation features in mei-friend
permalink: /docs/advanced/automation/
layout: page
---

# Workflow automation via GitHub Actions

mei-friend can be used to trigger automated processing of MEI files via GitHub Actions.
This enables project-specific workflows (e.g., transformation, validation, or post-processing) to be executed remotely.
This mechanism supports reusable, project-specific automation of MEI processing workflows. It complements manual editing within mei-friend, but does not replace it.

While in a typical setup automation logic and data is stored in the same repository, the setup described here allows for a separation of concerns:
Automation logic is stored in a separate (central) repository, while users work on MEI files in their own (caller) repositoriesm, based on a given template.
Users with some familiarity in a scripting language can also set up their own central repository with custom workflows and scripts.

## Enabling automation in mei-friend {#enabling-automation-in-mei-friend}

Go to Settings > mei-friend > Use GitHub Actions and check the box "Show available GitHub Actions".
This will enable the display of available GitHub Actions in the command palette when opening a file from a GitHub repository.

In the form field "Custom configuration" you need to provide the URL to a JSON file with work package definitions. This file defines the available work packages and their parameters. You can use the provided example file or create your own, see [Creating your own work package definition](#creating-your-own-work-package-definition).
The following example file can be used for testing:
[https://raw.githubusercontent.com/mei-friend/automation/refs/heads/main/work_packages.json](https://raw.githubusercontent.com/mei-friend/automation/refs/heads/main/work_packages.json).

### Creating your own work package definition {#creating-your-own-work-package-definition}

Define your available workflows and parameter schema in a JSON file, then provide its raw URL in the "Custom configuration" setting.
TODO: add desription why this is needed and two different ways of customizing (baukasten of available functions vs. own central repository)


## Applying automation in a user repository

- Create a new GitHub repository for your project from the provided template ([https://github.com/mei-friend/caller-template](https://github.com/mei-friend/caller-template)).
- Either use the provided Test files or add your own files to the repository.
- Login to GitHub in mei-friend and open a file from the repository.
- Ensure that GitHub Actions is enabled in the Settings of mei-friend (see [Enabling automation in mei-friend](#enabling-automation-in-mei-friend)).
- Go to the GitHub menu in the menu bar and then click on "GitHub Action: Call automation workflow". If the button is not visible, check that you have enabled GitHub Actions in the Settings of mei-friend (see [Enabling automation in mei-friend](#enabling-automation-in-mei-friend)).

<figure class="halfwidth">
    <div class="figure-title">Fig.&thinsp;1: GitHub menu with activated GitHub Actions</div>
        <img class="figure-img" src="{{ site.baseurl }}/assets/img/automation/github-menu.png"
            alt="Screenshot of mei-friends GitHub menu with activated GitHub Actions" />
    <figcaption class="figure-caption">GitHub menu with activated GitHub Actions. Clicking on "GitHub Actions: Call automation workflow" will open the GitHub Actions panel.</figcaption>
</figure>


- In the now opened GitHub Actions panel, ensure that you are in the "Custom configuration tab" and the URL for the JSON with the work package definitions is filled in.
- Select a workflow from the dropdown menu and fill in the parameters as needed. Some parameters have default values filled in, which will need to be adjusted as needed.
- It's also possible to either
    - paste the current file path into the form field via the first button, or
    - paste the ID of the currently selected XML element into the form field via the second button. This allows you to easily specify the file and element scope for the workflow.


<figure class="halfwidth">
    <div class="figure-title">Fig.&thinsp;2: GitHub Actions panel</div>
        <img class="figure-img" src="{{ site.baseurl }}/assets/img/automation/github-actions-panel.png"
            alt="Screenshot of mei-friends GitHub Action panel" />
    <figcaption class="figure-caption">GitHub Actions panel with Custom configuration tab opened with filled in URL to a JSON with work package definitions.</figcaption>
</figure>

- Click on "Run workflow" to trigger the chosen work package. This will execute the workflow on GitHub, which may take some time to complete. A progress bar will indicate the status of the workflow execution, or you can also check the status directly on GitHub by clicking on the provided link in the panel (only available after the start of the workflow execution).
- After the execution is completed, there will be a success or failure message in the panel.
- The results of a successful workflow execution will be committed to the repository, if there is only a report about the file printed and no changes were done to the file, there will be no commit. Click on "Reload MEI file" to see the changes in mei-friend.
- If the workflow execution fails, you can check the logs of the workflow run on GitHub to see what went wrong. Click on the provided link in the panel to go to the workflow run on GitHub and see what went wrong.


## Troubleshooting

- If "Commit changes" fails, check that you have write access to the repository and that GitHub Actions is enabled in the repository settings on GitHub.
- TODO: more troubleshooting tips


## Structure of the automation setup

The automation setup distinguishes between three main components:

- Caller repository: contains MEI files and a minimal GitHub Actions workflow ([Caller template](https://github.com/mei-friend/caller-template))
- Central repository: contains processing logic and workflow definitions ([Central repository with examples](https://github.com/mei-friend/automation/))
- JSON configuration: defines available work packages and their parameters ([Template](https://github.com/mei-friend/automation/blob/main/work_package_template.json), [Example](https://github.com/mei-friend/automation/blob/main/work_packages.json))








When a work package from the JSON is chosen and triggered, the central workflow operates on data from the caller repository and writes the results back.
Users need to operate on a caller repository where they have write access and the GitHub Actions are set up correctly, but do not need to have any knowledge of GitHub Actions or the underlying scripts in the central repository. Through creating a repository from the provided template, the necessary setup is already in place, connecting the caller repository with the provided central repository.




<!--
Automation is triggered through mei-friend's GitHub integration:

Open a file from a GitHub repository
Select a processing command (as provided by the configured automation)
Optionally specify:
file paths
XML elements (via selection)
command parameters
Execute the workflow

The workflow runs on GitHub and may take some time to complete.

## Inputs

Depending on the configured automation, the following inputs may be provided:

File scope: current file or multiple files
Element scope: selected XML elements (optional)
Command: processing operation defined by the central repository
Parameters: command-specific options

## Results

After completion:

Changes are committed to the GitHub repository
Updated files can be reloaded in mei-friend
Workflow logs are available via GitHub Actions
Configuration

To enable automation, the following must be configured:

A GitHub repository containing MEI files
A caller workflow in that repository
A reference to a central automation repository

The central repository defines which commands are available in mei-friend.

Notes
Processing is executed remotely via GitHub Actions
Some workflows may require repository secrets (e.g. API credentials)
Execution time depends on the complexity of the workflow
Scope
 -->
