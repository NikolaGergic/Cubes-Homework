
var key = '4c609ad1c6b3d0589b119fb946ec5ad5';
var id = 'eea0941f';
var submitBtn = document.querySelector('.search-button');
var firstInput = document.querySelector('.keyword-input');
var recipes = document.querySelector('#recipes');
var min = document.querySelector('.min');
var max = document.querySelector('.max');
var pag = document.querySelector('.pagination');
var pageList = document.querySelectorAll('.pagination span');
var diet = document.querySelector('#diet');
var health = document.querySelector('#health');
var results = document.querySelector('.recipe-count-number');
var mainRecipes = document.querySelector('#recipes')

var loader = document.createElement('div');
var loaderImg = document.createElement('img')

var start = 0;
var end = start + 10;
var requestURL;
var calValue;

loaderImg.setAttribute("src", "img/loader.gif");
loader.classList.add('loader')
loader.appendChild(loaderImg);

pag.style.display = "none";

function onSubmit() {
	
	firstInput.value.trim() && getRecipe(firstInput);
	mainRecipes.appendChild(loader);
	if(firstInput.value === ""){
		alert("Please enter recipe");
		loader.style.display = "none";
	}
}

function getRecipe(searchValue) {
	var newRequest = new XMLHttpRequest();

	var requestURL = 'https://api.edamam.com/search?q=' + firstInput.value + '&app_id=' + id + '&app_key=' + key + "&from=" + start + '&to=' + end;
	
	if (diet.value) {
		requestURL = requestURL + '&diet=' + diet.value;
	}

	if (health.value) {
		requestURL = requestURL + '&health=' + health.value;
	}

	if (min.value) {
		if (max.value) {
			calValue = min.value + '-' + max.value;
		} else {
			calValue = min + '+';
		}
	} else if (max.value) {
		calValue = max + '+';
	}

	if (calValue) {
		requestURL = requestURL + '&calories=' + calValue;
	}


	newRequest.open('GET', requestURL);

	newRequest.onload = function() {
		listRecipe(JSON.parse(newRequest.responseText));		
	}
	newRequest.send();
}

function listRecipe(recipesData) {

	recipes.innerHTML = "";
	pag.style.display = "block";
	
	results.innerHTML = recipesData.count;
	
	var skupRecepata = recipesData.hits;
	
	if(recipesData.count === 0){
		alert("No result");
		pag.style.display = "none";
	}

	skupRecepata.forEach(function(recipesData) {
		
		var list = addRecipe(recipesData);
		return list;
	})	  
}

function addRecipe(recipe) {
	var card = document.createElement('div');

	card.classList.add('recipe-element');
	
	var lab = document.createElement('label');
	lab.classList.add('labels');

	var name = '<h3>' + recipe.recipe.label + '</h3>';
	var img = '<img src="' + recipe.recipe.image + '" />';
	var cal = '<div class="calories">' + recipe.recipe.calories.toFixed(0) + '</div>';
	
	for(var i = 0; i < recipe.recipe.healthLabels.length; i++){
		var label = recipe.recipe.healthLabels;
	
		lab.innerHTML += '<label class="label">' + label[i] + '</label>';
}
	card.classList.add('recipe-element');
	card.innerHTML = img + name + cal;
	
	card.appendChild(lab)

	recipes.appendChild(card);
	return card;
}

submitBtn.addEventListener('click', onSubmit);

function paginationItem(){
			for (var i = 0; i < pageList.length; i++){
				pageList[i].addEventListener('click', function(e){
				var pageNum = parseInt(e.srcElement.innerText);
				getNewReq(pageNum);
				}, getNewReq)
	}
}

paginationItem();

function getNewReq(e){ 
	var calValue;
	
	if(e === 1){
		start = 10;
		end = start + 10;
	}
	if(e === 2){
		start = 20;
		end = start + 10;
	}
	if(e === 3){
		start = 30;
		end = start + 10;
	}
	if(e === 4){
		start = 40;
		end = start + 10;
	}
	if(e === 5){
		start = 50;
		end = start + 10;
	}

	var requestURL = 'https://api.edamam.com/search?q=' + firstInput.value + '&app_id=' + id + '&app_key=' + key + "&from=" + start + '&to=' + end;
	var newRequest = new XMLHttpRequest();
	

	if(firstInput.value === ""){
		alert("Please enter recipe");
		loader.style.display = "none";
		pag.style.display = "none"
	}

	if (diet.value) {
		requestURL = requestURL + '&diet=' + diet.value;
	}

	if (health.value) {
		requestURL = requestURL + '&health=' + health.value;
	}

	if (min.value) {
		if (max.value) {
			calValue = min.value + '-' + max.value;
		} else {
			calValue = min + '+';
		}
	} else if (max.value) {
		calValue = max + '+';
	}

	if (calValue) {
		requestURL = requestURL + '&calories=' + calValue;
	}

	newRequest.open('GET', requestURL);
	
	
	newRequest.onload = function() {
		listRecipe(JSON.parse(newRequest.responseText));
	}
	newRequest.send();
}

firstInput.addEventListener('click', function(){
	firstInput.value = '';
	max.value = '';
	min.value = '';
	health.value = "";
	diet.value = "";
	pag.style.display = "none";
})
