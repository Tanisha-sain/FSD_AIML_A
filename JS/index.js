// console.log(a);
// var a = 12;
// const a = 12

// if(a > 10){
//     a = 30;
//     let b = 67; 
//     console.log(a);
//     console.log(b);
// }

// console.log(a);
// console.log(b);


// ---- Datatypes ----
// 1. Number
// 2. Boolean
// 3. String
// 4. Object
// 5. NaN
// 6. Null
// 7. Undefined
// 8. BigInt
// 9. Symbol

console.log(Number.MAX_VALUE)

const add = (x, y, z) => (x+y+z);
console.log(add(4,5,2));
console.log(this); 

const person = {
    name : "xyz",
    age: 20,
    salary: 114029.50
}

// const newPerson = person;
const newperson = {...person, name: "ABC"}
// newPerson.age = 35;
newperson.age = 31
console.log(person.age)
console.log(newperson.age)

const emp = ["xyz", 30, 10.12]
const newemp = [...emp]
const newemp1 = [1, ...emp]

console.log(emp)
console.log(newemp)
console.log(newemp1)


function add2(x=0,y=0){
    return x+y;
}

const add1 = (x,y) => (x+y);

console.log(add2(4,5));
console.log(add1(5,6));

// Destructuring

const { name, age, salary } = person;
console.log(`name: ${name}, age: ${age}, salary: ${salary}`);

const [ a, b, c ] = emp;
console.log(`a = ${a}, b = ${b}, c = ${c}`);

// Map
const myMap = new Map(
    [
        ["key1", 123],
        [34, "js"]
    ]
)

console.log(myMap.get(34));
console.log(myMap.get("key1"));

myMap.set("key2", "java");
myMap.set("key3",101.50);

console.log(myMap);

// Set

const myset = new Set();
console.log(myset);
myset.add(24);
myset.add(12);
myset.add(21);
myset.add(11);
myset.add(10);
myset.add(2);
console.log(myset);

// const a1 = Array.from(myset).filter((x) => x%2 == 0);
// console.log(a1);

const a2 = Array.from(myset).map((x) => x*2);
console.log(a);

const arr = Array.from(myset);
console.log(arr)
const a3 = arr.reduce((prev, curr) => {
    console.log(prev + curr)
    return prev + curr;
}, 0);
console.log(a3);

// myMap.filter((x) => x%2 == 0);


// Asynchronous Programming 