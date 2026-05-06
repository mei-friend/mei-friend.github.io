---
title: Automation in mei-friend
description: How to use automation features in mei-friend
permalink: /docs/advanced/automation/
layout: page
---

# Workflow automation via GitHub Actions

mei-friend can trigger automated processing of MEI files via GitHub Actions. Users select named **work packages** — bundled processing operations such as transformation, validation, or pre/post-processing — from mei-friend's interface, which are then executed on GitHub's servers.
This automated processing complements manual editing within mei-friend, but does not replace it.

The setup described here separates automation logic from project data: the processing scripts are maintained in a shared central repository, while users store their MEI files in their own caller repository based on a provided template.
Users with familiarity in a scripting language can also set up their own central repository with custom GitHub Actions workflows and scripts.

## Applying automation in a user repository {#applying-automation}

To avoid confusion upfront, the following two are worth distinguishing upfront:

- **Work package**: a named processing operation selectable in mei-friend, defined in a JSON configuration file. Each work package may invoke one or more scripts as part of a single operation.
- **GitHub Actions workflow** (or simply _workflow_ in this documentation): a YAML-defined automation pipeline that runs on GitHub's servers and carries out the execution. Workflows form the underlying infrastructure; they are not directly visible to the user in mei-friend.

## Step-by-step instructions for using automation in your project

### 1. Setting up the caller repository

