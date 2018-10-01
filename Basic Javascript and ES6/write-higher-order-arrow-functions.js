'use strict';
{
    const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34];
    const squareList = (arr) => {  
      // change code below this line
    const squaredIntegers = arr.reduce((total,amount) => {
            if(Number.isInteger(amount)){
                total.push(amount*amount);
              }
              return total;
             },[]);
               // change code above this line
            return squaredIntegers;
        };
        // test your code
        const squaredIntegers = squareList(realNumberArray);
        console.log(squaredIntegers);
}