import { Pipe, PipeTransform } from "@angular/core";
import { Option } from "../interfaces/option.interface";
import { OptionGroup } from "../interfaces/optionGroup.interface";
import { SelectService } from "../services/select.service";

@Pipe({ name: "filterOptions", pure: true })
export class FilterOptionsPipe implements PipeTransform {
  constructor(public service: SelectService) {}

  public transform(
    options: Option[] | OptionGroup[],
    inputValue: string
  ): Array<any> {
    const value = inputValue?.toLowerCase();
    const array = options;
    let newOptions = [];
    if (array && array?.length > 0 && this.service.instanceOfOption(array[0])) {
      const arrayOption = array as Option[];
      if (arrayOption?.length > 0) {
        newOptions = this.filterOptions(arrayOption, value);
      }
    } else if(array && array?.length > 0 && !this.service.instanceOfOption(array[0])){
      const arrayOption = array as OptionGroup[];
      if (arrayOption?.length > 0) {
        arrayOption.map((op) => {
          const arr = this.filterOptions(op.options, value);
          if (arr?.length > 0) {
            const newGroup: OptionGroup = {
              label: op.label,
              options: arr,
            };
            newOptions.push(newGroup);
          }
        });
      }
    }
    const filteredArray = (newOptions?.length > 0 || inputValue?.length > 0) ? newOptions : options;
    this.service.setFilteredOptions(filteredArray);
    return filteredArray;
  }

  private filterOptions(array: Option[], inputValue: string) {
    let newArray = [];
    array.map((op) => {
      const label = op.label.toLowerCase();
      if (label.startsWith(inputValue)) {
        newArray.push(op);
      }
    });
    return newArray;
  }
}
