import { Pipe, PipeTransform } from "@angular/core";
import { DxcNewInputTextService } from "../services/dxc-new-input-text.service";

@Pipe({ name: "filterOptions", pure: true })
export class FilterOptionsPipe implements PipeTransform {
  constructor(private service: DxcNewInputTextService){}

  public transform(options: Array<any>, actualValue: string): Array<any> {
    let value = actualValue.toLowerCase();
    let array = options.filter((element) =>
      element.toLowerCase().startsWith(value)
    );
    this.service.setFilteredOptions(array);
    return array;
  }
}
