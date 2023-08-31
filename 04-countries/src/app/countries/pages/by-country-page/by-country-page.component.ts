import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';
import { count } from 'rxjs';
@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: [],
})
export class ByCountryPageComponent implements OnInit {
  public countries: Country[] = [];
  public initialvalue: string = '';

  constructor(private countriesService: CountriesService) {}
  ngOnInit(): void {
    this.countries = this.countriesService.cachStore.byCountries.countries;
    this.initialvalue = this.countriesService.cachStore.byCountries.term;
  }

  public searchByCountry(name: string) {
    this.countriesService.searchCountry(name).subscribe((countries) => {
      this.countries = countries;
    });
  }
}
