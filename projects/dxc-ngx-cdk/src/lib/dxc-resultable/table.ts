import { Directionality } from "@angular/cdk/bidi";
import {
  CollectionViewer,
  DataSource,
  isDataSource,
} from "@angular/cdk/collections";
import { DOCUMENT } from "@angular/common";
import {
  AfterContentChecked,
  Attribute,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  Directive,
  ElementRef,
  EmbeddedViewRef,
  Inject,
  Input,
  isDevMode,
  IterableChangeRecord,
  IterableDiffer,
  IterableDiffers,
  OnDestroy,
  OnInit,
  Optional,
  QueryList,
  TemplateRef,
  TrackByFunction,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation,
  ComponentFactoryResolver,
  Output,
  EventEmitter,
} from "@angular/core";
import {
  BehaviorSubject,
  Observable,
  of as observableOf,
  Subject,
  Subscription,
  isObservable,
} from "rxjs";
import { takeUntil } from "rxjs/operators";
import { getTableUnknownDataSourceError } from "./table-errors";
import { DXC_RESULTSET_TABLE } from "./tokens";
import { DxcHeaderRowComponent } from "./components/dxc-header-row/dxc-header-row.component";
import { DxcRowComponent } from "./components/dxc-row/dxc-row.component";
import { DxcColumnDef } from "./directives/dxc-column-def.directive";
import { PaginationService } from "./services/pagination.service";
import { SortService } from "./services/sort.service";
// import { Ordering } from "./directives/sorting.directive";
import { coerceArray, coerceNumberProperty } from "@angular/cdk/coercion";
import { HostBinding } from "@angular/core";
import { RowOutlet } from "./interfaces/row-outlet.interface";
import { RenderRow } from "./interfaces/render-row.interface";
import { dxcResultsetTableDataSourceInput } from "./types/dxc-resultset-table-datasource.type";
import { HeaderOutlet } from "./directives/header-outlet.directive";
import { DataRowOutlet } from "./directives/data-row-outlet.directive";
import { Space } from "./types/table-space.type";
import { Size } from "./types/table-size.type";
import { RowViewRef } from "./classes/row-viewref.class";
import { RowContext } from "./interfaces/row-context.interface";
import { DxcCellOutlet } from "./directives/dxc-cell-outlet.directive";
import { TableDataSource } from "./classes/table-data-source.class";

/**
 * A data table that can render a header row, data rows, and a footer row.
 * Uses the dataSource input to determine the data to be rendered. The data can be provided either
 * as a data array, an Observable stream that emits the data array to render, or a DataSource with a
 * connect function that will return an Observable stream that emits the data array to render.
 */
