// Input: K = 1, N = 2
// Output: 2
// Explanation: 
// Drop the egg from floor 1.  If it breaks, we know with certainty that F = 0.
// Otherwise, drop the egg from floor 2.  If it breaks, we know with certainty that F = 1.
// If it didn't break, then we know with certainty F = 2.
// Hence, we needed 2 moves in the worst case to know what F is with certainty.


function superEggDrop (k, n) {
    if(k === 1) return n;
    if(k === 0 ) return 0;
    return binaryEggSearch(k,n,0,1);
};

function binaryEggSearch(eggs, floors, bottom, move) {
    let range = floors - bottom;
    console.log("Eggs : ", eggs , "Move : ", move, " Range : ", range, "Top : ", floors , " Bottom : " , bottom);
    
    
    if(eggs > 0 && range === 1){
        return move  + range;
    }

    if(eggs === 0 && range === 1){
        return move;
    }

    console.log("Uncertainty detected");
    return binaryEggSearch(eggs-1, floors, Math.ceil(bottom + (range/2)) , move+1);
}

//we want 2
console.log(superEggDrop(1,2));

// we want 3
console.log(superEggDrop(2,6));

// we want 4
console.log(superEggDrop(3,14));

//3
console.log(superEggDrop(1,3));

//4
console.log(superEggDrop(2,7));