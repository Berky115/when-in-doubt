
function isDeepEqual(obj1 , obj2){
    if(obj1 === obj2) return true;

    const obj1Props = Object.getOwnPropertyNames(obj1); // give all properties on object
    const obj2Props = Object.getOwnPropertyNames(obj2);

    if(obj1Props.length !== obj2Props.length) {
        console.log("Hey not the same amount!");
        return false;
    }

    for(prop of obj1Props){
        if(!obj2.hasOwnProperty(prop)){
            console.log("Hey! Not here")
            return false;
        } else if (typeof obj1[prop] === 'object') {
            isDeepEqual(obj1[prop], obj2[prop]);
        } else if (typeof obj1[prop] === 'function') {
            if(obj1[prop].toString() !== obj2[prop].toString()) return false
        } else if (obj1[prop] !== obj2[prop]) {
            console.log("Hey! Wrong value")
            return false;
        } 
    }
    return true;
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
    person: "Sarah",
    role: "developer",
    likes: {
        pokemon: [],
        maloy: false
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