import { ConfigurationsetupService } from './../services/startup/configurationsetup.service';
import { List } from 'immutable';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Button } from './../models/startup/configuration.model';


@Component({
  selector: 'dxc-toolbar',
  templateUrl: './dxc-toolbar.component.html',
  styleUrls: ['./dxc-toolbar.component.scss']
})
export class DxcToolbarComponent implements OnInit {
  @Input() toolBarList: List<Button>;
  @Input() allowSearch = true;
  @Input() toolTipPos: string = 'below';
  @Input() searchAccessKey: string = '';
  @Output() onClick: EventEmitter<Button>;
  @Output() searchClick: EventEmitter<string>;

  buttonMapping: { [key: string]: string };
  resources: { [key: string]: string };
  constructor(public configService: ConfigurationsetupService) {
    this.onClick = new EventEmitter<Button>();
    this.searchClick = new EventEmitter<string>();
  }

  ngOnInit() {
  }

  onclick = (event: Button) => {
    this.onClick.emit(event);
  }

  public onInput(event: any) {
    this.searchClick.emit(event.target.value);
  }
}
