import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spinner-overlay',
  templateUrl: './spinner-overlay.component.html',
  styleUrls: ['./spinner-overlay.component.scss']
})
export class SpinnerOverlayComponent implements OnInit {

  isVisible:boolean;

  constructor() { }

  ngOnInit() {
    this.isVisible = false;
  }

  showModal(){
    this.isVisible = true;
    this.fetchData().then(() => {
      this.isVisible = false;
    });
  }

  fetchData = () => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, 3000);
    });
  };

}
