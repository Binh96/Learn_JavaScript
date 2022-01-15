
    // step to creates array prototype
    // step 1: declare Object constructor
    // step 2: use for in to loop each elements

        // Build own forEach()
const courses = ["javascript", "PHP", "Python"];


Array.prototype.ownForEach = function(callbackFn, arg){
    for(let i in this){
        if(this.hasOwnProperty(i)){
           callbackFn(this[i], i, this);
        }
    }
}

courses.ownForEach(function(course,index,array){
    console.log(course, index, array);
});