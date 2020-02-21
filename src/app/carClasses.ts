export enum DiceType {
	gear = 'gear',
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
			this.dice.push({id: name  + i.toString(), type: name, label: label ? label : i.toString(),  selected: false});
		}
	}

	get() {
		return this.dice;
	}
}


export const GT6 = {
	Asphalt: {
		Dry: {
			gears: 	new DiceBuilder(7, DiceType.gear),
			coasts: new DiceBuilder(2, DiceType.coast, 'c'),
			brakes: new DiceBuilder(3, DiceType.brake, 'b'),
			boost: 	new DiceBuilder(0, DiceType.boost, 'x')
		},
		Wet: {
			gears: 	new DiceBuilder(7, DiceType.gear),
			coasts: new DiceBuilder(2, DiceType.coast, 'c'),
			brakes: new DiceBuilder(1, DiceType.brake, 'b'),
			boost: 	new DiceBuilder(0, DiceType.boost, 'x')
		}
	},
	Wet: {
		Dry: {
			gears: 	new DiceBuilder(7, DiceType.gear),
			coasts: new DiceBuilder(1, DiceType.coast, 'c'),
			brakes: new DiceBuilder(2, DiceType.brake, 'b'),
			boost: 	new DiceBuilder(0, DiceType.boost, 'x')
		},
		Wet: {
			gears: 	new DiceBuilder(7, DiceType.gear),
			coasts: new DiceBuilder(2, DiceType.coast, 'c'),
			brakes: new DiceBuilder(2, DiceType.brake, 'b'),
			boost: 	new DiceBuilder(0, DiceType.boost, 'x')
		}
	},
	Soft: {
		Dry: {
			gears: 	new DiceBuilder(7, DiceType.gear),
			coasts: new DiceBuilder(2, DiceType.coast, 'c'),
			brakes: new DiceBuilder(3, DiceType.brake, 'b'),
			boost: 	new DiceBuilder(0, DiceType.boost, 'x')
		},
		Wet: {
			gears: 	new DiceBuilder(7, DiceType.gear),
			coasts: new DiceBuilder(2, DiceType.coast, 'c'),
			brakes: new DiceBuilder(1, DiceType.brake, 'b'),
			boost: 	new DiceBuilder(0, DiceType.boost, 'x')
		}
	}
}

export const GT5 = {
	Asphalt: {
		Dry: {
			gears: 	new DiceBuilder(6, DiceType.gear),
			coasts: new DiceBuilder(2, DiceType.coast, 'c'),
			brakes: new DiceBuilder(3, DiceType.brake, 'b'),
			boost: 	new DiceBuilder(1, DiceType.boost, 'x')
		},
		Wet: {
			gears: 	new DiceBuilder(6, DiceType.gear),
			coasts: new DiceBuilder(2, DiceType.coast, 'c'),
			brakes: new DiceBuilder(1, DiceType.brake, 'b'),
			boost: 	new DiceBuilder(1, DiceType.boost, 'x')
		}
	},
	Wet: {
		Dry: {
			gears: 	new DiceBuilder(6, DiceType.gear),
			coasts: new DiceBuilder(1, DiceType.coast, 'c'),
			brakes: new DiceBuilder(2, DiceType.brake, 'b'),
			boost: 	new DiceBuilder(1, DiceType.boost, 'x')
		},
		Wet: {
			gears: 	new DiceBuilder(6, DiceType.gear),
			coasts: new DiceBuilder(2, DiceType.coast, 'c'),
			brakes: new DiceBuilder(2, DiceType.brake, 'b'),
			boost: 	new DiceBuilder(1, DiceType.boost, 'x')
		}
	},
	Soft: {
		Dry: {
			gears: 	new DiceBuilder(6, DiceType.gear),
			coasts: new DiceBuilder(2, DiceType.coast, 'c'),
			brakes: new DiceBuilder(3, DiceType.brake, 'b'),
			boost: 	new DiceBuilder(1, DiceType.boost, 'x')
		},
		Wet: {
			gears: 	new DiceBuilder(6, DiceType.gear),
			coasts: new DiceBuilder(2, DiceType.coast, 'c'),
			brakes: new DiceBuilder(1, DiceType.brake, 'b'),
			boost: 	new DiceBuilder(1, DiceType.boost, 'x')
		}
	}
}

export const GT4 = {
	Asphalt: {
		Dry: {
			gears: 	new DiceBuilder(5, DiceType.gear),
			coasts: new DiceBuilder(3, DiceType.coast, 'c'),
			brakes: new DiceBuilder(2, DiceType.brake, 'b'),
			boost: 	new DiceBuilder(0, DiceType.boost, 'x')
		},
		Wet: {
			gears: 	new DiceBuilder(5, DiceType.gear),
			coasts: new DiceBuilder(3, DiceType.coast, 'c'),
			brakes: new DiceBuilder(1, DiceType.brake, 'b'),
			boost: 	new DiceBuilder(0, DiceType.boost, 'x')
		}
	},
	Wet: {
		Dry: {
			gears: 	new DiceBuilder(5, DiceType.gear),
			coasts: new DiceBuilder(2, DiceType.coast, 'c'),
			brakes: new DiceBuilder(2, DiceType.brake, 'b'),
			boost: 	new DiceBuilder(0, DiceType.boost, 'x')
		},
		Wet: {
			gears: 	new DiceBuilder(5, DiceType.gear),
			coasts: new DiceBuilder(3, DiceType.coast, 'c'),
			brakes: new DiceBuilder(2, DiceType.brake, 'b'),
			boost: 	new DiceBuilder(0, DiceType.boost, 'x')
		}
	},
	Soft: {
		Dry: {
			gears: 	new DiceBuilder(5, DiceType.gear),
			coasts: new DiceBuilder(3, DiceType.coast, 'c'),
			brakes: new DiceBuilder(2, DiceType.brake, 'b'),
			boost: 	new DiceBuilder(0, DiceType.boost, 'x')
		},
		Wet: {
			gears: 	new DiceBuilder(5, DiceType.gear),
			coasts: new DiceBuilder(3, DiceType.coast, 'c'),
			brakes: new DiceBuilder(1, DiceType.brake, 'b'),
			boost: 	new DiceBuilder(0, DiceType.boost, 'x')
		}
	}
}