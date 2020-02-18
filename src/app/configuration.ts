export interface Dashboard {
	class: string,
	gears: number,
	brakes: number,
	coasts: number,
	tyres: string,
	focusTokens: number,
	gearDamage: number,
	brakeDamage: number,
	coastDamage: number,
	gear: string,
	totalTime: number
}

export interface Dice {
	id: string,
	type: string,
	label: string,
	selected: boolean
}


export interface Turn {
	dice: Dice[],
	loc: boolean,
	locGear: string,
	flatOut: boolean,
	focus: number,
	damage: {gear:number, brake: number, coast:number},
	time: number,
	entry: string,
	gear: string
}

export enum Weather {
	dry = 'Dry',
	wet = 'Wet'
}

export enum CarClass {
	gt6 = 'GT6',
	gt5 = 'GT5',
	gt4 = 'GT4'
}

export enum Tyres {
	soft = 'Soft',
	asphalt = 'Asphalt',
	wet = 'Wet'
}

export enum PitStops {
	true = 'Yes',
	false = 'No'
}

export interface Race {
	details: {
		name: string,
		weather: Weather,
		special: string,
		pitStops: PitStops,
		class: CarClass,
		tyres: Tyres,
		isgoytra: {spareTyre: boolean} // reduces 00: 120 seconds penalty to 30 seconds
	},
	dashboard: Dashboard,
	log: Turn[]
}

export let timing = {
	standardRules: {
		'6' : 10,
		'5' : 15,
		'4' : 20,
		'3' : 30,
		'2' : 40,
		'1' : 50,
		'0' : 60,
		'00': 120
	},
	isgoytraRules: {
		'6' : 10,
		'5' : 15,
		'4' : 20,
		'3' : 30,
		'2' : 40,
		'1' : 50,
		'0' : 60,
		'00': 30
	}
}

export let damage = [
	{id: 'G', label: 'Gear Damage'},
	{id: 'B', label: 'Brake Damage'},
	{id: 'C', label: 'Coast Damage'}
];