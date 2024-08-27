const findTheOldest = function(array) {
    todayYear = new Date();
    ageOfOldestPerson0 = 0;
    number = -1
    for(let position in array){
        number +=1
        if(array[position].yearOfDeath === undefined){
            ageOfOldestPerson1 = todayYear.getFullYear() - array[position].yearOfBirth
        } else {
            ageOfOldestPerson1 = array[position].yearOfDeath - array[position].yearOfBirth;
        }
        if(ageOfOldestPerson0 < ageOfOldestPerson1){
            ageOfOldestPerson0 = ageOfOldestPerson1;
            positionOfOldestPerson = number;
        }
        
    }
    return array[positionOfOldestPerson];

};

// Do not edit below this line
module.exports = findTheOldest;
