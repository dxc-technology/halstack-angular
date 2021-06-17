import { Component, HostBinding, OnInit } from '@angular/core';
import { Stylable } from '../../components/theme-builder/model/stylable';
import { css } from 'emotion';
@Component({
  templateUrl: './theme-builder.component.html'})
export class ThemeBuilderComponentPage implements OnInit, Stylable {

  @HostBinding("class") className;

  constructor() { }

  ngOnInit(): void {
    this.className = this.getDynamicStyle();
  }

  getDynamicStyle = () =>  
  css`
  .tbMainContainer{
    display: flex;
  }`;

}
