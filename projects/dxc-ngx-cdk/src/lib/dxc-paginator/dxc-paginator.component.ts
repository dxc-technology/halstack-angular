import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  SimpleChanges,
  HostBinding,
  ChangeDetectorRef,
} from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { coerceNumberProperty, coerceArray } from "@angular/cdk/coercion";
import { css } from "emotion";
import { Option } from "../dxc-select/interfaces/option.interface";
import { ProgressBarProperties } from "./dxc-paginator.types";

@Component({
  selector: "dxc-paginator",
  templateUrl: "./dxc-paginator.component.html",
  styleUrls: ["./dxc-paginator.component.scss"],
})
export class DxcPaginatorComponent implements OnInit {
  /**
   * Number of the current selected page.
   */
  @Input()
  get currentPage(): number {
    return this._currentPage;
  }
  set currentPage(value: number) {
    this._currentPage = coerceNumberProperty(value);
  }
  private _currentPage = 1;

  /**
   * Number of items per page.
   */
  @Input()
  get itemsPerPage(): number {
    return this._itemsPerPage;
  }
  set itemsPerPage(value: number) {
    this._itemsPerPage = coerceNumberProperty(value);
  }
  private _itemsPerPage = 5;

  /**
   * If true, a select will be displayed with the page numbers to move through them.
   */
  @Input() public showGoToPage: boolean = false;

  /**
   * Array of numbers representing the items per page options.
   * If undefined, the select with items per page options will not be displayed.
   */
  @Input() public itemsPerPageOptions: number[];

  /**
   * Total number of items in the pages.
   */
  @Input()
  get totalItems(): number {
    return this._totalItems;
  }
  set totalItems(value: number) {
    this._totalItems = coerceNumberProperty(value);
  }
  private _totalItems = 1;

  /**
   * Pagination actions to be rendered.
   * In case the property is not defined all actions will be rendered.
   */
  @Input()
  get paginationActions(): Array<"prev" | "next" | "first" | "last"> {
    return this._paginationActions;
  }
  set paginationActions(value: Array<"prev" | "next" | "first" | "last">) {
    this._paginationActions = coerceArray(value);
  }
  private _paginationActions;

  /**
   * Value of the tabindex attribute.
   */
  @Input()
  get tabIndexValue(): number {
    return this._tabIndexValue;
  }
  set tabIndexValue(value: number) {
    this._tabIndexValue = coerceNumberProperty(value);
  }
  private _tabIndexValue = 0;

  /**
   * This event will emit the new page when the user interacts with the page navigation
   * buttons or select. The page number will be passed as a parameter.
   */
  @Output() onGoToPage: EventEmitter<number> = new EventEmitter<number>();

  /**
   * This event will emit in case of the user picks an option for the itemsPerPage select.
   * The value selected will be passed as a parameter.
   */
  @Output() itemsPerPageFunction: EventEmitter<number> =
    new EventEmitter<number>();

  @HostBinding("class") className;

  buttonMargin = { left: "xxsmall", right: "xxsmall" };

  totalPages: number;
  currentPageInternal: number;
  minItemsPerPage: number;
  maxItemsPerPage: number;
  selectOptions: Option[];
  totalPagesOptions: Option[];

  showFirst: boolean = false;
  showLast: boolean = false;
  showNext: boolean = false;
  showPrev: boolean = false;

  defaultInputs = new BehaviorSubject<ProgressBarProperties>({
    currentPage: 1,
    itemsPerPage: 5,
    showGoToPage: false,
    itemsPerPageOptions: [],
    totalItems: 1,
    paginationActions: null,
    tabIndexValue: 0,
  });

  constructor(private cdRef: ChangeDetectorRef) {
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
        const option: Option = {
          label: value.toString(),
          value: value.toString(),
        };
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
    if (this.totalPages > 0) {
      this.totalPagesOptions = [];
      for (let i = 0; i < this.totalPages; i++) {
        const op = i + 1;
        const option: Option = {
          label: op.toString(),
          value: op.toString(),
        };
        this.totalPagesOptions.push(option);
      }
    }
    this.className = `${this.getDynamicStyle()}`;
    this.cdRef.detectChanges();
  }

  public onFirstHandler($event: any): void {
    this.onGoToPage.emit(1);
  }

  public onNextHandler($event: any): void {
    this.onGoToPage.emit(+this.currentPage + 1);
  }

  public onPrevHandler($event: any): void {
    this.onGoToPage.emit(+this.currentPage - 1);
  }

  public onLastHandler($event: any): void {
    this.onGoToPage.emit(this.totalPages);
  }

  public onItemsPerPageHandler(event: any): void {
    this.itemsPerPageFunction.emit(parseInt(event.value));
  }

  goToPageHandler(event: any) {
    this.onGoToPage.emit(parseInt(event.value));
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

  public disabledFirstBtn() {
    return this.currentPageInternal == 1;
  }

  public disabledLastBtn() {
    return this.currentPageInternal == this.totalPages;
  }

  getDynamicStyle() {
    return css`
      .mat-button-disabled {
        background-color: transparent !important;
        opacity: 0.3 !important;
      }
      dxc-select {
        margin-right: 0px;
      }
    `;
  }
}
