import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/internal/operators';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-autocomplete-dark',
  templateUrl: './autocomplete-dark.component.html',
  styleUrls: ['./autocomplete-dark.component.scss']
})
export class AutocompleteDarkComponent implements OnInit {

  countries = [
    "Albania",
    "Andorra",
    "Armenia",
    "Austria",
    "Azerbaijan",
    "Belarus",
    "Belgium",
    "Bosnia and Herzegovina",
    
  ];

  filteredOptions = this.countries;

  value = "";

  onChange(value){
    this.value  = value;
  }

  autocompleteAsync(){
    this.filteredOptions = this.countries.filter(option =>
      option.toLowerCase().includes(this.value.toLowerCase())
    );
    return of(this.filteredOptions).pipe(switchMap((options) => of(options).pipe(delay(1000))));
    
  }

  constructor() { }

  ngOnInit() {
    this.autocompleteAsync = this.autocompleteAsync.bind(this);
  }

}
