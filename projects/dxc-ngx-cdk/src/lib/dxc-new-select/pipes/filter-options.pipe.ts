import { Pipe, PipeTransform } from "@angular/core";
import { Option } from "../interfaces/option.interface";
import { OptionGroup } from "../interfaces/optionGroup.interface";
import { SelectService } from "../services/select.service";

@Pipe({ name: "filterOptions", pure: true })
export class FilterOptionsPipe implements PipeTransform {
  constructor(private service: SelectService) {}

  public transform(
    options: (Option | OptionGroup)[],
    inputValue: string
  ): Array<any> {
    const value = inputValue?.toLowerCase();
    const newOptions = this.iterateOptions(options, value);
    return newOptions?.length > 0 ? newOptions : options;
  }

  private iterateOptions(array: (Option | OptionGroup)[], inputValue: string) {
    let newArray = [];
    array.map((op) => {
      if (this.instanceOfOption(op)) {
        const label = op.label.toLowerCase();
        if (label.startsWith(inputValue)) {
          newArray.push(op);
        }
      } else {
        const optionsGroup = this.iterateOptions(op.options, inputValue);
        if (optionsGroup?.length > 0) {
          const newGroup: OptionGroup = {
            label: op.label,
            options: optionsGroup,
          };
          newArray.push(newGroup);
        }
      }
    });
    return newArray;
  }

  private instanceOfOption(option: any): option is Option {
    return "value" in option;
  }
}
