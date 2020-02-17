import { Component, OnInit } 	from '@angular/core';
import { FormBuilder } 			from "@angular/forms";
import { Router } 				from '@angular/router';
import { Dashboard, Turn, Race, Weather, CarClass, Tyres, PitStops } from '../configuration';
import { LocalstorageService } 	from '../localstorage.service';

@Component({
	selector: 'app-configure-race',
	templateUrl: './configure-race.component.html',
	styleUrls: ['./configure-race.component.scss']
})
export class ConfigureRaceComponent implements OnInit {

	constructor(private localstorage: LocalstorageService, public fb: FormBuilder, private router: Router) {}

	race: Race;
	raceDetailsForm;
	
	cancelForm() {
		this.router.navigate(['/', 'welcome']);
	}

	// Submit Race Details Form
	saveDetails() {

		this.race.details = {
			name: 		this.raceDetailsForm.value.name,
			special: 	this.raceDetailsForm.value.special,
			class: 		this.raceDetailsForm.value.class,
			weather: 	this.raceDetailsForm.value.weather,
			tyres: 		this.raceDetailsForm.value.tyres,
			pitStops: 	this.raceDetailsForm.value.pits,
			isgoytra: 	{spareTyre: this.raceDetailsForm.value.isgoytra} 	
		}

		this.localstorage.save(this.race);
		this.router.navigate(['/', 'race']);
	}  

	ngOnInit() {

		this.race = {
			details: {
				name: '',
				special: '',
				class: CarClass.gt6,
				weather: Weather.dry,
				tyres: Tyres.asphalt,
				pitStops: PitStops.true,
				isgoytra: {spareTyre: false}
			},
			dashboard: {
				class: CarClass.gt6,
				gears: 6,
				brakes: 3,
				coasts: 2,
				tyres: Tyres.asphalt,
				focusTokens: 0,
				gearDamage: 0,
				brakeDamage: 0,
				coastDamage: 0,
				gear: '0',
				totalTime: 0
			},
			log: []
		}


		this.raceDetailsForm = this.fb.group({
			name: 		[this.race.details.name],
			special: 	[this.race.details.special],
			class: 		[this.race.details.class],
			weather: 	[this.race.details.weather],
			tyres: 		[this.race.details.tyres],
			pits: 		[this.race.details.pitStops],
			isgoytra: 	[this.race.details.isgoytra.spareTyre]
		});
	}

}
