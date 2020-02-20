import { Component } 			from '@angular/core';
import { FormBuilder } 			from "@angular/forms";
import { Router } 				from '@angular/router';
import { Dashboard, Turn, Race, Weather, CarClass, Tyres, PitStops } from '../configuration';
import { LocalstorageService } 	from '../localstorage.service';

@Component({
	selector: 'app-configure-race',
	templateUrl: './configure-race.component.html',
	styleUrls: ['./configure-race.component.scss']
})
export class ConfigureRaceComponent {

	constructor(private localstorage: LocalstorageService, public fb: FormBuilder, private router: Router) {

		// DEFAULTS
		this.setup = new Dashboard(CarClass.gt6, Tyres.asphalt, Weather.dry);

		this.race = {
			details: {
				name: '',
				special: '',
				class: this.setup.class,
				weather: this.setup.weather,
				tyres: this.setup.tyres,
				pitStops: PitStops.true,
				isgoytra: {spareTyre:false}
			},
			dashboard: this.setup,
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

	setup: 	Dashboard;
	race: 	Race;
	raceDetailsForm;
	
	cancelForm() {
		this.router.navigate(['/', 'welcome']);
	}

	// Submit Race Details Form
	saveDetails() {

		// Update the dashboard setup
		this.setup.class   = this.raceDetailsForm.value.class
		this.setup.weather = this.raceDetailsForm.value.weather
		this.setup.tyres   = this.raceDetailsForm.value.tyres

		this.race = {
			details: {
				name: 		this.raceDetailsForm.value.name,
				special: 	this.raceDetailsForm.value.special,
				class: 		this.raceDetailsForm.value.class,
				weather: 	this.raceDetailsForm.value.weather,
				tyres: 		this.raceDetailsForm.value.tyres,
				pitStops: 	this.raceDetailsForm.value.pits,
				isgoytra: 	{spareTyre: this.raceDetailsForm.value.isgoytra}
			},
			dashboard: this.setup,
			log: []
		}

		this.localstorage.save(this.race);
		this.router.navigate(['/', 'race']);
	}  

}
