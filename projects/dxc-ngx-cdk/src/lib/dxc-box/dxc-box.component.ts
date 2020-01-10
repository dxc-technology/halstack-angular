import { Component, OnInit, Input, SimpleChanges, HostBinding } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { css } from "emotion";
import { CssUtils } from '../utils';
@Component({
  selector: 'dxc-box',
  templateUrl: './dxc-box.component.html',
  styleUrls: ['./dxc-box.component.css'],
  providers : [CssUtils]
})
export class DxcBoxComponent implements OnInit {
  @HostBinding("class") className;
  @Input() shadowDepth: number;
  @Input() display:string;
  @Input() margin: any;
  @Input() padding: any;

  defaultInputs = new BehaviorSubject<any>({
    display: 'inline-flex',
    shadowDepth : '2',
    margin: null,
    padding: null
  });

  ngOnChanges(changes: SimpleChanges): void {
      const inputs = Object.keys(changes).reduce((result, item)=> {
      result[item] = changes[item].currentValue;
      return result;
    }, {});
    this.defaultInputs.next({ ... this.defaultInputs.getValue(), ... inputs});
    this.className = `${this.getDynamicStyle(this.defaultInputs.getValue())}`;
  }


  constructor(private utils: CssUtils) { }

  ngOnInit() {
    this.className = `${this.getDynamicStyle(this.defaultInputs.getValue())}`;
  }

  getDynamicStyle(inputs) {
    return css`
      display: ${inputs.display};
      border-radius: 4px;
      overflow: hidden;
  
      ${ this.utils.getBoxShadow(inputs.shadowDepth) }
      ${ this.utils.getMargin('', inputs.margin) }
      ${ this.utils.getMargin('top', inputs.margin.top) }
      ${ this.utils.getMargin('right', inputs.margin.right) }
      ${ this.utils.getMargin('bottom', inputs.margin.bottom) }
      ${ this.utils.getMargin('left', inputs.margin.left) }

      ${ this.utils.getPadding('', inputs.padding) }
      ${ this.utils.getPadding('top', inputs.padding.top) }
      ${ this.utils.getPadding('right', inputs.padding.right) }
      ${ this.utils.getPadding('bottom', inputs.padding.bottom) }
      ${ this.utils.getPadding('left', inputs.padding.left) }

    `;
  }
}
