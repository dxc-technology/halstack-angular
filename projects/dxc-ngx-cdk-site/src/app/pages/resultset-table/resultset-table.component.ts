import { Component, OnInit } from '@angular/core';
import { Section } from '../../model/sections';
import { ResultsetTablePropertiesComponent } from '../../components/examples/resultset-table/properties/resultset-table-properties/resultset-table-properties.component';
import { ResultsetTableExampleComponent } from '../../components/examples/resultset-table/resultset-table-example/resultset-table-example.component';
import { ResultsetTableDirectivesComponent } from '../../components/examples/resultset-table/resultset-table-directives/resultset-table-directives.component';


@Component({
  selector: 'app-resultset-table',
  templateUrl: './resultset-table.component.html',
  styleUrls: ['./resultset-table.component.scss']
})
export class ResultsetTableComponent implements OnInit {

  sections: Array<Section>;
  tagImg: string;

  constructor() {
    this.sections = new Array<Section>();
    this.tagImg = './assets/img/experimental.svg';
   }

  ngOnInit() {
    this.sections.push( 
      {id: 0, label: 'PROPERTIES', selector: 'examples-properties-resultset-table', component: ResultsetTablePropertiesComponent},
      {id: 1, label: 'DIRECTIVES',selector: 'resultset-table-directives', component: ResultsetTableDirectivesComponent},
      {id: 2, label: 'EXAMPLES', selector: 'examples-component-resultset-table', component: ResultsetTableExampleComponent}
    );
  }

}
