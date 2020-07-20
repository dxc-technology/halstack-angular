import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-autocomplete-synchronous-uncontrolled',
  templateUrl: './autocomplete-synchronous-uncontrolled.component.html',
  styleUrls: ['./autocomplete-synchronous-uncontrolled.component.scss']
})
export class AutocompleteSyncUncontrolledComponent implements OnInit {

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

  constructor() { }

  ngOnInit() {
  }

}
