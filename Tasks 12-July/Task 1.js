/*
1
Write a function named tellFortune that:
takes 4 arguments: number of children,
partner's name, geographic location, job title.
outputs your fortune to the screen like so:
"You will be a X in Y, and married to Z with N kids."

Ex: tellFortune('software engineer', 'Jordan', 'Alice', 3);
=> "You will be a software engineer in Jordan, and married to Alice with 3 kids."
*/

function tellFortune(numberofchildren, partnersname, geographiclocation, jobtitle) {
    let fortune = "You will be a " + jobtitle + " in" + " " + geographiclocation + " and married to " + partnersname + " with " + numberofchildren + " kids ";
    console.log(fortune);
}
tellFortune(3, "Alice", "Jordan", "software-engineer");

/*
2
Write a function named calculateDogAge that:
takes 1 argument: your puppy's age.
calculates your dog's age based on the conversion
rate of 1 human year to 7 dog years.
outputs the result to the screen like so:
"Your doggie is NN years old in dog years!"

Ex: calculateDogAge(1);
=> "Your doggie is 7 years old in dog years!"
*/

function calculateDogAge(age) {
    let agee = "Your doggie is " + age * 7 + " years old in dog years!"
    console.log(agee)
}
calculateDogAge(1)
/*
3
Write a function named calculateSupply that:
takes 2 arguments: age, amount per day.
calculates the amount consumed for rest of the life (based on a constant max age 100).
outputs the result to the screen like so:
"You will need NN to last you until the ripe old age of X"

Ex: calculateSupply(30, 3);
=> 'You will need 76650 cups of tea to last you until the ripe old age of 100;
*/
function calculateSupply(age, amountperday) {
    let aage = 100 - age
    let copp = amountperday * 365
    let tea = "You will need " + copp * aage + " cups of tea to last you until the ripe old age of 100 ";
    console.log(tea)
}
calculateSupply(30, 3)
/*
4
Write a function called greet that:
takes 1 argument: name.
and it will return hello + name

Ex: greet("Adam")
=> "Hello Adam"
*/
function greet(name) {
    let hi = "Hello " + name
    console.log(hi)
}
greet("Adam")
/*
5
what is the error:
*/

function double(cat) {
    return 2 * x;
}

function double(X = 7) {
    return 2 * 7;
}

function double(X = 7) {
    return 2 * 'x';
}

/*
7
*/

function double1(x) {
    return 2 * x;
}

function double2(x) {
    return 2 * x;
}

function double3(x) {
    return 2 * x;
}


/*
7
Write a function called cube that:
accept 1 parameter and calculate the cube of this number

Ex: cube(4)
=> 64
*/
function cube(dimintion) {
    let size = dimintion * dimintion * dimintion
    console.log(size)

}
cube(4)
/*
8
Write a function called multiply that:
accept 2 parameters and calculate the multiply of these 2 numbers

Ex: multiply(3,4)
=> 12
Ex: multiply(5,4)
=> 20
*/

function multiply(x, y) {
    let z = x * y
    console.log(z)
}
multiply(3, 4)
multiply(5, 4)

/*
9
Write a function called canIGetADrivingLicense that:
accept 1 parameter represent the age
and if the age greater than or equal to 20 return "yes you can"
otherwise return "please come back after X years to get one"

Ex: canIGetADrivingLicense(21)
=> "yes you can"

Ex: canIGetADrivingLicense(17)
=> "please come back after 3 years to get one"

Ex: canIGetADrivingLicense(20)
=> "yes you can"

*/
function canIGetADrivingLicense(aaggee) {
    if (aaggee >= 20) {
        say = "yes you can";
    } else {
        say = "please come back after " + (20 - aaggee) + " years to get one"
    }
    console.log(say)

}
canIGetADrivingLicense(21)
canIGetADrivingLicense(17)
canIGetADrivingLicense(20)


/*
10
Write a function called sameLength
that accepts two strings as arguments,
and returns true if those strings have the same length, and false otherwise.

**hint: how we can know string length   Ex: : "tree".length   => 4

Ex: sameLength("tree","clue")
=> true

Ex: sameLength("tree","car")
=> false
*/
// function sameLength ("",""){
// if ()
// }

function sameLength(a = "", b = "") {
    if (a.length == b.length) {
        rusult = "true"
    }
    else {
        rusult = "false"
    }
    console.log(rusult)

}
sameLength("tree", "clue")
sameLength("tree", "car")

