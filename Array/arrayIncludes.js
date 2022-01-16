// const array1 = [1, 2, 3];

// console.log(array1.includes(2));

    // Build own property "includes"
    // step 1: creatas Array property
    // step 2: analyst method

Array.prototype.ownIncludes = function (searchElement, fromIndex){
    var output= false;
    for(var index in this){
        if(this.hasOwnProperty(index)){
            if(this[index]===searchElement){
                output= true;
            }
        }
    }
    return output;
}


const array = [1, 2, 3];

console.log(array.ownIncludes(3))