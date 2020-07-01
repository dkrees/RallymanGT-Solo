import { GT4, GT5, GT6, GT5BOP, GT6BOP, Dice } from './carClasses';

export interface Turn {
	dice: 			Dice[],
	loc: 			boolean,
	locGear: 		string,
	flyingStartFail: boolean,
	flatOut: 		boolean,
	focus: 			number,
	damage: 		{gear:number, brake: number, coast:number},
	time: 			number,
	entry: 			string,
	gear: 			string,
	weatherChange: 	boolean,
	pitstop:		boolean,
	pitGear:		string
}

export enum Weather {
	dry = 'dry',
	wet = 'rain'
}

export enum CarClass {
	gt6 = 'GT6',
	gt5 = 'GT5',
	gt4 = 'GT4'
}

export enum Tyres {
	soft = 'soft',
	asphalt = 'asphalt',
	rain = 'rain'
}

// export enum PitStops {
// 	true = 'Yes',
// 	false = 'No'
// }

export let timing = {
	standardRules: {
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
	bop: 			boolean;
	weather: 		Weather;
	tyres: 			Tyres;
	focusTokens: 	number;
	gearDamage: 	number;
	brakeDamage: 	number;
	coastDamage: 	number;
	gear: 			string;

	constructor (carClass:CarClass, bop:boolean, tyres:Tyres, weather:Weather) {
		
		this.class 			= carClass;
		this.bop 			= bop;
		this.tyres 			= tyres;
		this.weather 		= weather;

		this.focusTokens 	= 0;
		this.gearDamage 	= 0;
		this.brakeDamage 	= 0;
		this.coastDamage 	= 0;
		this.gear 			= '0';

	}

	getDice(carClass:CarClass, bop:boolean, tyres:Tyres, weather:Weather):{gears:Dice[], coasts:Dice[], brakes:Dice[], boost:Dice[]} {

		let gears: Dice[];
		let coasts: Dice[];
		let brakes: Dice[];
		let boosts: Dice[];

		if (carClass == CarClass.gt6) {

			if (bop) {
				gears  = GT6BOP[tyres][weather].gears.dice;
				coasts = GT6BOP[tyres][weather].coasts.dice;
				brakes = GT6BOP[tyres][weather].brakes.dice;
				boosts = GT6BOP[tyres][weather].boost.dice;
			} else {
				gears  = GT6[tyres][weather].gears.dice;
				coasts = GT6[tyres][weather].coasts.dice;
				brakes = GT6[tyres][weather].brakes.dice;
				boosts = GT6[tyres][weather].boost.dice;
			}

		} else if (carClass == CarClass.gt5) {

			if (bop) {
				gears  = GT5BOP[tyres][weather].gears.dice;
				coasts = GT5BOP[tyres][weather].coasts.dice;
				brakes = GT5BOP[tyres][weather].brakes.dice;
				boosts = GT5BOP[tyres][weather].boost.dice;
			} else {
				gears  = GT5[tyres][weather].gears.dice;
				coasts = GT5[tyres][weather].coasts.dice;
				brakes = GT5[tyres][weather].brakes.dice;
				boosts = GT5[tyres][weather].boost.dice;
			}

		} else if (carClass == CarClass.gt4) {

			gears  = GT4[tyres][weather].gears.dice;
			coasts = GT4[tyres][weather].coasts.dice;
			brakes = GT4[tyres][weather].brakes.dice;
			boosts = GT4[tyres][weather].boost.dice;

		}

		return {gears:gears, coasts:coasts, brakes:brakes, boost:boosts};
	}
}

export interface Stage {
	special:			string,
	changeableWeather: 	boolean,
	pitStops: 			boolean,
	flyingStart:		boolean,
	dashboard: 			Dashboard,
	log: 				Turn[],
	stageTime:			number			
} 

export interface Race {
	details: {
		name: 		string,
		isgoytra: 	boolean,
		options: {carClass: boolean, tyres: boolean, weather: boolean, changeableWeather: boolean, pitStops: boolean, flyingStart: boolean}
	},
	stages: Stage[],
	totalTime: number
}


