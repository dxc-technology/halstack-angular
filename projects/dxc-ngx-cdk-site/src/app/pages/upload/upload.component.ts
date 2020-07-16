import { Component, OnInit } from '@angular/core';
import { Section } from 'src/app/model/sections';
import {UploadTablePropertiesComponent} from '../../components/examples/upload/properties/upload-table-properties.component';
import {UploadExampleComponent} from '../../components/examples/upload/upload-example/upload-example.component';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {

  sections: Array<Section>;
  tagImg: string;

  constructor(){
    this.sections = new Array<Section>();
    this.tagImg = './assets/img/ready.svg';
  }

   ngOnInit() { 
    this.sections.push( 
      {id:0, label: 'PROPERTIES',selector: 'examples-properties-upload', component: UploadTablePropertiesComponent},
      {id:1, label: 'EXAMPLES', selector: 'examples-component-upload', component: UploadExampleComponent}
    );
  }

}
