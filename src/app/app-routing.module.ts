import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RaceComponent } from './race/race.component';
import { WelcomeComponent } from './welcome/welcome.component'; 
import { ConfigureRaceComponent } from './configure-race/configure-race.component'; 

const routes: Routes = [
	{ path: '', redirectTo: '/welcome', pathMatch: 'full' },
	{ path: 'race', component: RaceComponent },
	{ path: 'welcome', component: WelcomeComponent },
	{ path: 'configure-race', component: ConfigureRaceComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
