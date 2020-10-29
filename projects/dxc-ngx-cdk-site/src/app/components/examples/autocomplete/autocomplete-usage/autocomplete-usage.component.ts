import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-autocomplete-usage",
  templateUrl: "./autocomplete-usage.component.html",
  styleUrls: ["./autocomplete-usage.component.scss"]
})
export class AutocompleteUsageComponent implements OnInit {

  underline:boolean = true;

  navigateToRoute() {
    this.router.navigate(
      ["components/input"]
    );
  }

  bindCode = `
  ngOnInit() {
    this.autocompleteAsync = this.autocompleteAsync.bind(this);
  }
  autocompleteAsync(value){
    this.filteredOptions = this.countries.filter(option =>
      option.toLowerCase().includes(value.toLowerCase())
    );
    return of(this.filteredOptions).pipe(switchMap((options) => of(options).pipe(delay(1000))));
    
  }`;

  constructor(private router: Router) {}

  ngOnInit() {}
}
