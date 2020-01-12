//TASK 1

var reverseArr = [];

function arr(someArr) {
  for (var i = 0; i < someArr.length; i++) {
    reverseArr[i] = someArr[someArr.length - 1 - i];
  };
};

arr([55, 45, 35, 25]);

console.log(reverseArr);

//TASK 2

function anyType(someTypes) {
  console.log(typeof arguments[0], typeof arguments[1], typeof arguments[2], typeof arguments[3]);
};

anyType(12, "Ben", true, 21);

//TASK 3

var longestName = [];

function names (someNames) {
  for (var i = 0; i < someNames.length; i++) {
    if (longestName < someNames[i].length) {
      longestName = someNames[i].length;
    };
  };
}; 

names(["Laki", "Dragoljub", "Milutin", "Aksentije", "Maksimilijan", "Pantelija"]);

console.log(longestName);
  
//TASK 4

function nums(someNums) {
  var largest = [];
  for (var i = 0; i < someNums.length; i++) {
      if (someNums[i] > largest) {
          largest = someNums[i];
    };
  };

  var smallest = largest;

  for (var i = 0; i < someNums.length; i++) {
    if (someNums[i] < smallest) {
      smallest = someNums[i];
    };
  };

  var secondLargest = [];

  for (var i = 0; i < someNums.length; i++) {
    if (someNums[i] < largest && someNums[i] > secondLargest){
      secondLargest = someNums[i];
    };
  };

  var secondSmallestArr = [];

  for (var i = 0; i < someNums.length; i++) {
    if (someNums[i] > smallest && someNums[i] < secondLargest){
      secondSmallestArr[i - 1] = someNums[i];
    };
  };

  var secondSmallest = secondSmallestArr[0];
  for (var i = 0; i < secondSmallestArr.length; i++) {
      if (secondSmallestArr[i] <= secondSmallest) {
         secondSmallest = secondSmallestArr[i];
      };
  };
  console.log(secondSmallest,secondLargest);

};

nums([12, 13, 14, 15, 16, 17]);

//TASK 5

var firstFun = function(someNums) {
  secondFun(someNums);
};

var secondFun = function() {
  var biggerNums = [];
  for (i = 0; i < arguments[0][0].length; i++) {
    if (arguments[0][0][i] > arguments[0][1]) {
      biggerNums[i] = arguments[0][0][i];
    };
  }
    console.log(biggerNums);
  };
    
firstFun([[23, 45, 11, 32, 8, 7], 10]);