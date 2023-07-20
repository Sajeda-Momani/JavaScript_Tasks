// 1- first vidio from nouvil : كيفية اضافة أكواد جافاسكريبت؟ //
document.querySelector("h1").style.color="red";
document.querySelector("h2").style.backgroundColor ="red";
/////////////////////////////////////////////////////////////////

// 2- scond vidio from nouvil : كتابة اول كود جافاسكريبت

//  a) to write on HTML Page we use : document.write("")
document.write("a) to write on HTML Page we use : document.write()");
//  b) to write on console  we use : console.log("")
console.log (" b) to write on console  we use : console.log ()" );
//  c) to write on browser   we use : window.alert("")
window.alert("c) to write on browser   we use : window.alert ()");
/////////////////////////////////////////////////////////////////

// 3- thired vidio from nouvil : ما هو الفرق بين ال document – console – window

// document options:

    // a)using querySelector
    document.querySelector("h3").style.fontSize="50px";
    // b)using write with <h> tag
    document.write("<h2>DOM</h2>");
    // c)using write with <table> tag
    document.write("<table> <thead> <tr> <th>Header 1</th> <th>Header 2</th> <th>Header 3</th> </tr> </thead> <tbody> <tr> <td>Data 1</td> <td>Data 2</td> <td>Data 3</td> </tr> <tr> <td>Data 4</td> <td>Data 5</td> <td>Data 6</td> </tr> </tbody> </table>");

// console options:
    // a) log 
    console.log("test log option");
    // b) erorr
    console.error("test erorr option");

// window options:

    // alert option
    window.alert("alert option");
    // print option
    window.print("print option");

// 4- forth vidio from nouvil :  معرفة الخطأ في اي كود

//   A) console معرفة الخطأ في اي كود بكون  خلال ال 
//   B) semicolon (;) فكرت ال 

// 5- Fith vidio from nouvil :   انواع البيانات

    // string
    document.write( typeof "string")
    // number
    document.write( typeof 10)
    // boolean
    document.write( typeof true)
    document.write( typeof false)
    // null	
    document.write( typeof null)
    // undefined
    document.write( typeof x)
    // object 
    const person = {
        firstName: "John",
        lastName: "Doe",
        age: 30,
        occupation: "Software Engineer",
        isMarried: false,
        address: {
          city: "New York",
          country: "USA"
        },
        hobbies: ["reading", "gaming", "coding"]
      };
      document.write(typeof person);
      console.log(person);

// 6- sixth vidio from nouvil :   انواع  المتغيرات

    // var

        //  var "way one" 
        var name1;
        name1= "sajeda";
        console.log(name1);
        //  var "way two" 
        var name2 = "momani";
        console.log(name2);

    // let
        //  let "way one" 
        let name3;
        name3= "sajeda";
        console.log(name3);
        //  let "way two" 
        let name4 = "momani";
        console.log(name4);

    // const

    // only one way
    const name5="sajeda";
    console.log(name5);

// 7- saventh vidio from nouvil :    conactenation (الدمج)

// way one with string
    console.log("my name is "+name1+" "+name2);
// way two with string
    console.log(`my first name is ${name1} and may sacand name is ${name2}`)
// way with numbers
    console.log(10+15)


