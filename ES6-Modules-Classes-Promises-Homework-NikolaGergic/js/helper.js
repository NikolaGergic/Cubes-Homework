const key = '575e3748603f19a1a14d7dc74fcf0539';
const id = '2eb69697';
const submitBtn = document.querySelector('.search-button');
const firstInput = document.querySelector('.keyword-input');
const recipes = document.querySelector('#recipes');
const min = document.querySelector('.min');
const max = document.querySelector('.max');
const pag = document.querySelector('.pagination');
const pageList = document.querySelectorAll('.pagination span');
const diet = document.querySelector('#diet');
const health = document.querySelector('#health');
const results = document.querySelector('.recipe-count-number');
const mainRecipes = document.querySelector('#recipes')

const loader = document.createElement('div');
const loaderImg = document.createElement('img')

class Img {
	constructor(source) {
		this.content = `<img src='${source}'>`;
	}
}

class Name {
	constructor(title) {
		this.content = `<h3>${title}</h3>`;
	}
}

class Cal {
	constructor(calories) {
		this.content = `<div class="calories">${calories}</div>`
	}
}

class Label {
	constructor(topic) {
		this.content = `<div class="label">${topic}</div>`;
	}
}

class Recipe {
	constructor(elements){
		this.content = `<div class="recipe-element">${elements}</div>`;
	}
}

export{key, id, Img, Name, Cal, Label, Recipe, submitBtn, firstInput, recipes, min, max, pag, pageList, diet, health, results, mainRecipes, loader, loaderImg};