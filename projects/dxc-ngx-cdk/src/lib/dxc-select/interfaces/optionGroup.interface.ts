import { Option } from "./option.interface";

export interface OptionGroup {
  /**
   * Label of the group to be shown in the select's listbox.
   */
  label: string;
  /**
   * List of the grouped options.
   */
  options: Option[];
}
