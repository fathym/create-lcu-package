import { Args, Command, Flags } from "@oclif/core";
import { exec } from "node:child_process";
import { Listr } from "listr2";

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

export default class CreateLCUPackage extends Command {
  static description = "Used to scaffold a new LLCU package";

  static examples = [
    "<%= config.bin %> <%= command.id %> dev lcu scaffold --help",
  ];

  static flags = {
    directory: Flags.string({
      char: "d",
      description: "The directory to initialize and scaffold.",
      required: true,
    }),
  };

  static args = {
    name: Args.string({
      description: "The name of the LCU package.",
      required: true,
    }),
  };

  async run(): Promise<CreateLCUPackageTaskContext | undefined> {
    const { args, flags } = await this.parse(CreateLCUPackage);

    const { name } = args;

    let { directory } = flags;

    directory = directory || "./";

    const listr = new Listr<CreateLCUPackageTaskContext>([
      {
        title: `Initializing directory ${directory}`,
        task: async () => {
          await runProc("npm", ["init", "-y", "-w", directory]);
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
}
