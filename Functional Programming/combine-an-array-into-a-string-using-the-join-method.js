'use strict';
  {
      function sentensify(str) {  // Add your code below this line
      let arr;  
      if(str.includes('-')){  
      arr = str.split('-').join(' ');
      }else if(str.includes(',')){    
          arr = str.split(',').join(' ');  
      }else if(str.includes('.')){   
           arr = str.split('.').join(' ');  
      }
      return arr;   
      // Add your code above this line
}
      sentensify(\"May-the-force-be-with-you\");
}