@Component({
  selector: "dxc-resultset-table, table[dxc-resultset-table]",
  exportAs: "dxcResultsetTable",
  template: `
    <dxc-table [margin]="margin">
      <ng-container headerOutlet></ng-container>
      <ng-container rowOutlet></ng-container>
    </dxc-table>

    <dxc-paginator
      *ngIf="totalItems !== null"
      [totalItems]="totalItems"
      [itemsPerPage]="itemsPerPage"
      [itemsPerPageOptions]="itemsPerPageOptions"
      [currentPage]="page"
      [showGoToPage]="showGoToPage"
      (onGoToPage)="navigate($event)"
      (itemsPerPageFunction)="handleItemsPerPageSelect($event)"
    ></dxc-paginator>
  `,
  encapsulation: ViewEncapsulation.None,
  // The "OnPush" status for the `MatTable` component is effectively a noop, so we are removing it.
  // The view for `MatTable` consists entirely of templates declared in other views. As they are
  // declared elsewhere, they are checked when their declaration points are checked.
  // tslint:disable-next-line:validate-decorators
  changeDetection: ChangeDetectionStrategy.Default,
  providers: [
    { provide: DXC_RESULTSET_TABLE, useExisting: DxcResultTable },
    PaginationService,
    SortService,
  ],
})
export class DxcResultTable<T>
  implements AfterContentChecked, CollectionViewer, OnDestroy, OnInit
{
  /**
   * Number of items per page.
   */
  @Input()
  itemsPerPage: number = 5;
  /**
   * An array of objects with the values to display in the table.
   * The key is the column and the value is the property to be displayed in the cell.
   */
  @Input()
  get collectionResource(): Array<any> {
    return this._collectionResource;
  }
  set collectionResource(value: Array<any>) {
    this._collectionResource = coerceArray(value);
  }
  private _collectionResource;
  /**
   * Size of the margin to be applied to the component
   * ('xxsmall' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge').
   * You can pass an object with 'top', 'bottom', 'left' and 'right' properties in
   * order to specify different padding sizes.
   */
  @Input() margin: Space | Size;
  /**
   * An array of numbers representing the items per page options.
   */
  @Input() public itemsPerPageOptions: number[];
  /**
   * Show page navigation select.
   */
  @Input() public showGoToPage: boolean = true;
  /**
   * Value of the tabindex attribute given to the sortable icon.
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
   *  This event will emit in case of the user selects an item per page
   * option. The value selected will be passed as a parameter.
   */
  @Output() itemsPerPageFunction: EventEmitter<number> =
    new EventEmitter<number>();

  collectionData: BehaviorSubject<Array<any>> = new BehaviorSubject([]);

  displayedColumns: string[] = [];

  totalItems: Number = 0;

  fetchStatus;

  page: number = 1;

  @HostBinding("class") className;

  /** List of ordering directives. */
  private _allOrderingRefs: ElementRef[] = [];

  private _document: Document;

  /** Latest data provided by the data source. */
  protected _data: T[] | ReadonlyArray<T>;

  /** Subject that emits when the component has been destroyed. */
  private _onDestroy = new Subject<void>();

  /** List of the rendered rows as identified by their `RenderRow` object. */
  private _renderRows: RenderRow<T>[];

  /** Subscription that listens for the data provided by the data source. */
  private _renderChangeSubscription: Subscription | null;

  /**
   * Map of all the user's defined columns (header, data, and footer cell template) identified by
   * name. Collection populated by the column definitions gathered by `ContentChildren` as well as
   * any custom column definitions added to `_customColumnDefs`.
   */
  private _columnDefsByName = new Map<string, DxcColumnDef>();

  /**
   * Set of all row definitions that can be used by this table. Populated by the rows gathered by
   * using `ContentChildren` as well as any custom row definitions added to `_customRowDefs`.
   */
  //private _rowDefs: CdkRowDef<T>[];

  /** Differ used to find the changes in the data provided by the data source. */
  private _dataDiffer: IterableDiffer<RenderRow<T>>;

  /**
   * Column definitions that were defined outside of the direct content children of the table.
   * These will be defined when, e.g., creating a wrapper around the cdkTable that has
   * column definitions as *its* content child.
   */
  private _customColumnDefs = new Set<DxcColumnDef>();

  /**
   * Cache of the latest rendered `RenderRow` objects as a map for easy retrieval when constructing
   * a new list of `RenderRow` objects for rendering rows. Since the new list is constructed with
   * the cached `RenderRow` objects when possible, the row identity is preserved when the data
   * and row template matches, which allows the `IterableDiffer` to check rows by reference
   * and understand which rows are added/moved/removed.
   *
   * Implemented as a map of maps where the first key is the `data: T` object and the second is the
   * `CdkRowDef<T>` object. With the two keys, the cache points to a `RenderRow<T>` object that
   * contains an array of created pairs. The array is necessary to handle cases where the data
   * array contains multiple duplicate data objects and each instantiated `RenderRow` must be
   * stored.
   */
  private _cachedRenderRowsMap = new Map<T, WeakMap<Object, RenderRow<T>[]>>();

  /** Whether the table is applied to a native `<table>`. */
  private _isNativeHtmlTable: boolean;

  /**
   * Tracking function that will be used to check the differences in data changes. Used similarly
   * to `ngFor` `trackBy` function. Optimize row operations by identifying a row based on its data
   * relative to the function to know if a row should be added/removed/moved.
   * Accepts a function that takes two parameters, `index` and `item`.
   */
  @Input()
  get trackBy(): TrackByFunction<T> {
    return this._trackByFn;
  }
  set trackBy(fn: TrackByFunction<T>) {
    if (
      isDevMode() &&
      fn != null &&
      typeof fn !== "function" &&
      <any>console &&
      <any>console.warn
    ) {
      console.warn(
        `trackBy must be a function, but received ${JSON.stringify(fn)}.`
      );
    }
    this._trackByFn = fn;
  }
  private _trackByFn: TrackByFunction<T>;

  private dataSource: dxcResultsetTableDataSourceInput<T>;

  // TODO(andrewseguin): Remove max value as the end index
  //   and instead calculate the view on init and scroll.
  /**
   * Stream containing the latest information on what rows are being displayed on screen.
   * Can be used by the data source to as a heuristic of what data should be provided.
   *
   * @docs-private
   */
  viewChange: BehaviorSubject<{
    start: number;
    end: number;
  }> = new BehaviorSubject<{ start: number; end: number }>({
    start: 0,
    end: Number.MAX_VALUE,
  });

  // Outlets in the table's template where the header, data rows, and footer will be inserted.
  @ViewChild(HeaderOutlet, { static: true }) _headerOutlet: HeaderOutlet;
  @ViewChild(DataRowOutlet, { static: true }) _rowOutlet: DataRowOutlet;

  /**
   * The column definitions provided by the user that contain what the header, data, and footer
   * cells should render for each column.
   */
  @ContentChildren(DxcColumnDef, { descendants: true })
  _contentColumnDefs: QueryList<DxcColumnDef>;

  constructor(
    protected readonly _differs: IterableDiffers,
    protected readonly _changeDetectorRef: ChangeDetectorRef,
    protected readonly _elementRef: ElementRef,
    @Attribute("role") role: string,
    @Optional() protected readonly _dir: Directionality,
    @Inject(DOCUMENT) _document: any,
    private resolver: ComponentFactoryResolver,
    private paginationService: PaginationService,
    private sortService: SortService
  ) {
    if (!role) {
      this._elementRef.nativeElement.setAttribute("role", "grid");
    }

    this._document = _document;
    this._isNativeHtmlTable =
      this._elementRef.nativeElement.nodeName === "TABLE";

    this.setClassName();
  }

  ngOnInit() {
    this.collectionData.next(
      this.collectionResource.slice(0, this.itemsPerPage)
    );
    this.dataSource = new TableDataSource(this.collectionData);
    this.totalItems = this.collectionResource.length;

    if (this._isNativeHtmlTable) {
      this._applyNativeTableSections();
    }

    // Set up the trackBy function so that it uses the `RenderRow` as its identity by default. If
    // the user has provided a custom trackBy, return the result of that function as evaluated
    // with the values of the `RenderRow`'s data and index.
    this._dataDiffer = this._differs
      .find([])
      .create((_i: number, dataRow: RenderRow<T>) => {
        return this.trackBy
          ? this.trackBy(dataRow.dataIndex, dataRow.data)
          : dataRow;
      });
  }

  ngOnChanges() {
    this.page = 1;
    this.navigate(this.page, "");
  }

  ngAfterContentChecked() {
    // Cache the row and column definitions gathered by ContentChildren and programmatic injection.
    //this._cacheRowDefs();
    this._cacheColumnDefs();
    // Render updates if the list of columns have been changed for the header, row, or footer defs.

    // If there is a data source and row definitions, connect to the data source unless a
    // connection has already been made.
    if (this.dataSource && !this._renderChangeSubscription) {
      this._observeRenderChanges();
    }
  }

  ngOnDestroy() {
    this._headerOutlet.viewContainer.clear();
    this._rowOutlet.viewContainer.clear();
    this._cachedRenderRowsMap.clear();
    this._onDestroy.next();
    this._onDestroy.complete();

    if (isDataSource(this.dataSource)) {
      this.dataSource.disconnect(this);
    }
  }

  handleItemsPerPageSelect($event) {
    this.itemsPerPageFunction.emit($event);
  }

  renderHeaders() {
    this._headerOutlet.viewContainer.clear();
    if (this._columnDefsByName !== null) {
      this._columnDefsByName.forEach((value: DxcColumnDef, key: string) => {
        const factory = this.resolver.resolveComponentFactory(
          DxcHeaderRowComponent
        );
        const viewRef =
          this._headerOutlet.viewContainer.createComponent(factory);
        viewRef.instance.columnName = key;
        viewRef.instance.isSortable = value.sortable.isSortable; //Save if header is sortable in the created component
        viewRef.instance.tabIndexValue = this.tabIndexValue;
        viewRef.instance.state = this.getMapStateHeaders().get(key); //Get header's current state for sorting and save it in the created component
        viewRef.instance.parentClassName = this.className; // just in case there are more tables in the page
        viewRef.instance.propertyName = value.sortable.propertyName;
        if (!this.displayedColumns.includes(key)) {
          this.displayedColumns.push(key);
        }
      });
    }
  }

  /**
   * Renders rows based on the table's latest set of data, which was either provided directly as an
   * input or retrieved through an Observable stream (directly or from a DataSource).
   * Checks for differences in the data since the last diff to perform only the necessary
   * changes (add/remove/move rows).
   *
   * If the table's data source is a DataSource or Observable, this will be invoked automatically
   * each time the provided Observable stream emits a new data array. Otherwise if your data is
   * an array, this function will need to be called to render any changes.
   */
  renderRows() {
    this._renderRows = this._getAllRenderRows();
    const changes = this._dataDiffer.diff(this._renderRows);
    if (!changes) {
      return;
    }
    const viewContainer = this._rowOutlet.viewContainer;
    changes.forEachOperation(
      (
        record: IterableChangeRecord<RenderRow<T>>,
        prevIndex: number | null,
        currentIndex: number | null
      ) => {
        if (record.previousIndex == null) {
          this._insertRow(record.item, currentIndex!);
        } else if (currentIndex == null) {
          viewContainer.remove(prevIndex!);
        } else {
          const view = <RowViewRef<T>>viewContainer.get(prevIndex!);
          viewContainer.move(view!, currentIndex);
        }
      }
    );

    // Update the meta context of a row's context data (index, count, first, last, ...)
    this._updateRowIndexContext();

    // Update rows that did not get added/removed/moved but may have had their identity changed,
    // e.g. if trackBy matched data on some property but the actual data reference changed.
    changes.forEachIdentityChange(
      (record: IterableChangeRecord<RenderRow<T>>) => {
        const rowView = <RowViewRef<T>>viewContainer.get(record.currentIndex!);
        rowView.context.$implicit = record.item.data;
      }
    );
  }

  /**
   * Get the list of RenderRow objects to render according to the current list of data and defined
   * row definitions. If the previous list already contained a particular pair, it should be reused
   * so that the differ equates their references.
   */
  private _getAllRenderRows(): RenderRow<T>[] {
    const renderRows: RenderRow<T>[] = [];

    // Store the cache and create a new one. Any re-used RenderRow objects will be moved into the
    // new cache while unused ones can be picked up by garbage collection.
    const prevCachedRenderRows = this._cachedRenderRowsMap;
    this._cachedRenderRowsMap = new Map();

    // For each data object, get the list of rows that should be rendered, represented by the
    // respective `RenderRow` object which is the pair of `data` and `CdkRowDef`.
    for (let i = 0; i < this._data.length; i++) {
      let data = this._data[i];
      const renderRowsForData = this._getRenderRowsForData(
        data,
        i,
        prevCachedRenderRows.get(data)
      );

      if (!this._cachedRenderRowsMap.has(data)) {
        this._cachedRenderRowsMap.set(data, new WeakMap());
      }

      for (let j = 0; j < renderRowsForData.length; j++) {
        let renderRow = renderRowsForData[j];
        const cache = this._cachedRenderRowsMap.get(renderRow.data)!;
        if (cache.has(renderRow.data)) {
          cache.get(renderRow.data)!.push(renderRow);
        } else {
          cache.set(renderRow.data, [renderRow]);
          renderRows.push(renderRow);
        }
      }
    }

    return renderRows;
  }

  /**
   * Gets a list of `RenderRow<T>` for the provided data object and any `DxcRowDef` objects that
   * should be rendered for this data. Reuses the cached RenderRow objects if they match the same
   * `(T, DxcRowDef)` pair.
   */
  private _getRenderRowsForData(
    data: T,
    dataIndex: number,
    cache?: WeakMap<Object, RenderRow<T>[]>
  ): RenderRow<T>[] {
    return this.displayedColumns.map((rowDef) => {
      const cachedRenderRows =
        cache && cache.has(rowDef) ? cache.get(rowDef)! : [];
      if (cachedRenderRows.length) {
        const dataRow = cachedRenderRows.shift()!;
        dataRow.dataIndex = dataIndex;
        return dataRow;
      } else {
        return { data, rowDef, dataIndex };
      }
    });
  }

  /** Update the map containing the content's column definitions. */
  private _cacheColumnDefs() {
    this._columnDefsByName.clear();
    const columnDefs = this.mergeArrayAndSet(
      this._getOwnDefs(this._contentColumnDefs),
      this._customColumnDefs
    );
    columnDefs.forEach((columnDef) => {
      // if (this._columnDefsByName.has(columnDef.name)) {
      //   throw getTableDuplicateColumnNameError(columnDef.name);
      // }
      this._columnDefsByName.set(columnDef.name, columnDef);
    });
  }

  /** Set up a subscription for the data provided by the data source. */
  private _observeRenderChanges() {
    // If no data source has been set, there is nothing to observe for changes.
    if (!this.dataSource) {
      return;
    }

    let dataStream: Observable<T[] | ReadonlyArray<T>> | undefined;

    if (isDataSource(this.dataSource)) {
      dataStream = this.dataSource.connect(this);
    } else if (isObservable(this.dataSource)) {
      dataStream = this.dataSource;
    } else if (Array.isArray(this.dataSource)) {
      dataStream = observableOf(this.dataSource);
    }

    if (dataStream === undefined) {
      throw getTableUnknownDataSourceError();
    }

    this._renderChangeSubscription = dataStream
      .pipe(takeUntil(this._onDestroy))
      .subscribe((data) => {
        this._data = data || [];
        this.renderHeaders();
        this.renderRows();
      });
  }

  /**
   * Create the embedded view for the data row template and place it in the correct index location
   * within the data row view container.
   */
  private _insertRow(renderRow: RenderRow<T>, renderIndex: number) {
    const context: RowContext<T> = { $implicit: renderRow.data };
    this._renderRow(this._rowOutlet, renderRow, renderIndex, context);
  }

  /**
   * Creates a new row template in the outlet and fills it with the set of cell templates.
   * Optionally takes a context to provide to the row and cells, as well as an optional index
   * of where to place the new row template in the outlet.
   */
  private _renderRow(
    outlet: RowOutlet,
    renderRow: Object,
    index: number,
    context: RowContext<T> = {}
  ) {
    // TODO(andrewseguin): enforce that one outlet was instantiated from createEmbeddedView
    const factory = this.resolver.resolveComponentFactory(DxcRowComponent);
    outlet.viewContainer.createComponent(factory, index);
    //outlet.viewContainer.createEmbeddedView(this.cdkRow.template, context, index);

    for (let cellTemplate of this._getCellTemplates(renderRow)) {
      if (DxcCellOutlet.mostRecentCellOutlet) {
        DxcCellOutlet.mostRecentCellOutlet._viewContainer.createEmbeddedView(
          cellTemplate,
          context
        );
      }
    }

    this._changeDetectorRef.markForCheck();
  }

  /**
   * Updates the index-related context for each row to reflect any changes in the index of the rows,
   * e.g. first/last/even/odd.
   */
  private _updateRowIndexContext() {
    const viewContainer = this._rowOutlet.viewContainer;
    for (
      let renderIndex = 0, count = viewContainer.length;
      renderIndex < count;
      renderIndex++
    ) {
      const viewRef = viewContainer.get(renderIndex) as RowViewRef<T>;
      if (viewRef.context) {
        const context = viewRef.context as RowContext<T>;
        context.count = count;
        context.first = renderIndex === 0;
        context.last = renderIndex === count - 1;
        context.even = renderIndex % 2 === 0;
        context.odd = !context.even;
        context.index = this._renderRows[renderIndex].dataIndex;
      }
    }
  }

  /** Gets the column definitions for the provided row def. */
  private _getCellTemplates(rowDef: Object): TemplateRef<any>[] {
    if (!rowDef || !this.displayedColumns) {
      return [];
    }
    return Array.from(this.displayedColumns, (columnId) => {
      const column = this._columnDefsByName.get(columnId);

      return column.cell.template;
    });
  }

  /** Adds native table sections (e.g. tbody) and moves the row outlets into them. */
  private _applyNativeTableSections() {
    const documentFragment = this._document.createDocumentFragment();
    const sections = [
      // {tag: 'thead', outlet: this._headerRowOutlet},
      { tag: "tbody", outlet: this._rowOutlet },
    ];

    for (const section of sections) {
      const element = this._document.createElement(section.tag);
      element.setAttribute("role", "rowgroup");
      element.appendChild(section.outlet.elementRef.nativeElement);
      documentFragment.appendChild(element);
    }

    // Use a DocumentFragment so we don't hit the DOM on each iteration.
    this._elementRef.nativeElement.appendChild(documentFragment);
  }

  /** Filters definitions that belong to this table from a QueryList. */
  private _getOwnDefs<I extends { _table?: any }>(items: QueryList<I>): I[] {
    return items.filter((item) => !item._table || item._table === this);
  }

  /** Calculate pagination for the data displayed in the table after click event */
  navigate(page: number, operation?: string) {
    this.page = page;
    this.paginationService.calculatePagination(
      this.page,
      this.itemsPerPage,
      (parameters) => {
        this.collectionData.next(
          this.collectionResource.slice(parameters.start, parameters.end)
        );
      }
    );
  }

  /** Set to default others header's states if they are different to default state ("up" or "down"). */
  removeOtherSorts(actualIdHeader) {
    this._allOrderingRefs.forEach((element) => {
      let nativeElement = element.nativeElement;
      if (actualIdHeader != nativeElement.id) {
        let stateElement = nativeElement.getAttribute("state");
        if (stateElement === "up" || stateElement === "down") {
          this.sortService.removeOtherSortings(nativeElement.id);
        }
      }
    });
  }

  ngAfterViewInit(): void {
    this.setDefaultStateHeaders();
  }

  /** Set to default all headers that are sortable. */
  setDefaultStateHeaders() {
    this._allOrderingRefs.forEach((element) => {
      let id = element.nativeElement.id;
      let columnName = id.split("-")[1];
      this.sortService.mapStatesHeaders.set(columnName, "default");
    });
  }

  /** Register all ordering directives references. */
  registerOrderingRef(ref: ElementRef) {
    this._allOrderingRefs.push(ref);
  }

  /** Sort row elements from given column depending on given state. */
  sortCells(columnName, state) {
    let start = this.paginationService.getCurrentStart();
    let end = this.paginationService.getCurrentEnd();
    let list;
    if (state === "up") {
      list = this.ascSort(columnName, start, end);
    } else if (state === "down") {
      list = this.descSort(columnName, start, end);
    }
    this.collectionData.next(list);
  }

  /** Sort row elements by ascendant */
  ascSort(columnName, start, end) {
    return this.sortService
      .getSortedList(this.collectionResource, columnName, "asc")
      .slice(start, end);
  }

  /** Sort row elements by descendant */
  descSort(columnName, start, end) {
    return this.sortService
      .getSortedList(this.collectionResource, columnName, "desc")
      .slice(start, end);
  }

  /** Change icon to up icon */
  changeAscIcon(el: ElementRef) {
    this.sortService.setAscIconSort(el);
  }

  /** Change icon to down icon */
  changeDescIcon(el: ElementRef) {
    this.sortService.setDescIconSort(el);
  }

  /** Change icon to default icon */
  changeDefaultIcon(el: ElementRef) {
    this.sortService.setDefaultIconSort(el);
  }

  /** Return map with header's states */
  getMapStateHeaders() {
    return this.sortService.mapStatesHeaders;
  }

  //It is needed to give a unique id to the resultset table
  setClassName() {
    this.className = `${Math.round(Math.random() * 100)}`;
  }

  /** Utility function that gets a merged list of the entries in an array and values of a Set. */
  mergeArrayAndSet<T>(array: T[], set: Set<T>): T[] {
    return array.concat(Array.from(set));
  }
}
