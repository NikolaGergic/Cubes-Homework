//TASK 1 Part 1

var arr = [1, 2, 3];
var value = 1;
function loopThrough(){

	for(var i = 0; i < arr.length; i++) {	
		for(var j = 0; j < arr.length; j++) {	
			console.log("At position " + i + ", subposition " + j + ", value is " + value);
			value++;	
		};
	};
};

loopThrough();

//TASK 2 Part 1

var person = function(obj) {

	console.log(obj.name + " is " + obj.age + " years old.");
};

var niz = [{
	name : "Nikola",
	age : 29
},
{
	name : "John",
	age : 35
},
{
	name : "Steven",
	age : 30
}];

function loopArr() {

	for(var i = 0; i < niz.length; i++) {
		person(niz[i]);
	};
};

loopArr();

//TASK 1 Part 2

var someData = {
	name: "Peter",
	lastName: "Dinklage",
	status: "married"
};

function repackObj(object) {

	var newObj = {};
	newObj.name = object.name;
	newObj.lastName = object.lastName;
	newObj.status = object.status;
	console.log(newObj);

};

repackObj(someData);

//TASK 2 Part 2

var someData = [13, 45, 56, [32, 11], 27, [55, 92]];

var newData = [];

function repackData(arr) {
	for(var i = 0; i < someData.length; i++) {
			newData[newData.length] = someData[i];
		if(someData[i].length > 1) {
			newData[newData.length] = someData[i][0];
		}

		if(someData[i].length > 1) {
			newData[newData.length] = someData[i][1];
		};
	};

	for(var j = 0; j < newData.length; j++){
		if(newData[j].length > 1){
			delete newData[j];
		};
	};
	console.log(newData);
}

repackData();

//TASK 3 Part 2

var someData = [13, 45, 56, [32, 11], 27, [55, 92]];

function anotherFun(arrOne) {

	var sum = [];

	for(var i = 0; i < arrOne.length; i++){
		sum[sum.length] = arrOne[i][0];
		sum[sum.length] = arrOne[i][1];
		console.log(sum);
	};

	return sum;
}


function recArr(someArr) {
	var subArrOne = [];
	var subArr = anotherFun(subArrOne);

	for(var i = 0; i < someArr.length; i++){
		if(someArr[i].length > 1){
			subArrOne[subArrOne.length] = someArr[i];	
		};
	};

	console.log(subArrOne);
}

recArr(someData);

//TASK 4 Part 2

var someData = {
	name: "Peter",
	lastName: "Dinklage",
	status: "married"
};

function setName(setProp) {
	this.name = setProp.name;
	var set = setProp;
	return set;
}

function removeName(remProp) {
	 delete remProp.name;
	 var rem = remProp;
	 return rem;
}

function checkName(nameData) {

		if(this.name != nameData.name) {
			var addName = setName(nameData);
			console.log(addName)
		};

		if(this.name === nameData.name){
			var delName = removeName(someData);
			console.log(delName)
		};
};

checkName(someData);

//TASK 5 Part 2

var someDataOne = {

	name: "Peter",
	lastName: "Dinklage",
	status: "married",
	nameCheck: function(something) {
		if(this.name === something.name) {
			function del(someObj) {
				delete something.name;
				console.log(someDataOne);
			function add(obj) {
				someDataOne.name = obj;
				console.log(someDataOne);
			};
			add("Nikola");
			};
			del(something);
		};
	}		
};

someDataOne.nameCheck(someDataOne);

