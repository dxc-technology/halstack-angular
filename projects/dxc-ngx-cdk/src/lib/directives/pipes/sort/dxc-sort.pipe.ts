import { List } from 'immutable';
import { Pipe, PipeTransform } from '@angular/core';
import { orderBy } from 'lodash';

@Pipe({ name: 'sortBy' })
export class DxcSortByPipe implements PipeTransform {

  transform(value: List<any>, order = '', column: string = ''): List<any> {
    if (value === undefined || !value || order === '' || order === 'none' || !order) { return value; } // no array
    let valueArray;
    if (List.isList(value)) {
      valueArray = value.toArray();
    } else {
      valueArray = value;
    }


    if (valueArray.length <= 1) { return value; }
    if (!column || column === '') {
      if (order === 'asc') { return value.sort(); }
      else { return value.sort().reverse(); }
    }
    return orderBy(valueArray, [column], [order]);
  }
}
