const fruits = [1, 30, 39, 29, 10, 13];

const checkFruit= function(value){
    if(value < 40){
        return value;
    }
};

console.log(fruits.every(checkFruit));