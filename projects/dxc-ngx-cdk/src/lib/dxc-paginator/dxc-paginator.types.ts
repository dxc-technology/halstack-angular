export interface ProgressBarProperties {
  currentPage: number;
  itemsPerPage: number;
  showGoToPage: boolean;
  itemsPerPageOptions: number[];
  totalItems: number;
  paginationActions: Array<"prev" | "next" | "first" | "last">;
  tabIndexValue: number;
}
