const fibonacci = function(numberPosition) {
    numberPosition = parseInt(numberPosition);
    if(numberPosition < 0){
        return 'OOPS';
    } else if (numberPosition === 1){
        result = 1;
    } else {
        firstNumber = 0; secondNumber= 1; result = 0;
        for(let i = 1; i < numberPosition; i++){
            result = firstNumber + secondNumber;
            firstNumber = secondNumber;
            secondNumber = result;
        }
    }
    return result;
};

fibonacci(4);
// Do not edit below this line
module.exports = fibonacci;
