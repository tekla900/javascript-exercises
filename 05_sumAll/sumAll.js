const sumAll = function(starting, ending) {
    let sum = 0;

    if (typeof starting == 'number' && typeof ending == 'number' && starting > 0 && ending > 0) {
        if(starting < ending) {
            for (let i = starting; i <= ending; i++) {
                sum += i;
            }
        } else if (starting > ending) {
            for (let i = ending; i <= starting; i++) {
                sum += i;
            }
        } 
        return sum;
    } else {
        return 'ERROR'
    }
};

// Do not edit below this line
module.exports = sumAll;
