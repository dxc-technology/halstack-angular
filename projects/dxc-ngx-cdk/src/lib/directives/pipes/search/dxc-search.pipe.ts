import { List } from 'immutable';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchBy'
})
export class DxcSearchPipe implements PipeTransform {
  transform(items: List<any>, searchelement: string, term: string, searchelementstring?: string): any {
    let valueArray;
    if (List.isList(items)) {
      valueArray = items.toJS();
    } else {
      valueArray = items;
    }

    if (searchelementstring != undefined && searchelementstring != '' && valueArray && valueArray.length > 0) {
      return valueArray.filter(item => (item[searchelement].toLowerCase().indexOf(term.toLowerCase()) !== -1) || (item[searchelementstring].toLowerCase().indexOf(term.toLowerCase()) !== -1));
    }
    else {
      if (valueArray && valueArray.length > 0)
        return valueArray.filter(item => (item[searchelement].toLowerCase().indexOf(term.toLowerCase()) !== -1));
    }

  }
}
