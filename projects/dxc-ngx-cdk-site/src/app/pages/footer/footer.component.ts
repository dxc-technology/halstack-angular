import { Component, OnInit } from '@angular/core';
import { Section } from '../../model/sections';
import { FooterTablePropertiesComponent } from '../../components/examples/footer/properties/footer-table-properties/footer-table-properties.component';
import { FooterExampleComponent } from '../../components/examples/footer/footer-example/footer-example.component';
import { FooterImportComponent } from '../../components/examples/footer/footer-import/footer-import.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  sections: Array<Section>;
  tagImg: string;

  constructor(){
    this.sections = new Array<Section>();
    this.tagImg = './assets/img/ready.svg';
  }

  ngOnInit() {
    this.sections.push( 
      {id:0, label: 'PROPERTIES',selector: 'examples-properties-footer', component: FooterTablePropertiesComponent},
      {id:1, label: 'MODULE', selector: 'footer-import', component: FooterImportComponent},
      {id:2, label: 'EXAMPLES', selector: 'examples-component-footer', component: FooterExampleComponent}
      );
  }

}
