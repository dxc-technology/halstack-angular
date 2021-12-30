import { Component, OnInit } from '@angular/core';
import { Section } from '../../model/sections';
import { FooterExampleComponent } from '../../components/examples/footer/footer-example/footer-example.component';
import { FooterApiComponent } from '../../components/examples/footer/footer-api/footer-api.component';

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
      {id:0, label: 'API',selector: 'footer-api', component: FooterApiComponent},
      {id:1, label: 'EXAMPLES', selector: 'examples-component-footer', component: FooterExampleComponent}
      );
  }

}
