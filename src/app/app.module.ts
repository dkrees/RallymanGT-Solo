import { BrowserModule }     from '@angular/platform-browser';
import { NgModule }          from '@angular/core';
import { FormsModule }       from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

// tracking
import { Angulartics2Module }  from 'angulartics2';
import { Angulartics2GoogleAnalytics } from 'angulartics2/ga';

import { AppRoutingModule }  from './app-routing.module';
import { AppComponent }      from './app.component';
import { RaceComponent }     from './race/race.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ConfigureRaceComponent } from './configure-race/configure-race.component';
import { FinishRaceComponent } from './finish-race/finish-race.component';

@NgModule({
  declarations: [
    AppComponent,
    RaceComponent,
    WelcomeComponent,
    ConfigureRaceComponent,
    FinishRaceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    Angulartics2Module.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
