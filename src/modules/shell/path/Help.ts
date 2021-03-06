/* eslint-disable class-methods-use-this */
import { HELP } from './constants';

class Help implements Command {
  alias = [
    'help',
  ];

  matches(command: string): boolean {
    return this.alias.includes(command);
  }

  help(): CommandOutput {
    return this.run();
  }

  tabComplete(): TabComplete | null {
    return null;
  }

  run(): CommandOutput {
    return {
      status: 0,
      output: HELP,
    };
  }
}

export default Help;
