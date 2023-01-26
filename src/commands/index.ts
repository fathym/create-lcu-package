import { Args, Command, Flags } from "@oclif/core";

export default class CreateLCUPackage extends Command {
  static description = "Used to scaffold a new LLCU package";

  static examples = [
    "<%= config.bin %> <%= command.id %> dev lcu scaffold --help",
  ];

  static flags = {
    // from: Flags.string({
    //   char: "f",
    //   description: "Who is saying hello",
    //   required: true,
    // }),
  };

  static args = {
    name: Args.string({
      description: "The name of the LCU package.",
      required: true,
    }),
  };

  async run(): Promise<void> {
    const { args, flags } = await this.parse(CreateLCUPackage);

    this.log(`hello ${args.name}! (./src/commands/hello/index.ts)`);
  }
}
