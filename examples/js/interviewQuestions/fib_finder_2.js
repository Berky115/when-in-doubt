function findFib(n){
    const result = [];
    for(let i = 0; i < n ; i++){
        result.push(fib(i));
    }
    return result;
}

function fib(n){
    if(n === 0) return 0;
    else if (n === 1) return 1;
    return fib(n-1) + fib(n-2);
}


console.log(findFib(1) == "0");
console.log(findFib(2) == "0,1");
console.log(findFib(3) == "0,1,1");
console.log(findFib(25));

