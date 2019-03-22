import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WeatherService } from './../../services/weather-service.service';
import { CatFactsService } from './../../services/cat-facts.service';
import { AgeOfEmpiresService } from './../../services/age-of-empires-service.service';
import { ChuckNorrisService } from './../../services/chuck-norris-service.service';
import 'rxjs';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss'],
  providers: [
    WeatherService,
    CatFactsService,
    AgeOfEmpiresService,
    ChuckNorrisService
  ]
})
export class DashboardPageComponent implements OnInit {

  public weatherDetail: Array<any>;
  public catFactsDetail: Array<any>;
  public ageOfEmpiresDetail: Array<any>;
  public chuckNorrisDetail: Array<any>;

  constructor(
    protected router: Router,
    protected weatherService: WeatherService,
    protected catFactsService: CatFactsService,
    protected ageOfEmpiresService: AgeOfEmpiresService,
    protected chuckNorrisService: ChuckNorrisService) {}

  ngOnInit() {
    if (!sessionStorage.getItem('AuthToken')) {
      this.router.navigate(['/']);
    }

    this.weatherService.getWeekForecast()
    .subscribe(
      weather => {
      this.weatherDetail = weather.consolidated_weather;
    });

    this.catFactsService.getCatFacts()
    .subscribe(
      catfact => {
      this.catFactsDetail = catfact;
      console.log(catfact.fact); // It logs to the console but won't show in dashboard-page-component
    });

    this.ageOfEmpiresService.getAoeCiv()
    .subscribe(
      ageofempires => {
      this.ageOfEmpiresDetail = ageofempires.civilizations;
    });

    this.chuckNorrisService.getChuckNorrisJoke()
    .subscribe(
      chucknorris => {
      this.chuckNorrisDetail = chucknorris.value;
      console.log(chucknorris.value.joke);
    });
  }
}