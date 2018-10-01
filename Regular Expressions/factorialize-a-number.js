'use strict';
{
    function factorialize(num) {
    let result = num;
    if(num == 0){
      return 1;
    } 
    for(let i = num-1 ; i>0 ; i--){
       result *= i;
      }
  return result;
}
   factorialize(5);
}