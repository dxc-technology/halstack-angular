import { Component, OnInit } from '@angular/core';
import { FileData } from '@dxc-technology/halstack-angular';

@Component({
  selector: 'file-input-preview',
  templateUrl: './file-input-preview.component.html'
})
export class FileInputPreviewComponent implements OnInit {

  file = new File(["Employee Referral Bonus Amount"], "Employee Referral Bonus Amount.pdf", {
    type: "text/plain",
  });

  file2 = new File(["PEC2"], "PEC2.odt", {
    type: "application/vnd.oasis.opendocument.text",
  });

  file3 = new File(["Employee Referral Bonus Amount"], "Employee Referral Bonus Amount.pdf", {
    type: "text/plain",
  });

  value: Array<FileData> = [
    {
      data: this.file,
      image: "",
      error: "errrorrrr"
    },{
      data: this.file2,
      image: "",
      error: "errrorrrr"
    },
  ];

  value2: Array<FileData> = []

  constructor() { }

  ngOnInit(): void {
  }

  callback(event){
    const files = event.map(file =>{
      return {
        ...file,
        error: "errrorrrr"
      }
    });
    this.value = files;
    console.log(this.value);
  }

  callback2(event){
    const files = event.map(file =>{
      return {
        ...file,
        error: "this is an error"
      }
    });
    this.value2 = files;
    console.log("this.value2:",this.value2);
  }

}
