import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-input-prefix-suffix',
  templateUrl: './text-input-prefix-suffix.component.html',
  styleUrls: ['./text-input-prefix-suffix.component.scss']
})
export class TextInputPrefixSuffixComponent implements OnInit {

  inputValue: string;
  homeLogo = './assets/img/home.svg';
  favoriteLogo = './assets/img/text_fields-24px.svg';

  constructor() { }

  ngOnInit() {
  }

  onChange(value: string) {
    this.inputValue = value;
  }

}
