import { Component, OnInit } from '@angular/core';
import { Section } from 'src/app/model/sections';
import { TabbedSectionTablePropertiesComponent } from '../../components/examples/tabbed-section/properties/tabbed-section-table-properties/tabbed-section-table-properties.component';
import { TabbedSectionExampleComponent } from '../../components/examples/tabbed-section/tabbed-section-example/tabbed-section-example.component';
import { TabbedSectionNotesComponent } from '../../components/examples/tabbed-section/properties/tabbed-section-notes/tabbed-section-notes.component';
import { TabbedSectionImportComponent } from '../../components/examples/tabbed-section/tabbed-section-import/tabbed-section-import.component';

@Component({
  selector: 'app-tabbed-section-info',
  templateUrl: './tabbed-section-info.component.html',
  styleUrls: ['./tabbed-section-info.component.scss']
})
export class TabbedSectionInfoComponent implements OnInit {

  sections: Array<Section>;
  tagImg: string;

  constructor(){
    this.sections = new Array<Section>();
    this.tagImg = './assets/img/ready.svg';
  }

  ngOnInit() {
    this.sections.push( 
      {id: 0, label: 'PROPERTIES', selector: 'examples-properties-tabbed-section', component: TabbedSectionTablePropertiesComponent},
      {id: 1, label: 'MODULE', selector: 'tabbed-section-import', component: TabbedSectionImportComponent},
      {id: 2, label: 'EXAMPLES', selector: 'examples-component-tabbed-section', component: TabbedSectionExampleComponent},
      {id: 3, label: 'USAGE NOTES', selector: 'examples-notes-tabbed-section', component: TabbedSectionNotesComponent}
    );
  }

}
