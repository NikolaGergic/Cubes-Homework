var moviesArr = [{
	img: "fight-club.jpg",
	name: "Fight club"
},
{
	img: "forrest-gump.jpg",
	name: "Forrest Gump"
},
{
	img: "goodfellas.jpg",
	name: "Goodfellas"
},
{
	img: "inception.jpg",
	name: "Inception"
},
{
	img: "one-flew-over-the-cockoos-nest.jpg",
	name: "One flew over the cockoo's nest"
},
{
	img: "pulp-fiction.jpg",
	name: "Pulp fiction"
},
{
	img: "schindlers-list.jpg",
	name: "Schindler's list"
},
{
	img: "the-dark-knight.jpg",
	name: "The dirk knight"
},
{
	img: "the-godfather.jpg",
	name: "The godfather"
},
{
	img: "the-god-the-bad-and-the-ugly.jpg",
	name: "The god, the bad and the ugly"
},{
	img: "the-shawshank-redemption.jpg",
	name: "The Shawshank redemption"
},
{
	img: "twelve-angry-men.jpg",
	name: "Twelve angry men"
}];

function addMovies() {
	moviesArr.forEach(function(art) {
		var movies = document.querySelector('.movies');
		movies.appendChild(createMovies(art));
	});
};

function createMovies(moviesData) {
	var art = document.createElement('div');
	art.classList.add('moviesData')

	var img = '<img src ="img/' + moviesData.img + '" alt= ""/>';
	var name = '<div>' + moviesData.name + '</div>';
	var remove = '<button><img src ="img/remove.png"></button>';
	art.innerHTML = remove + img + name;
	return art;
};

addMovies();

var searchBar = document.getElementById("input");
var btn = document.getElementById("button")
var home = document.getElementById("reload")
home.style.display = "none";

btn.addEventListener('click', function(e) {
    var term = searchBar.value.toLowerCase();
    var movies = document.getElementsByClassName('moviesData');
    var title  = document.querySelectorAll('div.moviesData > div');
    	
    	for(var i = 0; i < movies.length; i++) {
   			if(title[i].innerText.toLowerCase().includes(term)) {
   				movies[i].style.display = "block";
			} else {
				movies[i].style.display = "none";
			};
		};

	home.style.display = "block";
	searchBar.value = "";
});

function remBtn() {
	var remove = document.querySelectorAll('div.moviesData > button');
	var i = 0;
	for(var i = 0; i < remove.length; i++) {
		remove[i].addEventListener('click', function(e) {
			var mov = document.getElementsByClassName('moviesData');
			e.path[2].style.display = "none";
			home.style.display = "block";
		})
	};
};

remBtn();
