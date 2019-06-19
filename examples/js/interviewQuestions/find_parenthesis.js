function longestValidParenthesis ( values){
    let max = 0;
    let _stack = [];
    for(let i = 0; i < values.length; i++){
        if(values[i] === '('){
            _stack.push({ val: '(', index: i });
            console.log(_stack);
        } else {
            if(_stack.length !== 0 ){
                let tmp = _stack.pop();
                if( (i - tmp.index) > max) {
                    console.log("New max : ", i , tmp.index);
                    max = i - tmp.index;
                }
            }
        }
    }
    return max;
}
console.log(longestValidParenthesis("(())"));
