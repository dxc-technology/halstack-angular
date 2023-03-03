import { Component } from '@angular/core';

@Component({
  selector: 'dropdown-info',
  templateUrl: './dropdown-info.component.html',
  styleUrls: ['./dropdown-info.component.scss']
})
export class DropdownInfoComponent {

  constructor() {}

  FileUploadResponse(event)
  {
    //this.files=event;
    //let name = this.parentFormGroup.get('taskManager.Filenames').value;
    if(event[0].eventtype == "PREUPLOAD")
    {
      console.log("pre");
    }
    else if(event[0].eventtype == "POSTUPLOAD"){
      console.log("post");
    }
    else if(event[0].eventtype == "UPLOAD"){
      console.log("upload");
    }
  }
  uploadEvents(event) {
    if(event == "PREUPLOAD")
    {
      console.log("pre");
    }
    else if(event == "POSTUPLOAD"){
      console.log("post");
    }
  }

}
