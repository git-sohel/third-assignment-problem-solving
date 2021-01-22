// https://github.com/git-sohel/third-assignment-problem-solving

// kilometerToMeter function:

/**function kilometerToMeter(kilometer) {    
    var meter = 1000; // We know 1 kilometer = 1000 meter
    var result = kilometer * meter;
    return result;
}
var convertMeter = kilometerToMeter(5);
console.log(convertMeter);  */


// budgetCalculator function:

function budgetCalculator(twoWatch, threePhone, fourLaptop) {
    var watch = 50;
    var phone = 100;
    var laptop = 500;
    var twoWatch = watch * 2;
    var threephone = phone * 3;
    var fourLaptop = laptop * 4;
    var total = twoWatch + threephone + fourLaptop;
    return total;
}
// var totalPrice = budgetCalculator();
// console.log(totalPrice);


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
