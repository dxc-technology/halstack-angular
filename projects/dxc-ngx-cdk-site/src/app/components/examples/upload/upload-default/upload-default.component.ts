import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default-upload',
  templateUrl: './upload-default.component.html',
  styleUrls: ['./upload-default.component.scss']
})
export class UploadDefaultComponent implements OnInit {

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
