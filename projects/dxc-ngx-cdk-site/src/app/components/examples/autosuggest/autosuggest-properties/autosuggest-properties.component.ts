import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-autosuggest-properties',
  templateUrl: './autosuggest-properties.component.html'
})
export class AutosuggestPropertiesComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToRoute(){
    this.router.navigate(
      ["components/newInputText"]
    );
  }

}
