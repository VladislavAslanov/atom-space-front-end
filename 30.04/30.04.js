'use strict';

//Деструктуризация функции
let info = {
  person: "John",
  age: 45
};

let {person, age} = info;

function firstFunction(person, age) {
	let a = 2*2, 
			b = 4+4;

	console.log(a);
	console.log(b);
	
}


//Объект с примитивами
let primitives = {
	bool: true,
	null: null,
	undefined: undefined,
	num: 7,
	str: 'Hello World',
	symbol: Symbol()
};

firstFunction();



//Не уверен, что правильно использовал деструктуризацию,
//поэтому вот второй вариант: 

function firstFunction(let data = {title: 'about', font: 34}){
	let q = 2*2, 
			w = 4+4;

	console.log(q);
	console.log(w);
}
