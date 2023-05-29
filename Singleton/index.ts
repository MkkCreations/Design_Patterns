import { Logs } from "./models/Logs";
import { BankAccount } from "./models/BankAccount";
import chalk from 'chalk';

function main(): void {
    // A bank account is created with a number and a sold
    let account = new BankAccount("123456789", 1000);
    // Operations are made on the account
    account.debit(1000);
    account.credit(2000);
    account.debit(500);
    account.debit(2000);

    // A second account is created
    let account2 = new BankAccount("987654321", 1000);
    // Operations are made on the second account
    account2.debit(100);
    account2.debit(500);
    account2.debit(500);
    account2.credit(200);

    // The logs are displayed
    console.log(chalk.redBright('='.repeat(20) + ' Refused ' + '='.repeat(20)));
    Logs.getinstance('Refused')!.showLogs();
    console.log(chalk.green('='.repeat(20) + ' Accepted ' + '='.repeat(20)));
    Logs.getinstance('Accepted')!.showLogs();


    /*  Output:
        ==================== Refused ====================
        [ 29/5/2023 21:10:08 ] : 123456789: Debit  | amount -2000€  | Not enough: available 1500€
        [ 29/5/2023 21:10:08 ] : 987654321: Debit  | amount -500€  | Not enough: available 400€
        ==================== Accepted ====================
        [ 29/5/2023 21:10:08 ] : 123456789: Debit  | amount -1000€
        [ 29/5/2023 21:10:08 ] : 123456789: Credit | amount  2000€
        [ 29/5/2023 21:10:08 ] : 123456789: Debit  | amount -500€
        [ 29/5/2023 21:10:08 ] : 987654321: Debit  | amount -100€
        [ 29/5/2023 21:10:08 ] : 987654321: Debit  | amount -500€
        [ 29/5/2023 21:10:08 ] : 987654321: Credit | amount  200€
    */
}


if (require.main === module) {
    main();
}