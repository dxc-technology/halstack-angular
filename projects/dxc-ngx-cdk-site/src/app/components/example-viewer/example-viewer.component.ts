import { Component, OnInit, Input } from '@angular/core';
import { Example } from 'src/app/model/example';
 
@Component({
  selector: 'app-example-viewer',
  templateUrl: './example-viewer.component.html',
  styleUrls: ['./example-viewer.component.scss']
})
export class ExampleViewerComponent implements OnInit {

  @Input()
  id:string;

  @Input()
  item: Example; 

  visible = false;

  constructor() { }

  ngOnInit() {
  }

  changeVisibility(){
    this.visible = !this.visible;
  }

  ngAfterViewInit(): void {
  }
  

}
