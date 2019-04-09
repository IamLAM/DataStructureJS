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