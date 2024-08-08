const reverseString = function(inputString) {
    let reversedInputString = '';
    for (var i = inputString.length-1; i >= 0; i--){
        reversedInputString += inputString[i]
    }
    return reversedInputString;
};

// Do not edit below this line
module.exports = reverseString;
