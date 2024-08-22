const removeFromArray = function(array, ...args) {
    arrayWithoutItemToRemove = [];
    array.forEach((item) => {
        if (!args.includes(item)) {
            arrayWithoutItemToRemove.push(item);
          }
      });
    return arrayWithoutItemToRemove;
};
  

// Do not edit below this line
module.exports = removeFromArray;
