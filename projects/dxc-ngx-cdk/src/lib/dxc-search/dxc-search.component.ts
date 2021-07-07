import {
  Component, ElementRef, ViewChild, OnInit, AfterViewInit,
  Input, Output, OnChanges, SimpleChanges, EventEmitter, Renderer2
} from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent, MatAutocomplete } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { EAction } from './../models/startup/configuration.model';
export interface IFilter {
  field: string;
  headerName: string;
  chipText: string;
  hide: boolean;
  allowfilter?: boolean;
  type?: string;
  value?: string;
}

@Component({
  selector: 'dxc-search',
  templateUrl: './dxc-search.component.html',
  styleUrls: ['./dxc-search.component.scss']
})
export class DxcSearchComponent implements OnInit, OnChanges, AfterViewInit {
  @Input() filterList: Array<IFilter> = new Array<IFilter>();
  @Input() opertaor = ':';
  @Input() widthcontent = 0;

  @Output() searchEvent: EventEmitter<EAction> = new EventEmitter<EAction>();
  @Output() resultSet: EventEmitter<Array<IFilter>> = new EventEmitter<Array<IFilter>>();

  visible = true;
  selectable = true;
  removable = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  searchCtrl = new FormControl();
  filteredCriteriaList: Observable<Array<IFilter>>;
  resultDisplay: Array<IFilter> = [];
  result: Array<IFilter> = new Array<IFilter>();
  listenerHandler: any;
  allCriteriaList: Array<IFilter> = new Array<IFilter>();
  chipCount = 0;
  // public removeAllFilter = this.removeAll;

  @ViewChild('filterInput', { static: false }) filterInput: ElementRef<HTMLInputElement>;
  @ViewChild('field', { read: ElementRef, static: false }) field: ElementRef;
  @ViewChild('auto', { static: false }) matAutocomplete: MatAutocomplete;
  @ViewChild('chipList', { read: ElementRef, static: false }) chiplist: ElementRef;


  constructor(private el: ElementRef, private renderer: Renderer2) {
    // // this.filteredCriteriaList = this.searchCtrl.valueChanges.pipe(
    // //   startWith(null),
    // //   map((filterCriteriaCol: IFilter | null) => filterCriteriaCol ?
    // //     this._filter(filterCriteriaCol) : this.allCriteriaList.slice()));

    this.filteredCriteriaList = this.searchCtrl.valueChanges
      .pipe(
        startWith(''),
        map(value => (
          (typeof value === 'string') || value === null) ? value : value.headerName),
        map(name => name ? this._filter(name) : this.allCriteriaList.slice())
      );
  }