/*
11
Write a function called largerNubmer
that accept two numbers as arguments,
and return the first larger numbers

Ex: largerNubmer(5,6)
=> 6

Ex: largerNubmer(5,3)
=> 5
*/
function largerNubmer(a, b) {
    if (a > b) {
        num = a + " is the larger";
    }
    else if (b > a) {
        num = b + " is the larger"
    }

    console.log(num)
}

largerNubmer(5, 6)
largerNubmer(5, 3)


/*
12
Write a function called smallerNubmer
that accept three numbers as arguments,
and return the first smaller number

Ex: smallerNubmer(8,6,7)
=> 6

Ex: smallerNubmer(5,99,34)
=> 5

Ex: smallerNubmer(5,99,3)
=> 3

Ex: smallerNubmer(5,3,3)
=> 3

*/
function smallerNubmer(d, f, g) {
    if (d < f && d < g) {
        no = d + " is the smallest";
    } else if (f < d && f < g) {
        no = f + " is the smallest";
    } else {
        no = g + " is the smallest";

    }
    console.log(no)
}
smallerNubmer(8, 6, 7)
smallerNubmer(5, 99, 34)
smallerNubmer(5, 99, 3)
smallerNubmer(5, 3, 3)
/*
13
Write a function called shorterString
that accept five string as an arguments,
and return the first shorter string

Ex: shorterString("air","school","car","by","github")
=> by

Ex: shorterString("air","tr","car","by","github")
=> tr

Ex: shorterString("by","tr","car","air","github")
=> by

Ex: shorterString("air","by","car","school","github")
=> by

Ex: shorterString("air","tr","by","car","github")
=> by

Ex: shorterString("air","tr","car","github","by")
=> by

*/

// function shorterString(q , w , e , r , t ) {
//     if (q.length < w.length && q.length < e.length && q.length < r.length && q.length < t.length) {
//         output = q + " is the shorter string"
//     }
//     else if (w.length < q.length && w.length < e.length && w.length < r.length && w.length < t.length) {
//         output = w + " is the shorter string"
//     }
//     else if (e.length < q.length && e.length < w.length && e.length < r.length && e.length < t.length) {
//         output = e + " is the shorter string"
//     }
//     else if (r.length < q.length && r.length < w.length && r.length < e.length && r.length < t.length) {
//         output = e + " is the shorter string"
//     }
//     else if (t.length < q.length && t.length < w.length && t.length < e.length && t.length < r.length) {
//         output = e + " is the shorter string"
//     }
//     console.log(output)

// }
// shorterString("air", "school", "car", "by", "github")
// shorterString("air", "tr", "car", "by", "github")
// shorterString("by", "tr", "car", "air", "github")
// shorterString("air", "by", "car", "school", "github")
// shorterString("air", "tr", "by", "car", "github")
// shorterString("air", "tr", "car", "github", "by")

function shorterString(...str) {  /*... means array*/
    short = str[0]
    for (let i = 0; i < str.length; i++) {
        if (str[i].length < short.length) {
            short = str[i]
        }
    }
    console.log(short)
}
shorterString("air", "school", "car", "by", "github")
shorterString("air", "tr", "car", "by", "github")
shorterString("by", "tr", "car", "air", "github")
shorterString("air", "by", "car", "school", "github")
shorterString("air", "tr", "by", "car", "github")
shorterString("air", "tr", "car", "github", "by")
/*
14
Write a function called longerString
that accept four string as an arguments,
and return the first longer string

Ex: longerString("air","school","car","github")
=> school

Ex: longerString("air","schoo","car","github")
=> github

try all the cases (change the order of the longestString)
*/

// function longerString(y = "", u = "", i = "", o = "",) {
//     let outputt=""
//     if (y.length > u.length && y.length > i.length && y.length > o.length) {
//         outputt = y + " is the longer string"
//     }
//     else if (u.length > y.length && u.length > i.length && u.length > o.length) {
//         outputt = u + " is the longer string"
//     }
//     else if (i.length > y.length && i.length > u.length && i.length > o.length) {
//         outputt = i + " is the longer string"
//     }
//     else if (o.length > y.length && o.length > u.length && o.length > i.length) {
//         outputt = o + " is the longer string"
//     }

//     console.log(outputt)

// }

// longerString("air", "schoo", "car", "github")
// longerString("air", "school", "car", "github")

