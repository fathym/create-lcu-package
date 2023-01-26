# oclif-hello-world

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![CircleCI](https://circleci.com/gh/fathym/create-lcu-package/tree/main.svg?style=shield)](https://circleci.com/gh/fathym/create-lcu-package/tree/main)
[![Downloads/week](https://img.shields.io/npm/dw/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![License](https://img.shields.io/npm/l/oclif-hello-world.svg)](https://github.com/fathym/create-lcu-package/blob/main/package.json)

<!-- toc -->
* [oclif-hello-world](#oclif-hello-world)
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->

# Usage

<!-- usage -->
```sh-session
$ npm install -g @fathym/create-lcu-package
$ create-lcu-package COMMAND
running command...
$ create-lcu-package (--version)
@fathym/create-lcu-package/0.0.2 win32-x64 node-v18.12.1
$ create-lcu-package --help [COMMAND]
USAGE
  $ create-lcu-package COMMAND
...
```
<!-- usagestop -->

# Commands

<!-- commands -->
* [`create-lcu-package NAME`](#create-lcu-package-name)
* [`create-lcu-package help [COMMANDS]`](#create-lcu-package-help-commands)

## `create-lcu-package NAME`

Used to scaffold a new LLCU package

```
USAGE
  $ create-lcu-package [NAME] -d <value>

ARGUMENTS
  NAME  The name of the LCU package.

FLAGS
  -d, --directory=<value>  (required) The directory to initialize and scaffold.

DESCRIPTION
  Used to scaffold a new LLCU package

EXAMPLES
  $ create-lcu-package  dev lcu scaffold --help
```

_See code: [dist/index.ts](https://github.com/fathym/create-lcu-package/blob/v0.0.2/dist/index.ts)_

## `create-lcu-package help [COMMANDS]`

Display help for create-lcu-package.

```
USAGE
  $ create-lcu-package help [COMMANDS] [-n]

ARGUMENTS
  COMMANDS  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for create-lcu-package.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.2.0/src/commands/help.ts)_
<!-- commandsstop -->
