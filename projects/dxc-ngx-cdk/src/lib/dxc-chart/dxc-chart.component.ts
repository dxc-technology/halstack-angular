import { CssUtils } from "../utils";
import {
  Component,
  OnInit,
  Input,
  HostBinding,
  Output,
  EventEmitter,
  SimpleChanges,
  ViewChild,
  OnChanges,
  ContentChildren,
  AfterViewInit
} from "@angular/core";
import { ChartDataSets, ChartType, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'dxc-chart',
  templateUrl: './dxc-chart.component.html',
  providers: [CssUtils],
})
export class DxcChartComponent implements OnInit, OnChanges, AfterViewInit {

  @Input() data: ChartDataSets[];
  @Input() labels: Label[];
  @Input() options: ChartOptions;
  @Input() chartColors: Color[];
  @Input() chartLegend = false;
  @Input() chartType = 'line';
  @Input() chartPlugins = [];
  @Output() onChartClicked = new EventEmitter<any>();
  @Output() onChartHovered = new EventEmitter<any>();
  constructor(private utils: CssUtils) { }

  ngAfterViewInit(): void {

  }

  ngOnChanges(changes: SimpleChanges): void {

  }

  ngOnInit(): void {
  }

  chartHovered = ($event) => {
    this.onChartHovered.emit($event);
  }
  chartClicked = ($event) => {
    this.onChartClicked.emit($event);
  }

}
