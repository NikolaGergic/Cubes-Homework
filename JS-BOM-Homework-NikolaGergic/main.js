// TASK 1

// function browserAlert() {

// 	if(navigator.onLine === true) {
// 		alert("Browser is online.");
// 	} else if(navigator.onLine === false) {
// 		alert("Browser is offline.");
// 	};

// };

// browserAlert();

// TASK 2

// function pageReload() {
// 	location.reload();
// };

// pageReload();

// TASK 3

// function redirect() {
// 	location.href = "http://www.google.com";
// };

//  function goBack() {
//  	history.back();
//  };

// setTimeout(redirect, 3000);
// setTimeout(goBack, 3000);

// TASK 4

// var i = 0;

// function increment() {
// 	i++;
// 	console.log(i);
// 	if(i === 15) {
// 		clearInterval(int);
// 	};
// };

// setInterval(increment, 1000);

// TASK 5

// function randomTen(){
// 	 var i = Math.round(Math.random() * 10);
// 	 return "Number is " + i;
// }

// console.log(randomTen());

// TASK 6

var arrObj = [{
	name: "Maxim",
	age: 33,
	status: "inactive"
},
{
	name: "Teodor",
	age: 32,
	status: "inactive"
},
{
	name: "Adrian",
	age: 31,
	status: "inactive"
},
{
	name: "David",
	age: 30,
	status: "inactive"
},
{
	name: "Robert",
	age: 34,
	status: "inactive"
}];

var name = prompt("Enter your name");

function check(arr) {
	return arr.name !== name;
};

function print(obj) {
	var dataName = arrObj.every(check);
	if(dataName === true) {
		console.log("User with name " + name + " doesn't exist.");
	};

	for(var i = 0; i < obj.length; i++) {

		if(name === obj[i].name) {
			var newUser = obj[i];
			newUser.status = "active";
			localStorage.setItem("loggedInUser", "active");
		};	
	};
};

print(arrObj);

function clearData() {
	localStorage.removeItem("loggedInUser");
	console.log("User is logged out");
};

setTimeout(clearData, 60000);