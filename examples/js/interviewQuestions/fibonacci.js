const Utils = require('../utils');

const memoize = function (memo, formula) {
    const recur = function (n) {
        let result = memo[n];
        if (typeof result !== 'number') {
            result = formula(recur , n);
            memo[n] = result;
        }
        return result;
    };
    return recur;
};

const fibonacci = memoize([0,1] , function (recur, n) {
    return recur(n-1) + recur(n -2);
});

Utils.assert(fibonacci(4), "4th Fibonacci number is 3, excluding 0");