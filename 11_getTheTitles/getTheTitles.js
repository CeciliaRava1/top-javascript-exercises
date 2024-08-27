const getTheTitles = function(array) {
    arrayWithTiles = [];
    for (let position in array) {
        arrayWithTiles.push(array[position].title);
    }
    return arrayWithTiles;
};

// Do not edit below this line
module.exports = getTheTitles;
