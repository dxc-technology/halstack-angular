import { Component, OnInit } from '@angular/core';
import { Section } from 'src/app/model/sections';
import { PaginatorTablePropertiesComponent } from '../../components/examples/paginator/properties/paginator-table-properties/paginator-table-properties.component';
import { PaginatorExampleComponent } from '../../components/examples/paginator/paginator-example/paginator-example.component';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit {

  sections: Array<Section>;
  tagImg: string;

  constructor(){
    this.sections = new Array<Section>();
    this.tagImg = './assets/img/ready.svg';
  }

   ngOnInit() { 
    this.sections.push( 
      {id:0, label: 'PROPERTIES',selector: 'examples-properties-paginator', component: PaginatorTablePropertiesComponent},
      {id:1, label: 'EXAMPLES', selector: 'examples-component-paginator', component: PaginatorExampleComponent}
    );
  }

}
