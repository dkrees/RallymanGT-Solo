import { Component, OnInit } 	from '@angular/core';
import { Router } 				from '@angular/router';
import * as moment 				from 'moment';
import { Angulartics2 } 		from 'angulartics2';
import { DiceType, Dice } 		from '../carClasses';
import { Dashboard, Turn, Race, timing, damage, Weather, CarClass, Tyres } from '../configuration';
import { LocalstorageService } 	from '../localstorage.service';

declare var $:any

@Component({
  selector: 'app-race',
  templateUrl: './race.component.html',
  styleUrls: ['./race.component.scss']
})

export class RaceComponent implements OnInit {

	constructor(private angulartics2: Angulartics2, private localstorage: LocalstorageService, private router: Router) {}

	stageIndex: number;

	gears:  	Dice[];
	brakes: 	Dice[];
	coasts: 	Dice[];
	boost:      Dice[];
	turn: 		Turn;
	race: 		Race;
	dashboard:  Dashboard;
	logOutput: 	string;

	gear0:  Dice;

	tyreOptions: Tyres[] = [
		Tyres.asphalt,
		Tyres.rain,
		Tyres.soft
	];

	tyreSelect: Tyres;

	spendFocus;
	spendFocusOptions;

	// ==========================================
	// METRICS (SERVICE THIS)
	// ==========================================
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
	// FOCUS
	// ==========================================
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

	gainFocus():number {
		let focusGained = 0;

		for (var i = 0; i < this.turn.dice.length; ++i) {

			// add focus only if its a gear or coast die
			if (this.turn.dice[i].type == DiceType.gear || this.turn.dice[i].type == DiceType.coast) {
				focusGained++;
			}			
		}
		return focusGained;
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

		this.dashboard = new Dashboard(this.race.stages[this.stageIndex].dashboard.class, this.race.stages[this.stageIndex].dashboard.bop, this.race.stages[this.stageIndex].dashboard.tyres, this.race.stages[this.stageIndex].dashboard.weather);
		this.tyreSelect = this.race.stages[this.stageIndex].dashboard.tyres;

		this.getDicePool();
		this.metrics('load race');
		this.setupFocusOptions();
		this.totalTime();
		/*this.output();*/
	}
	

	// ==========================================
	// TURN ENTRY
	// ==========================================
	// update the turn log entry
	entry():void {
		this.turn.entry = '';

		for (var i = 0; i < this.turn.dice.length; ++i) {
			this.turn.entry = this.turn.entry.concat(this.turn.dice[i].label);

			// set turns gear only if its a gear die
			if (this.turn.dice[i].type == DiceType.gear) {
				this.turn.gear = this.turn.dice[i].label;
			}			
		}

		// uh oh, Loss of Control
		if (this.turn.loc) {

			// append loc gear to entry
			this.turn.entry = this.turn.entry.concat(this.turn.locGear);

			// set gear to LOC 
			this.turn.gear = this.turn.locGear;
		
		}

		// if pit stop
		if (this.turn.pitstop) {
			// append pit gear to entry
			this.turn.entry = this.turn.entry.concat(this.turn.pitGear + '');

			// set gear to LOC 
			this.turn.gear = this.turn.pitGear;
			
		}

		// if flat out
		if (this.turn.flatOut) {
			this.turn.focus = this.gainFocus();
			this.turn.entry = this.turn.entry.concat('(' + this.turn.focus + ')');

		} else if (this.turn.focus != 0) {
			this.turn.entry = this.turn.entry.concat('(' + -this.turn.focus + ')');
		}

		// append Gear damage
		if (this.turn.loc) {
			
			this.turn.entry = this.turn.entry.concat('!');

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
		}

		if (this.turn.pitstop) {
			this.turn.entry = this.turn.entry.concat('[pit=' + this.tyreSelect + ']');
		}

		// weather change
		if (this.turn.weatherChange) {
			this.turn.entry = this.turn.entry.concat('[weather=' + this.race.stages[this.stageIndex].dashboard.weather + ']');
		}


		// apply timing with this turns gear
		if (this.race.details.isgoytra.spareTyre) {
			this.turn.time = timing.isgoytraRules[this.turn.gear];
		} else {
			this.turn.time = timing.standardRules[this.turn.gear];
		}

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

	// total the time (seconds) not including focus token reduction
	// - focus token bonus is displayed at the end of the outputs
	totalTime():void {
		let time = 0;
		for (var i = 0; i < this.race.stages[this.stageIndex].log.length; ++i) {
			time += this.race.stages[this.stageIndex].log[i].time;
		}

		this.race.stages[this.stageIndex].stageTime = time;
	}

	// ==========================================
	// DICE
	// ==========================================
	getDicePool():void {
		let availableDice = this.dashboard.getDice(this.race.stages[this.stageIndex].dashboard.class, this.race.stages[this.stageIndex].dashboard.bop, this.race.stages[this.stageIndex].dashboard.tyres, this.race.stages[this.stageIndex].dashboard.weather);
		this.gears  = availableDice.gears;
		this.brakes = availableDice.brakes;
		this.coasts = availableDice.coasts;
		this.boost  = availableDice.boost;

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

		this.gear0 =  {id: '0', type: DiceType.gear, label: '0',  selected: false}

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

	// ==========================================
	// FLAT OUT
	// ==========================================
	// going flat out!
	flatOut():void {

		this.turn.flatOut = !this.turn.flatOut;
		if (this.turn.flatOut){
			this.turn.focus = this.gainFocus();
		} else {
			this.turn.focus = 0;
		}

		this.entry();
	}

	// ==========================================
	// LOSS OF CONTROL
	// ==========================================
	// oops. loss of control!
	lossOfControl(loc:string):void {
		this.metrics('loc');
		this.turn.loc = !this.turn.loc;
		if (this.turn.loc) {
			this.turn.locGear = loc;
		} else {
			this.turn.locGear = '';
		}

		this.entry();
	}

	// ==========================================
	// ADD DAMAGE
	// ==========================================
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
	
	// ==========================================
	// RESET TURN
	// ==========================================
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
			gear: this.race.stages[this.stageIndex].dashboard.gear,
			weatherChange: false,
			pitstop: false,
			pitGear: ''
		};

		this.getDicePool();
		
	}

