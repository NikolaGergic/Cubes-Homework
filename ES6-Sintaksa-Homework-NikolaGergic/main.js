
const players = [
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

const getRandomNumber = arr => {
	return Math.floor(Math.random() * arr.length);
};



const addPlayers = () => {
	while(players.length) {
		console.log(players);
		let firstSqaud = document.querySelector('.first-squad');
		let substitutions = document.querySelector('.substitutions');
		let randomNum = getRandomNumber(players);
		let container = players.length > 4 ? firstSqaud : substitutions;

	

		container.appendChild(createPlayer(players[randomNum]));

		players.splice(randomNum, 1);

	};
};


const createPlayer = playerData => {
	let player = document.createElement('div');
	player.classList.add('player');
	
	let img = '<img src="img/' + playerData.img + '" alt ="" />';
	let name = '<div>' + playerData.name + " " + playerData.lastName + '</div>';
	let num = '<div>Number: ' + playerData.number  + '</div>';
	let position = '<div>Position: ' + playerData.position  + '</div>';
	let age = '<div>Age: ' + playerData.age  + '</div>';

	player.innerHTML = img + name + num + position + age;

	return player;
};

const makeSubstitution = () => {
	let firstSquad = document.querySelectorAll('.first-squad .player');
	let substitutions = document.querySelectorAll('.substitutions .player');

	let firstSqaudNumber = getRandomNumber(firstSquad);
	let substitutionsNumber = getRandomNumber(substitutions);

	let firstSquadPlayer = firstSquad[firstSqaudNumber];
	let substitutionPlayer = substitutions[substitutionsNumber];

	let subPrevious = substitutionPlayer.previousSibling;
	let subNext = substitutionPlayer.nextSibling;

	firstSquadPlayer.after(substitutionPlayer);

	subPrevious ? subPrevious.after(firstSquadPlayer) : subNext.before(firstSquadPlayer);

	console.log(firstSquadPlayer, substitutionPlayer);

	// .append(firstSquad[firstSqaudNumber]);


}

// Initialize functions

addPlayers();

setInterval(makeSubstitution, 5000);