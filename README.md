
<h1 align="center">Design Patterns</h1>

<p>To initialize the project do: </p>

```shell
    npm install
```

<h3>Singleton</h3>

<p>To see the output accede to the Singleton directory and run: </p>

```shell
    npx ts-node index.ts
```
<p>See the output example: </p>

```shell
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
```

<h3>Observer</h3>

<p>To see the output accede to the Observer directory and run: </p>

```shell
    npx ts-node index.ts
```
<p>See the output example: </p>

```shell
    0°C
    16%
      20.00 ┼                   ╭─╮                   
      19.00 ┤                 ╭─╯ │                   
      18.00 ┤               ╭─╯   ╰─╮                 
      17.00 ┤             ╭─╯       │                 
      16.00 ┼╮          ╭─╯         ╰─╮            ╭─ 
      15.00 ┤╰─╮      ╭─╯             │          ╭─╯  
      14.00 ┤  ╰─╮  ╭─╯               ╰─╮      ╭─╯    
      13.00 ┤    ╰─╮╯                   │    ╭─╯      
      12.00 ┤   ╭─╯╰─╮                  ╰─╮╭─╯        
      11.00 ┤ ╭─╯    ╰─╮                 ╭─╯          
      10.00 ┼─╯        ╰─╮             ╭─╯╰─╮         
       9.00 ┤            ╰─╮         ╭─╯    │         
       8.00 ┤              ╰─╮     ╭─╯      ╰─╮       
       7.00 ┤                ╰─╮ ╭─╯          │       
       6.00 ┤                  ╰─╯            ╰─╮     
       5.00 ┤                                   │     
       4.00 ┤                                   ╰─╮   
       3.00 ┤                                     │   
       2.00 ┤                                     ╰─╮ 
       1.00 ┤                                       │ 
       0.00 ┤                                       ╰ 
```
