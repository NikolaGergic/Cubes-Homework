//TASK 1

var str = "Lorem ipsum dolor sit amet";

function lowCaser(txt) {

	var lower = txt.toLowerCase();
	console.log(lower);

};

lowCaser(str);

//TASK 2

var strOne = "Lorem ipsum dolor sit amet";

function someWord(word) {

	var sit = word.includes("sit");

	if(sit === true) {
		console.log("result is " + sit);
	} else {
		console.log("result is " + sit);
	};
};

someWord(strOne);

//TASK 3

var strTwo = "Lorem ipsum dolor sit amet";

function index(someStr) {

	var num = someStr.indexOf(someStr[someStr.length - 1], someStr.length - 1 );
	return num;

};

console.log(index(strTwo));

//TASK4

var strThree = "Lorem ipsum dolor sit amet";

function splString(spl) {

	var three = spl.split(" ", 3);
	return three;

};

console.log(splString(strThree));

//TASK 5

var actor = "Piter is an actor";

function piter(someActor) {

	var pit = "";
	var pitOne = someActor.substring(0, 8);
	var pitTwo = someActor.substring(9, someActor.length);

	pitOne = pitOne.replace("e", "o");
	pitTwo = pitTwo.replace("o", "e");
	pit = pit.concat(pitOne," ", pitTwo);

	return pit;
};

console.log(piter(actor));

//TASK 6

var someData = [34, 23, 14, 56, 23, 44, 65];

function arr(nums) {

	var rem = [];

	var remOne = nums.slice(0,3);
	var remTwo = nums.slice(4, nums.length);
	rem = rem.concat(remOne, remTwo);

	return rem;

};

console.log(arr(someData));

//TASK 7

var someDataOne = [34, 23, 14, 56, 23, 44, 65];

function revArr(arr) {

	arr.shift();
	var arrOneTwo = [];

	var arrOne = arr.slice(0, arr.length / 2);
	var arrTwo = arr.slice(arr.length / 2, arr.length);

	arrTwo = arrTwo.reverse();
	arrOneTwo = arrOneTwo.concat(arrOne,arrTwo);

	return arrOneTwo;
};

console.log(revArr(someDataOne));

//TASK8

var someDataTwo = [334, 233, 212, 199, 154, 122];

function reducer(something) {
	var newOne = [];

	for(var i = 0; i < something.length; i++) {
		if(i === 0) {
		newOne[newOne.length] = something[i];
		} else if(i > 0) {
		newOne[newOne.length] = something[i] - something[i -1];
		};
	};

	return newOne;		
};

console.log(reducer(someDataTwo));

//TASK9

var students = [
  {
     name: "Jim",
     avgGrade: 8.5556
  },
  {
     name: "Mike",
     avgGrade: 8.5492
  },
  {
     name: "Anna",
     avgGrade: 8.9322
  },
  {
     name: "Jack",
     avgGrade: 8.6111
  }
];

function grade(obj) {
	newGrade = [];

	for(var i = 0; i < obj.length; i++){
		if(obj[i].avgGrade > 8.5) ;{
			newGrade[newGrade.length] = obj[i];
		};
	};

	for(var j = 0; j < newGrade.length; j++) {
		newGrade[j].avgGrade = newGrade[j].avgGrade.toFixed(2);
	};

	return newGrade;
};

console.log(grade(students));
