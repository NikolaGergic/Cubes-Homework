// TASK 1 
var dataOld = [34, true, "Peter", 1992];
var dataNew = [];


var i = 0;
while (i < dataOld.length) {
  dataNew[i] = dataOld[i];
  i++;
}

console.log(dataNew);

// TASK 2

var dataOld = [34, true, "Peter", 1992];
var dataNew = [];

for (var i = dataOld.length - 1; i >= 0; i--) {
  dataNew[dataOld.length - 1 - i] = dataOld[i];
}

console.log(dataNew);


// TASK 3

var dataOld = [34, true, "Peter", 1992];
var dataNew = [12, "Jack"];


for (var i=0; i < dataOld.length; i++) {
    // dataNew.push(dataOld[i]);
    dataNew[i + 2] = dataOld[i];
}

console.log(dataNew);

// TASK 4

var a = [12, 56, 32, 44, 69];
var b = [88, 7, 13];

for (var i=0; i < b.length; i++) {
    // a.push(b[i]);
    a[i + 5] = b[i];
}


console.log(a);

//TASK 5

var a = [12, 56, 32, 44];
var b = [88, 7, 13];


result = [],
    i, l = Math.min(a.length, b.length);
    
for (i = 0; i < l; i++) {
    result.push(a[i], b[i]);
}
result.push(...a.slice(l), ...b.slice(l));

console.log(result);



//TASK 6

var ouput = "";
for (var i = 1; i <= 3; i++) {
     for (var j = 1; j <= i; j++) {
         console.log(ouput += "*")
     }
}

console.log(ouput);


//TASK 7

var result = "";
var rows = 6;
var cols = 10;

for (var i = 0; i < rows; i++) {
  for (var j = 0; j < cols; j++) {
    if (j > 0 && j < 9 && i > 0 && i < 5) {
      result += " ";
    } else {
      result += "*";
    }
  }

  result += "\n";
}

console.log(result);