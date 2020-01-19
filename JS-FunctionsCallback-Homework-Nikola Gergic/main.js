//TASK 6

function firstFun(someArr) {
   secondFun(someArr);
   var lowest = someArr[0];
   for (var i = 0; i < someArr.length; i++){
    if (someArr[i] < lowest) {
      lowest = someArr[i]
    };
  };
   return lowest;
};
  
function secondFun(someArr) {
  var highest = 0;
  for (var i = 0; i < someArr.length; i++){
    if (someArr[i] > highest){
      highest = someArr[i]
    };
  };
  return highest;
};

function thirdFun(someArr) {
  var first = firstFun(someArr);
  var second = secondFun(someArr);
  console.log (first * second);
};

thirdFun([10, 11, 21, 3, 1]);

//TASK 7

function funOne(some) {
  var sameNum = []; 
  for (var i = 0; i < some.length; i++) {
    for(var j = i + 1; j < some.length; j++) {
      if (some[i] === some[j]) {
        sameNum[i] = some[i] 
      };
    };
  }
  return sameNum;
};

function arr(some) {
  var delBiggest = funOne(some);
  var biggest = [0];
  for(var i = 0; i < delBiggest.length; i++) {
    if(delBiggest[i] > biggest) {
    biggest = delBiggest[i];
    };
  };
  for(var i = 0; i < delBiggest.length; i++) {
    if(delBiggest[i] === biggest) {
      delete delBiggest[i];
    };
  };
  console.log(delBiggest);
}

arr([15, 35, 46, 23, 15, 17, 23, 24, 35, 12, 72, 64, 35, 22, 64]);