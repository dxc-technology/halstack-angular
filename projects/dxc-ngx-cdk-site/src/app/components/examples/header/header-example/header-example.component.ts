import { Component, OnInit, Inject } from '@angular/core';
import { Example } from '../../../../model/example';
import { ExampleService } from '../../../../service/example.service';
@Component({
  selector: 'app-header-example',
  templateUrl: './header-example.component.html',
  styleUrls: ['./header-example.component.scss']
})
export class HeaderExampleComponent implements OnInit {


  examples: Array<Example>;

  constructor(@Inject("ExampleService") private exampleService: ExampleService) {
    this.examples = new Array();
  }

  ngOnInit(): void {
  }

}
