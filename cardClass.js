class Card {
	constructor (id, colourcard, colour) {
		this.id = id;
		this.ctx = colourcard;
		this.flipColour = 'white';
		this.colour = colour;
		this.isFlip = 0;
	}

	flip () {
		if (this.isFlip){
			this.ctx.style.backgroundColor = this.flipColour;
			this.isFlip = 0;
		}
		else {
			this.ctx.style.backgroundColor = this.colour;
			this.isFlip = 1;
		}
	}
}
