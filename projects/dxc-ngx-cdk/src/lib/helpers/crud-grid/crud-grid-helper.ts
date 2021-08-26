import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class CrudGridHelper {
    calculateTableHeight = (dataSource: any) : string => {
        let rowsCount = dataSource.length;
        let tableHeight = ((rowsCount * 48.5) + 57) + 'px';
        if(rowsCount > 10){
          tableHeight = ((9 * 48.5) + 57)  + 'px';
        }
        return tableHeight
    }
    
    calculateFormHeight = (isExpand: boolean, tableHeight: string) : string => {
        let height = parseInt(tableHeight.substring(0, tableHeight.length - 2));
        tableHeight = (isExpand ? (height + 290) : (height - 290)) + 'px';
        return tableHeight;
    }
}
