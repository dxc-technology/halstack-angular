import { Component, OnInit } from '@angular/core';
import { Section } from 'src/app/model/sections';
import { AutocompleteExampleComponent } from 'src/app/components/examples/autocomplete/autocomplete-example/autocomplete-example.component';
import { AutocompleteUsageComponent } from 'src/app/components/examples/autocomplete/autocomplete-usage/autocomplete-usage.component';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: []
})
export class AutocompleteComponent implements OnInit {
  sections: Array<Section>;
  tagImg: string;

  constructor(){
    this.sections = new Array<Section>();
    this.tagImg = './assets/img/ready.svg';
  }

   ngOnInit() { 
    this.sections.push( 
      {id:0, label: 'USAGE NOTES',selector: 'autocomplete-usage', component: AutocompleteUsageComponent},
      {id:1, label: 'EXAMPLES', selector: 'examples-component-autocomplete', component: AutocompleteExampleComponent}
    );
  }

}
