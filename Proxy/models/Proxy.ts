import { IExecuter } from "./IExecuter";
import { CommandLine } from "./CommandLine";
import { ExecuterCmd } from "./ExecuterCmd";
import { User } from "./User";
import { ProtectedCmds } from "./ProtectedCmds";

export class Proxy implements IExecuter {
    private ExecuterCmd: ExecuterCmd = new ExecuterCmd();

    constructor() {}

    public execute(cmd: CommandLine, user: User| null): void {
        if (user !== null && user.getIsRoot()) {
            this.ExecuterCmd.execute(cmd);
        } else {
            if (ProtectedCmds.isProtected(cmd.getCommand())) {
                console.log(`You are not allowed to execute << ${cmd.getCommand()} >> command`);
            } else {
                this.ExecuterCmd.execute(cmd);
            }

        }
    }
}