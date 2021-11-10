import { Component, OnInit } from '@angular/core';
import { FileData } from '@dxc-technology/halstack-angular';

@Component({
  selector: 'file-input-preview',
  templateUrl: './file-input-preview.component.html'
})
export class FileInputPreviewComponent implements OnInit {

  value: Array<FileData> = [];

  constructor() { }

  ngOnInit(): void {
  }

  callback(event){
    const files = event.map(file =>{
      return {
        ...file,
        error: "there is a new error :)"
      }
    });
    this.value = files;
  }

}
