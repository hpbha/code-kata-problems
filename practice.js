// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic 
  let num = userInput[0].split("").map((ele)=>{
      return parseInt(ele);
        }
      )
 let sum =0;
 num.forEach((number)=>{
     sum = sum + number;
 })
 console.log(sum)
  //end-here
});
