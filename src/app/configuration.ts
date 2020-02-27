import { GT4, GT5, GT6, Dice } from './carClasses';

export interface Turn {
	dice: 			Dice[],
	loc: 			boolean,
	locGear: 		string,
	flatOut: 		boolean,
	focus: 			number,
	damage: 		{gear:number, brake: number, coast:number},
	time: 			number,
	entry: 			string,
	gear: 			string,
	weatherChange: 	boolean
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

export class Dashboard {
	class: 			CarClass;
	weather: 		Weather;
	tyres: 			Tyres;
	focusTokens: 	number;
	gearDamage: 	number;
	brakeDamage: 	number;
	coastDamage: 	number;
	gear: 			string;
	totalTime: 		number;

	constructor (carClass:CarClass, tyres:Tyres, weather:Weather) {
		
		this.class 			= carClass;
		this.tyres 			= tyres;
		this.weather 		= weather;

		this.focusTokens 	= 0;
		this.gearDamage 	= 0;
		this.brakeDamage 	= 0;
		this.coastDamage 	= 0;
		this.gear 			= '0';
		this.totalTime 		= 0;

	}

	getDice(carClass:CarClass, tyres:Tyres, weather:Weather):{gears:Dice[], coasts:Dice[], brakes:Dice[], boost:Dice[]} {

		let gears: Dice[];
		let coasts: Dice[];
		let brakes: Dice[];
		let boosts: Dice[];

		if (carClass == CarClass.gt6) {

			gears  = GT6[tyres][weather].gears.dice;
			coasts = GT6[tyres][weather].coasts.dice;
			brakes = GT6[tyres][weather].brakes.dice;
			boosts = GT6[tyres][weather].boost.dice;

		} else if (carClass == CarClass.gt5) {

			gears  = GT5[tyres][weather].gears.dice;
			coasts = GT5[tyres][weather].coasts.dice;
			brakes = GT5[tyres][weather].brakes.dice;
			boosts = GT5[tyres][weather].boost.dice;

		} else if (carClass == CarClass.gt4) {

			gears  = GT4[tyres][weather].gears.dice;
			coasts = GT4[tyres][weather].coasts.dice;
			brakes = GT4[tyres][weather].brakes.dice;
			boosts = GT4[tyres][weather].boost.dice;

		}

		return {gears:gears, coasts:coasts, brakes:brakes, boost:boosts};
	}
}

export interface Race {
	details: {
		name: 		string,
		weather: 	Weather,
		special: 	string,
		pitStops: 	PitStops,
		class: 		CarClass,
		tyres: 		Tyres,
		isgoytra: 	{spareTyre: boolean} // reduces 00: 120 seconds penalty to 30 seconds
	},
	dashboard: 		Dashboard,
	log: 			Turn[]
}


