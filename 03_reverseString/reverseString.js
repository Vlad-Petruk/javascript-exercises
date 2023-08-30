const reverseString = function(string) {
let arr = string.split('');
arr.reverse();
let newString = arr.join('')
return newString
};

// Do not edit below this line
module.exports = reverseString;
