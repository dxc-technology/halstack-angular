import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  SimpleChanges,
  HostBinding,
} from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { coerceNumberProperty, coerceArray } from "@angular/cdk/coercion";
import { css } from "@emotion/css";

@Component({
  selector: "dxc-paginator",
  templateUrl: "./dxc-paginator.component.html",
  styleUrls: ["./dxc-paginator.component.scss"],
})
export class DxcPaginatorComponent implements OnInit {
  @Input()
  get currentPage(): number {
    return this._currentPage;
  }
  set currentPage(value: number) {
    this._currentPage = coerceNumberProperty(value);
  }
  private _currentPage;

  @Input()
  get itemsPerPage(): number {
    return this._itemsPerPage;
  }
  set itemsPerPage(value: number) {
    this._itemsPerPage = coerceNumberProperty(value);
  }
  private _itemsPerPage;

  @Input()
  get totalItems(): number {
    return this._totalItems;
  }
  set totalItems(value: number) {
    this._totalItems = coerceNumberProperty(value);
  }
  private _totalItems;

  @Input()
  get paginationActions(): Array<string> {
    return this._paginationActions;
  }
  set paginationActions(value: Array<string>) {
    this._paginationActions = coerceArray(value);
  }
  private _paginationActions;

  @Input()
  get tabIndexValue(): number {
    return this._tabIndexValue;
  }
  set tabIndexValue(value: number) {
    this._tabIndexValue = coerceNumberProperty(value);
  }
  private _tabIndexValue;

  @Input() public itemsPerPageOptions: number[];
  @Input() public showGoToPage: boolean = false;
  @Input() public customDataOnPaging: boolean = true;
  @Output() onGoToPage: EventEmitter<any> = new EventEmitter<any>();
  @Output() itemsPerPageFunction: EventEmitter<any> = new EventEmitter<any>();

  @HostBinding("class") className;

  buttonMargin = { left: "xxsmall", right: "xxsmall" };
  selectMargin = { left: "xxsmall", right: "small" };
  firstImgSrc = "assets/previousPage.svg";
  prevImgSrc = "assets/previous.svg";
  nextImgSrc = "assets/next.svg";
  lastImgSrc = "assets/nextPage.svg";

  totalPages: number;
  currentPageInternal: number;
  minItemsPerPage: number;
  maxItemsPerPage: number;
  selectOptions: {
    label: string;
    value: any;
  }[];

  showFirst: boolean = false;
  showLast: boolean = false;
  showNext: boolean = false;
  showPrev: boolean = false;

  defaultInputs = new BehaviorSubject<any>({
    currentPage: 1,
    itemsPerPage: 5,
    totalItems: 1,
    paginationActions: 0,
    itemsPerPageOptions: [],
    tabIndexValue: 0
  });

  constructor() {
    this.currentPage = 1;
    this.itemsPerPage = 5;
    this.totalItems = 1;
  }

  ngOnInit() {
    this.calculateInternalValues(this.defaultInputs.getValue());
    this.setButtonVisibility(this.paginationActions);
    this.className = `${this.getDynamicStyle()}`;
  }

  public ngOnChanges(changes: SimpleChanges): void {
    this.selectOptions = [];
    if (this.itemsPerPageOptions) {
      this.itemsPerPageOptions.map((value) => {
        const option = { label: value.toString(), value: value };
        this.selectOptions.push(option);
      });
    }
    const inputs = Object.keys(changes).reduce((result, item) => {
      result[item] = changes[item].currentValue;
      return result;
    }, {});
    this.defaultInputs.next({ ...this.defaultInputs.getValue(), ...inputs });
    this.calculateInternalValues({
      ...this.defaultInputs.getValue(),
      ...inputs,
    });
    this.className = `${this.getDynamicStyle()}`;
  }

  public onFirstHandler($event: any): void {
    let params: any = 1;
    if (this.customDataOnPaging) {
      params = { 'pageNumber': 1, 'eventHandler': 'First' }
    }
    this.onGoToPage.emit(params);
  }

  public onNextHandler($event: any): void {
    let params: any = +this.currentPage + 1;
    if (this.customDataOnPaging) {
      params = { 'pageNumber': +this.currentPage + 1, 'eventHandler': 'Next' }
    }
    this.onGoToPage.emit(params);
  }

  public onPrevHandler($event: any): void {
    let params: any = +this.currentPage - 1;
    if (this.customDataOnPaging) {
      params = { 'pageNumber': +this.currentPage - 1, 'eventHandler': 'Prev' }
    }
    this.onGoToPage.emit(params);
  }

  public onLastHandler($event: any): void {
    let params: any = this.totalPages;
    if (this.customDataOnPaging) {
      params = { 'pageNumber': this.totalPages, 'eventHandler': 'Last' }
    }
    this.onGoToPage.emit(params);
  }

  public onItemsPerPageHandler($event: any): void {
    this.itemsPerPageFunction.emit($event);
  }

  goToPageHandler($event: any) {
    this.onGoToPage.emit($event);
  }

  private setButtonVisibility(paginationActions: Array<string>) {
    if (paginationActions) {
      paginationActions.forEach((item) => {
        switch (item) {
          case "first":
            this.showFirst = true;
            break;
          case "next":
            this.showNext = true;
            break;
          case "prev":
            this.showPrev = true;
            break;
          case "last":
            this.showLast = true;
            break;
        }
      });
    } else {
      this.showFirst = true;
      this.showNext = true;
      this.showPrev = true;
      this.showLast = true;
    }
  }

  private calculateInternalValues(input: any) {
    this.totalPages = Math.ceil(input.totalItems / input.itemsPerPage);
    this.currentPageInternal =
      input.currentPage === -1 ? this.totalPages : input.currentPage;
    this.minItemsPerPage =
      this.currentPageInternal === 1
        ? this.currentPageInternal
        : (this.currentPageInternal - 1) * input.itemsPerPage + 1;
    this.maxItemsPerPage =
      this.minItemsPerPage - 1 + +input.itemsPerPage > +input.totalItems
        ? input.totalItems
        : this.minItemsPerPage - 1 + +input.itemsPerPage;
  }

  getDynamicStyle() {
    return css`
      .mat-select-trigger {
        margin-top: 10px;
      }
      .mat-button-disabled {
        background-color: transparent !important;
        opacity: 0.3 !important;
      }
    `;
  }
}
