import { Component, OnInit } 	from '@angular/core';
import { LocalstorageService } 	from './localstorage.service';


declare var $:any

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

	constructor(private localstorage: LocalstorageService) {}

	title = 'Rallyman GT Solo'

	// initialise app
	ngOnInit() {}

}
