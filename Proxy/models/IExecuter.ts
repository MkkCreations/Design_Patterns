import { CommandLine } from "./CommandLine";
import { User } from "./User";

export interface IExecuter {
    execute(cmd: CommandLine, user: User| null): void;
}
    