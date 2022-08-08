const palindromes = function (str) {
    let reversed = str.split('').reverse().join('').toLowerCase().replace(/[^\w\s\']|_/g, "").replace(/\s+/g, "");
    let string = str.replace(/[^\w\s\']|_/g, "").replace(/\s+/g, "").toLowerCase();
    return string === reversed;
};

// Do not edit below this line
module.exports = palindromes;
