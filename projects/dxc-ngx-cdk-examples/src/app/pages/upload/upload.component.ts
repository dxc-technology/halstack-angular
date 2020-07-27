import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  async fileUpload(file){
    const result = await new Promise(resolve =>
      setTimeout(resolve, 8000)
    );
    return result;
  }

}
