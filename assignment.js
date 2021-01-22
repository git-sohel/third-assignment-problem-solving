// https://github.com/git-sohel/third-assignment-problem-solving

// kilometerToMeter function:

var meter = 1000;
function kilometerToMeter(kilometer) {
    var result = kilometer * meter;
    return result;
}
var convertMeter = kilometerToMeter (5);
console.log(convertMeter);


// budgetCalcutaor function:



//megaFriend function
/**
 var names =["Aminul", "Sohel", "Selim", "Shohidul", "Sanowar"];
function largestNumber(names){
    for(var i =0; i < names.length; i++){
        if (element.length > largest.length) {
            largest = element;
        }
    }
    
   
    }
    return largest;
    }


var bigName = megaFriend(["Tweety", "Hedwig", ]);
return bigName;
 */

 /** 
  //megaFriend

function megaFriend(names) {
    var maxword = names[0];
    var largestName = "";
    for (var i = 0; i < names.length; i++) {
        var elements = names[i];
        if (elements.length > names.length) {
            maxword = elements;
            largestName = maxword;
        }
        return largestName;
    }
}
var friends = ["Aminul", "Sohel", "Selim", "Shohidul", "Sanowar"];
console.log(friends);
  */
