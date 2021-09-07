import { Injectable, ElementRef } from '@angular/core';
@Injectable({
    providedIn: 'root'
})
export class CrudGridHelper {
    calculateTableHeight = (dataSource: any, table?: ElementRef, skipCount: boolean = false): string => {
        let rowsCount = dataSource.length;
        if (rowsCount < 10 && skipCount == false)
            return 'initial';
        let calcHeight = table ? this.getRowHeight(table) : 0;
        let tableHeight = (rowsCount > 10 ? ((9 * 48.5) + 57) : (rowsCount * 48.5) + 57);
        if (calcHeight >= tableHeight) {
            return (calcHeight + 'px');
        }
        return (tableHeight + 'px');
    }

    calculateFormHeight = (isExpand: boolean, tableHeight: string, dataSource: any, table?: ElementRef): string => {
        if (tableHeight == 'initial') {
            tableHeight = this.calculateTableHeight(dataSource, table, true);
        }
        let height = parseInt(tableHeight.substring(0, tableHeight.length - 2));
        tableHeight = (isExpand ? (height + 290) + 'px' : this.calculateTableHeight(dataSource, table));
        return tableHeight;
    }

    getRowHeight(elRef) {
        let height = 0;
        let rows = elRef.nativeElement.querySelectorAll('tr');
        if (rows.length > 0) {
            for (var x = 0; x < (rows.length > 19 ? 19 : rows.length); x++) {
                height += rows[x].scrollHeight;
            }
        }
        return height;
    }
}
