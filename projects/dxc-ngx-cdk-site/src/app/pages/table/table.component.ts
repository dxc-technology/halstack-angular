import { Component, OnInit } from '@angular/core';
import { Section } from '../../model/sections';
import { TableExampleComponent } from '../../components/examples/table/table-example/table-example.component';
import { TableApiComponent } from '../../components/examples/table/table-api/table-api.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  sections: Array<Section>;
  tagImg: string;

  constructor(){
    this.sections = new Array<Section>();
    this.tagImg = './assets/img/ready.svg';
  }

  ngOnInit() {
    this.sections.push( 
      {id: 0, label: 'API', selector: 'table-api', component: TableApiComponent},
      {id: 1, label: 'EXAMPLES', selector: 'examples-component-table', component: TableExampleComponent}
    );
  }

}
