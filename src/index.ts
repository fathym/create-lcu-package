import { Args, Command, Flags } from "@oclif/core";
import { exec } from "node:child_process";
import { Listr } from "listr2";
import path from "node:path";
import {
  mkdir,
  exists,
  writeJSON,
  readJSON,
  readFile,
  writeFile,
} from "fs-extra";

interface CreateLCUPackageTaskContext {}

async function runProc(
  command: string,
  args: string[],
  log: boolean = false
): Promise<string> {
  return new Promise((resolve, reject) => {
    const cmd = [command, ...args].join(" ");

    if (log) resolve(cmd);
    else
      exec(cmd, (error, stdout) => {
        if (error) {
          reject(error);
        } else {
          resolve(stdout);
        }
      });
  });
}

async function withFile(
  path: string,
  action: (val: string) => Promise<string>
) {
  let val = (await exists(path)) ? await readFile(path) : "";

  val = await action(String(val));

  if (val) {
    await writeFile(path, val);
  }

  return val;
}

async function withJson<T>(path: string, action: (val: T) => Promise<T>) {
  let val: T = (await exists(path)) ? await readJSON(path) : undefined;

  val = await action(val);

  if (val) {
    await writeJSON(path, val, { spaces: 2 });
  }

  return val;
}

export default class CreateLCUPackage extends Command {
  static description = "Used to scaffold a new LLCU package";

  static examples = [
    "<%= config.bin %> <%= command.id %> dev lcu scaffold --help",
  ];

  static flags = {};

  static args = {
    name: Args.string({
      description: "The name of the LCU package.",
      required: true,
    }),
    directory: Args.string({
      description: "The directory to scaffold into.",
      required: false,
    }),
  };

  async run(): Promise<CreateLCUPackageTaskContext | undefined> {
    const { args, flags } = await this.parse(CreateLCUPackage);

    const { name } = args;

    let { directory } = args;

    directory = directory || "./";

    const listr = new Listr<CreateLCUPackageTaskContext>([
      {
        title: `Initializing directory ${directory} with default files.`,
        task: async () => {
          if (!exists(directory!)) {
            await mkdir(directory!);
          }

          await withJson<any>(
            path.join(directory!, "package.json"),
            async (val) => {
              return val || this.templatePackageJson(name);
            }
          );

          await withFile(path.join(directory!, "README.md"), async (val) => {
            return val || this.templateReadme(name);
          });

          await withFile(path.join(directory!, "LICENSE"), async (val) => {
            return val || this.templateLicense(name);
          });
        },
      },
      {
        title: `Configuring ${directory} with LCU files.`,
        task: async () => {
          await withJson<any>(
            path.join(directory!, "lcu.json"),
            async (val) => {
              return val || this.templateLcuJson(name);
            }
          );

          const assetsDir = path.join(directory!, "assets");

          if (!exists(assetsDir!)) {
            await mkdir(assetsDir!);
          }

          await withJson<any>(
            path.join(assetsDir!, "eac.json"),
            async (val) => {
              return val || this.templateEacJson(name);
            }
          );

          await withJson<any>(
            path.join(assetsDir!, "parameters.json"),
            async (val) => {
              return val || this.templateParametersJson(name);
            }
          );
        },
      },
    ]);

    try {
      const ctx = await listr.run({});

      return ctx;
    } catch (error: any) {
      this.error(error);
    }
  }

  protected templateLicense(name: string): string {
    return `MIT License

Copyright (c) ${new Date().getFullYear()} ${name}

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
    `;
  }

  protected templateEacJson(name: string): any {
    return {
      Applications: {
        $1: {
          Application: {
            Description:
              "An application for hosting the files fromthe NPM package '{{NPM_PACKAGE}}'",
            Name: "NPM Package Deploy: {{NPM_PACKAGE}}",
          },
          LookupConfig: {
            PathRegex: "/packages/{{NPM_PACKAGE}}.*",
          },
          LowCodeUnit: {
            Package: "{{NPM_PACKAGE}}",
            Version: "{{PACKAGE_VERSION}}",
            Type: "NPM",
          },
          Processor: {
            BaseHref: "/packages/{{NPM_PACKAGE}}/",
            DefaultFile: "index.html",
            Type: "DFS",
          },
        },
      },
    };
  }

  protected templateLcuJson(name: string): any {
    return {
      Package: {
        Name: name,
        Description: `An LCU for installing ${name}.`,
        Button: "Launch",
        Image: "https://www.fathym.com/assets/images/logo.png",
        PreviewImage: "https://www.fathym.com/assets/images/logo.png",
        SuccessType: "Project",
      },
      EaC: "./assets/eac.json",
      Parameters: "./assets/parameters.json",
    };
  }

  protected templatePackageJson(name: string): any {
    return {
      name: name,
      version: "0.0.0",
      description: name,
      author: "Fathym, Inc",
      main: "lcu.json",
      scripts: {
        deploy:
          "npx fathym git && npm version patch && npm publish --access public",
      },
      keywords: ["lowcodeunit", "lcu"],
      license: "MIT",
    };
  }

  protected templateParametersJson(name: string): any {
    return {
      NPM_PACKAGE: {
        type: "input",
        message: "Enter the NPM package name:",
      },
      PACKAGE_VERSION: {
        type: "input",
        message: "Enter the NPM package version to use:",
      },
    };
  }

  protected templateReadme(name: string): string {
    return `# ${name}
The LowCodeUnit definition for creating a ${name} project.
    `;
  }
}
