{
    'use strict';
    const result = { 
         success: ["max-length", "no-amd", "prefer-arrow-functions"],  
         failure: ["no-var", "var-on-top", "linebreak"],  
         skipped: ["id-blacklist", "no-dup-keys"]
        };
    function makeList(arr) {\n  \
        "use strict";  // change code below this line\n  
        const resultDisplayArray =[   `<li class="text-warning">${arr[0]}</li>`,   `<li class="text-warning">${arr[1]}</li>`, \n  `<li class="text-warning">${arr[2]}</li>`];  // change code above this line 
        return resultDisplayArray;\n}
        // makeList(result.failure) should return:\n * [ `<li class=\"text-warning\">no-var</li>`,\n *   `<li class=\"text-warning\">var-on-top</li>`, \n *   `<li class=\"text-warning\">linebreak</li>` ]\n **/\n
        const resultDisplayArray = makeList(result.failure);
    }