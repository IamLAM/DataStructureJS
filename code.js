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