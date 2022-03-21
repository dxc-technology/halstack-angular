import { Pipe, PipeTransform } from "@angular/core";
import EmittedValue from "../emitted-value.type";
import { DxcTextInputService } from "../services/dxc-text-input.service";

@Pipe({ name: "filterOptions", pure: true })
export class FilterOptionsPipe implements PipeTransform {
  constructor(private service: DxcTextInputService) {}

  public transform(
    options: Array<any>,
    actualValue: string | EmittedValue
  ): Array<any> {
    if (actualValue) {
      const value =
        typeof actualValue === "string"
          ? actualValue?.toLowerCase()
          : actualValue?.value.toLowerCase();
      const array = options?.filter((element) =>
        element.toLowerCase().startsWith(value)
      );
      this.service.setFilteredOptions(array);
      return array;
    }
    return options;
  }
}
