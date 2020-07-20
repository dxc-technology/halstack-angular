import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-autocomplete-synchronous-controlled',
  templateUrl: './autocomplete-synchronous-controlled.component.html',
  styleUrls: ['./autocomplete-synchronous-controlled.component.scss']
})
export class AutocompleteSyncControlledComponent implements OnInit {

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

  value = "";

  onChange(value){
    console.log(value);
    this.value = value;
  }

  constructor() { }

  ngOnInit() {
  }

}
