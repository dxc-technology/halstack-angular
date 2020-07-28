import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'resultset-table-directives',
  templateUrl: './resultset-table-directives.component.html',
  styleUrls: ['./resultset-table-directives.component.scss']
})
export class ResultsetTableDirectivesComponent implements OnInit {

  bindCode = `
  <dxc-resultset-table itemsPerPage="4" [collectionResource]="data" margin="medium">
    <ng-container dxcColumnDef="id">
      <td *dxcCellDef="let item">
          {{item['id']}}
      </td>
    </ng-container>
    <ng-container dxcColumnDef="name" [sortable]="{isSortable:true, propertyName:'name'}">
      <td *dxcCellDef="let item">
          {{item['name']}}
      </td>
    </ng-container>
  </dxc-resultset-table>
  `;

  constructor() { }

  ngOnInit() {
  }

}
