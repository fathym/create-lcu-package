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
@fathym/create-lcu-package/0.0.1 win32-x64 node-v18.12.1
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
* [`create-lcu-package plugins`](#create-lcu-package-plugins)
* [`create-lcu-package plugins:install PLUGIN...`](#create-lcu-package-pluginsinstall-plugin)
* [`create-lcu-package plugins:inspect PLUGIN...`](#create-lcu-package-pluginsinspect-plugin)
* [`create-lcu-package plugins:install PLUGIN...`](#create-lcu-package-pluginsinstall-plugin-1)
* [`create-lcu-package plugins:link PLUGIN`](#create-lcu-package-pluginslink-plugin)
* [`create-lcu-package plugins:uninstall PLUGIN...`](#create-lcu-package-pluginsuninstall-plugin)
* [`create-lcu-package plugins:uninstall PLUGIN...`](#create-lcu-package-pluginsuninstall-plugin-1)
* [`create-lcu-package plugins:uninstall PLUGIN...`](#create-lcu-package-pluginsuninstall-plugin-2)
* [`create-lcu-package plugins update`](#create-lcu-package-plugins-update)

## `create-lcu-package NAME`

Used to scaffold a new LLCU package

```
USAGE
  $ create-lcu-package [NAME]

ARGUMENTS
  NAME  The name of the LCU package.

DESCRIPTION
  Used to scaffold a new LLCU package

EXAMPLES
  $ create-lcu-package  dev lcu scaffold --help
```

_See code: [dist/commands/index.ts](https://github.com/fathym/create-lcu-package/blob/v0.0.1/dist/commands/index.ts)_

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

## `create-lcu-package plugins`

List installed plugins.

```
USAGE
  $ create-lcu-package plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ create-lcu-package plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.2.2/src/commands/plugins/index.ts)_

## `create-lcu-package plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ create-lcu-package plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ create-lcu-package plugins add

EXAMPLES
  $ create-lcu-package plugins:install myplugin 

  $ create-lcu-package plugins:install https://github.com/someuser/someplugin

  $ create-lcu-package plugins:install someuser/someplugin
```

## `create-lcu-package plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ create-lcu-package plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ create-lcu-package plugins:inspect myplugin
```

## `create-lcu-package plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ create-lcu-package plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ create-lcu-package plugins add

EXAMPLES
  $ create-lcu-package plugins:install myplugin 

  $ create-lcu-package plugins:install https://github.com/someuser/someplugin

  $ create-lcu-package plugins:install someuser/someplugin
```

## `create-lcu-package plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ create-lcu-package plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ create-lcu-package plugins:link myplugin
```

## `create-lcu-package plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ create-lcu-package plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ create-lcu-package plugins unlink
  $ create-lcu-package plugins remove
```

## `create-lcu-package plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ create-lcu-package plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ create-lcu-package plugins unlink
  $ create-lcu-package plugins remove
```

## `create-lcu-package plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ create-lcu-package plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ create-lcu-package plugins unlink
  $ create-lcu-package plugins remove
```

## `create-lcu-package plugins update`

Update installed plugins.

```
USAGE
  $ create-lcu-package plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->
