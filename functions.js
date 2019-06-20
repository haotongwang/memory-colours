const rand = {
	colours: function(n, colourList) {
		// n: length of output list
		// colourList: list of colours to be used
        let clr = [];
		let clrFreq = {};
		for (let i = 0; i < n; i++) {
			colour = colourList[Math.round(Math.random()*(colourList.length - 1))]
			clr[i] = colour;
			clrFreq[colour] = clrFreq[colour] ? clrFreq[colour] + 1 : 1;
		}
		return [clr, clrFreq]
    }
}

function mistake(chain, cards) {
	// flash
	flash(0)
	flash(250)

	setTimeout(() => chain.forEach(c => cards[c].flip()), 500)

	function flash(time) {
		setTimeout(() => chain.forEach(c => cards[c].flip()), time)
		setTimeout(() => chain.forEach(c => cards[c].flip()), time + 100)
	}
}
