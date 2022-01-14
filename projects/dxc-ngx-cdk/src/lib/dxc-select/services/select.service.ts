import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Option } from "../interfaces/option.interface";
import { OptionGroup } from "../interfaces/optionGroup.interface";
import { VisualOptionFocus } from "../interfaces/visualFocus.interface";

@Injectable({
  providedIn: "root",
})
export class SelectService {
  constructor() {}

  public selectedValues: BehaviorSubject<any> = new BehaviorSubject(null);
  public filteredOptions: BehaviorSubject<any> = new BehaviorSubject(null);
  public visualFocused: BehaviorSubject<VisualOptionFocus> =
    new BehaviorSubject({
      group: -1,
      option: -1,
    });
  public activeOption: BehaviorSubject<VisualOptionFocus> = new BehaviorSubject(
    {
      group: -1,
      option: -1,
    }
  );

  public setSelectedValues(newOptions): void {
    this.selectedValues.next(newOptions);
  }

  public setVisualFocused(newFocus): void {
    this.visualFocused.next(newFocus);
  }

  public getSizeSelectedValues() {
    if (
      this.selectedValues.getValue() != null &&
      this.selectedValues.getValue() != undefined
    ) {
      return this.selectedValues.getValue().length;
    }
    return 0;
  }

  public getSelectedValues() {
    return this.selectedValues.getValue();
  }

  public setFilteredOptions(array): void {
    this.filteredOptions.next(array);
  }

  public onArrowDown(optional: boolean, isDirty: boolean): void {
    if (
      !isDirty &&
      this.getSelectedValues() !== undefined &&
      this.getSelectedValues() !== null
    ) {
      this.setSelectedFocus();
    } else {
      if (
        this.filteredOptions &&
        this.filteredOptions.getValue() &&
        this.instanceOfOption(this.filteredOptions.getValue()[0])
      ) {
        this.arrowDownOptions(optional);
      } else if (
        this.filteredOptions &&
        this.filteredOptions.getValue() &&
        !this.instanceOfOption(this.filteredOptions.getValue()[0])
      ) {
        this.arrowDownGroups(optional);
      }
    }
  }

  private setSelectedFocus() {
    if (this.instanceOfOption(this.filteredOptions.getValue()[0])) {
      this.visualFocused.next({
        option: this.visualFocused.getValue().option,
      });
    } else {
      this.visualFocused.next({
        option: this.visualFocused.getValue().option,
        group: this.visualFocused.getValue().group,
      });
    }
  }

  private arrowDownOptions(optional: boolean) {
    const arrayOption = this.filteredOptions.getValue() as Option[];
    if (this.visualFocused.getValue().option < arrayOption.length - 1) {
      this.visualFocused.next({
        option: this.visualFocused.getValue().option + 1,
      });
    } else if (
      this.visualFocused.getValue().option ===
      arrayOption.length - 1
    ) {
      this.visualFocused.next({
        option: optional ? -1 : 0,
      });
    }
    if (this.activeOption.getValue().option > 0) {
      this.activeOption.next({
        option: -1,
      });
    }
  }

  private arrowDownGroups(optional: boolean) {
    const arrayOption = this.filteredOptions.getValue() as OptionGroup[];
    if (
      this.visualFocused.getValue().group <= -1 &&
      this.visualFocused.getValue().option <= -1
    ) {
      this.visualFocused.next({
        group: this.visualFocused.getValue().option + 1,
        option: this.visualFocused.getValue().option + 1,
      });
    } else if (
      this.visualFocused.getValue().group === arrayOption.length - 1 &&
      this.visualFocused.getValue().option ===
        arrayOption[this.visualFocused.getValue().group].options.length - 1
    ) {
      this.visualFocused.next({
        group: optional ? -1 : 0,
        option: optional ? -1 : 0,
      });
    } else {
      if (
        this.visualFocused.getValue().option <
        arrayOption[this.visualFocused.getValue().group].options.length - 1
      ) {
        this.visualFocused.next({
          group: this.visualFocused.getValue().group,
          option: this.visualFocused.getValue().option + 1,
        });
      } else {
        this.visualFocused.next({
          group: this.visualFocused.getValue().group + 1,
          option: 0,
        });
      }
    }
  }

  public onArrowUp(optional: boolean, isDirty: boolean): void {
    if (
      !isDirty &&
      this.getSelectedValues() !== undefined &&
      this.getSelectedValues() !== null
    ) {
      this.setSelectedFocus();
    } else {
      if (
        this.filteredOptions &&
        this.filteredOptions.getValue() &&
        this.instanceOfOption(this.filteredOptions.getValue()[0])
      ) {
        this.arrowUpOptions(optional);
      } else if (
        this.filteredOptions &&
        this.filteredOptions.getValue() &&
        !this.instanceOfOption(this.filteredOptions.getValue()[0])
      ) {
        this.arrowUpGroups(optional);
      }
    }
  }

  private arrowUpOptions(optional: boolean) {
    const arrayOption = this.filteredOptions.getValue() as Option[];
    if (this.visualFocused.getValue().option > 0) {
      this.visualFocused.next({
        option: this.visualFocused.getValue().option - 1,
      });
    } else if (this.visualFocused.getValue().option === 0) {
      this.visualFocused.next({
        option: optional ? -1 : arrayOption.length - 1,
      });
    } else if (this.visualFocused.getValue().option < 0) {
      this.visualFocused.next({ option: arrayOption.length - 1 });
    }
    if (this.activeOption.getValue().option > 0) {
      this.activeOption.next({
        option: -1,
      });
    }
  }

  private arrowUpGroups(optional: boolean) {
    const arrayOption = this.filteredOptions.getValue() as OptionGroup[];
    if (
      this.visualFocused.getValue().group === -1 &&
      this.visualFocused.getValue().option === -1
    ) {
      this.visualFocused.next({
        group: arrayOption.length - 1,
        option: arrayOption[arrayOption.length - 1].options.length - 1,
      });
    } else if (
      this.visualFocused.getValue().group === 0 &&
      this.visualFocused.getValue().option === 0
    ) {
      this.visualFocused.next({
        group: optional ? -1 : arrayOption.length - 1,
        option: optional
          ? -1
          : arrayOption[arrayOption.length - 1].options.length - 1,
      });
    } else {
      if (this.visualFocused.getValue().option > 0) {
        this.visualFocused.next({
          group: this.visualFocused.getValue().group,
          option: this.visualFocused.getValue().option - 1,
        });
      } else {
        this.visualFocused.next({
          group: this.visualFocused.getValue().group - 1,
          option:
            arrayOption[this.visualFocused.getValue().group - 1].options
              .length - 1,
        });
      }
    }
  }

  instanceOfOption(option: any): option is Option {
    return "value" in option;
  }
}
