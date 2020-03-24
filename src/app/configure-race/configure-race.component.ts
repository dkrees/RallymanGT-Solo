import { Component, OnInit } 			from '@angular/core';
import { FormBuilder } 			from "@angular/forms";
import { Router } 				from '@angular/router';
import { Angulartics2 } 		from 'angulartics2';
import { Dashboard, Turn, Race, Weather, CarClass, Tyres } from '../configuration';
import { LocalstorageService } 	from '../localstorage.service';

@Component({
	selector: 'app-configure-race',
	templateUrl: './configure-race.component.html',
	styleUrls: ['./configure-race.component.scss']
})
export class ConfigureRaceComponent implements OnInit {

	constructor(private angulartics2: Angulartics2, private localstorage: LocalstorageService, public fb: FormBuilder, private router: Router) {

		// DEFAULTS
		this.setup = new Dashboard(CarClass.gt6, Tyres.asphalt, Weather.dry);

		this.race = {
			details: {
				name: '',
				special: '',
				class: this.setup.class,
				weather: this.setup.weather,
				changeableWeather: false,
				tyres: this.setup.tyres,
				pitStops: false,
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
			changeableWeather: [this.race.details.changeableWeather],
			tyres: 		[this.race.details.tyres],
			pits: 		[this.race.details.pitStops],
			isgoytra: 	[this.race.details.isgoytra.spareTyre]
		});
	}

	setup: 	Dashboard;
	race: 	Race;
	raceDetailsForm;

	// ==========================================
	// METRICS
	metrics(action:string):void {
		this.angulartics2.eventTrack.next({ 
			action: action,
			properties: { 
				category: this.race.details.class, 
				label: this.race.details.isgoytra.spareTyre.toString(),
			},
		});
	}
	// ==========================================
	
	cancelForm() {
		this.metrics('cancel new race');
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
				changeableWeather: this.raceDetailsForm.value.changeableWeather,
				tyres: 		this.raceDetailsForm.value.tyres,
				pitStops: 	this.raceDetailsForm.value.pits,
				isgoytra: 	{spareTyre: this.raceDetailsForm.value.isgoytra}
			},
			dashboard: this.setup,
			log: []
		}

		this.metrics('save new race');
		this.localstorage.save(this.race);
		this.router.navigate(['/', 'race']);
	}

	// Initialise app
	ngOnInit() {
		this.metrics('create new race');

  	}

}
