//console.log('hello world');
//console.log('hello worldddd');
//prompt('what is yor name?');

// String,Number,Boolean,opject,Array

/* code
//String
let firstname = 'John';
const idcard = '1234';

console.log(firstname); 

//Number
let age = '20';
let height = '5.9';

//Boolean
let isMarried = false;
firstname = 'xxxx';
idcard = '5678';
console.log('my name is ',firstname, 'and I am ', age, 'years old.');
code */

/*
+ บวก
- ลบ
* หาร
/ หาร
% หารเอาเศษ(mod)

/* code
let number1 = '4';
let number2 = '8';

let result = number1 + number2;
console.log('new number is',result); //48
*/

/*
== เท่ากับ
!= ไม่เท่ากับ
> มากกว่า
< น้อยกว่า
>= มากกว่าหรือเท่ากับ
<= น้อยกว่าหรือเท่ากับ
*/

/* code
let number3 = 5;
let number4 = 3;

let condition1 = number3 == number4; // Boolean ค่าที่ได้จะเป็น true or false
console.log('result of condition is ',condition1); 
code */

/* code
//if - else condition
let number1 = '5';
let number2 = '5';
if (number1 != number2) {
        console.log('this is if');
} else if (number1 == number2) {
        console.log('this is else if');
} else {
        console.log('this is else');
}
code */

/*
>= 80 เป็นเกรด A
>= 70 เป็นเกรด B
>= 60 เป็นเกรด C
>= 50 เป็นเกรด D
*/
/* code
let score = prompt('Enter your score:');
console.log('your score is '+ score);
//if - else condition
if (score >= 80) {
    console.log('you are grade A');
} else if (score >= 70) {
    console.log('you are grade B');
} else if (score >= 60) {
    console.log('you are grade C');
} else if (score >= 50) {
    console.log('you are grade D');
} else {
    console.log('you are grade F');
}
code */

/*
&& และ 
|| หรือ
! not หรือ ไม่
*/

/* code
let number1 = 5;
let number2 = 8;
// true || false = true
let condition = number1 >= 3 || number2 >= 10;
console.log('result of condition ', condition);

let age = 30;
let gender = 'mele';
// true && true = true
if (age >= 20 && gender == 'male') {
    console.log('you are male adult');
}
code */

/* code
let number = 25;

if (!(number % 2 == 0)) {
    console.log('you are even number');
}
code */

/*
while loop
for
*/
/* code
let counter = 0;
console.log('while loop');

while (counter < 10) { // true
    console.log('while loop');
    counter = counter + 1;
    counter+=1
    counter++
}

for (let counter = 0; counter < 10; counter = counter + 1) {
    console.log('for loop');
}
code */

/*
Arrat
*/

/*
let age1 = 20;
let age2 = 30;
let age3 = 40;
let age4 = 50;
console.log(age1,age2,age3,age4);
*/

/* code
let ages = [30, 35, 40];
console.log('new age',ages[2]);
console.log ('ages list',ages);

// แทนที่ค่าใน array
ages = [45,50];
console.log('new age',ages);

// ต่อ array
ages.push(55);
console.log('new age',ages);
code */

/*
let ages = [30, 35, 40,45,50];

if (!ages.includes(40)) {
    console.log('you have to be 40');
}
code */

/*
let ages = [90, 60, 40,45,50];
console.log(ages);
ages.sort();
console.log(ages);

let name_list = ['John','Bob','Alice','Mary'];
name_list.push('Mike');
console.log(name_list.length);
console.log(name_list[0]);
console.log(name_list[1]);

for (index = 0; index <= name_list.length; index++) {
    console.log('Names list',name_list[index]);
}
code */

/* 
Object
*/

/* code
let student = [{
    name: 'John',
    age: 20,
    grade: 'A'
},{
    name: 'Bob',
    age: 30,
    grade: 'B'
}];

/*
student.push = ({
    name: 'QQ',
    age: 90,
    grade: 'Q'
})

// student.pop();

for(let index = 0; index < student.length; index++) {
    console.log('student number', (index + 1));
    console.log('name',student[index].name);
    console.log('age',student[index].age);
    console.log('grade',student[index].grade);
}

// console.log('name',student.name);
// console.log('age',student.age);
code */

/*
Object + Array
*/

/* code
let score1 = 50;
let score2 = 90;
let grades = ''

//ประกาศ function ชื่อ calculateGrade รับ parameter ชื่อ score
function calculateGrade(score) {
    if (score >= 80) {
        grades= 'A';
    } else if (score >= 70) {
        grades = 'B';
    } else if (score >= 60) {    
        grades = 'C';
    } else if (score >= 50) {
        grades = 'D';
    } else {
        grades = 'F';
    }
    return grades;
}
let student1 = calculateGrade(score1);
let student2 = calculateGrade(score2);
console.log('grade: ', student1,student2)
code */

/* code
//arrow function
let calculateGrade = (score) => {
    if (score >= 80) {
        grades= 'A';
    } else if (score >= 70) {
        grades = 'B';
    } else if (score >= 60) {    
        grades = 'C';
    } else if (score >= 50) {
        grades = 'D';
    } else {
        grades = 'F';
    }
    return grades;
}
let student1 = calculateGrade(score1);
let student2 = calculateGrade(score2);
console.log('grade: ', student1,student2)
code */

/*
array
*/
/* code
let scores = [10,20,30,40,50];
for (let index = 0; index < scores.length; index++) {
    console.log(scores[index]);
} code
scores[0] = scores[0] * 2;
scores[1] = scores[1] * 2;
scores[2] = scores[2] * 2;
scores[3] = scores[3] * 2;
scores[4] = scores[4] * 2;

scores = scores.map((s) => {
    return s * 2;
})

scores.forEach((s) => {
console.log('new scores: ', s);
}) code */
/* code
let scores = [10,20,30,40];
//let newScores = []

for (let index = 0; index < scores.length; index++) {
    console.log(scores[index]);

    if (scores[index] >= 30) {
        newScores.push(scores[index]);
    } 
    
}
    
let newScores = scores.filter((s) => {
    return s >= 20;
})

newScores.forEach((ns) =>{
    console.log('New Scores: ', ns);
})
code */

let students = [
    {
        name: 'John',
        score: 90,
        grade: 'A'
    },
    {
        name: 'Bob',
        score: 75, 
        grade: 'B'
    },
    {
        name: 'Alice',
        score: 60,
        grade: 'C'
    }
]
let student = students.find((s) => {
    if (s.name == 'Bob') {
        return true;
    }
})
let doublescore_student = students.map((s) => {
    s.score = s.score * 2
})

let highscore_student = students.filter((s) => {
    if(s.score >= 80) {
        return true;
    }
})
console.log('Student :',student);
console.log('highscore_student :',highscore_student);