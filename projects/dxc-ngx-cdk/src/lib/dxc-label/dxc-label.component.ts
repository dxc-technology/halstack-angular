import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { RequiredFormat } from './../models/startup/configuration.model';
import { ConfigurationsetupService } from './../services/startup/configurationsetup.service';
import { Component, OnInit, Input, OnChanges, SimpleChanges, ChangeDetectionStrategy, ChangeDetectorRef, ViewChild, ElementRef } from '@angular/core';
import { MatTooltip } from '@angular/material/tooltip';
@Component({
  selector: 'dxc-label',
  templateUrl: './dxc-label.component.html',
  styleUrls: ['./dxc-label.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DxcLabelComponent implements OnInit, OnChanges {
  @Input() text = '';
  @Input() id: string;
  @Input() required = false;
  @Input('infotooltip') infoToolTip = false;
  @Input('infotooltiptext') infoToolTipText = '';
  @Input('infotooltippos') infoToolTipPos = 'right';
  @Input('showinfotooltip') showInfoToolTip = false;

  @ViewChild('tooltip1', { static: false }) matTooltip;

  requiredFormat = RequiredFormat.STAR;
  requiredFormatList = RequiredFormat;

  constructor(private changeDetecorRef: ChangeDetectorRef,
    private configService: ConfigurationsetupService) {
    this.requiredFormat = this.configService.configservice !== undefined ? this.configService.configservice.REQUIRED : 0;
  }

  ngOnInit() {
  }

  ngOnChanges(change: SimpleChanges) {
    if (change.text !== undefined
      && (change.text.currentValue !== change.text.previousValue)) {
      this.changeDetecorRef.markForCheck();
    }

  }

  infoHide = () => {
    if (this.matTooltip) {
      this.matTooltip.hide();
    }
  }
  infoShow = () => {
    if (this.matTooltip) {
      this.matTooltip.show();
    }
  }
}