function longerString(...str) {  /*... means array*/
    short = str[0]
    for (let i = 0; i < str.length; i++) {
        if (str[i].length > short.length) {
            short = str[i]
        }
    }
    console.log(short)
}
longerString("air", "schoo", "car", "github")
longerString("air", "school", "car", "github")
/*
15
Write a function called isEven
that accept 1 argument as a number,
and return true if this number is even
and false if this number is odd

Ex: isEven(1)
=> false
Ex: isEven(2)
=> true

*/
function isEven(numm) {
    if (numm % 2 == 0) {
        console.log("true");
    }
    else if (numm % 2 !== 0) {

        console.log("false");
    }
}

isEven(1)
isEven(2)


/*
16
Write a function called isOdd
that accept 1 argument as a number,
and return true if this number is Odd
and false if this number is Even

Ex: isOdd(4)
=> false
Ex: isOdd(5)
=> true
*/
function isOdd(numm) {
    if (numm % 2 !== 0) {
        console.log("true");
    }
    else if (numm % 2 == 0) {

        console.log("false");
    }
}

isOdd(4)
isOdd(5)



/*
17
Write a function called positive
that accept 1 argument as a number,
and return the positive version of the number passed

Ex: positive(4)
=> 4
Ex: positive(-5)
=> 5
*/
function positive(v) {

    console.log(Math.abs(v))
}
positive(4)
positive(-5)

/*
18
Write a function called fullName
that accept two parameters, firstName and lastName,
and returns the firstName and lastName concatenated
together with a space in between.

Ex: fullName("Adam","McCallen")
=> "Adam McCallen"
Ex: fullName("Alex", "Mercer")
=> "Alex Mercer"
*/

function fullName(fname, lname) {
    funame = fname + "" + lname
    console.log(funame)
}
fullName("Adam", "McCallen")
fullName("Alex", "Mercer")


/*
19
Write a function called average
that takes five numbers as inputs
and returns the average of those numbers.

Ex: average(1,2,3,4,5)
=> 3

Ex: average(5,7,9,3,5)
=> 5.8

*/
---------------------------------------------------------
function average(a1, a2, a3, a4, a5) {
    return (a1 + a2 + a3 + a4 + a5) / 5
}
console.log(average(1, 2, 3, 4, 5));



/*
20
Write a function called randomNumber
that didnt takes any parameter
and returns a random number between 0-1
** hint: you can seacrh using MDN

Ex: randomNumber()
=> 0.2278

Ex: randomNumber()
=> 0.475

*/

function randomNumber() {
    return Math.random()
}
console.log(Math.random());

/*
21
Write a function called randomBetweenNumbers
that takes 2 parameters
and returns a random number between them
** hint: you can seacrh using MDN

Ex: randomBetweenNumbers(1,8)
=> 7.5412

Ex: randomBetweenNumbers(3,100)
=> 23

*/
function randomBetweenNumbers(k1, k2) {
    return Math.random() * (k2 - k1) + k1;
}
console.log(randomBetweenNumbers(3, 100));


/*
22
Write a function called scoreInUniversty
that takes 1 parameters
and returns the alpabet in the unevirsty
A => 95-100
B => 85-94
C => 70-84
D=> 50-69
F=> 0-49

Ex: scoreInUniversty(96)
=> "A"

Ex: scoreInUniversty(3)
=> "F"

Ex: scoreInUniversty(71)
=> "C"
*/
function scoreInUniversty(b1) {
    switch (true) {
        case b1 >= 95:
            console.log("A");
            break;
        case b1 >= 85:
            console.log("B");
            break;
        case b1 >= 70:
            console.log("C");
            break;
        case b1 >= 50:
            console.log("D");
            break;
        default:
            console.log("F");
            break;
    }
}
scoreInUniversty(71)


/*
23
Write a function called counter
that will returns a number bigger
than the one that returnd before
and start from 0

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: counter()
=> 3

*/

let x = 0;
function counter() {
    x++;
    console.log(x);
}
counter();
counter();
/*
24
Write a function called resetCounter
that will reset the previuos function
and return the number before reset and
a string say that the counter reset

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: counter()
=> 3

Ex: resetCounter()
=> 3 and the counter reset now

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: resetCounter()
=> 2 and the counter reset now

Ex: counter()
=> 1
*/
function resetCounter() {
    x++;
    console.log(x - 1 + " the counter reset now");
}
resetCounter()