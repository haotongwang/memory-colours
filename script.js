/* eslint-env node, browser */
/* eslint-disable no-unused-vars*/
/* eslint-disable no-undef */

// debugger
const divs = document.getElementsByClassName('colourcard');
let cards = [];
let colours = rand.colours(divs.length, ['red','blue','green']);

for (let i = 0; i < divs.length; i++) {
	cards[i] = new Card(i, divs[i], colours[i]);

	// show
	setTimeout(function(){
		cards[i].flip();
	}, 1000);
	// hide
	setTimeout(function(){
		cards[i].flip();
	}, 2500);

	// click event
	divs[i].addEventListener("click", function(){
		cards[i].flip();
	})
}
