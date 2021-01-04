# SlowWWD
## Use case for the Eclipse WildWebDeveloper
This repository contains a big TypeScript application. The TS file edition is quite slow with the WWD plugin and fast using VSCode. Don't try to build and use the project.

## Reproduction

Clone this repository, perform a `npm install` and then:
 - add it as Eclipse project
 - add it as VS Code folder

On both, open and compare the time to open TS files, like:
 - src/pages/dataPage/datapage.ts
 - src/pages/dropFilePage/dropfilepage.ts
 - src/pages/dropFilePage/loginPage.ts
 - ...

## Observations

WWD opens the first page is quite normal (5 sec), but lint (like import warnings) and code completion take many seconds (12 sec). Open the 2nd page take too much pending time (20-30 sec), but once opened, lint and completion are already ok. Always true for other TS files.

VS Code opens the first page is quite normal (2 sec), lint and code completion take many seconds (12 sec). Open the 2nd page is fast and lint + completion are fast too (3 sec).

It's like WWD don't reuse the static analyze of the first page but do it again for each pages.

## Configuration

 - Dell XPS 15
 - i7-6700HQ (2.6 Ghz)
 - 16 Go ram
 - SSD
 - Win10 64bit
 - Eclipse 2020-12 up-to-date
 - Java 15
 - NodeJS 14
