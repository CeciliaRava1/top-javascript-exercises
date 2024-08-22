// Even = [0,2,4]
// Odd = [1,3,5]


// Original function without using map, filter and reduce methods
// function sumOfTripledEvens(array) {
//     let sum = 0;
//     for (let i = 0; i < array.length; i++) {
//       // Step 1: If the element is an even number
//       if (array[i] % 2 === 0) {
//         // Step 2: Multiply this number by three
//         const tripleEvenNumber = array[i] * 3;
  
//         // Step 3: Add the new number to the total
//         sum += tripleEvenNumber;
//       }
//     }
//     return sum;
//   }


// Function using the method mentioned above
function isEven(number){
    return number % 2 === 0
}

function sumOfTripledEvens2(array){
    const oddNumbers = array.filter(isEven).map((num) => num*3).reduce((total, currentItem) => {
        return total + currentItem;
    }, 0);
    console.log(oddNumbers)
}

const array = [1,2,3,4,5,6]
sumOfTripledEvens2(array)



