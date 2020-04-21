import { Component } from '@angular/core';

@Component({
  selector: 'text-info',
  templateUrl: './text-input-info.component.html',
  styleUrls: ['./text-input-info.component.scss']
})
export class TextInputInfoComponent {

  inputValue = "";

  constructor()  {}

  onBlur(value){
    console.log('Blur event ' + value);
  }

  onChange(value){
    this.inputValue  = value;
    console.log('Change event ' + value);
  }

  onChangeUncontrolled(value){
    console.log('Change uncontrolled event ' + value);
  }

  onPrefixClick() {
    console.log('onPrefixClick event');
  }

  onSuffixClick() {
    console.debug('onSuffixClick Clicked');
  }
}
