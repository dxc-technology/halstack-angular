import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spinner-preview',
  templateUrl: './spinner-preview.component.html'
})
export class SpinnerPreviewComponent implements OnInit {
  isVisible: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  showModal() {
    this.isVisible = true;
    this.fetchData().then(() => {
      this.isVisible = false;
    });
  }

  fetchData = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 3000);
    });
  };

}
