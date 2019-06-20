/* eslint-env node, browser */
/* eslint-disable no-unused-vars*/
/* eslint-disable no-undef */

// debugger
const divs = document.getElementsByClassName('colourcard');
const score = document.getElementById('score');
let cards = [];
let [colours, coloursFreq] = rand.colours(divs.length, ['red','blue','green']);
let chain = []; // list of current colourcard chain; contains indices of cards

for (let i = 0; i < divs.length; i++) {
	cards[i] = new Card(i, divs[i], colours[i]);

	// show
	setTimeout(function(){
		cards[i].flip();
	}, 500);
	// hide
	setTimeout(function(){
		cards[i].flip();
	}, 2500);

	// click event
	divs[i].addEventListener("click", function(){
		cards[i].flip();
		// debugger
		// checks card
		if /* first card in chain */ (chain == '') {
			chain.push(i);
		} else if /* correct card */ (checkCard(cards[i], chain, cards)) {
			chain.push(i);
		} else /* wrong card */{
			mistake(chain, cards);
			chain = [i];
		}

		// adds score if card chain completed
		if (chain.length == coloursFreq[cards[i].colour]) {
			score.innerHTML = Number(score.innerHTML) + chain.length;
			chain = [];
		}
	})
}
