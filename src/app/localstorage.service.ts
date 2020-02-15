import { Injectable } from '@angular/core';
import { Race } from './configuration';

@Injectable({
	providedIn: 'root'
})

export class LocalstorageService {

	constructor() { }

	localStorage = window.localStorage;
	raceKey = 'RallymanGT Log';

	save(race:Race) {

		localStorage.setItem(this.raceKey, JSON.stringify(race));
	}

	isSaved():boolean {
		if (localStorage.getItem(this.raceKey)) {
			return true;
		} else {
			return false
		}
	}

	load():Race {
		if (localStorage.getItem(this.raceKey)) {
			return JSON.parse(localStorage.getItem(this.raceKey));
		}
	}

	remove():void {
		localStorage.removeItem(this.raceKey);
	}

	clear():void {
		localStorage.clear();
	}

}
