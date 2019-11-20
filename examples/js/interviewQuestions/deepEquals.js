/* Remember...
- Double check work
- 80% of the time it is simply small details
- Checks before method 'length size, equal to each other' show experience. Super easy to have around
- At the end of the day this is a problem that tests recursion
- Using debug statements quickly allowed us to determine where things where going
- Null and false are NOT the same. Be aware of this difference
*/


function isDeepEqual (obj1, obj2){
    if(obj1 === obj2) return true

    obj1Props = Object.getOwnPropertyNames(obj1)
    obj2Props = Object.getOwnPropertyNames(obj2)

    if(obj1Props.length !== obj2Props.length) { console.log('uneven prop count');return false }

    for(prop of obj1Props) {
        if(obj2Props[prop] === null ) { console.log('prop not present');return false }
        else if (typeof prop === 'Object') isDeepEqual(obj1Props[prop],obj2Props[prop])
        else if (typeof prop === 'function') { if (obj1Props[prop].toString() !== obj2Props[prop].toString()) { console.log('functions not equals');return false } }
        else if( obj1Props[prop] !== obj2Props[prop] ) { console.log('props not equal');return false }
    }
    return true
}

const obj = {
    val:1
}

const obj1 = {
    val:"1"
}

const obj2 = {
    val:1
}

const obj3 = {
    person: "Dante",
    role: "developer",
    likes: {
        pokemon: [],
        Arkham: false
    }
}

obj4 = {
    ...obj3
}

obj5 = {val: []}
obj6 = {val: []}

func1 = function(){}
func2 = function(){}

funcObj1 = {
    func : func1
}

funcObj2 = {
    func : func2
}

console.log(isDeepEqual([],[]));
console.log(isDeepEqual({val:1},{val:1}));
console.log(isDeepEqual({val:1},{val:2}));
console.log(isDeepEqual(obj,obj));
console.log(isDeepEqual(obj1,obj2));
console.log(isDeepEqual(obj3,obj4));
console.log(isDeepEqual(  obj5, obj6 ));
console.log(isDeepEqual(  {}, {} ));
console.log(isDeepEqual(  funcObj1, funcObj2 ));
