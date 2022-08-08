const fibonacci = function(nterms) {

    if (nterms === 1 || nterms === 0) return 1;
    else if (nterms < 0) return 'OOPS';

    let n1 = 1, n2 = 1, nextTerm;

    let arr = [];
    for (let i = 1; i <= nterms; i++) {
        arr.push(n1);
        nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;
    }
    return arr[arr.length-1];
};

// Do not edit below this line
module.exports = fibonacci;
