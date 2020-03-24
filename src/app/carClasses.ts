export enum DiceType {
	gear  = 'gear',
	coast = 'coast',
	brake = 'brake',
	boost = 'boost'
}


export interface Dice {
	id: string,
	type: DiceType,
	label: string,
	selected: boolean
}


class DiceBuilder {
	dice:Dice[] = [];

	constructor(count:number, name:DiceType, label?:string) {
		for (var i = 0; i < count; ++i) {
			let n = i + 1;
			this.dice.push({id: name  + n.toString(), type: name, label: label ? label : n.toString(),  selected: false});
		}
	}

	get() {
		return this.dice;
	}
}


export const GT6 = {
	asphalt: {
		dry: {
			gears: 	new DiceBuilder(6, DiceType.gear),
			coasts: new DiceBuilder(2, DiceType.coast, 'c'),
			brakes: new DiceBuilder(3, DiceType.brake, 'b'),
			boost: 	new DiceBuilder(0, DiceType.boost, 'a')
		},
		rain: {
			gears: 	new DiceBuilder(6, DiceType.gear),
			coasts: new DiceBuilder(2, DiceType.coast, 'c'),
			brakes: new DiceBuilder(1, DiceType.brake, 'b'),
			boost: 	new DiceBuilder(0, DiceType.boost, 'a')
		}
	},
	rain: {
		dry: {
			gears: 	new DiceBuilder(6, DiceType.gear),
			coasts: new DiceBuilder(1, DiceType.coast, 'c'),
			brakes: new DiceBuilder(2, DiceType.brake, 'b'),
			boost: 	new DiceBuilder(0, DiceType.boost, 'a')
		},
		rain: {
			gears: 	new DiceBuilder(6, DiceType.gear),
			coasts: new DiceBuilder(2, DiceType.coast, 'c'),
			brakes: new DiceBuilder(2, DiceType.brake, 'b'),
			boost: 	new DiceBuilder(0, DiceType.boost, 'a')
		}
	},
	soft: {
		dry: {
			gears: 	new DiceBuilder(6, DiceType.gear),
			coasts: new DiceBuilder(2, DiceType.coast, 'c'),
			brakes: new DiceBuilder(3, DiceType.brake, 'b'),
			boost: 	new DiceBuilder(0, DiceType.boost, 'a')
		},
		rain: {
			gears: 	new DiceBuilder(6, DiceType.gear),
			coasts: new DiceBuilder(2, DiceType.coast, 'c'),
			brakes: new DiceBuilder(1, DiceType.brake, 'b'),
			boost: 	new DiceBuilder(0, DiceType.boost, 'a')
		}
	}
}

export const GT5 = {
	asphalt: {
		dry: {
			gears: 	new DiceBuilder(5, DiceType.gear),
			coasts: new DiceBuilder(2, DiceType.coast, 'c'),
			brakes: new DiceBuilder(3, DiceType.brake, 'b'),
			boost: 	new DiceBuilder(1, DiceType.boost, 'a')
		},
		rain: {
			gears: 	new DiceBuilder(5, DiceType.gear),
			coasts: new DiceBuilder(2, DiceType.coast, 'c'),
			brakes: new DiceBuilder(1, DiceType.brake, 'b'),
			boost: 	new DiceBuilder(1, DiceType.boost, 'a')
		}
	},
	rain: {
		dry: {
			gears: 	new DiceBuilder(5, DiceType.gear),
			coasts: new DiceBuilder(1, DiceType.coast, 'c'),
			brakes: new DiceBuilder(2, DiceType.brake, 'b'),
			boost: 	new DiceBuilder(1, DiceType.boost, 'a')
		},
		rain: {
			gears: 	new DiceBuilder(5, DiceType.gear),
			coasts: new DiceBuilder(2, DiceType.coast, 'c'),
			brakes: new DiceBuilder(2, DiceType.brake, 'b'),
			boost: 	new DiceBuilder(1, DiceType.boost, 'a')
		}
	},
	soft: {
		dry: {
			gears: 	new DiceBuilder(5, DiceType.gear),
			coasts: new DiceBuilder(2, DiceType.coast, 'c'),
			brakes: new DiceBuilder(3, DiceType.brake, 'b'),
			boost: 	new DiceBuilder(1, DiceType.boost, 'a')
		},
		rain: {
			gears: 	new DiceBuilder(5, DiceType.gear),
			coasts: new DiceBuilder(2, DiceType.coast, 'c'),
			brakes: new DiceBuilder(1, DiceType.brake, 'b'),
			boost: 	new DiceBuilder(1, DiceType.boost, 'a')
		}
	}
}

export const GT4 = {
	asphalt: {
		dry: {
			gears: 	new DiceBuilder(4, DiceType.gear),
			coasts: new DiceBuilder(3, DiceType.coast, 'c'),
			brakes: new DiceBuilder(2, DiceType.brake, 'b'),
			boost: 	new DiceBuilder(0, DiceType.boost, 'a')
		},
		rain: {
			gears: 	new DiceBuilder(4, DiceType.gear),
			coasts: new DiceBuilder(3, DiceType.coast, 'c'),
			brakes: new DiceBuilder(1, DiceType.brake, 'b'),
			boost: 	new DiceBuilder(0, DiceType.boost, 'a')
		}
	},
	rain: {
		dry: {
			gears: 	new DiceBuilder(4, DiceType.gear),
			coasts: new DiceBuilder(2, DiceType.coast, 'c'),
			brakes: new DiceBuilder(2, DiceType.brake, 'b'),
			boost: 	new DiceBuilder(0, DiceType.boost, 'a')
		},
		rain: {
			gears: 	new DiceBuilder(4, DiceType.gear),
			coasts: new DiceBuilder(3, DiceType.coast, 'c'),
			brakes: new DiceBuilder(2, DiceType.brake, 'b'),
			boost: 	new DiceBuilder(0, DiceType.boost, 'a')
		}
	},
	soft: {
		dry: {
			gears: 	new DiceBuilder(4, DiceType.gear),
			coasts: new DiceBuilder(3, DiceType.coast, 'c'),
			brakes: new DiceBuilder(2, DiceType.brake, 'b'),
			boost: 	new DiceBuilder(0, DiceType.boost, 'a')
		},
		rain: {
			gears: 	new DiceBuilder(4, DiceType.gear),
			coasts: new DiceBuilder(3, DiceType.coast, 'c'),
			brakes: new DiceBuilder(1, DiceType.brake, 'b'),
			boost: 	new DiceBuilder(0, DiceType.boost, 'a')
		}
	}
}