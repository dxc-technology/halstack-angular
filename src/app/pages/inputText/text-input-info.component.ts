import { Component } from '@angular/core';

@Component({
  selector: 'text-info',
  templateUrl: './text-input-info.component.html',
  styleUrls: ['./text-input-info.component.scss']
})
export class TextInputInfoComponent {

  inputValue = ""
  constructor()  {}
  onChange(value) {
    this.inputValue = value;
  }

  onPrefixClick() {
    console.debug("prefix Clicked");
  }

  onSuffixClick() {
    console.debug("suffix Clicked");
  }
}
