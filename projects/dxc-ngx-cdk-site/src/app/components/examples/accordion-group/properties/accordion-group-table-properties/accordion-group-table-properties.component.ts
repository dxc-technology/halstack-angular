import { Component, OnInit, Input } from '@angular/core';
import { DataPropertiesTable } from 'src/app/model/data-properties-table';
import { Router } from '@angular/router';

@Component({
  selector: 'accordion-group-table-properties',
  templateUrl: './accordion-group-table-properties.component.html'
})
export class AccordionGroupTablePropertiesComponent implements OnInit {

  @Input()
  tablePropertiesExample: Array<DataPropertiesTable>;

  constructor(private router: Router) { 
    this.tablePropertiesExample = new Array<DataPropertiesTable>();
  }

  ngOnInit(): void {
        
  }

  navigateToRoute() {
    this.router.navigate(
      ["components/accordion"]
    );
  }

}
