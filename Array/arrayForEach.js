
    // step to creates array prototype
    // step 1: declare Object constructor
    // step 2: use for in to loop each elements

        // Build own forEach()
const courses = ["javascript", "PHP", "Python"];

Array.prototype.ownForeach = function(callbackFn, arg){
    for(let index in this){
        if(this.hasOwnProperty(index)){
            callbackFn(this[index], index, this);
        }
    }
}

courses.ownForeach((course, index, array) => {
    console.log(course, index, array);
});