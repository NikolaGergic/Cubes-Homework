//TASK 1

var person = {
  name: "Mike",
  age: 28,
  married: true
};

function print() {
  person.age = 34;
  delete person.married;
  console.log(person);
};

print();

//TASK2

var personOne = {
  name: "Jack",
  age: 32,
  married: true
}

function childrenData() {

  var children = [
    {name : "Nikola", age : 6, gender : "male"}, 
    {name : "Katarina", age : 4, gender: "female"}
  ];  

  for(var i = 0; i < Object.length; i++){

    if(Object.keys != this.children){
      personOne.children = children;  
    };

  }
  console.log(personOne);
}

childrenData();

//TASK 3
  
var students = [ 
   {
       name: 'Mike',
       age: 28,
       passed: false
   },
   {
       name: 'Anna',
       age: 23,
       passed: true
   },
   {
       name: 'Jack',
       age: 32,
       passed: true
   },
];

function exam() {
  for (var i = 0; i < students.length; i++){
    if (students[i].passed  == true ){
      console.log(students[i].name + " passed exam.");
    };
  };
};

exam();

//TASK 4

var students = [ 
   {
       name: 'Mike',
       age: 28,
       passed: false
   },
   {
       name: 'Anna',
       age: 23,
       passed: true
   },
   {
       name: 'Jack',
       age: 32,
       passed: true
   },
];

function repack() {
  var names = [];
  var ages = [];
  var passed = [];

  for (var i = 0; i < students.length; i++) {
    names[i] = students[i].name;
    ages[i] = students[i].age;
    passed[i] = students[i].passed;
  }; 

  console.log(names, ages, passed);
}

repack();


//TASK 5

var person = {
  name: "Jack",
  age: 32,
  married: true
}


var newPerson = Object.create(person);

console.log(newPerson);



//TASK 6

var personA = {
  name: "Mike",
  age: 28,
  married: true,
  nameAge: function() {
    console.log(this.name + " is " + this.age + " years old.");
  }
}


personA.nameAge();

//TASK 7

var personF = {
  objectConstructor: function(name, age, married) {

  }
}