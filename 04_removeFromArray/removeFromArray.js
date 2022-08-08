// const removeFromArray = function(arr, toRemove) {
//     return arr.filter(each => each !== toRemove);
// };

const removeFromArray = function(arr, ...toRemove) {
    // if (arguments.length == 2) {
    //     return arr.filter(each => each != toRemove);
    // }
    
    // let newArr = [];
    // for (let i in toRemove) {
    //     newArr.push(i);
    //     // if (!deleteFromThisArray.includes(whatToDelete[i])) {
    //     //     newArr.push(whatToDelete[i]);
    //     // }
    // }
    return arr.filter(each => !toRemove.includes(each));      
}
// Do not edit below this line
module.exports = removeFromArray;
console.log('hey');

//  ალგორითმი ასეთია: უნდა გადავატაროთ ლუპი თითიოეულ ელემეტს წასაშკელების სიაში
// თუ რომელიმე რიცხვი დაემთხვა, 
