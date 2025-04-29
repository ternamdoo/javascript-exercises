const removeFromArray = function(array, ...args) {
    for (const arg of args) {
        for (let i = 0; i < array.length; i++) {
            array = array.filter(item => arg !== item);
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
