import { CommandLine } from "./CommandLine";
import { IExecuter } from "./IExecuter";


export class ExecuterCmd implements IExecuter {

    constructor() {}

    public execute(cmd: CommandLine): void {
        console.log(`Executing command: ${cmd.getCommand()}`);
    }
}