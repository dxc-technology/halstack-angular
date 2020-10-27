import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-autocomplete-asynchronous-uncontrolled',
  templateUrl: './autocomplete-asynchronous-uncontrolled.component.html',
  styleUrls: ['./autocomplete-asynchronous-uncontrolled.component.scss']
})
export class AutocompleteAsyncUncontrolledComponent implements OnInit {

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

  autocompleteAsync(value){
    this.filteredOptions = this.countries.filter(option =>
      option.toLowerCase().includes(value.toLowerCase())
    );
    return of(this.filteredOptions).pipe(switchMap((options) => of(options).pipe(delay(1000))));
    
  }

  constructor() { }

  ngOnInit() {
    this.autocompleteAsync = this.autocompleteAsync.bind(this);
  }
  
  onChange($event){
    console.log('Onchange has been triggered');
  }

}
