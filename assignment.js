// https://github.com/git-sohel/third-assignment-problem-solving

// kilometerToMeter function:

function kilometerToMeter(kilometer) {
    var meter = 1000;   // We know 1 kilometer = 1000 meter
    var result = kilometer * meter;
    return result;
}


// budgetCalculator function:

function budgetCalculator(twoWatch, threePhone, fourLaptop) {

    var watch = 50;         // Here watch price is per 50 taka 
    var phone = 100;        // Here phone price is per 100 taka 
    var laptop = 500;       // Here laptop price is per 500 taka 
    var twoWatch = watch * 2;
    var threePhone = phone * 3;
    var fourLaptop = laptop * 4;
    var total = twoWatch + threePhone + fourLaptop;
    return total;
}

//hotelCost function

function hotelCost(hotelcost) {
    var hotelCostArray = [];
    var oneToTen = 100;
    var elevenToTwenty = 80;
    var twentyOneToAny = 50;
    for (var i = 0; i < hotelCostArray.length; i++) {
        if (hotelCostArray <= 10) {
            var oneToTen = 100 * hotelCostArray.length;
        } else if (hotelCostArray > 20) {
            var elevenToTwenty = 80 * hotelCostArray.length;

        } else {
            var twentyOneToAny = 50 * hotelCostArray.length;
        }
        var totalCostPrice = oneToTen + elevenToTwenty + twentyOneToAny;
        return totalCostPrice;
    }
}

//megaFriend function

var names = ["Aminul", "rana", "selim", "pop", "kobir"];
function megaFriend(names) {
    var maxword = names[0];
    var largestName = " ";
    for (var i = 0; i < names.length; i++) {
        var elements = names[i];
        if (elements.length > names.length) {
            maxword = elements;
            largestName = maxword;
        }
        return largestName;
    }
}
