
export class Logs {
    private static _instances: Map<string, Logs> = new Map<string, Logs>();
    private _operations: string[] = [];

    private constructor() {}

    static getinstance(key: string): Logs {
        if (!Logs._instances.has(key)) Logs._instances.set(key, new Logs)!;
        return Logs._instances.get(key)!;
    }

    logate(operation: string): void {
        let d = new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString();
        this._operations.push(`[ ${d} ] : ` + operation);
    }

    showLogs(): void {
        this._operations.forEach((value) => {
            console.log(value);
        });
    }
}
