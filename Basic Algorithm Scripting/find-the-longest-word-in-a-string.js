//author GabrielMS22
function findLongestWordLength(str) {  
	var Max = 0, cont = 0;
	for(let i = 0 ; i<str.length ; i++){
		if(str[i] != " "){      
			cont++;   
		}else{      
			cont = 0    
		}if(cont > Max){      
			Max = cont;    
		}
	}
	  console.log(Max);
	   return Max;
	}
	findLongestWordLength("The quick brown fox jumped over the lazy dog");