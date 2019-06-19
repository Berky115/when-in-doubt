function sum(x){
    return function(y){
        return x+y;
    }
}

let sumOne = sum(1);
console.log(sumOne(5));