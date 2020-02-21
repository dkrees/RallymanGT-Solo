import { Component, OnInit } 	from '@angular/core';
import { Router } 				from '@angular/router';
import * as moment 				from 'moment';
import { DiceType, Dice } 		from '../carClasses';
import { Dashboard, Turn, Race, timing, damage, Weather, CarClass, Tyres, PitStops } from '../configuration';
import { LocalstorageService } 	from '../localstorage.service';

//declare var $:any

@Component({
  selector: 'app-race',
  templateUrl: './race.component.html',
  styleUrls: ['./race.component.scss']
})

export class RaceComponent implements OnInit {


// TODO
// ==============================================
// braking to reduce gear automatically?
// validation?
// pitting to chnage tyres/remove damage

// Output log short/long hand and total time
// Save races?


// change "save" to "start"
// Spent focus not resetting after submit.
// move focus set up (and other things) to constructor function
// prevent page zoom on mobile

// Add Specials to a race 


	constructor(private localstorage: LocalstorageService, private router: Router) {}

	gears:  	Dice[];
	brakes: 	Dice[];
	coasts: 	Dice[];
	boost:      Dice[];
	turn: 		Turn;
	race: 		Race;
	dashboard:  Dashboard;
	logOutput: 	string;

	spendFocus;
	spendFocusOptions;

	// ==========================================
	// FOCUS
	resetFocusSpend():void {
		// reset the focus spend options to none
		this.spendFocus = this.spendFocusOptions[0].value;
	}

	setupFocusOptions():void {
		this.spendFocusOptions = [];
		let n = 0;
		for (var i = 0; i < this.gears.length + this.brakes.length + this.coasts.length + this.boost.length; ++i) {
			n += i;
			let label = (i == 0) ? 'None' : i + ' Dice ' + '(-' + n + ' Focus)';
			this.spendFocusOptions.push({label: label, value: n});
		}

		this.resetFocusSpend();
	}

	focusSpentSelect(focusSpent):void {
		this.turn.focus = focusSpent;
		this.entry();
	}
	// ==========================================

	// ==========================================
	// LOCAL STORAGE
	// Save log to local storage
	saveRace(race:Race):void {
		this.localstorage.save(race);
	}

	// Get log from local storage
	loadRace():void {
		this.race = this.localstorage.load();
		this.dashboard = new Dashboard(this.race.dashboard.class, this.race.dashboard.tyres, this.race.dashboard.weather);

		let availableDice = this.dashboard.getDice(this.race.dashboard.class, this.race.dashboard.tyres, this.race.dashboard.weather);

		this.gears  = availableDice.gears;
		this.brakes = availableDice.brakes;
		this.coasts = availableDice.coasts;
		this.boost  = availableDice.boost;
		
		this.setupFocusOptions();
		this.totalTime();
		this.output();
	}
	// ==========================================


	gainFocus():number {
		let focusGained = 0;

		for (var i = 0; i < this.turn.dice.length; ++i) {

			// add focus if its not a braking die
			if (this.turn.dice[i].type !== DiceType.brake) {
				focusGained++;
			}			
		}

		return focusGained;
	}

	// update the turn log entry
	entry():void {
		this.turn.entry = '';

		for (var i = 0; i < this.turn.dice.length; ++i) {
			this.turn.entry = this.turn.entry.concat(this.turn.dice[i].label);

			// set turns gear if its not coasting or braking
			if (this.turn.dice[i].type !== DiceType.brake && this.turn.dice[i].type !== DiceType.coast) {
				this.turn.gear = this.turn.dice[i].label;
			}			
		}

		// uh oh, Loss of Control
		if (this.turn.loc) {

			// append loc gear to entry
			this.turn.entry = this.turn.entry.concat(this.turn.locGear);

			// set gear to LOC 
			this.turn.gear = this.turn.locGear;

			// show focus token adjustment in parentheses
			if (this.turn.flatOut) {
				this.turn.entry = this.turn.entry.concat('(' + this.gainFocus() + ')');
			} else if (this.turn.focus != 0) {
				this.turn.entry = this.turn.entry.concat('(' + -this.turn.focus + ')');
			}

			// append the exclamation mark
			this.turn.entry = this.turn.entry.concat('!');

			// append Gear damage
			for (var i = 0; i < this.turn.damage.gear; ++i) {
				this.turn.entry = this.turn.entry.concat('G');
			}

			// append Brake damage
			for (var i = 0; i < this.turn.damage.brake; ++i) {
				this.turn.entry = this.turn.entry.concat('B');
			}

			// append Coast damage
			for (var i = 0; i < this.turn.damage.coast; ++i) {
				this.turn.entry = this.turn.entry.concat('C');
			}

		// otherwise flat out
		} else if (this.turn.flatOut) {
			// show focus token adjustment in parentheses (duplicate code above!)
			this.turn.entry = this.turn.entry.concat('(' + this.gainFocus() + ')');
		} else if (this.turn.focus != 0) {
			this.turn.entry = this.turn.entry.concat('(' + -this.turn.focus + ')');
		}

		// apply timing with this turns gear
		if (this.race.details.isgoytra.spareTyre) {
			this.turn.time = timing.isgoytraRules[this.turn.gear];
		} else {
			this.turn.time = timing.standardRules[this.turn.gear];
		}
		
	}

	formatTime(seconds:number):string {

		let minuteValue = Math.floor(seconds/60);
		let secondsValue = seconds%60;

		let duration = moment().second(secondsValue).minute(minuteValue);
		return duration.format("mm:ss");
	}

	// total the time (seconds) not including focus token reduction
	// - focus token bonus is displayed at the end of the outputs
	totalTime():void {
		let time = 0;
		for (var i = 0; i < this.race.log.length; ++i) {
			time += this.race.log[i].time;
		}

		this.race.dashboard.totalTime = time;
	}

