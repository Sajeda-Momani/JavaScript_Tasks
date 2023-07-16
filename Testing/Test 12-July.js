function testing() {
    console.log("Hello from the other side");
}
testing();

function testing_2(NAME) {
    console.log("Hello  " + NAME);
}
testing_2("AMER");
testing_2("ALI");
testing_2("OMER");

function calcoulateageindays(age) {
    let ageindays = age * 365
    console.log(ageindays)
}
calcoulateageindays(18);



function total(cost, taxes, ads) {
    let price = cost + taxes;
    let net = price - ads;
    console.log(price)
    console.log(net)

}
total(100, 20, 40);


// --------------------------------------
function calcoulateageindays(age) {
    let ageindays = age * 365
    console.log(ageindays)
    return ageindays;
}

calcoulateageindays(1);

// let year= day(10)

// function calcoulateageinhouers(age) {
//     let ageinhouer = ageindays * 24
//     return ageinhouer;
// }
// calcoulateageinhouers(year)


//////// writing with coatch//////
function stat() {
    console.log("buttom")
}
stat()

// let name (esem){
// console.log("hallow"+esem)
// }
// name( sara)



function sum(n1, n2) {
    let res = n1 + n2;
    return res;
}
let res = sum(1, 2);
console.log(sum(1, 2));
// 
let avg = 100;
function AVG() {
    let avg = 80;
    return avg;
}
console.log(avg);
// 
var i = 90
for (i = 0; i < 4; i++) {
    console.log(i)
}
console.log(i)
// 
// const person = {
//     fnam: "amer",
//     lname: "jomah",
// person.
// }
// 
let person = new String()
person.namee = "leen";
person.age = 60;
console.log(person.namee);

// 

person.hallo = function () {
    console.log (this.namee)
}
console.log (person)

// 
let people = Object.create(person);
people.namee="sajeda";
console.log(people.namee)
console.log(person.namee)
person.hallo()


