    // build function sumary twon number

function sumary(num1, num2){
    let  sum= 0;
    return sum = num1 + num2; 
}

console.log(sumary(2,3));

    // bulid function sumary odds number

function oddSumary(numbers){
    let sum=0;
    // console.log(numbers);
    for(var i=0 ; i< numbers.length; i++){
        if(numbers[i] % 2 != 0){
           sum += numbers[i];
        }
    }
    return sum;
}

let arr=[1,2,3,4,5,6];
console.log(oddSumary(arr));

    // build function calculation expresstion values

function calExpresstion(){
    
}
