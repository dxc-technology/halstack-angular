import { Pipe, PipeTransform } from "@angular/core";
import { DxcTextInputService } from "../services/dxc-text-input.service";

@Pipe({ name: "filterOptions", pure: true })
export class FilterOptionsPipe implements PipeTransform {
  constructor(private service: DxcTextInputService) {}

  public transform(options: Array<any>, actualValue: string): Array<any> {
    const value = actualValue?.toLowerCase();
    const array = options?.filter((element) =>
      element.toLowerCase().startsWith(value)
    );
    this.service.setFilteredOptions(array);
    return array;
  }
}
