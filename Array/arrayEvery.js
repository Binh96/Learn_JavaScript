// const fruits = [1, 30, 39, 29, 10, 13];

// const checkFruit= function(value){
//     if(value < 40){
//         return value;
//     }
// };

// console.log(fruits.every((value) => {
//     if(value < 40){
//         return value;
//     }
// }));

    //  Build Own Property "Every"
    //  step 1: declare Object constructor
    //  step 2: use for to loop each elements

Array.prototype.ownEvery = function (callbackFn, arg){
    for(let index in this){
        if(this.hasOwnProperty(index)){
           if(callbackFn(index)){
                return true;
           }
           else 
                return false;
        }
    }
}

const numbers= [1, 30, 39, 29, 10, 13];

numbers.ownEvery((number) => {
    if(number < 40){
        console.log(number);
    }
});