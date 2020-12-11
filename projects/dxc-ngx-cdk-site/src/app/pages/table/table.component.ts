import { Component, OnInit } from '@angular/core';
import { Section } from '../../model/sections';
import { TableExampleComponent } from '../../components/examples/table/table-example/table-example.component';
import { TableApiComponent } from '../../components/examples/table/table-api/table-api.component';
import { TableThemeComponent } from '../../components/examples/table/table-theme/table-theme.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  headingMargin = {
    bottom: 'medium'
  }

  sections: Array<Section>;
  tagImg: string;

  constructor(){
    this.sections = new Array<Section>();
    this.tagImg = './assets/img/ready.svg';
  }

  ngOnInit() {
    this.sections.push( 
      {id: 0, label: 'API', selector: 'table-api', component: TableApiComponent},
      {id: 1, label: 'THEMING', selector: 'table-theme', component: TableThemeComponent},
      {id: 2, label: 'EXAMPLES', selector: 'examples-component-table', component: TableExampleComponent}
    );
  }

}
