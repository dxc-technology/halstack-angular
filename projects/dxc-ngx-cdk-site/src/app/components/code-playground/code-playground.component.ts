import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-code-playground',
  templateUrl: './code-playground.component.html',
  styleUrls: ['./code-playground.component.scss']
})
export class CodePlaygroundComponent implements OnInit {
  @Input() type;

  @Input() code;

  editorOptions;

  constructor() { }

  ngOnInit() {
    switch (this.type) {
      case 'TS':
        this.editorOptions = {theme: 'vs-dark', language: 'typescript', automaticLayout:true, readOnly: true};
        break;
      case 'HTML':
        this.editorOptions = {theme: 'vs-dark', language: 'html', automaticLayout:true, readOnly: true};
        break;
      case 'CONSOLE':
        this.editorOptions = {theme: 'vs-dark', language: 'coffeescript', automaticLayout:true, readOnly: true};
        break;
      default:
        this.editorOptions = {theme: 'vs-dark', language: 'css', automaticLayout:true, readOnly: true};
        break;
    }
  }
}
