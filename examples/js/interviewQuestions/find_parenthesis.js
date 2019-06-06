


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



// public class Solution {

//     public int longestValidParentheses(String s) {
//         int maxans = 0;
//         Stack<Integer> stack = new Stack<>();
//         stack.push(-1);
//         for (int i = 0; i < s.length(); i++) {
//             if (s.charAt(i) == '(') {
//                 stack.push(i);
//             } else {
//                 stack.pop();
//                 if (stack.empty()) {
//                     stack.push(i);
//                 } else {
//                     maxans = Math.max(maxans, i - stack.peek());
//                 }
//             }
//         }
//         return maxans;
//     }
// }