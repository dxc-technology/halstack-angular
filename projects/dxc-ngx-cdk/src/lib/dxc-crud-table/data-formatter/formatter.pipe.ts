import { Pipe, PipeTransform } from '@angular/core';
import { DateHelper } from '../../helpers/date/date-helper';
@Pipe({
  name: 'formatter'
})
export class FormatterPipe implements PipeTransform {
  constructor(private dateHelper: DateHelper) { }

  transform(value: any, args: any): any {
    let returnValue = value;
    if (args) {
      switch (args.type) {
        case 'date':
          returnValue = this.formatDate(value, args.format);
          break;
        case 'fixlength':
          returnValue = this.fixedLength(value, args.format);
          break;
        case 'xsfilter':
          returnValue = this.filterOnMobile(value, args.format)
          break;
      }
    }
    return returnValue;
  }

  formatDate = (value, format) => {
    return this.dateHelper.convertDateToControlFormat(value, format);
  }

  fixedLength = (value, format) => {
    return value.substring(format.start, format.lenght);
  }

  filterOnMobile = (value, format) => {
    if (value && format && format.columns && format.filterValue) {
      let returnValue = [];
      for (var x = 0; x < value.length; x++) {
        for (var y = 0; y < format.columns.length; y++) {
          if (new RegExp(value[x][format.columns[y]], 'i').test(format.filterValue)) {
            returnValue.push(value[x]);
            break;
          }
        }
      }
      return returnValue;
    }
    else {
      return value;
    }
  }
}
