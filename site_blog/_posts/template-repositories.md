---
title: "GitHub template repositories"
excerpt: "Starting a new project with ease."
date: "2022-04-08"
---

## Creating the template repository

Template repositories are very useful if you have many projects to create with the same languages and/or base files.

You can transfer a regular repository into a template repository by going to the repository, clicking on `Settings`, and then on the button below.

![Template button](/images/posts/template-repositories/button.png)

After you make a template repository, it will show up in the list similar to the one below the next time you want to create a new repository.

After you make a template repository, it will show up in the drop down list below during the next time you decide to create a new repository.

![Template list](/images/posts/template-repositories/list.png)

## Useful files

An example template repository that I've created, and where the files are referenced below, would be my [rust-binary-project-template](https://github.com/Xithrius/rust-binary-project-template) repository.

- `.pre-commit-config.yaml`: [pre-commit](https://pre-commit.com/) for making sure your staged files have passed checks.
- `README.md`: It's best to have a description of what your repository is about.
- `LICENSE`: A license is always nice to have for open source projects. The [MIT license](https://mit-license.org/) does the following: "A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code".
- `.gitignore`: Git will ignore any changes to files/folders placed in this file.
