import { Option } from "./interfaces/option.interface";
import { OptionGroup } from "./interfaces/optionGroup.interface";

export type Space = "xxsmall" | "xsmall" | "small" | "medium" | "large" | "xlarge" | "xxlarge";

export type Spacing = {
  top?: Space;
  bottom?: Space;
  left?: Space;
  right?: Space;
};

export interface SelectProperties {
  label: string;
  name: string;
  value: string | string[];
  defaultValue: string | string[];
  placeholder: string;
  helperText: string;
  searchable: boolean;
  multiple: boolean;
  optional: boolean;
  disabled: boolean;
  error: string;
  margin: Space | Spacing;
  size: "small" | "medium" | "large" | "fillParent";
  options: Option[] | OptionGroup[];
  tabIndexValue: number;
}