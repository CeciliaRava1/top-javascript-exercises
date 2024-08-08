const repeatString = function(string, numberOfRepetitions) {
    if (numberOfRepetitions < 0){return 'ERROR'};
    let repetitions = 0;
    let stringWithRepetition = '';
    while (repetitions < numberOfRepetitions){
        stringWithRepetition += string;
        repetitions += 1;
    }
    return stringWithRepetition;
};

// Do not edit below this line
module.exports = repeatString;
