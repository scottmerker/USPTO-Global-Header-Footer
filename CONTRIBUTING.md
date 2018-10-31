# Guidance on how to contribute

> By submitting a pull request, or filing a bug, issue, or 
> feature-request you are agreeing to comply with our [TERMS](TERMS.md) and [LICENCE](LICENSE).

There are two primary ways to help: 
 - Using the issue tracker, and 
 - Changing the code-base.


#### Table of contents
- [Contributing OVERVIEW](#contributing-overview)
    - [Creating an managing issues](#creating-and-managing-issues)
    - [Making changes](#making-changes-to-the-repository)
    - [Releasing](#releasing)
- [Performing a versioned release](#performing-a-versioned-release)


## Contributing overview

##### Creating and managing issues
- Is there a GitLab issue for the work you’re doing, going to do, or want someone else to do? Create one if not. [Learn how](https://docs.gitlab.com/ee/user/project/issues/create_new_issue.html).
  - GitLab issues should be created for each feature, fix, improvement, and question.
  - Improvements or bugs received via email or elsewhere should be transferred to a GitLab issue.
  - Collaborators should add appropriate labels to issues [Learn how](https://docs.gitlab.com/ee/user/project/labels.html).
    - Add ‘browser’ labels for issues that are specific to a certain browser
    - Add ‘needs’ labels for issues that need detail, feedback, or work
    - Add ‘type’ labels to categorize issues by defects, improvements, or questions
    - Add ‘state’ labels to indicate whether it is ready to be worked on or in progress. 
    - Update the 'needs' and 'state' labels for an issue as a state progresses through opened/in-progress/closed.
- Assign an issue or pull request to a user if desired. [Learn how](https://docs.gitlab.com/ee/user/project/issues/).


##### Making changes to the repository
- All changes and contributions should be done in a fork. [Learn how](https://docs.gitlab.com/ee/gitlab-basics/fork-project.html).
- Create a pull request for changes that you want merged.  [Learn how](https://docs.gitlab.com/ee/gitlab-basics/add-merge-request.html).
- Core repository owners/writers (select few) will review, discuss, approve, and merge pull requests. Depending on the size of the changes, additional review via meetings/emails may be necessary. Learn how [here](https://docs.gitlab.com/ee/user/project/merge_requests/).
- If decisions are made in meetings/emails, details/decisions should be added to the relevant GitLab issue as comments when possible to ensure that the decisions/changes/reasons are tracked and documented.


##### Releasing
- A core repository owner is elected to handle releasing new versions
- A GitLab tag/release should be created for each version. [Learn how](https://docs.gitlab.com/ee/workflow/releases.html).
- The changelog should be updated (`CHANGELOG.md`) with the changes included in the release. 
- Follow [semver](http://semver.org/) (major-minor-patch) for versioning: 
  - major: Major or 'breaking' changes (e.g., drastically changing one or more patterns, layouts, or design styles)
  - minor: Additions and minor improvements (new patterns or adding additional sections to existing patterns)
  - patch: Small tweaks/changes/fixes/typos/clarifications

## Performing a versioned release
- Update CHANGELOG.md with your latest changes
- Update the `version` property in `/package.json` to your new version
- Update the `version` property in `/bower.json` to your new version
- Run `grunt build` to build all the LESS/JS files and compile the templates together
- Commit your changes.
- Add the release to https://prod-cicm.uspto.gov/gitlab/myuspto/SigninWidget/tags
