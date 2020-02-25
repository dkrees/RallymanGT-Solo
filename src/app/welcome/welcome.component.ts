import { Component, OnInit } from '@angular/core';
import { Angulartics2 } 		from 'angulartics2';
import { LocalstorageService } 	from '../localstorage.service';

@Component({
	selector: 'app-welcome',
	templateUrl: './welcome.component.html',
	styleUrls: ['./welcome.component.scss']
})

export class WelcomeComponent implements OnInit {

	constructor(private angulartics2: Angulartics2, private localstorage: LocalstorageService) {}

	raceExists:boolean = false;

	// ==========================================
	// METRICS
	metrics(action:string):void {
		this.angulartics2.eventTrack.next({ 
			action: action,
			properties: { 
				category: '', 
				label: '',
			},
		});
	}
	// ==========================================

	ngOnInit() {

		if (this.localstorage.isSaved()) {
			this.raceExists = true;
			this.metrics('welcome back');
		} else {
			this.metrics('welcome new driver');
		}
	}




}
