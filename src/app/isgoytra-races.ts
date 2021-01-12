import { CarClass, Tyres, Weather, Dashboard, Turn, Stage, Race } from './configuration';

interface RaceFormat {month: string, race: Race};

export const ISGOYTRARaces: RaceFormat[] = [
	{
		month: 'July',
		race: {
			details: {
				name: 'July race name',
				isgoytra: true,
				options: {carClass: true, tyres: false, weather: false, changeableWeather: false, pitStops: false, flyingStart: false, sisu: false}
			},
			stages: [
				{
					special: '1',
					changeableWeather: false,
					pitStops: false,
					flyingStart: false,
					sisu: false,
					dashboard: new Dashboard(CarClass.gt6, false, Tyres.asphalt, Weather.dry),
					log: [],
					stageTime: 0
				}
			],
			totalTime: 0
		}
	}
]