	// ==========================================
	// LOG ENTRY
	// ==========================================
	// submitLogEntry the turn entry to the log
	submitLogEntry():void {

		// update the entry once more
		this.entry();

		this.metrics('submit entry');

		// update the race log
		this.race.stages[this.stageIndex].log.push(this.turn);

		// update dashboard
		if (this.turn.flatOut) {
			this.race.stages[this.stageIndex].dashboard.focusTokens += this.turn.focus;
		} else if (this.turn.focus > 0) {
			this.race.stages[this.stageIndex].dashboard.focusTokens -= this.turn.focus;
		}

		this.race.stages[this.stageIndex].dashboard.gear = this.turn.gear;
		

		if (this.turn.pitstop) {

			this.race.stages[this.stageIndex].dashboard.tyres = this.tyreSelect;

			if (this.turn.pitGear === '00') {
				this.race.stages[this.stageIndex].dashboard.gearDamage = 0;
				this.race.stages[this.stageIndex].dashboard.brakeDamage = 0;
				this.race.stages[this.stageIndex].dashboard.coastDamage = 0;
			} else {
				this.race.stages[this.stageIndex].dashboard.gearDamage += this.turn.damage.gear;
				this.race.stages[this.stageIndex].dashboard.brakeDamage += this.turn.damage.brake;
				this.race.stages[this.stageIndex].dashboard.coastDamage += this.turn.damage.coast;
			}
		}

		this.totalTime();

		// save to local storage
		this.saveRace(this.race);

		this.resetTurn();
		/*this.output();*/
	}

	// remove a log entry
	removeLogEntry(index):void {
		let deletedEntry = this.race.stages[this.stageIndex].log.splice(index, 1);

		if (deletedEntry[0].flatOut) {
			this.race.stages[this.stageIndex].dashboard.focusTokens -= deletedEntry[0].focus;
		} else if (deletedEntry[0].focus > 0) {
			this.race.stages[this.stageIndex].dashboard.focusTokens += deletedEntry[0].focus;
		}

		this.race.stages[this.stageIndex].dashboard.gearDamage -= deletedEntry[0].damage.gear;
		this.race.stages[this.stageIndex].dashboard.brakeDamage -= deletedEntry[0].damage.brake;
		this.race.stages[this.stageIndex].dashboard.coastDamage -= deletedEntry[0].damage.coast;

		// find the last gear entry (regardless which entry was deleted)
		this.race.stages[this.stageIndex].dashboard.gear = this.race.stages[this.stageIndex].log[this.race.stages[this.stageIndex].log.length-1].gear;

		// find the lastest weather condition
		if (deletedEntry[0].weatherChange) {
			// switch the weather dashboard
			if (this.race.stages[this.stageIndex].dashboard.weather == Weather.dry) {
				this.race.stages[this.stageIndex].dashboard.weather = Weather.wet;
			} else if (this.race.stages[this.stageIndex].dashboard.weather == Weather.wet) {
				this.race.stages[this.stageIndex].dashboard.weather = Weather.dry;
			}
			this.getDicePool();
		}

		this.totalTime();

		this.saveRace(this.race);
		/*this.output();*/
	}

	// ==========================================
	// WEATHER CHANGE
	// ==========================================
	weatherChange():void {
		this.metrics('weather change');

		this.turn.weatherChange = !this.turn.weatherChange;

		// switch the weather dashboard
		if (this.race.stages[this.stageIndex].dashboard.weather == Weather.dry) {
			this.race.stages[this.stageIndex].dashboard.weather = Weather.wet;
		} else if (this.race.stages[this.stageIndex].dashboard.weather == Weather.wet) {
			this.race.stages[this.stageIndex].dashboard.weather = Weather.dry;
		}

		this.entry();

	}

	// ==========================================
	// PITSTOP
	// ==========================================
	pitstop(gear:string):void {
		this.metrics('pit stop');

		this.turn.pitstop = !this.turn.pitstop;
		if (this.turn.pitstop) {
			this.turn.pitGear = gear;
		} else {
			this.turn.pitGear = '';
		}

		this.entry();
	}

	tyreChange(tyres):void {
		this.tyreSelect = tyres;
		this.entry();
	}

	
	// ==========================================
	// INIT APP
	// ==========================================
	ngOnInit() {
		// $(document).foundation();
		if (this.localstorage.isSaved()) {
			this.loadRace();
			this.resetTurn();
		} else {
			this.router.navigate(['/', 'welcome']);
		}

  	}

}
