const rand = {
	colours: function(n, colourList) {
        let clr = [];
		for (let i = 0; i < n; i++) {
			clr[i] = colourList[Math.round(Math.random()*(colourList.length - 1))];
		}
		return clr
    }
}
