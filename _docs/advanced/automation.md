---
title: Automation in mei-friend
description: How to use automation features in mei-friend
permalink: /docs/advanced/automation/
layout: page
---

# Workflow automation via GitHub Actions

mei-friend can trigger automated processing of MEI files via GitHub Actions. Users select named **work packages** — bundled, project-specific processing operations such as transformation, validation, or post-processing — from mei-friend's interface, which are then executed on GitHub's servers.

Two terms are used throughout this page and are worth distinguishing upfront:
- **Work package**: a named processing operation selectable in mei-friend, defined in a JSON configuration file. Each work package may invoke one or more scripts as part of a single operation.
- **GitHub Actions workflow** (or simply *workflow* in this documentation): a YAML-defined automation pipeline that runs on GitHub's servers and carries out the execution. Workflows form the underlying infrastructure; they are not directly visible to the user in mei-friend.

This mechanism complements manual editing within mei-friend, but does not replace it.

The setup described here separates automation logic from project data: GitHub Actions workflow files and processing scripts are maintained in a shared central repository, while users store their MEI files in their own caller repository based on a provided template.
Users with familiarity in a scripting language can also set up their own central repository with custom GitHub Actions workflows and scripts.

## Enabling automation in mei-friend {#enabling-automation-in-mei-friend}

Go to **Settings > mei-friend > Use GitHub Actions** and check the box **"Show available GitHub Actions"**.
This enables the GitHub Actions panel, accessible from the GitHub menu in the menu bar.

