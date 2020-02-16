import { BrowserModule }     from '@angular/platform-browser';
import { NgModule }          from '@angular/core';
import { FormsModule }       from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule }  from './app-routing.module';
import { AppComponent }      from './app.component';
import { RaceComponent }     from './race/race.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ConfigureRaceComponent } from './configure-race/configure-race.component';

@NgModule({
  declarations: [
    AppComponent,
    RaceComponent,
    WelcomeComponent,
    ConfigureRaceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
