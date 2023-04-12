/** Context provided to the row cells when `multiTemplateDataRows` is false */
export interface DxcCellOutletRowContext<T> {
  /** Data for the row that this cell is located within. */
  $implicit?: T;

  /** Index of the data object in the provided data array. */
  index?: number;

  /** Length of the number of total rows. */
  count?: number;

  /** True if this cell is contained in the first row. */
  first?: boolean;

  /** True if this cell is contained in the last row. */
  last?: boolean;

  /** True if this cell is contained in a row with an even-numbered index. */
  even?: boolean;

  /** True if this cell is contained in a row with an odd-numbered index. */
  odd?: boolean;
}
