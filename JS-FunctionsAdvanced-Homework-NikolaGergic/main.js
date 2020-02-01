//TASK 1

function Student(name, lastName, age, averageGrade) {
	this.name = name;
	this.lastName = lastName;
	this.age = age;
	this.averageGrade = averageGrade;
};

var dejan = new Student("Dejan", "Nikolic", 23, 8.56);
var pavle = new Student("Pavle", "Markovic", 22, 8.87);
var mirko = new Student("Mirko","Mirkovic", 26, 7.66);
var petar = new Student("Petar", "Petrovic", 24, 9.33);

console.log(dejan, pavle, mirko, petar);

//TASK 2

function FootballPlayer(name, lastName, age, position, number, goalScored, yellowCards) {
	this.name = name;
	this.lastName = lastName;
	this.age = age;
	this.position = position;
	this.number = number;
	this.goalScored = goalScored;
	this.yellowCards = yellowCards;
};

var chiellini = new FootballPlayer("Giorgio", "Chiellini", 35, "defender", 3, 1, 1);
var deLigt = new FootballPlayer("Matthijs", "de Ligt", 20, "defender", 4, 1, 3);
var pjanic = new FootballPlayer("Miralem", "Pjanic", 29, "midfielder", 5, 3, 7);
var dybala = new FootballPlayer("Paulo", "Dybala", 26, "forward", 10, 9, 3);
var ronaldo = new FootballPlayer("Cristiano", "Ronaldo", 34, "forward", 7, 16, 0);

console.log(chiellini, deLigt, pjanic, dybala, ronaldo);

//TAKS3

function FootballPlayerData(member) {
	this.name = member[0];
	this.lastName = member[1];
	this.age = member[2];
	this.position = member[3];
	this.number = member[4];
	this.goalScored = member[5];
	this.yellowCards = member[6];
};

var players = [["Giorgio", "Chiellini", 35, "defender", 3, 1, 1],
["Matthijs", "deLigt", 20, "defender", 4, 1, 3],
["Miralem", "Pjanic", 29, "midfielder", 5, 3, 7],
["Paulo", "Dybala", 26, "forward", 10, 9, 3],
["Cristiano", "Ronaldo", 34, "forward", 7, 16, 0]];

for(var i = 0; i < players.length; i++) {
	this[players[i][1].toLowerCase()] = new FootballPlayerData(players[i]);
}

console.log(chiellini, deligt, pjanic, dybala, ronaldo);

//TASK 4

function ConFun(firstNum, secondNum, calculate) {
	this.firstNum = firstNum;
	this.secondNum = secondNum;
	this.calculate = calculate;
};

var multiply = new ConFun(5, 8, function calculate() {
	var result = this.firstNum * this.secondNum;
	return result;
});

var divide = new ConFun(78, 3, function calculate() {
	var result = this.firstNum / this.secondNum;
	return result;
});

var add = new ConFun(55, 95, function calculate() {
		var result = this.firstNum + this.secondNum;
		return result;
});

var subtract = new ConFun(12, 15, function calculate() {
	var result = this.firstNum - this.secondNum;
	return result;
});

console.log(multiply.calculate(), divide.calculate(), add.calculate(), subtract.calculate());


// Question 1

// 		function test() {
// 		   console.log(a);
// 		   console.log(foo());
		   
// 		   var a = 1;
// 		   function foo() {
// 		      return 2;
// 		   }
// 		}

// 		test();

// U ovom Question 1 rezultat ce biti undefined i 2. U trenutku kada se conosle log-uje a varijabla jeste deklarisana
// zbog principa koji se zove Hoisting kada se svako deklarisanje varijable pomera ka vrhu, ali
// joj nije dodeljena vrednost(u prvom prolasku se deklarisu varijable, a u drugom im se dodeljuje vrednost) i zato je rezultat undefined, zatim se conosle loguje broj 2 koji je return funkcije foo
// po prirodnom toku izvrsavanja komandi u JavaScript-u kada se kod cita linija po liniju.


// Question 2 
// 		var a = 1; 

// 		function someFunction(number) {
// 		  function otherFunction(input) {
// 		    return a;
// 		  }
		  
// 		  a = 5;
		  
// 		  return otherFunction;
// 		}

// 		var firstResult = someFunction(9);
// 		console.log(someFunction(9));
// 		var result = firstResult(2);

// 		console.log(result);

// U Question 2, ovde nije bitno sta se koristi kao argument funkcije jer ceo on uvek da returnuje a varijablu.
// Varijabla je definisana globalno sa vrednoscu 1, a zatim se njena vrednost lokalno menja u telu funkcije i postaje 5.
// funkcija otherFunction() ima pristup toj promeni tako da ce rezultat uvek biti 5.	

// Question 3
// 		var fullname = 'John Doe';
// 		var obj = {
// 		   fullname: 'Colin Ihrig',
// 		   prop: {
// 		      fullname: 'Aurelio De Rosa',
// 		      getFullname: function() {
// 		         return this.fullname;
// 		      }
// 		   }
// 		};

// 		console.log(obj.prop.getFullname());

// 		var test = obj.prop.getFullname;

// 		console.log(test());

		

// U ovom slucaju koristi se keyword this, koji u funkciji oznacava onaj objekat koji zove tu funkciju. 
// Ovde ce se prvo conole log-ovati "Aurelio de Rosa", jer to taj objekat. Zatim se se obj objektu setuje property getFullName,
// i onda se console log-uje "John Doe", jer je to vrednost "fullname" varijable koja je definisana globalno 
// kao property koji pripada globalnom window objektu.

// Question 4


// 		var a = 1; 
// 		function b() { 
// 		    a = 10; 
// 		    return; 
// 		    function a() {} 
// 		} 
// 		b(); 
// 		console.log(a);

// U ovom slucaju console log-ovace se vednost varijable 1, koja je deklarisana i dodeljena joj je vrednost
// globalno. Kada bi console log-ovali funkciju b, vrednost bi bila undefined, jer ona ne returnuje nikakvu vrednost.
// Ali ako bi returnovali vrednost a varijable onda bi rezultat bio 10, jer je njoj lokalno unutar funkcije b promenjena 
// vrednost (local scope).
