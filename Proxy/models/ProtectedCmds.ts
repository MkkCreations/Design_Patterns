

export class ProtectedCmds {
    private protectedCmd = Array<string>();

    constructor() {
        this.protectedCmd.push("rm");
        this.protectedCmd.push("rmdir");
        this.protectedCmd.push("mkdir");
    }

    public static isProtected(cmd: string): boolean {
        const protectedCmds = new ProtectedCmds();
        return protectedCmds.protectedCmd.includes(cmd);
    }
}