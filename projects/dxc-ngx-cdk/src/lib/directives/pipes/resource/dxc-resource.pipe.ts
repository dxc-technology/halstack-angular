import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'resource'
})
export class DxcResourcePipe implements PipeTransform {
  transform(value: { [key: string]: { description: string, type: string } },
    ...key: string[]): any {
    if (value !== undefined && value !== null) {
      if (key.length === 1) {
        if(value[key[0]]){
          return value[key[0]].description;
        }
      } else {
        let result = '';
        key.forEach(element => {
          result += value[element].description + ' ';
        });
        return result;
      }
    }
  }
}
