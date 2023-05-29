import { Logs } from "./Logs";

export class BankAccount {
    private _number: string;
    private _sold: number;

    constructor(number: string, sold: number) {
        this._number = number;
        this._sold = sold;
    }

    get number(): string {
        return this._number;
    }

    get sold(): number {
        return this._sold;
    }

    set sold(value: number) {
        this._sold = value;
    }

    debit(amount: number): void {
        if (amount > this._sold) {
            Logs.getinstance('Refused')!.logate(this._number + `: Debit  | amount -${amount}€  | Not enough: available ${this._sold}€`);
            return;
        }
        else this._sold -= amount
        Logs.getinstance('Accepted')!.logate(this._number + `: Debit  | amount -${amount}€`);
    }

    credit(amount: number): void {
        this._sold += amount;
        Logs.getinstance('Accepted')!.logate(this._number + `: Credit | amount  ${amount}€`);
    }

}