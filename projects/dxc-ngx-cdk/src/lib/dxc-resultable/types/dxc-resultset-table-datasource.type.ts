import { DataSource } from "@angular/cdk/collections";
import { Observable } from "rxjs";

/**
 * Union of the types that can be set as the data source for a `CdkTable`.
 * @docs-private
 */
export type dxcResultsetTableDataSourceInput<T> =
  | DataSource<T>
  | Observable<ReadonlyArray<T> | T[]>
  | ReadonlyArray<T>
  | T[];
