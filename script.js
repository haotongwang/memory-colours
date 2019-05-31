/* eslint-env node, browser */
/* eslint-disable no-unused-vars*/
/* eslint-disable no-undef */

// debugger
const divs = document.getElementsByClassName('colourcard');
let cards = [];
let colours = rand.colours(divs.length, ['red','blue']);

for (let i = 0; i < divs.length; i++) {
	cards[i] = new Card(i, divs[i], colours[i]);
}
