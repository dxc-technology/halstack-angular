import { Component, OnInit } from '@angular/core';
import { Section } from 'src/app/model/sections';
import { PaginatorExampleComponent } from '../../components/examples/paginator/paginator-example/paginator-example.component';
import { PaginatorApiComponent } from '../../components/examples/paginator/paginator-api/paginator-api.component';

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
      {id:0, label: 'API',selector: 'paginator-api', component: PaginatorApiComponent},
      {id:1, label: 'EXAMPLES', selector: 'examples-component-paginator', component: PaginatorExampleComponent}
    );
  }

}
