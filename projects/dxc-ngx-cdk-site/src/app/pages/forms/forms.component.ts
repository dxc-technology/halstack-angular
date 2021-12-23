import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  controlledValue = "";


  get name(): any { return  this.controlledValue}

  location='';

  testForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.testForm = new FormGroup({
      'nameInput': new FormControl('Culo', Validators.required)
    ,  'location': new FormControl('', Validators.required)})
  }

  set name(v: any){
    this.controlledValue = v;
  }

  onSubmit(event){
    event.preventDefault();
    console.log(this.testForm);
  }

}
