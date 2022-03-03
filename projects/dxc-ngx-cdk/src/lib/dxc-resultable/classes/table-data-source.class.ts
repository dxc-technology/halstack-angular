import { DataSource } from "@angular/cdk/collections";
import { BehaviorSubject, Observable } from "rxjs";

export class TableDataSource extends DataSource<any> {
  /** Stream of data that is provided to the table. */

  public data = new BehaviorSubject<[]>([]);

  constructor(items) {
    super();
    this.data = items;
  }

  getData() {
    return this.data;
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<[]> {
    return this.data;
  }

  disconnect() {}
}
