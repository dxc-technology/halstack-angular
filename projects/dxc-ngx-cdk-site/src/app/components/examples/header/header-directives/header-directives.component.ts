import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'header-directives',
  templateUrl: './header-directives.component.html',
  styleUrls: ['./header-directives.component.scss']
})
export class HeaderDirectivesComponent implements OnInit {

  constructor() { }

  bindCode = `
  <dxc-header>
    <div id="responsive">
      <a isClosable>test</a>
    </div>  
  </dxc-header>
  `;

  ngOnInit() {
  }

}