	// select a gear
	dieSelected(die:Dice):void {
		die.selected = !die.selected;
		if (die.selected) {
			let d:Dice = {id: die.id, type: die.type, label: die.label, selected: die.selected};
			this.turn.dice.push(d);
		} else {
			let result = this.turn.dice.findIndex(element => element === die);
			this.turn.dice.splice(result, 1);
		}

		this.entry();
	}

	// going flat out!
	flatOut():void {

		this.turn.flatOut = !this.turn.flatOut;
		if (this.turn.flatOut){
			let focus = 0;

			// only gain focus tokens for non brake dice
			for (var i = 0; i < this.turn.dice.length; ++i) {
				if (this.turn.dice[i].type != DiceType.brake) {
					focus++;
				}
			}
			this.turn.focus = focus;
		} else {
			this.turn.focus = 0;
		}

		this.entry();
	}

	// oops. loss of control!
	lossOfControl(loc:string):void {
		this.turn.loc = !this.turn.loc;
		if (this.turn.loc) {
			this.turn.locGear = loc;
		} else {
			this.turn.locGear = '';
		}

		this.entry();
	}

	// add damage from damage tokens
	addDamage(type):void {
		switch (type) {
			case 'gear':
				this.turn.damage.gear++;
				break;
			case 'brake':
				this.turn.damage.brake++;
				break;
			case 'coast':
				this.turn.damage.coast++;
				break;
			default:
				break;
		}

		this.entry();
	}

	// clear the damage - keep this???
	clearDamage():void {
		this.turn.damage.gear = 0;
		this.turn.damage.brake = 0;
		this.turn.damage.coast = 0;
		this.entry();
	}
	
	// Reset the turn object for a new turn
	resetTurn():void {

		// reset the focus spend options
		this.resetFocusSpend();

		this.turn = {
			dice: [],
			loc: false,
			locGear: '',
			flatOut: false,
			focus: 0,
			damage: {
				gear: 0,
				brake: 0,
				coast: 0
			},
			time: 0,
			entry: '',
			gear: this.race.dashboard.gear
		};

		// reset selected dice
		for (var i = 0; i < this.gears.length; ++i) {
			this.gears[i].selected = false;
		}

		for (var i = 0; i < this.brakes.length; ++i) {
			this.brakes[i].selected = false;
		}

		for (var i = 0; i < this.coasts.length; ++i) {
			this.coasts[i].selected = false;
		}

		for (var i = 0; i < this.boost.length; ++i) {
			this.boost[i].selected = false;
		}

		
	}

	// submitLogEntry the turn entry to the log
	submitLogEntry():void {

		// update the entry once more
		this.entry();

		// update the race log
		this.race.log.push(this.turn);

		// update dashboard
		if (this.turn.flatOut) {
			this.race.dashboard.focusTokens += this.turn.focus;
		} else if (this.turn.focus > 0) {
			this.race.dashboard.focusTokens -= this.turn.focus;
		}

		this.race.dashboard.gear = this.turn.gear;
		this.race.dashboard.gearDamage += this.turn.damage.gear;
		this.race.dashboard.brakeDamage += this.turn.damage.brake;
		this.race.dashboard.coastDamage += this.turn.damage.coast;

		this.totalTime();

		// save to local storage
		this.saveRace(this.race);

		this.resetTurn();
		this.output();
	}

	// remove a log entry
	removeLogEntry(index):void {
		let deletedEntry = this.race.log.splice(index, 1);

		if (deletedEntry[0].flatOut) {
			this.race.dashboard.focusTokens -= deletedEntry[0].focus;
		} else if (deletedEntry[0].focus > 0) {
			this.race.dashboard.focusTokens += deletedEntry[0].focus;
		}

		this.race.dashboard.gearDamage -= deletedEntry[0].damage.gear;
		this.race.dashboard.brakeDamage -= deletedEntry[0].damage.brake;
		this.race.dashboard.coastDamage -= deletedEntry[0].damage.coast;

		// find the last gear entry (regardless which entry was deleted)
		this.race.dashboard.gear = this.race.log[this.race.log.length-1].gear;

		this.saveRace(this.race);
		this.output();
	}

	output():void {
		this.logOutput = '';

		this.logOutput = this.race.details.name
			+ '\nSpecial: ' + this.race.details.special
			+ '\nClass: ' + this.race.details.class
			+ '\nPit Stops: ' + this.race.details.pitStops
			+ '\nWeather: ' + this.race.details.weather
			+ '\nTyres: ' + this.race.details.tyres
			+ '\n('+ this.formatTime(this.race.dashboard.totalTime) + '-' + this.formatTime(this.race.dashboard.focusTokens) + ') = ' 
			+ this.formatTime(this.race.dashboard.totalTime - this.race.dashboard.focusTokens)
			+ '\n';

		for (var i = 0; i < this.race.log.length; ++i) {
			this.logOutput = this.logOutput.concat(this.race.log[i].entry + ((i < this.race.log.length - 1) ? ':' : ''));
		}
	}

	// Copy Race log to clipboard
	copyOutput(outputElement):void {

		outputElement.focus();
		outputElement.select();

		try {
			var successful = document.execCommand('copy');

			if (successful) {
				alert('Race Log copied to clipboard!');
			}
			
		} catch (err) {
			alert('Sorry, unable to copy text. Try selecting the text, right click and "copy" or CNTRL (CMD on Mac) + "C"');
		}
	}

	// Initialise app
	ngOnInit() {
		//$(document).foundation();

		if (this.localstorage.isSaved()) {
			this.loadRace();
			this.resetTurn();
		} else {
			this.router.navigate(['/', 'welcome']);
		}

  	}

}
