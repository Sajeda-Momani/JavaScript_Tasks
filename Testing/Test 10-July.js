/****************************************Arithmetic****************************************/

/*
1-Addition (+):
    The addition operator + is used to add two or more numeric values together.
 */
let sum = 2 + 3; // 5
console.log(sum);

/*
2-Subtraction (-):
    The subtraction operator - is used to subtract one numeric value from another.
*/
let difference = 5 - 2; // 3
console.log(difference);

/*
3-Multiplication (*):
    The multiplication operator * is used to multiply two or more numeric values.
*/
let product = 2 * 3; // 6
console.log(product);

/*
4-Division (/):
    The division operator / is used to divide one numeric value by another.
*/
let divis = 6 / 2; // 3
console.log(divis);

/*
5-Modulo (%):
    The modulo operator % returns the remainder after division.
*/
let remainder = 7 % 3; // 1
console.log(remainder);

/*
6-Exponentiation (**):
    The exponentiation operator ** raises the first operand to the power of the second operand.
*/
let result = 2 ** 3; // 8
console.log(result);

/*
7-Increment (++) and Decrement (--):
    The increment operator ++ increases the value of a variable by 1, while the decrement operator -- decreases it by 1.
*/
let counter = 0;
console.log(counter++);
console.log(++counter);
console.log(counter--);
console.log(--counter);


/****************************************Assignment ****************************************/

/*
1-Assignment Operator (=):
    The assignment operator = is used to assign a value to a variable or a property.
*/
let x = 5; // Assigns the value 5 to variable x
const name = "John"; // Assigns the string "John" to constant variable name
//obj.property = value; // Assigns a value to an object's property

/*
2-Addition Assignment (+=):
    The addition assignment operator += is used to add a value to an existing variable and assign the result to the same variable.
*/
let z = 3;
z += 2; // Equivalent to x = x + 2; (x becomes 5)
console.log(z);

/*
3-Subtraction Assignment (-=):
    The subtraction assignment operator -= is used to subtract a value from an existing variable and assign the result to the same variable.
*/
let w = 8;
w -= 3; // Equivalent to x = x - 3; (x becomes 5)
console.log(w);

/*
4-Multiplication Assignment (*=):
    The multiplication assignment operator *= is used to multiply an existing variable by a value and assign the result to the same variable.
*/
let a = 2;
a *= 3; // Equivalent to x = x * 3; (x becomes 6)
console.log(a);

/*
5-Division Assignment (/=):
    The division assignment operator /= is used to divide an existing variable by a value and assign the result to the same variable.
*/
let q = 10;
q /= 2; // Equivalent to x = x / 2; (x becomes 5)
console.log(q);

/*
6-Remainder Assignment (%=):
    The remainder assignment operator %= is used to calculate the remainder of an existing variable divided by a value and assign the result to the same variable.
*/
let e = 13;
e %= 5; // Equivalent to x = x % 5; (x becomes 3)
console.log(e);

/*
7-Exponentiation Assignment (**=):
    The exponentiation assignment operator **= is used to raise an existing variable to the power of a value and assign the result to the same variable.
*/
let b = 2;
b **= 3; // Equivalent to x = x ** 3; (x becomes 8)
console.log(b);



/****************************************Comparison ****************************************/

// return a Boolean value (true or false) based on the comparison result.

/*
1-Equality Operators:

    1.Equal to (==): Checks if the values on both sides are equal, performing type coercion if necessary. For example, 1 == "1" is considered true because the values are equal after type coercion.
    2.Not equal to (!=): Checks if the values on both sides are not equal, performing type coercion if necessary.
*/

console.log(5 == "5"); //T

/*
2-Strict Equality Operators:

    1.Strict equal to (===): Checks if the values on both sides are equal without performing type coercion. The values must have the same type and value to be considered equal.
    1.Strict not equal to (!==): Checks if the values on both sides are not equal without performing type coercion.
*/

console.log(5 === "5"); //F

