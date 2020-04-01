import { Component, OnInit } 			from '@angular/core';
import { FormBuilder } 			from "@angular/forms";
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Angulartics2 } 		from 'angulartics2';
import { Dashboard, Turn, Race, Stage, Weather, CarClass, Tyres } from '../configuration';
import { LocalstorageService } 	from '../localstorage.service';

@Component({
	selector: 'app-configure-race',
	templateUrl: './configure-race.component.html',
	styleUrls: ['./configure-race.component.scss']
})
export class ConfigureRaceComponent implements OnInit {

	race: Race;
	raceDetailsForm;
	stageIndex: number;
	stage: Stage;

	constructor(
		private angulartics2: Angulartics2,
		private localstorage: LocalstorageService,
		public fb: FormBuilder,
		private route: ActivatedRoute,
		private router: Router,
	) {

		// DEFAULTS
		this.stageIndex = 0
		this.stage = {
			special: '',
			changeableWeather: false,
			pitStops: false,
			dashboard: new Dashboard(CarClass.gt6, false, Tyres.asphalt, Weather.dry),
			log: [],
			stageTime: 0
		};

		this.race = {
			details: {
				name: 		'',
				isgoytra: 	{spareTyre:false}
			},
			stages:[this.stage],
			totalTime: 0
		}

		this.raceDetailsForm = this.fb.group({
			name: 		[this.race.details.name],
			isgoytra: 	[this.race.details.isgoytra.spareTyre],
			special: 	[this.stage.special],
			class: 		[this.stage.dashboard.class],
			bop: 		[this.stage.dashboard.bop],
			weather: 	[this.stage.dashboard.weather],
			changeableWeather: [this.stage.changeableWeather],
			tyres: 		[this.stage.dashboard.tyres],
			pits: 		[this.stage.pitStops]
		});
	}

	// ==========================================
	// METRICS
	metrics(action:string):void {
		this.angulartics2.eventTrack.next({ 
			action: action,
			properties: { 
				category: this.race.stages[this.stageIndex].dashboard.class, 
				label: this.race.details.isgoytra.spareTyre.toString(),
			},
		});
	}
	// ==========================================
	
	cancelForm() {
		this.metrics('cancel new race');
		this.router.navigate(['/', 'welcome']);
	}

	loadRace() {
		this.race = this.localstorage.load();

		// use the last stage details to populate form to start
		this.stage.dashboard = new Dashboard(this.race.stages[this.stageIndex].dashboard.class, this.race.stages[this.stageIndex].dashboard.bop, this.race.stages[this.stageIndex].dashboard.tyres, this.race.stages[this.stageIndex].dashboard.weather);

		this.raceDetailsForm = this.fb.group({
			name: 		[this.race.details.name],
			isgoytra: 	[this.race.details.isgoytra.spareTyre],
			special: 	[this.race.stages[this.stageIndex].special],
			class: 		[this.race.stages[this.stageIndex].dashboard.class],
			bop: 		[this.race.stages[this.stageIndex].dashboard.bop],
			weather: 	[this.race.stages[this.stageIndex].dashboard.weather],
			changeableWeather: [this.race.stages[this.stageIndex].changeableWeather],
			tyres: 		[this.race.stages[this.stageIndex].dashboard.tyres],
			pits: 		[this.race.stages[this.stageIndex].pitStops]
		});

		this.race.stages.push(this.stage);
	}

	// Submit Race Details Form
	saveDetails() {

		this.stage.special 				= this.raceDetailsForm.value.special;
		this.stage.changeableWeather 	= this.raceDetailsForm.value.changeableWeather;
		this.stage.pitStops 			= this.raceDetailsForm.value.pits;

		// Update the dashboard setup
		this.stage.dashboard.class   	= this.raceDetailsForm.value.class;
		this.stage.dashboard.bop     	= this.raceDetailsForm.value.bop;
		this.stage.dashboard.weather 	= this.raceDetailsForm.value.weather;
		this.stage.dashboard.tyres   	= this.raceDetailsForm.value.tyres;

		this.stage.log = [];

		this.race.details.name 			= this.raceDetailsForm.value.name;
		this.race.details.isgoytra.spareTyre = this.raceDetailsForm.value.isgoytra;

		this.metrics('save new race');
		this.localstorage.save(this.race);
		this.router.navigate(['/', 'race']);
	}

	// Initialise app
	ngOnInit() {
		let stage = this.route.snapshot.paramMap.get('stage');

		console.log(stage, parseInt(stage));

		if (parseInt(stage) > 0) {

			this.stageIndex = parseInt(stage)-1;
			this.loadRace();
			this.metrics('add stage');

		} else {
			this.metrics('create new race');
		}

  	}

}
