const palindromes = function (word) {
    newWord = word.split().reverse().join()
    if (word === newWord){
        return true;
    } else {
        return false;
    }
};
// Do not edit below this line
module.exports = palindromes;