/*
3-Relational Operators:

    1.Greater than (>), less than (<): Compare the numerical or lexicographic (for strings) value of the operands.
    2.Greater than or equal to (>=), less than or equal to (<=): Compare the numerical or lexicographic (for strings) value of the operands, including equality.
*/

console.log(5 > 2);//t
console.log(10 <= 10); //t

/*
4-Logical Operators:

    1.Logical AND (&&): Returns true if both operands are true.
    2.Logical OR (||): Returns true if at least one operand is true.
    3.Logical NOT (!): Negates the truth value of an operand.
*/

console.log(true && false); //f
console.log(true || false);//t
console.log(!true); //f

/*In Strings -> ASCII Code */
console.log("apple" < "banana"); //a = 97 , b = 98 ->true
console.log("abc" > "def"); //a = 97 , d = 100 ->false
console.log("Hello" <= "world"); //H = 72 , w = 119 ->true
console.log("Open" >= "closed"); //o = 79 , c = 99 ->false


/****************************************Conditional ****************************************/

/*
1-If Statement:
    The if statement executes a block of code if a specified condition is true.
*/

let num = 10;
if (num > 0) {
    console.log("The number is positive.");
}

/*
2-If-Else Statement:
    The if-else statement executes a block of code if a condition is true, and a different block of code if the condition is false.
*/

const numb = -5;
if (numb > 0) {
    console.log("The number is positive.");
} else {
    console.log("The number is negative.");
}

/*
3-If-Else-If Statement:
    The if-else-if statement allows you to test multiple conditions and execute different blocks of code based on the first condition that evaluates to true.
*/

const numbe = 0;
if (numbe > 0) {
    console.log("The numbeber is positive.");
} else if (num < 0) {
    console.log("The number is negative.");
} else {
    console.log("The number is zero.");
}

/*
4-Switch Statement:
    The switch statement provides a way to execute different blocks of code based on multiple possible values of a variable or expression.  
*/

const day = "Sunday";
switch (day) {
    case "Sunday":
        console.log("It's the start of the week.");
        break;
    case "Friday":
        console.log("It's the end of the week.");
        break;
    default:
        console.log("It's a weekday.");
}


/****************************************Loop statements  ****************************************/

/*
1-While Loop:
    The while loop repeatedly executes a block of code as long as a specified condition is true.
*/
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}

/*
2-Do-While Loop:
    The do-while loop is similar to the while loop, but it guarantees that the code block is executed at least once before checking the condition.
*/
let j = 0;
do {
    console.log(j);
    j++;
} while (j < 5);

/*
3-For Loop:
    The for loop allows you to specify the initialization, condition, and increment/decrement in a single line.
*/
for (let i = 0; i < 5; i++) {
    console.log(i);
}

/*
4-For-In Loop:
    The for-in loop iterates over the enumerable properties of an object.
    The for-in loop is used to iterate over the enumerable properties of an object.
    It iterates over the keys or property names of an object.
    It can be used with any object, including arrays, objects, and custom objects.
    It is not recommended for iterating over arrays because it may not iterate in a specific order, and it can include inherited properties.
*/
const person = {
    name: "John",
    age: 30, city:
        "New York"
};

for (let key in person) {
    console.log(key + ": " + person[key]);
}

/*
5-For-Of Loop:
    The for-of loop iterates over iterable objects (arrays, strings, etc.) and retrieves the values.
    The for-of loop is used to iterate over iterable objects such as arrays, strings, sets, maps, etc.
    It iterates over the values of the iterable object.
    It provides a simpler syntax and is generally preferred for iterating over arrays and other iterable objects.
    It does not give access to the keys or indices of the object being iterated.
*/
const fruits = ["apple", "banana", "cherry"];
for (let fruit of fruits) {
    console.log(fruit);
}

console.log('Dog' && 'Cat') //Cat       it return the seconed one always
console.log('Cat' && 'Dog') //Dog
