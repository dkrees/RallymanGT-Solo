import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RaceComponent } from './race/race.component';
import { WelcomeComponent } from './welcome/welcome.component'; 
import { ConfigureRaceComponent } from './configure-race/configure-race.component'; 
import { FinishRaceComponent } from './finish-race/finish-race.component';

const routes: Routes = [
	{ path: 'race', component: RaceComponent },
	{ path: 'welcome', component: WelcomeComponent },
	{ path: 'configure-race/:stage', component: ConfigureRaceComponent },
	{ path: 'finish-race', component: FinishRaceComponent },
	{ path: '', redirectTo: '/welcome', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
