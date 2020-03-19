import * as consts from './helper.js';

const {key, id, Img, Name, Cal, Label, Recipe, submitBtn, firstInput, recipes, min, max, pag, pageList, diet, health, results, mainRecipes, loader, loaderImg} = consts;

let start = 0;
let end = start + 10;

loaderImg.setAttribute("src", "img/loader.gif");
loader.classList.add('loader')
loader.appendChild(loaderImg);

pag.style.display = "none";

let calValue;
let requestURL;

const onSubmit = () => {
	
	firstInput.value.trim() && getRecipe(firstInput);
	mainRecipes.appendChild(loader);
	
	if(firstInput.value === ""){
		alert("Please enter recipe");
		loader.style.display = "none";
	}
}

const getRecipe = searchValue => {

	let requestURL = `https://api.edamam.com/search?q=${firstInput.value}&app_id=${id}&app_key=${key}&from=${start}&to=${end}`;
	
	if (diet.value) {
		requestURL = `${requestURL}&diet=${diet.value}`;
	}

	if (health.value) {
		requestURL = `${requestURL}&health=${health.value}`;
	}

	if (min.value) {
		if (max.value) {
			calValue = `${min.value}-${max.value}`;
		} else {
			calValue = `${min} +`;
		}
	} else if (max.value) {
		calValue = `${max} +`;
	}

	if (calValue) {
		requestURL = `${requestURL}&calories=${calValue}`;
	}

	fetch(requestURL)
	.then(response => response.json())
	.then(data => listRecipe(data))
	.catch(error => alert("ERROR"))
}

const listRecipe = recipesData => {

	recipes.innerHTML = "";
	pag.style.display = "block";
	
	results.innerHTML = recipesData.count;
	
	const skupRecepata = recipesData.hits;

	if(recipesData.count === 0){
		alert("No result");
		pag.style.display = "none";
	}

	skupRecepata.forEach(function(recipesData) {
		
		const list = addRecipe(recipesData);
		return list;
	})	  
}

const addRecipe = recipe => {

	let {image, label, calories, health, healthLabels} = recipe.recipe;
	const card = document.createElement('div');

	card.classList.add('recipe-element');
	
	const lab = document.createElement('label');
	lab.classList.add('labels');

	let name = new Name(label);
	let img = new Img(image);
	let cal = new Cal(Math.round(recipe.recipe.calories/recipe.recipe.yield));
	
	for(let i = 0; i < recipe.recipe.healthLabels.length; i++){
		let label = recipe.recipe.healthLabels;
	
		lab.innerHTML += `<label class="label">${label[i]}</label>`;
}
	card.classList.add('recipe-element');
	card.innerHTML = img.content + name.content + cal.content;
	
	card.appendChild(lab)

	recipes.appendChild(card);
	return card;
}

submitBtn.addEventListener('click', onSubmit);

const paginationItem = () => {
			for (let i = 0; i < pageList.length; i++){
				pageList[i].addEventListener('click', e => {
				let pageNum = parseInt(e.srcElement.innerText);
				getNewReq(pageNum);
				})
	}
}

paginationItem();

const getNewReq = e => { 

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

	let requestURL = `https://api.edamam.com/search?q=${firstInput.value}&app_id=${id}&app_key=${key}&from=${start}&to=${end}`;

		if (diet.value) {
		requestURL = `${requestURL}&diet=${diet.value}`;
	}

	if (health.value) {
		requestURL = `${requestURL}&health=${health.value}`;
	}

	if (min.value) {
		if (max.value) {
			calValue = `${min.value}-${max.value}`;
		} else {
			calValue = `${min} +`;
		}
	} else if (max.value) {
		calValue = `${max} +`;
	}

	if (calValue) {
		requestURL = `${requestURL}&calories=${calValue}`;
	}
	fetch(requestURL)
	.then(response => response.json())
	.then(data => listRecipe(data))
	.catch(error => alert("ERROR"))
}

firstInput.addEventListener('click', () => {
	firstInput.value = '';
	max.value = '';
	min.value = '';
	health.value = "";
	diet.value = "";
	pag.style.display = "none";
})


