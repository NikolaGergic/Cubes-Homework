
var players = [
{
	img: "babic.jpg",
	name: "Srdjan",
	lastName: "Babic",
	number: 15,
	position: "Defender",
	age: 24
},
{
	img: "borjan.jpg",
	name: "Milan",
	lastName: "Borjan",
	number: 82,
	position: "Goalkeeper",
	age: 31
},
{
	img: "gajic.png",
	name: "Milan",
	lastName: "Gajic",
	number: 2,
	position: "Defender",
	age: 21
},
{
	img: "gobeljic.jpg",
	name: "Marko",
	lastName: "Gobeljic",
	number: 31,
	position: "Defender",
	age: 21
},
{
	img: "hajdin.png",
	name: "Stefan",
	lastName: "Hajdin",
	number: 34,
	position: "Defender",
	age: 24
},
{
	img: "jevtovic.png",
	name: "Milan",
	lastName: "Jevtovic",
	number: 15,
	position: "Midfilder",
	age: 27
},
{
	img: "jovancic.png",
	name: "Dusan",
	lastName: "Jovancic",
	number: 29,
	position: "Midfilder",
	age: 28
},
{
	img: "joveljic.jpg",
	name: "Dejan",
	lastName: "Joveljic",
	number: 19,
	position: "Striker",
	age: 20
},
{
	img: "jovicic.jpg",
	name: "Branko",
	lastName: "Jovicic",
	number: 3,
	position: "Midfilder",
	age: 27
},
{
	img: "marin.png",
	name: "Marko",
	lastName: "Marin",
	number: 10,
	position: "Midfilder",
	age: 31
},
{
	img: "milunovic.png",
	name: "Nemanja",
	lastName: "Milunovic",
	number: 34,
	position: "Defender",
	age: 32
},
{
	img: "pavkov.png",
	name: "Milan",
	lastName: "Pavkov",
	number: 9,
	position: "Striker",
	age: 29
},
{
	img: "rodic.jpg",
	name: "Milan",
	lastName: "Rodic",
	number: 23,
	position: "Defender",
	age: 29
},
{
	img: "savic.jpg",
	name: "Vujadin",
	lastName: "Savic",
	number: 91,
	position: "Defender",
	age: 29
},
{
	img: "stojkovic.jpg",
	name: "Filip",
	lastName: "Stojkovic",
	number: 30,
	position: "Defender",
	age: 28
}
];

function getRandomNumber(arr) {
	return Math.floor(Math.random() * arr.length);
}


function addPlayers() {
	while(players.length) {
		console.log(players);
		var firstSqaud = document.querySelector('.first-squad');
		var substitutions = document.querySelector('.substitutions');
		var randomNum = getRandomNumber(players);
		var container = players.length > 4 ? firstSqaud : substitutions;

	

		container.appendChild(createPlayer(players[randomNum]));

		players.splice(randomNum, 1);

	};
};


function createPlayer(playerData) {
	var player = document.createElement('div');
	player.classList.add('player');
	
	var img = '<img src="img/' + playerData.img + '" alt ="" />';
	var name = '<div>' + playerData.name + " " + playerData.lastName + '</div>';
	var num = '<div>Number: ' + playerData.number  + '</div>';
	var position = '<div>Position: ' + playerData.position  + '</div>';
	var age = '<div>Age: ' + playerData.age  + '</div>';

	player.innerHTML = img + name + num + position + age;

	return player;
};

function makeSubstitution() {
	var firstSquad = document.querySelectorAll('.first-squad .player');
	var substitutions = document.querySelectorAll('.substitutions .player');

	var firstSqaudNumber = getRandomNumber(firstSquad);
	var substitutionsNumber = getRandomNumber(substitutions);

	var firstSquadPlayer = firstSquad[firstSqaudNumber];
	var substitutionPlayer = substitutions[substitutionsNumber];

	var subPrevious = substitutionPlayer.previousSibling;
	var subNext = substitutionPlayer.nextSibling;

	firstSquadPlayer.after(substitutionPlayer);

	subPrevious ? subPrevious.after(firstSquadPlayer) : subNext.before(firstSquadPlayer);

	console.log(firstSquadPlayer, substitutionPlayer);

	// .append(firstSquad[firstSqaudNumber]);


}

// Initialize functions

addPlayers();

setInterval(makeSubstitution, 5000);