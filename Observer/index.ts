import * as rs from "readline-sync";

import { WeatherStation } from "./models/WeatherStation";
import { TextOutput } from "./models/TextOutput";
import { GraphicOutput } from "./models/GraphicOutput";

function main(): void {
    // Create the outputs
    const output1 = new TextOutput();
    const output2 = new GraphicOutput();
    // Create the weather station
    const weatherStation = new WeatherStation(10);
    // Subscribe the outputs to the weather station
    weatherStation.manager.subscribe(output1);
    weatherStation.manager.subscribe(output2);

    console.log("Press enter to start the simulation");
    rs.question();

    // Simulate the weather station
    weatherStation.humidity++;
    for (let p = 0; p < 10; p++) {
        console.log("Press enter for the next display");
        rs.question();

        weatherStation.humidity--;
        weatherStation.temperature += 1;
    }

    for (let p = 0; p < 10; p++) {
        console.log("Press enter for the next display");
        rs.question();

        weatherStation.humidity++;
        weatherStation.temperature -= 2;
    }

    /*  Output:

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
    */
}

main();
