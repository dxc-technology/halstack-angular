import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'dxc-paginator',
  templateUrl: './dxc-paginator.component.html',
  styleUrls: ['./dxc-paginator.component.scss']
})
export class DxcPaginatorComponent implements OnInit {

  @Input() currentPage: number;
  @Input() itemsPerPage: number;
  @Input() totalItems: number;
  @Input() paginationActions : Array<string>;

  @Output() firstFunction: EventEmitter<any> = new EventEmitter<any>();
  @Output() nextFunction: EventEmitter<any> = new EventEmitter<any>();
  @Output() prevFunction: EventEmitter<any> = new EventEmitter<any>();
  @Output() lastFunction: EventEmitter<any> = new EventEmitter<any>();

  buttonMargin = {left: 'xxsmall', right: 'xxsmall'};
  firstImgSrc = "../../assets/previousPage.svg";
  prevImgSrc ="../../assets/previous.svg";
  nextImgSrc = "../../assets/next.svg";
  lastImgSrc = "../../assets/nextPage.svg";

  totalPages : number;
  currentPageInternal : number;
  minItemsPerPage : number;
  maxItemsPerPage : number;
  
  showFirst : boolean = false;
  showLast : boolean = false;
  showNext : boolean = false;
  showPrev : boolean = false;

  defaultInputs = new BehaviorSubject<any>({
    currentPage: 1,
    itemsPerPage: 5,
    totalItems: 1,
    paginationActions: 0,
  });
  
  constructor() { 
    this.currentPage = 1;
    this.itemsPerPage = 5;
    this.totalItems = 1;
  }

  ngOnInit() {
    this.calculateInternalValues(this.defaultInputs.getValue());
    this.setButtonVisibility(this.paginationActions);
  }

  public ngOnChanges(changes: SimpleChanges): void {
    const inputs = Object.keys(changes).reduce((result, item) => {
      result[item] = changes[item].currentValue;
      return result;
    }, {});
    this.defaultInputs.next({ ...this.defaultInputs.getValue(), ...inputs });
    this.calculateInternalValues(this.defaultInputs.getValue());
  }

  public onFirstHandler($event: any): void {
    this.firstFunction.emit(1);
  }

  public onNextHandler($event: any): void {
    this.nextFunction.emit(+this.currentPage + 1);
  }

  public onPrevHandler($event: any): void {
    this.prevFunction.emit(+this.currentPage - 1);
  }

  public onLastHandler($event: any): void {
    this.lastFunction.emit(this.totalPages);
  }

  private setButtonVisibility(paginationActions : Array<string>) {
    if (paginationActions) {
      paginationActions.forEach(item => {
        switch (item) {
          case 'first' : this.showFirst = true;
                        break;
          case 'next' : this.showNext = true;
                        break;
          case 'prev' : this.showPrev = true;
                        break;
          case 'last' : this.showLast = true;
                        break;
        };
      });
    } else {
      this.showFirst = true;
      this.showNext = true;
      this.showPrev = true;
      this.showLast = true;
    }
  }

  private calculateInternalValues(input : any) {
    this.totalPages = Math.ceil(input.totalItems / input.itemsPerPage);
    this.currentPageInternal = input.currentPage === -1 ? input.totalPages : input.currentPage;
    this.minItemsPerPage = this.currentPageInternal === 1 ? this.currentPageInternal : (this.currentPageInternal - 1) * input.itemsPerPage + 1;
    this.maxItemsPerPage = this.minItemsPerPage - 1 + input.itemsPerPage > input.totalItems ? input.totalItems : this.minItemsPerPage - 1 + input.itemsPerPage;
  }
}