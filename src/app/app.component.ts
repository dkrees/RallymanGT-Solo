import { Component, OnInit } 	from '@angular/core';
import { Angulartics2GoogleAnalytics } from 'angulartics2/ga';
import { LocalstorageService } 	from './localstorage.service';


declare var $:any

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

	constructor(angulartics2GoogleAnalytics: Angulartics2GoogleAnalytics, private localstorage: LocalstorageService) {
		angulartics2GoogleAnalytics.startTracking();
	}

	title = 'Rallyman GT Timing App'

	// initialise app
	ngOnInit() {}

}
