# A Type-Checked JavaScript p5.js version 2 project starter

This is a work-in-progress starter simplest _type-checked_ javascript project supporting p5.js v2.

It is intentionally a build-less setup intended for those who _do not have node.js installed_.

## Status:

While it works, this version (branch) of the starter has some limitations:

## Updating your type files for a new version of p5.js

If a new release of p5.js v2 has come out since you started with this template, and you want the latest, greatest types, we have to download them into this project.

Specifically, both files from this location:
https://cdn.jsdelivr.net/npm/p5@latest/types/
need to be downloaded into the `myTypes/` folder in this project.

Direct links:

-   [global.d.ts](https://cdn.jsdelivr.net/npm/p5@latest/types/global.d.ts)
-   [p5.d.ts](https://cdn.jsdelivr.net/npm/p5@latest/types/p5.d.ts)

Yes, this is a bit of a nuisance. If you have node.js there is an [alternative node-based project starter project](https://github.com/nbogie/p5-v2-js-typechecked-global-mode-with-node-starter) that makes this easier for you. We're assuming here that you don't have node.js or don't want to use it.

If you happen to know the command-line here are two options that make this quicker and less error-prone. (Either one will work - don't need both.)

#### if you have the wget command-line tool

```bash
wget -P ./myTypes/ https://cdn.jsdelivr.net/npm/p5@latest/types/global.d.ts
wget -P ./myTypes/ https://cdn.jsdelivr.net/npm/p5@latest/types/p5.d.ts
```

#### Or if you have the curl command-line tool

```bash
curl -O --output-dir ./myTypes/ https://cdn.jsdelivr.net/npm/p5@latest/types/global.d.ts
curl -O --output-dir ./myTypes/ https://cdn.jsdelivr.net/npm/p5@latest/types/p5.d.ts
```

### Current issues and limitations:

-   The p5 types have been downloaded locally and saved in myTypes/ and would need updated when the user wants to use a later version of p5.js.
    -   this is much simplified when you have an installation of node.




## Other p5 project starters
Are you looking or project starter for p5 v1 ? v2? TS? JS with type-checking? Global mode ? Instance Mode?

Check out https://github.com/nbogie/p5-beyond-the-web-editor-neill/blob/main/docs/starter-projects.md
