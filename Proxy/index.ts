import { Proxy } from "./models/Proxy";
import { User } from "./models/User";
import { CommandLine } from "./models/CommandLine";
import { ProtectedCmds } from "./models/ProtectedCmds";


function main() {

    const proxy = new Proxy();
    const ls = new CommandLine('ls', ['-la']);
    const rm = new CommandLine('rm', ['-rf', '/']);
    const user = new User('user', 'user', false);
    const root = new User('root', 'root', true);

    console.log('User is not root');
    proxy.execute(ls, user);
    proxy.execute(rm, user);

    console.log('-'.repeat(30));

    console.log('User is root');
    proxy.execute(ls, root);
    proxy.execute(rm, root);

}

main();