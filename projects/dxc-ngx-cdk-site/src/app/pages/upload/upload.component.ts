import { Component, OnInit } from '@angular/core';
import { Section } from 'src/app/model/sections';
import {UploadExampleComponent} from '../../components/examples/upload/upload-example/upload-example.component';
import { UploadApiComponent } from '../../components/examples/upload/upload-api/upload-api.component';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {
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
      {id:0, label: 'API',selector: 'upload-api', component: UploadApiComponent},
      {id:1, label: 'EXAMPLES', selector: 'examples-component-upload', component: UploadExampleComponent}
    );
  }

}
