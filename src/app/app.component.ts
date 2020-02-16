import { Component, OnInit } 	from '@angular/core';
import { LocalstorageService } 	from './localstorage.service';


declare var $:any

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})

// TODO
// ==============================================
// braking to reduce gear automatically?
// validation?
// pitting to chnage tyres/remove damage

// settings: 
// - car class - dashboad, weather and tyres
// - "Spare Tire" SGOTYA?? rules 2:00 = 0:30

// Output log short/long hand and total time
// Race details, name, track, rules...
// Save races?
// Make it look sexy, graphics!!



export class AppComponent implements OnInit {

	constructor(private localstorage: LocalstorageService) {}

	title = 'Rallyman GT Solo'

	// initialise app
	ngOnInit() {}

}
