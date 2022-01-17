// const array1 = [1, 2, 3];

// console.log(array1.includes(2));

    // Build own property "includes"
    // step 1: creatas Array property
    // step 2: analyst method

Array.prototype.ownIncludes = function (searchElement, fromIndex){
    var output= false;
    var start = 0;
    var l = this.length;
    if(fromIndex == undefined){
        for(var index = start; index <= l ; index++){
            if(this[index]===searchElement){
                output= true;
            }
        }
    }
    else{
        for(var index = fromIndex; index <= l ; index++){
            if(this[index]===searchElement){
                output= true;
            }
        }
    }
    return output;
}


const array = [1, 2, 3, 4, 5, 6, 7, 8];

console.log(array.ownIncludes(5))