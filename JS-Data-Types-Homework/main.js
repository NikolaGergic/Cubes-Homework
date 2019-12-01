// TASK 1 
var a,
	b,
	c,
	d,
	f;

a = 15;
b = -2;
c = 22;
d = 0;
f = 13;

if (a>b && a>c && a>d && a>f)
{
    console.log(a);
}
else if (b>a && b>c && b>d && b>f)
{
    console.log(b);
}
else if (c>a && c>b && c>d && c>f)
{
    console.log(c);
}
else if (d>a && d>c && d>b && d>f)
{
    console.log(d);
}
else
{
    console.log(f);
};

// TASK 2

var x = 3;
var y = -7;
var z = 2;

if (x > 0 && y > 0 && z > 0)
{
       alert("The sign is +");
}
else if (x < 0 && y < 0 && z < 0)
        {
          console.log("The sign is +");
        }
        else if (x > 0 && y < 0 && z < 0)
        {
          console.log("The sign is +");
        }
        else if (x < 0 && y > 0 && z < 0)
        {
          console.log("The sign is +");
        }
        else
        {
          console.log("The sign is -");
        };
		
//TASK 3
var expr = 'Serbian';
switch (expr) {
  case 'German':
    console.log('Hallo Welt');
    break;
  case 'French':
     console.log('Bonjour le monde');
    break;
  case 'Serbian':
    console.log('Zdravo svete');
    break;
    case 'English':
    console.log('Hello world');
    break;
   case 'Italian':
    console.log('Ciao mondo');
    break;
  default:
    console.log('Sorry, we are not speaking ' + expr + '.');
}

//TASK 4

 var userAge, 
	 old;

 userAge = 28;
 old = (userAge >= 28) ? true : false;

console.log(old);

if (old == false) {
	console.log("User is less than 28 years old.");
} else {
	if (userAge > 28) {
		console.log("User is older than 28.");
	} else if (userAge == 28) {
		console.log("User is 28.");
	}
}