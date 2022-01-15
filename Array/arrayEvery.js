// const numbers = [1, 30, 39, 29, 10, 13];

// const checkNumbers= function(value){
//     if(value < 40){
//         return value;
//     }
// };

// console.log(numbers.every((value) => {
//     if(value < 40){
//         return value;
//     }
// }));

    //  Build Own Property "Every"
    //  step 1: declare Object constructor
    //  step 2: use for in to loop each elements

Array.prototype.ownEvery= function (callbackFn, arg){
    var output = true; 
    for(let index in this)
    if(this.hasOwnProperty(index)){
        var result = callbackFn(this[index], index, this);
        if(!result){
            output= false;
            break;
        }
    }
    return output;
}

const numbers= [1, 30, 39, 29, 10, 13];

console.log(numbers.ownEvery((number) =>{
    if(number < 40){
        return number;
    }
}));