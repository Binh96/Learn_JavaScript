// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

// const result = words.filter(word => word.length > 6);

// console.log(result);

    //  Build Own Property "Filter"
    //  step 1: declare Object constructor
    //  step 2: use for to loop each elements

Array.prototype.ownFilter = function(callbackFn, arg){
    var output = [];
    for(let index in this){
        if(this.hasOwnProperty(index)){
            var result = callbackFn(this[index], index, this)
            if(result){
                output.push(this[index]);
            }
        }
    }

    return output;
}

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

console.log(words.ownFilter((word) => {
    return word.length > 6;
}));