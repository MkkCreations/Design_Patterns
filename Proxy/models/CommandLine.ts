
export class CommandLine {
    private command: string;
    private args: string[];

    constructor(command: string, args: string[]) {
        this.command = command;
        this.args = args;
    }

    public getCommand(): string {
        return this.command;
    }

    public getArgs(): string[] {
        return this.args;
    }
}