  ngAfterViewInit(): void {
    setTimeout(() => {
      let el = this.field.nativeElement.querySelector('.mat-form-field-infix');
      el.style.width = 'auto';
      el.style['margin-left'] = '2%';
      el = this.field.nativeElement.querySelector('input.mat-chip-input');
      //// el.style.width = '800px';
      el = this.field.nativeElement.querySelector('mat-form-field-flex');
      if (el) {
        el.style['background-color'] = '#23608a';
        el.style['border-bottom'] = '2px solid white';
      }

    });
  }
  ngOnInit() {


  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.filterList && (!changes.filterList.firstChange && (changes.filterList.previousValue !== changes.filterList.currentValue))) {
      this.allCriteriaList = changes.filterList.currentValue;
      const filteredArray = this.allCriteriaList.filter((filterCol) => {
        return filterCol.allowfilter === true;
      });
      this.allCriteriaList = filteredArray;
    }
  }

  onFocus = (event) => {
    //// this.calcStyle();
    this.searchEvent.emit(EAction.FOCUS);
  }

  onBlur = (event) => {
    // const chipWrapper = (this.el.nativeElement)
    //   .querySelector('.mat-chip-list-wrapper');
    // if (chipWrapper) {
    //   chipWrapper.style.height = '40px';
    //   chipWrapper.style.overflow = 'hidden';
    // }
    this.searchEvent.emit(EAction.BLUR);
  }
  onBlur1 = (event) => {
    this.searchEvent.emit(EAction.BLUR);
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    if ((value || '').trim()) {
      const searchCriteria = value.split(':');
      if (searchCriteria.length === 2) {
        if (value.split(':')[1] === '') {
          return;
        }
        const valueFilter: Array<IFilter> = this.allCriteriaList
          .filter((option, index) => option.headerName.toLowerCase()
            .indexOf(searchCriteria[0].toLowerCase().trim()) === 0);

        if (valueFilter && valueFilter.length === 1) {
          valueFilter[0].hide = false;
          const resultSet: IFilter = {
            field: valueFilter[0].field,
            chipText: value,
            headerName: valueFilter[0].headerName,
            value: searchCriteria[1].trim(),
            type: valueFilter[0].type,
            hide: false
          };
          this.result.push(resultSet);
          this.resultDisplay.push(resultSet);
          this.searchEvent.emit(EAction.ADD);
          this.search();

        }
      }
    }

    if (input) {
      input.value = '';
    }

    this.searchCtrl.setValue('');
    setTimeout(() => {
      this.calcStyle();
    }, 0);
  }

  search(): void {
    this.resultSet.emit(this.result);
  }

  remove(filterCriteriaCol: IFilter): void {
    this.remoevFilterOption(filterCriteriaCol);
    this.search();
    setTimeout(() => {
      this.calcStyle();
    }, 0);
  }

  removeAll() {
    const allfilter: Array<IFilter> = [...this.resultDisplay];
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < allfilter.length; i++) {
      this.remove(allfilter[i]);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    //// this.resultDisplay.push(event.option.viewValue);
    let val = event.option.viewValue;
    val = val.replace(':', '');
    val += ':';
    this.filterInput.nativeElement.value = val;
    this.searchEvent.emit(EAction.ADD);
    this.searchCtrl.setValue(null);
  }

  displayFn(user: IFilter): string {
    return user && user.headerName ? user.headerName : '';
  }


  private _filter(name: string): IFilter[] {
    const filterValue = name.toLowerCase();

    return this.allCriteriaList.filter(option => option.headerName.toLowerCase().indexOf(filterValue) === 0);
  }

  private remoevFilterOption(filterCriteriaCol) {
    const index = this.resultDisplay.indexOf(filterCriteriaCol);
    const resultIndex = this.result.indexOf(filterCriteriaCol);
    if (index >= 0) {

      // tslint:disable-next-line: prefer-for-of
      for (let i = 0; i < this.allCriteriaList.length; i++) {
        if (this.allCriteriaList[i].field.toLowerCase() === filterCriteriaCol.field.toLowerCase()) {
          this.allCriteriaList[i].hide = false;
          break;
        }
      }

      this.resultDisplay.splice(index, 1);
      this.result.splice(resultIndex, 1);
      this.searchEvent.emit(EAction.REMOVE);
    }
  }
  private calcStyle() {
    const chipElementList = (this.el.nativeElement as HTMLElement)
      .querySelectorAll('.mat-chip');
    let calcWidth = 0;
    if (chipElementList) {
      this.chipCount = 0;
      // tslint:disable-next-line: prefer-for-of
      for (let i = 0; i < chipElementList.length; i++) {
        calcWidth += chipElementList[i].clientWidth;
        if (calcWidth >= (this.widthcontent - 80)) {

          if (chipElementList.length === (i + 1) && calcWidth < (this.widthcontent - 80)) {

          } else {
            this.chipCount = chipElementList.length - i;
          }
          break;
        }
      }
    }

    if (calcWidth >= (this.widthcontent - 180)) {
      const chipWrapper = (this.el.nativeElement)
        .querySelector('.mat-chip-list-wrapper');
      if (chipWrapper) {
        this.renderer.addClass(chipWrapper, 'content');
        chipWrapper.style.height = '54px';
        chipWrapper.style['overflow-y'] = 'auto';
        // this.renderer.listen(chipWrapper, 'click', () => {
        //   removewrapper(chipWrapper);
        // });
      }
    } else {
      const chipWrapper = (this.el.nativeElement)
        .querySelector('.mat-chip-list-wrapper');
      removewrapper(chipWrapper);
    }

  }
}

function removewrapper(chipWrapper) {
  chipWrapper.style.height = '';
  chipWrapper.style.overflow = '';
  chipWrapper.removeAllListeners();
}
