//In this course you will learn data structures

let wordsArray = ["a", "b", "c", "d"];
wordsArray[2] = "hi";
console.log(wordsArray);
//insert values
wordsArray.unshift('I', 2, 'three'); //begin
wordsArray.push(7, 'VIII', 9); //end

//delete values

wordsArray.shift();
wordsArray.pop();
console.log(wordsArray);

//selecting value

wordsArray.splice(0, 2);
console.log(wordsArray);

//select and remove value.. and add value
wordsArray.splice(0, 2, "Batman", "Black Widow");
console.log(wordsArray);

//extract a range value

console.log(wordsArray.slice(2, 3));

// copy a complete array

let wordsArray2 = [...wordsArray];
console.log("WordsArray " + wordsArray);
console.log("WordsArray2 " + wordsArray2);

//combine arrays and using spread operator

let wordsArray3 = ["mom", "dad", "siblings", ...wordsArray];

//working with indexof

if (wordsArray3.indexOf("batman") != -1)
    console.log("batman exists");
else
    console.log("batman doesnt exits");


//working with complex arrays

let wordsArray4 = [

    [1, 2, 3],
    ['a', 'b', 'c', [10, 11, 2]]

];

console.log(wordsArray4);


//working with objects and attributes

let person = {
    name: "batman",
    age: 36,
    language: "english",
    friends: {
        number: 5,
        women: 2,
        man: 3

    }

}

person.car = "batimovil"; //add another attribute
person.friends.number = 6;
person.friends.women = 3;

console.log(person);

delete person.friends.women;
delete person.friends.man;
console.log(person);

//Checking values in objects with in and hasOwnProperty

console.log("language" in person);
console.log(person.hasOwnProperty("name"));


//using for in

let users = {
    Alan: {
        age: 27,
        online: false
    },
    Jeff: {
        age: 32,
        online: true
    },
    Sarah: {
        age: 48,
        online: false
    },
    Ryan: {
        age: 19,
        online: true
    }
};


function countOnline(obj) {

    let i = 0;


    for (let u in obj) {
        if (obj[u]["online"] == true)
            i++;

    }
    return i;

}

console.log(countOnline(users));

//Generate array using Object key

console.log(Object.keys(users));