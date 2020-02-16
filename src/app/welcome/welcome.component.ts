import { Component, OnInit } from '@angular/core';
import { LocalstorageService } 	from '../localstorage.service';

@Component({
	selector: 'app-welcome',
	templateUrl: './welcome.component.html',
	styleUrls: ['./welcome.component.scss']
})

export class WelcomeComponent implements OnInit {

	constructor(private localstorage: LocalstorageService) {}

	raceExists:boolean = false;

	ngOnInit() {
		if (this.localstorage.isSaved()) {
			this.raceExists = true;
		} 
	}


}
