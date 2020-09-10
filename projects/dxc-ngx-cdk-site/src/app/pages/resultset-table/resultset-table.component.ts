import { Component, OnInit } from '@angular/core';
import { Section } from '../../model/sections';
import { ResultsetTableExampleComponent } from '../../components/examples/resultset-table/resultset-table-example/resultset-table-example.component';
import { ResultsetTableApiComponent } from '../../components/examples/resultset-table/resultset-table-api/resultset-table-api.component';
import { ResultsetTableThemeComponent } from '../../components/examples/resultset-table/resultset-table-theme/resultset-table-theme.component';


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
      {id: 0, label: 'API', selector: 'resultset-table-api', component: ResultsetTableApiComponent},
      {id: 0, label: 'THEMING', selector: 'resultset-table-theme', component: ResultsetTableThemeComponent},
      {id: 1, label: 'EXAMPLES', selector: 'examples-component-resultset-table', component: ResultsetTableExampleComponent}
    );
  }

}
