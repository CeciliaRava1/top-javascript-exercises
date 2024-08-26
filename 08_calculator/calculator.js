const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1,num2) {
	return num1 - num2;
};

const sum = function(array) {
  if (array.length === 0){
    return 0;
  }
  if (array.length === 1){
    return array[0];
  } else {
    result = 0;
    for(let i=0; i < array.length; i++)
      result += array[i];
    return result;
  }
  
};

const multiply = function(array) {
  let result = array[0];
  for(let i=1; i < array.length; i++){
    result *= array[i]
  }
  return result;
};

const power = function(num1, numPower) {
	return num1 ** numPower
};

const factorial = function(number) {
    let ans = 1; 
    if(number === 0)
        return 1;
    for (let i = 2; i <= number; i++) 
        ans = ans * i; 
    return ans; 
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
