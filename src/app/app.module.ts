import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { SearchFlightsComponent } from './search-flights/search-flights.component';
import { ResultsComponent } from './results/results.component';

import { DropdownInputComponent, HeaderComponent } from './components';

import { AirportsService } from './services/airports.service';
import { FlightsService } from './services/flights.service';

import { FlightsStore, FlightInfoStore } from './stores';

const routes = [
  { path: '', component: SearchFlightsComponent},
  { path: 'results', component: ResultsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    SearchFlightsComponent,
    ResultsComponent,
    DropdownInputComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    AirportsService, 
    FlightsService,
    FlightsStore,
    FlightInfoStore
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