In the **"Custom configuration"** field, provide the URL of a JSON file that defines the available work packages and their parameters.
The following example file can be used for testing:
[work_packages.json](https://raw.githubusercontent.com/mei-friend/automation/refs/heads/main/work_packages.json)

To create your own work package definition, see [Creating your own work package definition](#creating-your-own-work-package-definition).

### Creating your own work package definition {#creating-your-own-work-package-definition}

The JSON work package definition file controls which work packages appear in mei-friend's GitHub Actions panel and how they are presented. Customizing it lets you tailor the available operations to your project without necessarily changing any underlying scripts or GitHub Actions workflows.

There are two levels of customization:

**Adapting the work package JSON (no changes to GitHub Actions workflows or scripts required)**

If the scripts you need are already available in an existing central repository — such as the [provided central repository](https://github.com/mei-friend/automation/) — you can define new work packages simply by writing a custom JSON file. Each entry specifies which script to invoke and with which parameters, so you can create project-specific named work packages with tailored default values, expose only a relevant subset of available operations, or present existing scripts under clearer names for your project members. No changes to GitHub Actions workflows or scripts are needed.

A JSON template and a worked example are provided in the central repository:
- [Template](https://github.com/mei-friend/automation/blob/main/work_package_template.json)
- [Example](https://github.com/mei-friend/automation/blob/main/work_packages.json)

Once your JSON file is hosted at a publicly accessible, CORS-enabled URL, provide that URL in the **"Custom configuration"** field to load your work packages in mei-friend.

**Setting up your own central repository (requires changes to GitHub Actions workflows)**

If you need processing logic not available in any existing central repository, you can set up your own with custom scripts and GitHub Actions workflow definitions. This additionally requires updating the caller workflow YAML in each caller repository to point to your new central repository. See [Setting up your own central repository](#setting-up-your-own-central-repository) for step-by-step instructions.


## Applying automation in a user repository {#applying-automation}

### Setting up the caller repository

1. Create a new GitHub repository from the [caller template](https://github.com/mei-friend/caller-template). This sets up the necessary GitHub Actions workflow to connect your repository with the central repository.
2. Add your own MEI files to the repository, or use the test files provided by the template.

### Running a work package from mei-friend

3. Log in to GitHub in mei-friend and open a file from your caller repository.
4. Ensure that GitHub Actions is enabled in mei-friend's Settings (see [Enabling automation in mei-friend](#enabling-automation-in-mei-friend)).
5. Open the **GitHub menu** in the menu bar and click **"GitHub Actions: Call automation workflow"**. If this button is not visible, verify that GitHub Actions is enabled in Settings.

<figure class="halfwidth">
    <div class="figure-title">Fig.&thinsp;1: GitHub menu with activated GitHub Actions</div>
        <img class="figure-img" src="{{ site.baseurl }}/assets/img/automation/github-menu.png"
            alt="Screenshot of mei-friends GitHub menu with activated GitHub Actions" />
    <figcaption class="figure-caption">GitHub menu with activated GitHub Actions. Clicking on "GitHub Actions: Call automation workflow" opens the GitHub Actions panel.</figcaption>
</figure>

6. In the GitHub Actions panel, select the **"Custom configuration"** tab and confirm that the URL for the work package definition is filled in.
7. Select a work package from the dropdown menu and fill in the parameters as needed. Parameters may have pre-filled default values; adjust them to match your use case. Two helper buttons allow you to:
    - paste the current file path into a parameter field, or
    - paste the ID of the currently selected XML element into a parameter field.

<figure class="halfwidth">
    <div class="figure-title">Fig.&thinsp;2: GitHub Actions panel</div>
        <img class="figure-img" src="{{ site.baseurl }}/assets/img/automation/github-actions-panel.png"
            alt="Screenshot of mei-friends GitHub Action panel" />
    <figcaption class="figure-caption">GitHub Actions panel with the Custom configuration tab open, showing a filled-in URL to a JSON work package definition.</figcaption>
</figure>

8. Click **"Run workflow"** to execute the selected work package. (The button label follows GitHub Actions terminology; clicking it triggers the underlying GitHub Actions workflow that processes the selected work package.) Execution takes place on GitHub and may take some time; a progress bar in the panel indicates the current status. A link to the GitHub Actions workflow run log is also available in the panel once execution has started.
9. Once completed, a success or failure message is shown in the panel.
    - **On success**: if the work package produced changes to the encoding, they are committed to the caller repository. Click **"Reload MEI file"** to see the updated content in mei-friend. If the work package only generated a report without modifying any files, no commit is made.
    - **On failure**: click the link in the panel to open the GitHub Actions workflow run log and inspect what went wrong.


## Troubleshooting

- If **"Commit changes"** fails, verify that you have write access to the caller repository and that GitHub Actions is enabled in the repository's settings on GitHub.
- TODO: add more troubleshooting tips


## Structure of the automation setup {#structure-of-the-automation-setup}

The automation setup distinguishes between three main components:

- **Caller repository**: contains MEI files and a minimal GitHub Actions workflow ([Caller template](https://github.com/mei-friend/caller-template))
- **Central repository**: contains processing logic and workflow definitions ([Central repository with examples](https://github.com/mei-friend/automation/))
- **JSON configuration**: defines available work packages and their parameters ([Template](https://github.com/mei-friend/automation/blob/main/work_package_template.json), [Example](https://github.com/mei-friend/automation/blob/main/work_packages.json))

When a work package is selected and triggered in mei-friend, the central workflow operates on the data from the caller repository and writes results back to it.
Users need write access to the caller repository, but do not need any knowledge of GitHub Actions or the scripts in the central repository.
Creating a repository from the provided template is sufficient to connect the caller repository with the central repository and have the necessary setup in place.

### Caller repository {#caller-repository}

The caller repository is the user's own GitHub repository where MEI files are stored and versioned.
Beyond the project data, it contains only a minimal GitHub Actions workflow file that is set up to receive trigger events dispatched by mei-friend and forward them — along with the relevant inputs such as the selected work package name, file path, element ID, and other parameter values — to the central repository for processing.

The caller repository must be set up from the [provided template](https://github.com/mei-friend/caller-template), which already includes this caller workflow.
No further workflow configuration is required.
Users need write access to the caller repository so that processing results can be committed back by the central workflow upon completion.

### Central repository {#central-repository}

The central repository contains the actual processing logic: the workflow definitions and the scripts (e.g., shell or Python) that implement the available work packages.
It defines a workflow that is triggered by the caller workflow via the GitHub API.

When triggered, both the central and the caller repository are checked out into a shared runner environment by the GitHub Actions process.
The central repository's scripts are then executed with access to the caller repository's data.
Any changes to MEI files or other outputs produced by this process are committed back to the caller repository.
Beyond this interaction, the central and caller repositories are otherwise independent and may be owned by different users or GitHub organizations, allowing automation logic to be reused and shared across projects.

**Authentication and secrets**

Some work packages require access to external resources such as project databases or APIs.
Credentials (API keys, passwords) must be stored as [Secrets](https://docs.github.com/en/actions/security-for-github-actions/security-guides/using-secrets-in-github-actions) in the caller repository and are passed as inputs when the central workflow is triggered.
The central workflow can then use these values without them being exposed in logs or code.

### JSON work package configuration {#json-work-package-configuration}

The JSON work package definition file specifies which work packages are available within mei-friend and how they are presented to the user.
It is hosted at a publicly accessible, CORS-enabled URL — for example as a raw file in a GitHub repository — and referenced in mei-friend's GitHub Actions panel under "Custom configuration".

Each entry in the JSON defines a work package by:
- a **name**, displayed in the dropdown menu
- a **description**, shown as a tooltip in the panel
- a list of **parameters**, each with a type, optional default value, and description, rendered as labelled form fields in the GitHub Actions panel

This file provides the human-readable interface for available operations; users are not required to inspect or understand the underlying scripts or YAML workflow definitions.

The JSON configuration can be provided to mei-friend in multiple ways:
1. Via the "Custom configuration" field in mei-friend's GitHub Actions panel (see [Enabling automation in mei-friend](#enabling-automation-in-mei-friend))
2. As a URL parameter when sharing a link to mei-friend, which allows the tool to pre-configure itself automatically when a project member follows that link

### Execution flow {#execution-flow}

The following steps describe what happens when a user clicks "Run workflow" in mei-friend's GitHub Actions panel:

1. mei-friend dispatches a trigger event to the **caller repository** via the GitHub API, passing the selected work package name, the file path, the selected element ID (if any), and the parameter values as inputs.
2. The **caller workflow** relays this event and all inputs to the **central repository**, together with a reference to the caller repository.
3. The **central workflow** checks out both repositories into a shared environment and executes the script corresponding to the selected work package.
4. If the script produces changes to the encoding, these are committed back to the **caller repository** by the central workflow.
5. mei-friend polls the GitHub API for workflow status and reports success or failure in the panel. Upon success, the user can click "Reload MEI file" to see the updated content.

### Setting up your own central repository {#setting-up-your-own-central-repository}

Setting up a custom central repository gives you full control over the available work packages and their implementation. Changes are required in two places: the new central repository itself, and the caller workflow YAML in each caller repository that should use it.

**1. Create a central repository**

Fork or use the [provided central repository](https://github.com/mei-friend/automation/) as a starting point. Your central repository must contain:
- A receiving workflow YAML that accepts the inputs relayed by caller repositories and dispatches them to the appropriate script
- The processing scripts (e.g., shell or Python) that implement your work packages
- Optionally, a JSON work package definition file that can be provided to mei-friend's **"Custom configuration"** field

**2. Update each caller repository**

Each caller repository contains a GitHub Actions workflow YAML file at `.github/workflows/caller.yml`. This file includes a reference to the central repository to which work package execution requests are forwarded. To connect a caller repository to your custom central repository, change the following field:

```yaml
# Replace this value with your own central repository
repository: [CENTRAL_REPO_OWNER/CENTRAL_REPO_NAME]
```

This change must be made in every caller repository that should use your central repository. Any caller repository still pointing to the original value will continue to use the provided central repository.

Note that the receiving workflow in your central repository must accept the same input structure that the caller workflow sends. If you change the input schema in the central repository, the caller workflow YAML must be updated accordingly in all caller repositories.


## Example use case: E-LAUTE {#example-e-laute}

The [E-LAUTE digital edition project](https://e-laute.info) uses this automation mechanism to manage encoding, derivation, and post-processing of several thousand MEI files across more than 50 GitHub repositories.
The E-LAUTE central repository provides a set of work packages tailored to the project's needs, including derivation of notation types from one another, validation against project-specific encoding guidelines, and post-processing to generate provenance metadata.

Users can test the E-LAUTE automation functions using their own caller repository. This requires two adjustments:

**1. Point your caller repository to the E-LAUTE central repository**

In your caller repository, open `.github/workflows/caller.yml` and update the central repository reference to the E-LAUTE central repository:

```yaml
# Replace the existing value with the E-LAUTE central repository
repository: [E_LAUTE_CENTRAL_REPO_OWNER/E_LAUTE_CENTRAL_REPO_NAME]
```

<!-- PLACEHOLDER: exact YAML field name and E-LAUTE central repository path needed -->

<figure class="halfwidth">
    <div class="figure-title">Fig.&thinsp;3: Caller workflow YAML with E-LAUTE central repository</div>
        <img class="figure-img" src="{{ site.baseurl }}/assets/img/automation/caller-yaml-elaute.png"
            alt="Screenshot of the caller workflow YAML file showing the central repository reference field" />
    <figcaption class="figure-caption">The caller workflow YAML file open in the GitHub web interface, with the central repository reference updated to point to the E-LAUTE central repository.</figcaption>
</figure>

<!-- SUGGESTED SCREENSHOT (Fig. 3): The caller workflow YAML file (.github/workflows/caller.yml) open in the GitHub web editor or a text editor. The line containing the central repository reference should be visible and highlighted, showing the E-LAUTE central repo value filled in. -->

**2. Load the E-LAUTE work package definitions in mei-friend**

In mei-friend's GitHub Actions panel, set the **"Custom configuration"** URL to the E-LAUTE work package definition file:

`[URL_TO_E_LAUTE_WORK_PACKAGES_JSON]`

<!-- PLACEHOLDER: URL to the E-LAUTE work_packages.json file needed -->

Once both are in place, open any MEI file from your caller repository in mei-friend. The GitHub Actions panel will show the E-LAUTE work packages in the dropdown menu, ready to be applied to your encoding.

<figure class="halfwidth">
    <div class="figure-title">Fig.&thinsp;4: GitHub Actions panel with E-LAUTE work packages</div>
        <img class="figure-img" src="{{ site.baseurl }}/assets/img/automation/github-actions-panel-elaute.png"
            alt="Screenshot of mei-friends GitHub Actions panel showing E-LAUTE work packages in the dropdown" />
    <figcaption class="figure-caption">GitHub Actions panel with the E-LAUTE work package definition loaded, showing available E-LAUTE work packages in the dropdown menu.</figcaption>
</figure>

<!-- SUGGESTED SCREENSHOT (Fig. 4): The GitHub Actions panel in mei-friend with the "Custom configuration" tab open, showing the E-LAUTE JSON URL filled in and the E-LAUTE work packages populated in the dropdown menu. Ideally shows one or more E-LAUTE work package names to make the example concrete. -->


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
