import { Component, OnInit, Input } from '@angular/core';
import { DataPropertiesTable } from 'src/app/model/data-properties-table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-text-input-table-properties',
  templateUrl: './text-input-table-properties.component.html',
  styleUrls: ['./text-input-table-properties.component.scss']
})
export class TextInputTablePropertiesComponent implements OnInit {

  @Input()
  tablePropertiesExample: Array<DataPropertiesTable>;

  constructor(private router: Router) { 
    this.tablePropertiesExample = new Array<DataPropertiesTable>();
  }

  ngOnInit() {
  }

  navigateToRoute() {
    this.router.navigate(['/components', {outlets: { components: ["autocomplete"]}}], {skipLocationChange: true});
  }

}
