import { Component } from '@angular/core';

@Component({
  selector: 'accordion-group-import',
  templateUrl: './accordion-group-import.component.html'
})
export class AccordionGroupImportComponent {

  bindCode = `
    import { DxcAccordionGroupModule } from '@dxc-technology/halstack-angular';

    @NgModule({
      imports: [
        DxcAccordionGroupModule,
      ]
    })
    export class AppComponent { }
  `;

  constructor() { }
}
