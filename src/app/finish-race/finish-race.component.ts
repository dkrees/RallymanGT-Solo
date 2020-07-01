import { Component, OnInit } 		from '@angular/core';
import { Angulartics2 } 				from 'angulartics2';
import { Router } 							from '@angular/router';
import * as moment 							from 'moment';
import { LocalstorageService } 	from '../localstorage.service';
import { Race } 								from '../configuration';

@Component({
  selector: 'app-finish-race',
  templateUrl: './finish-race.component.html',
  styleUrls: ['./finish-race.component.scss']
})
export class FinishRaceComponent implements OnInit {

  constructor(
  	private angulartics2: Angulartics2,
  	private localstorage: LocalstorageService,
  	private router: Router
  ) { }

  race: 	  Race;
  stageIndex: number;
  logOutput:  string;
  bggUser: string;

  	// ==========================================
	// METRICS (SERVICE THIS)
	// ==========================================
	metrics(action:string):void {
		this.angulartics2.eventTrack.next({ 
			action: action,
			properties: { 
				category: this.race.stages[this.stageIndex].dashboard.class, 
				label: this.race.details.isgoytra.toString(),
			},
		});
	}

	// ==========================================
	// LOCAL STORAGE
	// ==========================================
	// Save log to local storage
	saveRace(race:Race):void {
		this.localstorage.save(race);
	}

	// Get log from local storage
	loadRace():void {
		this.race = this.localstorage.load();
		this.stageIndex = this.race.stages.length-1;
		this.output();
	}

  	// ==========================================
	// TIME FORMATTING (SERVICE THIS)
	// ==========================================
	formatTime(seconds:number):string {

		let minuteValue = Math.floor(seconds/60);
		let secondsValue = seconds%60;

		let duration = moment().second(secondsValue).minute(minuteValue);
		return duration.format("mm:ss");
	}

  	output():void {
		
		let totalTime = 0;
		this.logOutput = '';

		this.logOutput = (this.race.details.isgoytra ? 'ISGOYTRA: ' : '') + (this.race.details.name ? this.race.details.name : '') + '\n';
		

		for (var stage = 0; stage < this.race.stages.length; ++stage) {

			totalTime += this.race.stages[stage].stageTime - this.race.stages[stage].dashboard.focusTokens;

			let thisStage = 
				(this.race.stages[stage].special ? '\nSpecial: ' + this.race.stages[stage].special : '')
				+ '\nClass: ' + this.race.stages[stage].dashboard.class + (this.race.stages[stage].dashboard.bop ? ' BOP' : '')
				+ (this.race.stages[stage].pitStops ? '\nPit Stops' : '')
				+ '\nStarting Weather: ' + this.race.stages[stage].dashboard.weather
				+ (this.race.stages[stage].changeableWeather ? '\nChangeable Weather' : '') 
				+ '\nStarting Tyres: ' + this.race.stages[stage].dashboard.tyres
				+ '\n('+ this.formatTime(this.race.stages[stage].stageTime) + '-' + this.formatTime(this.race.stages[stage].dashboard.focusTokens) + ') = ' 
				+ this.formatTime(this.race.stages[stage].stageTime - this.race.stages[stage].dashboard.focusTokens)
				+ '\n';

			for (var i = 0; i < this.race.stages[stage].log.length; ++i) {
				thisStage = thisStage.concat(this.race.stages[stage].log[i].entry + ((i < this.race.stages[stage].log.length - 1) ? ':' : ''));
			}

			this.logOutput = this.logOutput.concat(thisStage + '\n');
		}

		this.logOutput = this.logOutput.concat('\nTotal Time: ' + this.formatTime(totalTime));

	}

	// Copy Race log to clipboard
	copyOutput(outputElement):void {

		this.metrics('copy output');

		outputElement.focus();
		outputElement.select();

		try {
			var successful = document.execCommand('copy');

			if (successful) {
				alert('Race Log copied to clipboard!');
			}
			
		} catch (err) {
			alert('Sorry, unable to copy text. Try selecting the text, right click and "copy" or CTRL (CMD on Mac) + "C"');
		}
	}

	
	addStage():void {
		this.metrics('add special stage');
		this.router.navigate(['/', 'configure-race', this.race.stages.length]);
	}



	// ==========================================
	// YAML OUTPUT AND GEEKMAIL
	// ==========================================
	yamlOutput(bggUser:string):string {
		
		let yamlOutput = '[c]';
		
		if (!bggUser) {
			return;
		}

		yamlOutput = yamlOutput.concat(bggUser + ':\r')

		for (var stage = 0; stage < this.race.stages.length; ++stage) {
			let thisStage = 
				'- class: ' + this.race.stages[stage].dashboard.class + (this.race.stages[stage].dashboard.bop ? 'bop' : '')
				+ '\r  tyres: ' + this.race.stages[stage].dashboard.tyres
				+ '\r  tracktime: ' + this.formatTime(this.race.stages[stage].stageTime)
				+ '\r  focus: ' + this.formatTime(this.race.stages[stage].dashboard.focusTokens)
				+ '\r  totaltime: ' + this.formatTime(this.race.stages[stage].stageTime - this.race.stages[stage].dashboard.focusTokens)
				+ '\r  newnotation: ';

			for (var i = 0; i < this.race.stages[stage].log.length; ++i) {
				thisStage = thisStage.concat(this.race.stages[stage].log[i].entry + ((i < this.race.stages[stage].log.length - 1) ? ':' : ''));
			}
			
			yamlOutput = yamlOutput.concat(thisStage + '\r');
		}

		yamlOutput = yamlOutput.concat('[/c]');
		return yamlOutput;

	}


	geekmailRace(bggUser:string):void {

		this.metrics('geekmail race log');

		let toUser:string = 'firedrake';
		let subject:string = 'ISGOYTRA' + (this.race.details.name ? ': ' + this.race.details.name : '');
		let body:string = encodeURIComponent(this.yamlOutput(bggUser));
		let url:string = 'https://boardgamegeek.com/geekmail/compose?touser=' + toUser + '&subject=' + subject + '&body=' + body;

		var win = window.open(url, '_blank');
  		win.focus();
		
	}

  ngOnInit() {
  	if (this.localstorage.isSaved()) {
			this.loadRace();
		} else {
			this.router.navigate(['/', 'welcome']);
		}
  }

}
