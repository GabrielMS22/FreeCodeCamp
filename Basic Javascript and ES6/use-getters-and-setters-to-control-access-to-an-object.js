'use strict';
{
    function makeClass() {
         /* Alter code below this line */
    class Thermostat{
         constructor(Farenheit){
          this.Farenheit = Farenheit;
         }
        get temperature(){
             return this.Farenheit;
             }
        set temperature(temp){
            this.Farenheit = temp;
        }
       }  /* Alter code above this line */
      return Thermostat;
    }
    const Thermostat = makeClass();
    const thermos = new Thermostat(76); // setting in Fahrenheit scale
    let temp = thermos.temperature; // 24.44 in C
    thermos.temperature = 26;
    temp = thermos.temperature; // 26 in C"
}