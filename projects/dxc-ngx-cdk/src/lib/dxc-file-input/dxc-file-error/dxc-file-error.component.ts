import { ChangeDetectionStrategy, Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'dxc-file-error',
  templateUrl: './dxc-file-error.component.html',
  styleUrls: ['./dxc-file-error.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DxcFileErrorComponent implements OnInit {

  @Input()
  error: string;

  constructor() { }

  ngOnInit(): void {

  }
}
