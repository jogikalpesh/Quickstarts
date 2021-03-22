import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

const WEATHER_API_ENDPOINT = 'https://app-webapi.azurewebsites.net/WeatherForecast';

type temparature = {
  date?: Date,
  temperatureC: number,
  temperatureF: number,
  summary: string
};

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  temperatures!: temparature[];
  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.getWeatherDetails();
  }

  getWeatherDetails() {
    this.http.get<temparature[]>(WEATHER_API_ENDPOINT)
      .subscribe((temperatures: temparature[]) => {
        this.temperatures = temperatures;
        console.log(this.temperatures);
      });
  }

}