- Create a new GitHub repository from the [caller template](https://github.com/mei-friend/caller-template). This sets up the necessary GitHub Actions workflow to connect your repository with the central repository.
- Add your own MEI files to the repository, or use the test files provided by the template.

### 2. Enabling automation in mei-friend {#enabling-automation-in-mei-friend}

Go to **Settings > mei-friend > Use GitHub Actions** and check the box **"Show available GitHub Actions"**.
This enables the GitHub Actions panel, accessible from the GitHub menu in the menu bar.
Provide the URL of a JSON file that defines the available work packages and their parameters in the **"Custom configuration"** field, the following example file can be used for testing: [work_packages.json](https://raw.githubusercontent.com/mei-friend/automation/refs/heads/main/work_packages.json).

To create your own work package definition, see [Creating your own work package definition](#creating-your-own-work-package-definition).

### 3. Running a work package from mei-friend

- Log in to GitHub in mei-friend and open a file from your caller repository.
- Ensure that GitHub Actions is enabled in mei-friend's Settings (see [Enabling automation in mei-friend](#enabling-automation-in-mei-friend)).
- Open the **GitHub menu** in the menu bar and click **"GitHub Actions: Call automation workflow"**. If this button is not visible, verify that GitHub Actions is enabled in Settings.

<figure class="halfwidth">
    <div class="figure-title">Fig.&thinsp;1: GitHub menu with activated GitHub Actions</div>
        <img class="figure-img" src="{{ site.baseurl }}/assets/img/automation/github-menu.png"
            alt="Screenshot of mei-friends GitHub menu with activated GitHub Actions" />
    <figcaption class="figure-caption">GitHub menu with activated GitHub Actions. Clicking on "GitHub Actions: Call automation workflow" opens the GitHub Actions panel.</figcaption>
</figure>

- In the GitHub Actions panel, select the **"Custom configuration"** tab and confirm that the URL for the work package definition is filled in.
- Select a work package from the dropdown menu and fill in the parameters as needed. Parameters may have pre-filled default values; adjust them to match your use case. Two helper buttons allow you to:
  - paste the current file path into a parameter field, or
  - paste the ID of the currently selected XML element into a parameter field.

<figure class="halfwidth">
    <div class="figure-title">Fig.&thinsp;2: GitHub Actions panel</div>
        <img class="figure-img" src="{{ site.baseurl }}/assets/img/automation/github-actions-panel.png"
            alt="Screenshot of mei-friends GitHub Action panel" />
    <figcaption class="figure-caption">GitHub Actions panel with the Custom configuration tab open, showing a filled-in URL to a JSON work package definition.</figcaption>
</figure>

- Click **"Run workflow"** to execute the selected work package. (The button label follows GitHub Actions terminology; clicking it triggers the underlying GitHub Actions workflow that processes the selected work package.) Execution takes place on GitHub and may take some time; a progress bar in the panel indicates the current status. A link to the GitHub Actions workflow run log is also available in the panel once execution has started.
- Once completed, a success or failure message is shown in the panel.
  - **On success**: if the work package produced changes to the encoding, they are committed to the caller repository. Click **"Reload MEI file"** to see the updated content in mei-friend. If the work package only generated a report without modifying any files, no commit is made.
  - **On failure**: click the link in the panel to open the GitHub Actions workflow run log and inspect what went wrong.

## Troubleshooting

- If **"Commit changes"** fails, verify that you have write access to the caller repository and that GitHub Actions is enabled in the repository's settings on GitHub.
- TODO: add more troubleshooting tips

## Creating your own work package definition {#creating-your-own-work-package-definition}

The JSON work package definition file controls which work packages appear in mei-friend's GitHub Actions panel and how they are presented to the user. It is hosted at a publicly accessible, CORS-enabled URL — for example as a raw file in a GitHub repository — and referenced in mei-friend's GitHub Actions panel under **"Custom configuration"**.

Users are not required to inspect or understand the underlying scripts or YAML workflow definitions. A JSON template and a worked example are provided in the central repository:

- [Template](https://github.com/mei-friend/automation/blob/main/work_package_template.json)
- [Example](https://github.com/mei-friend/automation/blob/main/work_packages.json)

The JSON configuration can be provided to mei-friend in two ways:

1. Via the **"Custom configuration"** field in mei-friend's GitHub Actions panel (see [Enabling automation in mei-friend](#enabling-automation-in-mei-friend))
2. As a URL parameter when sharing a link to mei-friend, which allows the tool to pre-configure itself automatically when a project member follows that link

### JSON file structure {#json-file-structure}

The JSON file has the following top-level structure:

```json
{
  "central_repository": "owner/repo",
  "branch": "main",
  "automation": "path/to/run_automation.sh",
  "work_packages": [ ... ]
}
```

| Field                | Description                                                                         |
| -------------------- | ----------------------------------------------------------------------------------- |
| `central_repository` | The GitHub repository containing the processing scripts, in `owner/repo` format     |
| `branch`             | The branch of the central repository to use                                         |
| `automation`         | Path (relative to the central repository root) to the automation entry-point script |
| `work_packages`      | Array of work package definitions (see below)                                       |

These three top-level fields are passed directly as inputs to the caller workflow when a work package is triggered. This means **no changes to `caller.yml` are required** when switching between central repositories — the JSON file alone controls which central repository and automation script are used.

Each entry in the `work_packages` array defines a work package by:

- a **name**, displayed in the dropdown menu
- a **description**, shown as a tooltip in the panel
- a list of **parameters**, each with a type, optional default value, and description, rendered as labelled form fields in the GitHub Actions panel

Depending on your needs, there are two levels of customization:

**1. Writing a custom JSON file (no changes to GitHub Actions workflows or scripts required)**

If the scripts you need are already available in an existing central repository — such as the [provided central repository](https://github.com/mei-friend/automation/) or the [E-LAUTE automation repository](https://github.com/e-laute/automation/) — you can define new work packages simply by writing a custom JSON file that points `central_repository` to that repository. Each work package entry specifies which script to invoke and with which parameters, allowing you to create project-specific named work packages with tailored default values, expose only a relevant subset of available operations, or present existing scripts under clearer names for your project members.

Once your JSON file is hosted at a publicly accessible, CORS-enabled URL, provide that URL in the **"Custom configuration"** field to load your work packages in mei-friend.

**2. Setting up your own central repository**

If you need processing logic not available in any existing central repository, you can set up your own with custom scripts. See [Setting up your own central repository](#setting-up-your-own-central-repository) for step-by-step instructions.

## Structure of the automation setup {#structure-of-the-automation-setup}

The automation setup distinguishes between three main components:

- **Caller repository**: contains MEI files and a minimal GitHub Actions workflow ([Caller template](https://github.com/mei-friend/caller-template))
- **Central repository**: contains processing logic and workflow definitions ([Central repository with examples](https://github.com/mei-friend/automation/))
- **JSON configuration**: defines available work packages and their parameters ([Template](https://github.com/mei-friend/automation/blob/main/work_package_template.json), [Example](https://github.com/mei-friend/automation/blob/main/work_packages.json))

<figure class="halfwidth">
    <div class="figure-title">Fig.&thinsp;1: TODO: ADD Overview diagram of the automation setup</div>
        <img class="figure-img" src="{{ site.baseurl }}/assets/img/automation/overview-diagram.png"
            alt="Overview diagram of the automation setup" />
    <figcaption class="figure-caption">Overview diagram of the automation setup.</figcaption>
</figure>

When a work package is selected and triggered in mei-friend, the central workflow operates on the data from the caller repository and writes results back to it.
Users need write access to the caller repository, but do not need any knowledge of GitHub Actions or the scripts in the central repository.
Creating a repository from the provided template is sufficient to connect the caller repository with the central repository and have the necessary setup in place.

### Caller repository {#caller-repository}

The caller repository is the user's own GitHub repository where MEI files are stored and versioned.
Beyond the project data, it contains only a minimal, generic GitHub Actions workflow file (`caller.yml`) that receives trigger events dispatched by mei-friend and carries out the processing using the central repository and automation script specified in the dispatch inputs.

The caller repository must be set up from the [provided template](https://github.com/mei-friend/caller-template), which already includes this caller workflow.
The central repository, branch, and automation script are specified entirely through the JSON configuration file — switching to a different central repository is done by pointing mei-friend to a different JSON URL.
Users need write access to the caller repository so that processing results can be committed back upon completion.

### Central repository {#central-repository}

The central repository contains the actual processing logic: the scripts (e.g., shell or Python) that implement the work packages, and an automation entry-point script whose path is specified in the JSON configuration file.

When triggered, the caller workflow checks out the central repository at the specified branch and runs the automation script with the dispatch inputs (work package ID, file path, parameters, etc.). The script has access to the caller repository's data and commits any changes back to it upon completion.

The central and caller repositories are otherwise independent and may be owned by different users or GitHub organizations, allowing automation logic to be reused and shared across projects.

**Authentication and secrets**

Some work packages require access to external resources such as project databases or APIs.
Credentials (API keys, passwords) must be stored as [Secrets](https://docs.github.com/en/actions/security-for-github-actions/security-guides/using-secrets-in-github-actions) in the caller repository and are passed as inputs when the central workflow is triggered.
The central workflow can then use these values without them being exposed in logs or code.

### Execution flow {#execution-flow}

The following steps describe what happens when a user clicks "Run workflow" in mei-friend's GitHub Actions panel:

1. mei-friend dispatches a `workflow_dispatch` event to the **caller repository** via the GitHub API. The dispatch payload includes: the selected work package ID and its full definition, the file path, the parameter values, a commit message, and the three central-repository routing fields from the JSON file (`central_repository`, `branch`, `automation`).
2. The **caller workflow** uses the supplied `central_repository` and `branch` to check out the central repository and runs the script at the `automation` path, passing all remaining inputs.
3. The **automation script** executes the work package's processing logic against the caller repository's data.
4. If the script produces changes to the encoding, these are committed back to the **caller repository**.
5. mei-friend polls the GitHub API for workflow status and reports success or failure in the panel. Upon success, the user can click "Reload MEI file" to see the updated content.

### Setting up your own central repository {#setting-up-your-own-central-repository}

Setting up a custom central repository gives you full control over the available work packages and their implementation.

**1. Create a central repository**

Use the [provided central repository](https://github.com/mei-friend/automation/) as a template. Your central repository must contain:

- An automation entry-point script (e.g., `automation/run_automation.sh`) that receives the dispatch inputs and executes the appropriate work package logic
- The processing scripts (e.g., shell or Python) that implement your work packages
- A JSON work package definition file with the `central_repository`, `branch`, and `automation` fields pointing to your repository

**2. Provide your JSON file to mei-friend**

Host your JSON file at a publicly accessible, CORS-enabled URL and enter it in mei-friend's **"Custom configuration"** field. The `central_repository` and `branch` fields in the JSON tell the caller workflow where to find your scripts; no other configuration is needed in the caller repository.

## Example use case: E-LAUTE {#example-e-laute}

The [E-LAUTE digital edition project](https://e-laute.info) uses this automation mechanism to manage encoding, derivation, and post-processing of several thousand MEI files across more than 50 GitHub repositories.
The E-LAUTE central repository provides a set of work packages tailored to the project's needs, including derivation of notation types from one another, validation against project-specific encoding guidelines, and post-processing to generate provenance metadata.

Users can test the E-LAUTE automation functions using their own caller repository:

**Load the E-LAUTE work package definitions in mei-friend**

In mei-friend's GitHub Actions panel, set the **"Custom configuration"** URL to the E-LAUTE work package definition file:

[https://raw.githubusercontent.com/e-laute/automation/refs/heads/main/scripts/work_packages.json](https://raw.githubusercontent.com/e-laute/automation/refs/heads/main/scripts/work_packages.json)

<!-- TODO: Verify link, currently broken-->

The JSON file already contains the correct `central_repository`, `branch`, and `automation` values pointing to the E-LAUTE central repository.

Once the URL is set, open any MEI file from your caller repository in mei-friend. The GitHub Actions panel will show the E-LAUTE work packages in the dropdown menu, ready to be applied to your encoding.

<figure class="halfwidth">
    <div class="figure-title">Fig.&thinsp;3: GitHub Actions panel with E-LAUTE work packages</div>
        <img class="figure-img" src="{{ site.baseurl }}/assets/img/automation/github-actions-panel-elaute.png"
            alt="Screenshot of mei-friends GitHub Actions panel showing E-LAUTE work packages in the dropdown" />
    <figcaption class="figure-caption">GitHub Actions panel with the E-LAUTE work package definition loaded, showing available E-LAUTE work packages in the dropdown menu.</figcaption>
</figure>

<!-- SUGGESTED SCREENSHOT (Fig. 4): The GitHub Actions panel in mei-friend with the "Custom configuration" tab open, showing the E-LAUTE JSON URL filled in and the E-LAUTE work packages populated in the dropdown menu. Ideally shows one or more E-LAUTE work package names to make the example concrete. -->

TODO: describe available E-LAUTE work packages and their functionality, and how they can be applied to MEI files in the caller repository.
