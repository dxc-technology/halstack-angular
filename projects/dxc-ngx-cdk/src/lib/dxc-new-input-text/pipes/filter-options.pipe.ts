import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "filterOptions", pure: true })
export class FilterOptionsPipe implements PipeTransform {
  public transform(options: Array<any>, actualValue: string): Array<any> {
    let value = actualValue.toLowerCase();
    let array = options.filter((element) =>
      element.toLowerCase().startsWith(value)
    );
    return array;
  }
}
