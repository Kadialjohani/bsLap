
//first statement 
let num = 8;

if (num % 2 == 0) {
    console.log("The Number is even");
} else {
    console.log("the Num is odd");
}
// second statement
let grade = 72;

if (grade >= 90) {
    console.log("you have passed with an A");
} else if (grade >= 80) {
    console.log("you have passed with an B");
} else if (grade >= 70) {
    console.log("you have passed with an C");
} else if (grade >= 60) {
    console.log("you have passed with an D");
} else {
        console.log("sorry, you got a F");
}


// challenge
let num2 = 9;

if (num2 % 3 == 0 && num2 % 5 == 0){
    console.log("fizzBuzz");
} else if (num2 % 3 == 0){
    console.log("fizz");
} else if (num2 % 5 == 0){
    console.log("buzz");
}

// loop lap
// q1
console.log("q1");
for (let i = 1; i <= 10; i++) {
    console.log(i * i);
}
// q2
console.log("q2");
for (let i = 1; i <= 20; i++) {
    if (i %  2 == 0) {
        continue
    }
    console.log(i);
}
// q3
console.log("q3");
for (let i = 1; i <= 25; i++) {
    if (i %  2 !== 0) {
        continue
    }
    console.log(i);
}
// q4
console.log("q4");
let final ="";
for (let i = 1; i <= 9; i++) {
    for (let j = 1; j <= i; j++) {
        final += j;
        
    }
    final += "\n"
}
console.log(final);

// bonus
console.log("bonus");

let n1 = 0;
let n2 = 1;

let sum = "";
let final2 = "";
for (let i=0; i<20; i++) {
    final2 += n1 + ", "
    // console.log(n1);
    sum = n1 + n2
    n1 = n2;
    n2 = sum;
    
    
}
console.log(final2);
