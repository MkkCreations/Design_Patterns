
export class User {
    private username: string;
    private password: string;
    private isRoot: boolean = false;

    constructor(username: string, password: string, isRoot: boolean) {
        this.username = username;
        this.password = password;
        this.isRoot = isRoot;
    }

    public getUsername(): string {
        return this.username;
    }

    public getPassword(): string {
        return this.password;
    }

    public getIsRoot(): boolean {
        return this.isRoot;
    }

    public setIsRoot(isRoot: boolean): void {
        this.isRoot = isRoot;
    }

    public toString(): string {
        return `username: ${this.username}, password: ${this.password}, isRoot: ${this.isRoot}`;
    }
}