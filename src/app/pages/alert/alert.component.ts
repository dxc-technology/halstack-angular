import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {



  isVisibleInfoAlert =  true; 
  isVisibleWarningAlert =  true;
  isVisibleSuccessAlert =  true;
  isVisibleErrorAlert =  true;
  isVisibleModalAlert = false ; 
  constructor() { }

  ngOnInit() {
  }

  setVisibleInfoAlert (){
    this.isVisibleInfoAlert =  !this.isVisibleInfoAlert ;
  };

  setVisibleWarningAlert(){
    this.isVisibleWarningAlert =  !this.isVisibleWarningAlert ;
  };

  setVisibleSuccessAlert(){
    this.isVisibleSuccessAlert = !this.isVisibleSuccessAlert ;
  };

  setVisibleErrorAlert (){
    this.isVisibleErrorAlert =  !this.isVisibleErrorAlert;
  };

  setVisibleModalAlert() {
    this.isVisibleModalAlert =  !this.isVisibleModalAlert ;
  };

}
